// Переменные - let, const
let shopName = "Dalida shop";
const ADDRESS = "Almaty";

// Типы данных - string, number, boolean, null, undefined
const ownerName = "Shop center";
let age = 18;
let open = true;
let close = false;
let computer = null;
product;

//Объекты
let employee = {
  name: "Ayau",
  age: 20,
  gender: "female",
};

employee.university  = "SDU";
delete employee.university;

let lastName = "Akkulova";
let employeeInfo = {lastName};

//Массивы 
let sector = ["vegetables", "fruits", "toy"];
sector.push("crockery");
sector.pop();
sector.unshift("crockery");
sector.shift();

let blok = ["books", "dress"];
sector = sector.concat(blok);
sector.length;

// Операторы map, filter, rest , spread ,slice 

//Сравнения
sector.length == "3";
sector.length ===3;
// условный оператор
let result = 1 === 3 ? "true" : "false";
//оператор нулевого слияния
let shopList = "apple";
let noShopList = shopList ?? "banana";
//преобразование к логическому типу
let orange = "orange";
if (orange){

}else{

}