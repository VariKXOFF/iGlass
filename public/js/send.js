const send = async (body) => {
    let res = await fetch("/api", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(body)
    })
    let data = await res.json()
}
const addForm = document.forms.formOrder;
const resultBlock = addForm.nextElementSibling;
addForm.addEventListener("submit", e => {
    e.preventDefault();
    let body = {};
    for (let i = 0; i < e.target.elements.length; i++) {
        let el = e.target.elements[i];
        if (el.name) {
            body[el.name] = el.value;
        }
    }
    send(body, resultBlock)
})