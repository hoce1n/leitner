import { button } from "./ui/button.js";
import { label } from "./ui/label.js";
import { textarea } from "./ui/textarea.js";

const createSection = (...children) => {
    const section = document.createElement("section")
    section.className = "card-form__field"
    section.append(...children)
    return section
}

export function renderCardForm(onSubmit) {
    const form = document.createElement("form")
    form.className = "card-form"
    
    const labelFront = label("front", { name: "front" })
    const textareaFront = textarea("", { 
        id: "front", 
        name: "front", 
        className: "card-form__front" 
    })

    const labelBack = label("back", { name: "back" })
    const textareaBack = textarea("", { 
        id: "back", 
        name: "back", 
        className: "card-form__back" 
    })

    const buttonEL = button(
        "Submit", { type: "submit", className: "card-form__submit" }
    )

    form.append(
        createSection(labelFront, textareaFront),
        createSection(labelBack, textareaBack),
        buttonEL
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