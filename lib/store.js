const createStore = () => {
    const chats = {};
    const contacts = {};
    const groupMetadata = {};
    const messages = new Map();

    const mergeById = (target, updates) => {
        for (const update of updates || []) {
            if (update?.id) target[update.id] = { ...(target[update.id] || {}), ...update };
        }
    };

    const saveMessages = incoming => {
        for (const message of incoming || []) {
            const { remoteJid, id } = message.key || {};
            if (!remoteJid || !id) continue;
            let chatMessages = messages.get(remoteJid);
            if (!chatMessages) messages.set(remoteJid, (chatMessages = new Map()));
            chatMessages.set(id, message);
        }
    };

    const store = {
        chats,
        contacts,
        groupMetadata,
        bind(events) {
            events.on("chats.upsert", updates => mergeById(chats, updates));
            events.on("chats.update", updates => mergeById(chats, updates));
            events.on("chats.delete", ids => (ids || []).forEach(id => delete chats[id]));
            events.on("contacts.upsert", updates => mergeById(contacts, updates));
            events.on("contacts.update", updates => mergeById(contacts, updates));
            events.on("groups.upsert", updates => mergeById(groupMetadata, updates));
            events.on("groups.update", updates => mergeById(groupMetadata, updates));
            events.on("messages.upsert", ({ messages: incoming } = {}) => saveMessages(incoming));
            events.on("messaging-history.set", ({ chats: historyChats, contacts: historyContacts, messages: historyMessages } = {}) => {
                mergeById(chats, historyChats);
                mergeById(contacts, historyContacts);
                saveMessages(historyMessages);
            });
            events.on("messages.update", updates => {
                for (const { key, update } of updates || []) {
                    const chatMessages = messages.get(key?.remoteJid);
                    const message = chatMessages?.get(key?.id);
                    if (message) Object.assign(message, update);
                }
            });
            events.on("group-participants.update", ({ id, participants, action } = {}) => {
                const group = groupMetadata[id];
                if (!group || !Array.isArray(group.participants)) return;
                const participantIds = (participants || []).map(participant => typeof participant === "string" ? participant : participant.id);
                if (action === "add") {
                    for (const participantId of participantIds) {
                        if (!group.participants.some(participant => participant.id === participantId)) group.participants.push({ id: participantId, admin: null });
                    }
                } else if (action === "remove") {
                    group.participants = group.participants.filter(participant => !participantIds.includes(participant.id));
                } else if (action === "promote" || action === "demote") {
                    for (const participant of group.participants) {
                        if (participantIds.includes(participant.id)) participant.admin = action === "promote" ? "admin" : null;
                    }
                }
            });
            return store;
        },
        loadMessage(jid, id) {
            return messages.get(jid)?.get(id) || null;
        }
    };

    return store;
};

module.exports = createStore;