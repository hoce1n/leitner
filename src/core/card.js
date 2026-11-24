export function createCard(front, back, today) {
    const cleanFront = front.trim();
    const cleanBack = back.trim();

    if (!cleanFront || !cleanBack) {
        throw new Error("Card front and back must not be empty.");
    }

    return {
        id: crypto.randomUUID(),
        front: cleanFront,
        back: cleanBack,
        box: 1,
        dueDate: today
    }
}
