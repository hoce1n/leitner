const BASE_CLASSES = ""

export function button(
    inner = "",
    {
        className = "",
        type = "button",
        dataset = {}
    } = {}
) {
    const el = document.createElement("button");

    el.textContent = inner
    el.className = [BASE_CLASSES, className].filter(Boolean).join(" ")
    el.type = type
    Object.assign(el.dataset, dataset)

    return el
}