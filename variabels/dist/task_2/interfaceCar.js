"use strict";
class DescribeCar {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    decscribe() {
        return `${this.make} ${this.model} is made in ${this.year}`;
    }
}
const myCar = new DescribeCar("Toyota", "Camry", 2020);
console.log(myCar.decscribe());
//# sourceMappingURL=interfaceCar.js.map