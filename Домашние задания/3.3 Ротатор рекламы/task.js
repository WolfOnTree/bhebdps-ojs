const rotators_list = document.querySelectorAll(".rotator")



for(let i = 0; i < rotators_list.length; i++){
    const rotator_list = rotators_list[i].querySelectorAll(".rotator__case")
    let active_element_index = [...rotator_list].findIndex(element => element.classList.contains("rotator__case_active"))
    setInterval(() => {
        let last_element_index = active_element_index
        active_element_index = (active_element_index + 1) % rotator_list.length
        rotator_list[last_element_index].classList.remove("rotator__case_active")   
        rotator_list[active_element_index].classList.add("rotator__case_active")
    }, 1000)
}