const beanVarietyUrl = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee/";

const beanButton = document.querySelector("#run-beanVariety-button");
beanButton.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
});

function getAllBeanVarieties() {
    return fetch(beanVarietyUrl).then(resp => resp.json());
}

//-----------------------------------------------------------

const coffeeButton = document.querySelector("#run-coffee-button");
coffeeButton.addEventListener("click", () => {
    getAllCoffees()
        .then(coffees => {
            console.log(coffees);
        })
});

function getAllCoffees() {
    return fetch(coffeeUrl).then(resp => resp.json());
}


//------------------------------------------------------------

const addBeanButton = document.querySelector("#run-addBean-button");
addBeanButton.addEventListener("click", () => {
    const name = document.querySelector("#name").value
    const region = document.querySelector("#region").value
    console.log("beans")

    const newBean = {
        name,
        region
    }
    console.log(newBean)

    function addBean(newBean) {
        return fetch(beanVarietyUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBean)
        }).then(getAllBeanVarieties);
    }


    addBean(newBean)
        .then(beanVarieties => {
            console.log(beanVarieties)
        })
})
