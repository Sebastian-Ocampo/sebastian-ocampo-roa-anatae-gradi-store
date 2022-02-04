import { $Qll, $Q } from "./query-selector";

export function openAccordion(){
    const container = $Qll(".js-container");
    
    container.forEach(el => {
        let sectionContainer = $Q(`#${el.getAttribute("id")}`);
        const accordionItem = sectionContainer.querySelectorAll(`.${el.getAttribute("data-type-item")}`);
        const accordionHeading = sectionContainer.querySelectorAll(".title-container");

        showContent(accordionHeading, accordionItem, el);
    });
}

function showContent(accordionHeading, accordionItem, el ){
    accordionHeading.forEach((element,i) => {
        element.addEventListener("click", ()=>{
            if (el.getAttribute("data-type-item") === "tabs-container__item"){
                accordionItem.forEach(e => {
                    e.classList.remove("active");
                });
                accordionItem[i].classList.add("active");
            }else{
                accordionItem[i].classList.toggle("active");
            }
        })
    });
}