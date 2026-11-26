import { createIcons, Trash } from "lucide";

export function renderCardList(cards, onRemove) {
    if (cards.length === 0) {
        const empty = document.createElement("p")
        empty.className = "card-list__empty"
        empty.textContent = "there is no context to see"

        return empty;
    }

    const list = document.createElement("ul")
    list.className = "card-list"

    for (const card of cards) {
        const item = document.createElement("li")
        item.setAttribute("data-id", card.id)
        item.className = "card-list__item"

        const trash = document.createElement("button")
        trash.className = "card-list__trash"
        trash.innerHTML = '<i data-lucide="trash"></i>' 

        createIcons({
            icons: {
                Trash
            },
            root: trash
        })

        const front = document.createElement("p")
        front.className = "card-list__front"
        front.textContent = card.front

        const back = document.createElement("p")
        back.className = "card-list__back"
        back.textContent = card.back

        item.append(front, back, trash)
        list.append(item)
    }

    list.addEventListener("click", (e) => {
        const trashClicked = e.target.closest(".card-list__trash")
        
        if (trashClicked) {
            const li = trashClicked.closest("li");
            onRemove(li.dataset.id)
        }
    })

    return list
}