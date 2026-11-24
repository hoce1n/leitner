import { addDays } from "./dates";

export function getDueCards(cards, today) {
    return cards.filter(card => card.dueDate <= today)
}

const BOX_INTERVAL = { 1: 1, 2: 2, 3: 4, 4: 8 };
const MAX_BOX = 4;

export function review(card, knew, today) {
    const box = knew ? Math.min(card.box + 1, MAX_BOX) : 1;
    return {
        ...card,
        box,
        dueDate: addDays(today, BOX_INTERVAL[box])
    }
}
