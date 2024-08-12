interface Car {
    make: string;
    model: string;
    year: number;
}
declare class DescribeCar implements Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number);
    decscribe(): string;
}
declare const myCar: DescribeCar;
