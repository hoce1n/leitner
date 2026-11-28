function parseCardText(front, back) {    
    const cleanFront = front.trim();
    const cleanBack = back.trim();

    if (!cleanFront) {
        throw new Error("Card Front must not be empty.");
    }
    if (!cleanBack) {
        throw new Error("Card Back must not be empty.");
    }

    return { front: cleanFront, back: cleanBack }
}

export function isValidCard(card) {
    if (!card || typeof card !== 'object' || Array.isArray(card)) return false
    if (typeof card.id !== 'string' || card.id.trim().length === 0) return false
    if (typeof card.front !== 'string' || card.front.trim().length === 0) return false
    if (typeof card.back !== 'string' || card.back.trim().length === 0) return false
    if (typeof card.box !== 'number' || !Number.isInteger(card.box) || card.box < 1 || card.box > 4) return false
    if (typeof card.dueDate !== 'string') return false
    if (!/^\d{4}-\d{2}-\d{2}$/.test(card.dueDate)) return false
    const [year, month, day] = card.dueDate.split("-").map(Number)
    const date = new Date(year, month - 1, day)

    if (
        date.getFullYear() !== year ||
        date.getMonth() !== month - 1 ||
        date.getDate() !== day
    ) {
        return false
    }

    return true
}

export function createCard(front, back, today) {
    const text = parseCardText(front, back)

    return {
        id: crypto.randomUUID(),
        ...text,
        box: 1,
        dueDate: today
    }
} 

export function removeCard(cards, id) {
    return cards.filter(card => card.id !== id)
}

export function updateCard(cards, id, front, back) {
    const text = parseCardText(front, back)

    return cards.map(card =>
        card.id === id ? { ...card, ...text } : card
    )
}
