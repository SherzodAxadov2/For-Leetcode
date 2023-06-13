// let areDeeplyEqual = function(o1, o2) {
//     console.log(JSON.stringify(o1)===JSON.stringify(o2));
//     console.log(json);
// };

// areDeeplyEqual({"y":2,"x":1},{"x":1,"y":2})

class Bike {
  constructor(color, model) {
    (this.color = color), (this.model = model);
  }

  getDetails() {
    return this.model + " bike has " + this.color + " color";
  }
}

const newBike = new Bike("yellow", "bmw");
console.log(newBike.getDetails());
