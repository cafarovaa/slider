const content = document.getElementById("slide_content")
const left = document.getElementById("left")
const right = document.getElementById("right")
const title = document.getElementById("title")
const date = document.getElementById("date")
const img = document.getElementById("img")

const items = [
    {
        photoimg: "https://cdn.motor1.com/images/mgl/KjMYQ/s3/bugatti-divo-exterior.webp",
        title: "Cool Factor: James Bond's Car",
        date : "Starting Price: $304,995"
    },
    {
        photoimg: "https://cdn.motor1.com/images/mgl/o6PGL/s1/dodge-charger-srt-hellcat-widebody-exterior.jpg",
        title: "Cool Factor: Best Bang For Your Buck",
        date : "Starting Price: $58,900"
    },
    {
        photoimg: "https://cdn.motor1.com/images/mgl/wVW6G/s6/hyundai-veloster-exterior.webp",
        title: "Cool Factor: Fun Car For Teens",
        date : "Starting Price: $18,800"
    }
]

let index = 0
let item = items[index]
img.src = item.photoimg
title.content = item.title
date.content = item.date

left.addEventListener("click", function() {
    if(index <= 0 ) {
        index = items.length -1
    }
    else {
        index--
    }
    let item = items[index]

    img.src = item.photoimg

    title.textContent = item.title

    date.textContent = item.date
})

right.addEventListener("click", function() {
    if(index === items.length -1 ) {
        index = 0
    }
    else {
        index++
    }

    let item = items[index]

    img.src = item.photoimg

    title.textContent = item.title

    date.textContent = item.date
})