export function renderCardList(cards) {
    if (cards.length === 0) {
        const empty = document.createElement("p")
        empty.className = "card-list__empty"
        empty.textContent = "there is no context to see"

        return empty;
    }

    const list = document.createElement("ul")
    list.className = "card-list__empty"

    for (const card of cards) {
        const item = document.createElement("li")
        item.className = "card-list__item"

        const front = document.createElement("p")
        front.className = "card-list__front"
        front.textContent = card.front

        const back = document.createElement("p")
        back.className = "card-list__back"
        back.textContent = card.back

        item.append(front, back)
        list.append(item)
    }

    return list
}