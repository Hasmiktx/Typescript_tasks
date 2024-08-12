type DataType = {
    id: number;
    name: string;
    occupation?: string;
};
declare function fetchData(): Promise<DataType>;
declare function getData(): Promise<DataType | undefined>;
