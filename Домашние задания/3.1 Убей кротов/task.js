const hit_counter = document.querySelector("#dead")
const miss_counter = document.querySelector("#lost")
const holes = document.querySelectorAll(".hole")


let isclick = false

holes.forEach(hole => {
    hole.onclick = () => {
        if(hole.classList.contains('hole_has-mole') && isclick === false){
            hit_counter.textContent = Number(hit_counter.textContent) +1
            isclick = true
            if (hit_counter.textContent === "10"){
                alert("Победа")
                reset()
            }
        }
    }
});

setInterval(() => {
    if (!isclick) {
        miss_counter.textContent = Number(miss_counter.textContent) + 1
        if (miss_counter.textContent === "5"){
            alert("Поражение")
            reset()
        }
    }
    isclick = false
}, 800)

function reset(){
    hit_counter.textContent = "0"
    miss_counter.textContent = "0"
}
