import { createIcons, Edit, Trash } from "lucide";

export function renderCardList(cards, onRemove, onEditStart) {
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

        const actions = document.createElement("div");
        actions.className = "card-list__actions"
        

        const trash = document.createElement("button")
        trash.className = "card-list__action card-list__action--trash"
        trash.setAttribute("data-action", "remove")
        trash.type = "button"
        trash.ariaLabel = "Delete card"
        trash.innerHTML = '<i data-lucide="trash"></i>'

        createIcons({
            icons: {
                Trash
            },
            root: trash
        })

        const edit = document.createElement("button")
        edit.className = "card-list__action card-list__action--edit"
        edit.setAttribute("data-action", "update")
        edit.type = "button"
        edit.ariaLabel = "Update card"
        edit.innerHTML = '<i data-lucide="edit"></i>'
        
        createIcons({
            icons: {
                Edit
            },
            root: edit
        })

        const front = document.createElement("p")
        front.className = "card-list__front"
        front.textContent = card.front

        const back = document.createElement("p")
        back.className = "card-list__back"
        back.textContent = card.back

        actions.append(trash, edit)
        item.append(front, back, actions)
        list.append(item)
    }

    list.addEventListener("click", (e) => {
        const trashClicked = e.target.closest('[data-action="remove"]')
        const editClicked = e.target.closest('[data-action="update"]')
        
        if (trashClicked) {
            const li = trashClicked.closest("li");
            onRemove(li.dataset.id)
        }

        if (editClicked) {
            const li = editClicked.closest("li");
            onEditStart(li.dataset.id)
        }
    })

    return list
}