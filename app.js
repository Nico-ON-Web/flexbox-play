const parent = document.getElementById("parent")

document.querySelector("#row").addEventListener('change',()=>{
    parent.classList.remove("column")
    parent.classList.add("row")
    printClassList()
})

document.querySelector("#column").addEventListener('change',()=>{
    parent.classList.remove("row")
    parent.classList.add("column") 
    printClassList()   
})

document.querySelector("#startH").addEventListener('change',()=>{
    parent.classList.remove("justify-end")
    parent.classList.remove("space-between")
    parent.classList.remove("space-around")
    parent.classList.remove("justify-center")

    parent.classList.add("justify-start")
    printClassList()
})

document.querySelector("#endH").addEventListener('change',()=>{
    parent.classList.remove("justify-start")
    parent.classList.remove("space-between")
    parent.classList.remove("space-around")
    parent.classList.remove("justify-center")

    parent.classList.add("justify-end")
    printClassList()
})

document.querySelector("#spaceBetween").addEventListener('change',()=>{
    parent.classList.remove("justify-start")
    parent.classList.remove("justify-end")
    parent.classList.remove("space-around")
    parent.classList.remove("justify-center")

    parent.classList.add("space-between")
    printClassList()
})

document.querySelector("#spaceAround").addEventListener('change',()=>{
    parent.classList.remove("justify-start")
    parent.classList.remove("justify-end")
    parent.classList.remove("space-between")
    parent.classList.remove("justify-center")

    parent.classList.add("space-around")
    printClassList()
})

document.querySelector("#centerH").addEventListener('change',()=>{
    parent.classList.remove("justify-start")
    parent.classList.remove("justify-end")
    parent.classList.remove("space-around")
    parent.classList.remove("space-between")

    parent.classList.add("justify-center")
    printClassList()
})

document.querySelector("#startV").addEventListener('change',()=>{
    parent.classList.remove("align-end")
    parent.classList.remove("align-center")

    parent.classList.add("align-start")
    printClassList()
})

document.querySelector("#endV").addEventListener('change',()=>{
    parent.classList.remove("align-start")
    parent.classList.remove("align-center")

    parent.classList.add("align-end")
    printClassList()
})

document.querySelector("#centerV").addEventListener('change',()=>{
    parent.classList.remove("align-start")
    parent.classList.remove("align-end")

    parent.classList.add("align-center")
    printClassList()
})

function printClassList(){
    document.querySelector(".colone-droite h2 span").innerText = parent.classList.toString()
}

printClassList()