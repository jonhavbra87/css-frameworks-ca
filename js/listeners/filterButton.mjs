import { filterByName } from "../utilities/filterByName.mjs";

export function filterButton(posts) {
    const filterBtn = document.getElementById("filterButton");
    filterBtn.addEventListener("click", () => {
        const filterQueryElement = document.getElementById("filterInputName");
        const filterQuery = filterQueryElement.value;
        filterByName(posts, filterQuery);
    })
}