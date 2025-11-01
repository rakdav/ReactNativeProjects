import {ShapeType,ShapeConfig} from "./types";

export const shapeConfigs: Record<ShapeType, ShapeConfig> = {
    rectangle:{
        name:"Прямоугольник",
        inputs:[
            {key:"length",placeholder:"Длина",label:"Длина"},
            {key:"width",placeholder:"Ширина",label:"Ширина"}
        ],
        formula:'Длина х Ширина'
    },
    circle:{
        name:"Круг",
        inputs:[
            {key:"radius",placeholder:"Радиус",label:"Радиус"},
        ],
        formula:'Pi х Радиус x Радиус'
    }
}