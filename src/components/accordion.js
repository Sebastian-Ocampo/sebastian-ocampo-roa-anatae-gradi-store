import { $all } from "../utils/query-selector";
import { $one } from "../utils/query-selector";


(function openAccordion(){
    const container = $all(".ac-tb-container");
    
    container.forEach(el => {
        let sectionContainer = $one(`#${el.getAttribute("id")}`);
        const accordionItem = sectionContainer.querySelectorAll(`.${el.getAttribute("data-type-item")}`);
        const accordionHeading = sectionContainer.querySelectorAll(".accordion-title");

        showContent(accordionHeading, accordionItem, el);
    });
})();

function showContent(accordionHeading, accordionItem, el ){
    accordionHeading.forEach((element,i) => {
        element.addEventListener("click", ()=>{
            if (el.getAttribute("data-type-item") === "item-tab"){
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