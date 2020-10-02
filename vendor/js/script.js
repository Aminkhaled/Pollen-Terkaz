(function() {

    let filter = document.querySelector("#filter");
    let filterBtns = Array.from(document.querySelectorAll("ul li"));
    let elements = Array.from(filter.children);
    let lis =  Array.from(document.querySelectorAll("li"));

    function filterCardapio(e) {
        let result = elements.filter((element) => {
            element.className = element.className.replace(" hide", "");
            return e.target.id !== element.dataset.food;
        });

        makeChange(result);

        if(e.target.id == "all") {
            for(let element of elements) {
                element.classList.remove("hide");
            }
        }
    }

    function makeChange(result) {
        result.forEach(element => {
            if(element.classList.contains("hide")) {
                element.className = element.className.replace(" hide", "");
            } else if(!element.classList.contains("hide")) {
                element.className += " hide";
            } else if(element.dataset.food) {
                element.classList.remove("hide");
            }
        });
    }

    function currentBtn(e) {
        lis.forEach(li => {
            li.classList.remove("current");
            e.target.classList.add("current")
        });
    }

    function renderClick(e) {
        filterCardapio(e);
        currentBtn(e);
    }

    filterBtns.forEach((filterBtn => filterBtn.addEventListener("click", renderClick)));
})();