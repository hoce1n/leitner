export function label(
    inner,
    {
        className = "",
        name = "",
        dataset = {}
    } = {}
) {
    const el = document.createElement("label")
    el.textContent = inner
    el.htmlFor = name
    el.className = className
    Object.assign(el.dataset, dataset)

    return el
}