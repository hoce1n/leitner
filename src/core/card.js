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
