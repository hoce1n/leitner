const BASE_CLASSES = ""

export function textarea(
    inner = "",
    { 
        className = "", 
        id = "", 
        name = "", 
        dataset = {}, 
    } = {}
) {
    const el = document.createElement("textarea")
    el.className = `${BASE_CLASSES} ${className}`
    el.value = inner
    el.id = id
    el.name = name
    Object.assign(el.dataset, dataset)

    return el
}