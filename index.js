
const completedProjects = [
{
img:  "images/Large_home_twochair.png",
city: "Rostov-on-Don LCD admiral",
area: "81 m2",
time: "3.5 months"
},{
img:  "images/Large_home_sochi.png",
city: "Sochi Thieves",
area: "105 m2",
time: "4 months"
},{
img:  "images/Large_home_rostov_patriotic.png",
city: "Rostov-on-Don Patriotic",
area: "93 m2",
time: "3 months"
}
]

let index = 0;
const img  = document.querySelectorAll(".main__secondpart_image_img");
const city = document.querySelector(".main__secondpart_info-data_element_city");
const area = document.querySelector(".main__secondpart_info-data_element_area");
const time = document.querySelector(".main__secondpart_info-data_element_time");

const ringButton_0  = document.querySelector(".main__secondpart_info-data_ring_button_0");
const ringButton_1  = document.querySelector(".main__secondpart_info-data_ring_button_1");
const ringButton_2  = document.querySelector(".main__secondpart_info-data_ring_button_2");
const menuElement_0 = document.querySelector(".main__secondpart_image-menu-element_0");
const menuElement_1 = document.querySelector(".main__secondpart_image-menu-element_1");
const menuElement_2 = document.querySelector(".main__secondpart_image-menu-element_2");

function funcClick(i) {
    
    for (let y=0; y < img.length; y++) {
        img[y].src = completedProjects[i].img;
    }
    
    city.innerText = completedProjects[i].city;
    area.innerText = completedProjects[i].area;
    time.innerText = completedProjects[i].time;
    
    switch (i) {
        case 0:
            ringButton_0.style.backgroundColor = "rgba(255, 255, 255)";
            ringButton_1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            ringButton_2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            menuElement_0.style.color = "#E3B873";
            menuElement_1.style.color = "rgba(255, 255, 255, 0.3)";
            menuElement_2.style.color = "rgba(255, 255, 255, 0.3)";
            break;  
        case 1:
            ringButton_0.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            ringButton_1.style.backgroundColor = "rgba(255, 255, 255)";
            ringButton_2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            menuElement_0.style.color = "rgba(255, 255, 255, 0.3)";
            menuElement_1.style.color = "#E3B873";
            menuElement_2.style.color = "rgba(255, 255, 255, 0.3)";
            break;
        case 2:
            ringButton_0.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            ringButton_1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            ringButton_2.style.backgroundColor = "rgba(255, 255, 255)";
            menuElement_0.style.color = "rgba(255, 255, 255, 0.3)";
            menuElement_1.style.color = "rgba(255, 255, 255, 0.3)";
            menuElement_2.style.color = "#E3B873";
            break;
    }
    return index = i;
}    
const prev = document.querySelectorAll(".main__secondpart_info-data_arrow_left");
const next = document.querySelectorAll(".main__secondpart_info-data_arrow_right");

prev.forEach((elem) => {
    elem.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : completedProjects.length-1;
        funcClick(index);
    })
})

next.forEach((elem) => {
    elem.addEventListener('click', () => {
        index = (index < completedProjects.length-1) ? index + 1 : 0;
        funcClick(index);
    })
})


