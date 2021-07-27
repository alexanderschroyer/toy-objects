
const toys = [
    {
        id: 1,
        name: "Bouncy Ball",
        size: "small", 
        price: 1,
        inStock: true,
    }, 
    {
        id: 2,
        name: "Rubics Cube",
        size: "small",
        price: 5,
        inStock: true,
    },
    {
        id: 3,
        name: "Checkers Set",
        size: "medium",
        price: 15,
        inStock: false,
    }
]
const ducky = {
    id: 4,
    name: "Rubber Duck",
    size: "small",
    price: 3,
    inStock: true,
};
const furby = {
    id: 5,
    name: "Furby",
    size: "medium",
    price: 25,
    inStock: true, 
};


const toyToFind = 5;
for (const toy of toys) {
    if (toy.id ===toyToFind) {
       console.log(`The ${toy.name} costs ${toy.price*1.05}.`) 
    }
}

const addToy = (toyObject) => {
    const lastIndex = toys.length - 1;
    const currentLastToyObject = toys[lastIndex];
    const maxId = currentLastToyObject.id;
    const idForNewToyObject = maxId + 1;

    toyObject.id = idForNewToyObject;

    toys.push(toyObject)
}

addToy(ducky)
addToy(furby)

console.log(toys)


const removeProductFromInventroy = (id) => {
    let index = 0
    for (const toy of toys) {
        if (toy.id === id) {
            index = toys.indexOf(toy)
            toys.splice(index, 1)
        }
    }
}

removeProductFromInventroy(2)

console.log(toys)