import { button, TYPE } from "./ui/button.js";
import { label } from "./ui/label.js";
import { textarea } from "./ui/textarea.js";

const createSection = (...children) => {
    const section = document.createElement("section")
    section.className = "card-form__field"
    section.append(...children)
    return section
}

export function renderCardForm(onSubmit, onCancel, editingCard) {
    const form = document.createElement("form")
    form.className = "card-form"
    
    const labelFront = label("front", { name: "front" })
    const textareaFront = textarea(editingCard?.front ? editingCard.front : "", { 
        id: "front", 
        name: "front", 
        className: "card-form__front"
    })
    
    const labelBack = label("back", { name: "back" })
    const textareaBack = textarea(editingCard?.back ? editingCard.back : null, { 
        id: "back", 
        name: "back", 
        className: "card-form__back" 
    })
    
    const actions = document.createElement("div")
    actions.className = "card-form__actions"
    
    const submitBut = button(
        editingCard ? "Update" : "Submit", { type: TYPE.SUBMIT, className: "card-form__submit" }
    )

    actions.append(submitBut)

    if (editingCard) {
        const cancelBut = button(
            "Cancel", { type: TYPE.BUTTON, className: "card-form__cancel"}
        )
        cancelBut.addEventListener("click", onCancel)
        actions.append(cancelBut)
    }


    form.append(
        createSection(labelFront, textareaFront),
        createSection(labelBack, textareaBack),
        actions
    );
    const errorMsg = document.createElement("p")

    form.addEventListener("submit", (e) => {        
        e.preventDefault()
        try {
            onSubmit(textareaFront.value, textareaBack.value)
        } catch (error) {
            errorMsg.className = "card-form__error"
            errorMsg.textContent = error.message
            form.appendChild(errorMsg);
        }
    })
    return form
}