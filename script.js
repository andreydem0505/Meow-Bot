function press() {
    let text = document.getElementById("input").value
    let p = document.createElement('p')
    p.innerHTML = text
    p.classList.add("text-primary")
    p.classList.add("pt-3")
    document.body.append(p)
    let answer = document.createElement('p')
    if (text === "Мяу") {
        answer.innerHTML = "Привет"
    } else if (text === "Мяу-мяу") {
        answer.innerHTML = "Хочу кушать"
    } else if (text === "Мяяяу") {
        answer.innerHTML = "Поиграй со мной"
    } else if (text === "Мяууууу") {
        answer.innerHTML = "Мне грустно"
    } else if (text === "Мяу-мяу-мяу") {
        answer.innerHTML = "Можно что-то вкусненьуое?"
    } else if (text === "Мур") {
        answer.innerHTML = "Мне скучно"
    } else {
        answer.innerHTML = "Не распознано"
    }
    answer.classList.add("text-danger")
    document.body.append(answer)
}