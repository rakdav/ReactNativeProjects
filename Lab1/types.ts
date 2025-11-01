export type ShapeType='rectangle' | 'circle'
export interface Dimensions {
    length:string;
    width:string;
    radius:string;
}
export interface ShapeConfig {
    name:string;
    inputs:InputField[];
    formula:string;
}
export interface InputField {
    key:keyof Dimensions;
    placeholder:string;
    label:string;
}
export interface CalculationHistory{
    shape:string;
    area:string;
    calculation:string;
    timestamp:string;
}