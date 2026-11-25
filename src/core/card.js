export function createCard(front, back, today) {
    const cleanFront = front.trim();
    const cleanBack = back.trim();

    if (!cleanFront) {
        throw new Error("Card Front must not be empty.");
    }
    if (!cleanBack) {
        throw new Error("Card Back must not be empty.");
    }

    return {
        id: crypto.randomUUID(),
        front: cleanFront,
        back: cleanBack,
        box: 1,
        dueDate: today
    }
}
