interface Car{
 make:string;
 model: string
 year:number
}

class DescribeCar implements Car{
    make: string;
    model: string;
    year: number;
    constructor(make:string,model:string,year:number){
        this.make=make;
        this.model=model;
        this.year=year
    }
    decscribe():string{
        return `${this.make} ${this.model} is made in ${this.year}`
    }
}

const myCar= new DescribeCar("Toyota","Camry",2020)
console.log(myCar.decscribe())