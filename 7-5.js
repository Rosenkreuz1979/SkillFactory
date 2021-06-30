/* Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

План:

Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
Создать экземпляры каждого прибора;
Вывести в консоль и посмотреть результаты работы, 


Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:

Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6.

*/

class ElectricalApp {
    constructor() {
        this.description = "Electical Equipment";
        this.functions = "Switchable";
        this.defaultState = "off";
        this.state = undefined;
    }
    switchOn() {
        switch (this.state) {
            case "off":
                console.log(`${this.name} is turned on, consuming ${this.power} watt`);
                break;
            case "on":
                console.log(`${this.name} is already switched on and consumes ${this.power} watt`);
                break;
            default:
                if (this.defaultState==="off"){
                    console.log(`${this.name} is turned on, consuming ${this.power} watt`);
                } else {
                    console.log(`${this.name} is already switched on and consumes ${this.power} watt`);
                }        
            }
            this.state = "on";
    }

    switchOff() {
        switch (this.state) {
            case "off":
                console.log(`${this.name} is already turned off`);
                break;
            case "on":
                console.log(`You switched ${this.name} off`);        
                break;
            default:
                if (this.defaultState==="off"){
                    console.log(`${this.name} is already turned off`);            
                } else {
                    console.log(`You switched ${this.name} off`);
                }        
            }
            this.state = "off" ;
    }
}

class HomeAppliance extends ElectricalApp {
    constructor (name,power) {
        super();
        this.name = name;
        this.power = power;
    }
}
    

class GamingAppliance extends ElectricalApp {
    constructor (name,brand,power) {
        super();
        this.name = name;
        this.brand = brand;
        this.power = power;
    }
}

let playStation4 = new GamingAppliance('PlayStation 4', 'Sony', 2400);
playStation4.state="on";

let xBox_X = new GamingAppliance('X-Box Series X','Microsoft',2400);


let hob = new HomeAppliance('Bosch Hob', 4600);
hob.ovenState = "off";
hob.switchOven = function(){
    this.power = 8400;
    if (this.ovenState === "on") {
        console.log(`${this.name} already has Oven switched on and now it consumes ${this.power} watt`);
    } else {
        console.log(`You have switched oven of ${this.name} and now it consumes ${this.power} watt`);
    }
}

playStation4.switchOn();
hob.switchOn();
xBox_X.switchOff();
hob.switchOven();

console.log(hob);

console.log(playStation4);