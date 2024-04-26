export function createCardContainer() {
        // Card: a div with bootstrap classes
        const card = document.createElement("div");
        card.classList.add("card", "mx-auto", "pb-2", "border", "border-1", "rounded", "col-12", "col-md-6", "col-lg-4");
        
        return card;

}