const fruits = require("../fruits.json");

// built class , needs constructor to build instances
//          of fruit to return to controller

//method showAll will access fruits json, and return instances
//          of all fruit to controller

// method show which use filter method which access one
//          fruit build an instance and return to controller

class Fruit {
  constructor(fruit) {
    // this.genus = genus;
    // this.name = name;
    // this.id = id;
    // this.family = family;
    // this.order = order;
    // this.nutritions = nutritions;
    this.genus = fruit.genus;
    this.name = fruit.name;
    this.id = fruit.id;
    this.family = fruit.family;
    this.order = fruit.order;
    this.nutritions = fruit.nutritions;
  }
  // res.status(200).send({ fruit: fruit });
  static showAll() {
    console.log("show all method hit");
    console.log(fruits.map((fruit) => new Fruit(fruit)));
    return fruits.map((fruit) => new Fruit(fruit));
  }

  static show(name) {
    console.log("show method hit, fruit name is: " + name);
    const fruit = fruits.find((fruit) => fruit.name.toLowerCase() === name);
    console.log(fruit);

    if (fruit) {
      return new Fruit(fruit);
    } else {
      throw Error("fruit doesnt exist");
    }
  }

  static create = (data) => {
    const newFruit = data;
    // console.log(newFruit)
    const fruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() === newFruit.name.toLowerCase()
    );
    if (fruit) {
      throw Error("fruit exists aready");
    } else {
      newFruit["id"] = fruits.length + 1;
      fruits.push(newFruit);
      return new Fruit(newFruit);
    }
  };

  update(data) {
    const updatedFruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() === this.name.toLowerCase()
    );

    if (updatedFruit.name) {
      updatedFruit.name = data.name;
      updatedFruit.family = data.family;
      updatedFruit.order = data.order;
      //can add other fields remaining
      console.log(updatedFruit.name + " " + updatedFruit.family);
    } else {
      throw Error("FRUIT not found");
    }
  }

  destroy() {
    // console.log(this);
    const deletedFruit = fruits.find(
      (fruit) => fruit.name.toLowerCase() === this.name.toLowerCase()
    );

    if (deletedFruit.name) {
        const index = fruits.indexOf(deletedFruit);
        fruits.splice(index, 1);
    } else {
        throw Error("FRUIT not found");
    }
  }
}

// manipluation of data belongs in model, in this file

// if (fruit.length === 1) {
//   res.statusCode(200).send(fruit);
// } else {
//   res.statusCode(404).send("the fruit doesn't exit on api");
// }

module.exports = Fruit;
