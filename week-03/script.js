let colorBtn = document.getElementById("colorChange")
const mainSect = document.getElementById("mainSection")
const textBtn = document.getElementById("addText")
const imageBtn = document.getElementById("imageBtn")


console.log(colorBtn)

const addImage = ()=>{
    const imgURL = "https://upload.wikimedia.org/wikipedia/commons/4/4a/100x100_logo.png"
    const imgElem = document.createElement("img")
    imgElem.src = imgURL
    imgElem.alt = "circle logo"

    mainSect.appendChild(imgElem)
}

const addSomeText = () => {
    const someText = "Here is a bit of text."
    const htmlElem = document.createElement("h1")
    htmlElem.innerText = someText

    mainSect.appendChild(htmlElem)
    console.log("working")
}

imageBtn.addEventListener("click", addImage)
textBtn.addEventListener("click", addSomeText)
colorBtn.addEventListener("click", () => {
    let red = Math.random()*255
    let blue = Math.random()*255
    let green = Math.random()*255
    console.log(blue)
    mainSect.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")"
})