let string_Sayi = [1, 2, 3, "bir"]; let aaa = string_Sayi.toString();
// find 
let users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Ahmet" },
    { id: 3, name: "mehmet" },
    { id: 4, name: "ceng" }
]
let res_find = users.find(e => e.id == 1);
console.log(res_find);

//
let sayi = [1, 2, 3, 45]
let ss = sayi.some(x => x > 3);
console.log(ss);

let text;
let length;

const newStr = (str) => str.length <= 2 ? str : str.slice(0, 2) + str.slice(-2);
'ab';
console.log(newStr("ab"));

const aa = (str) => str.length > 0 ? str.slice(0, str.length / 2) : console.log("kelime gir"); console.log(aa("Deniz"));

const near = (num1, num2) => (100 - num1) < (100 - num2) ? num1 : num2; console.log(near(1, 2)

)

chars('alooo ', 'o');

const chars = (str1, str2) => 2 < str1.length(str1.indexOf(str2)) < 4 ? true : false;

const mod = [1, 2, 3, 4, 5, 6, 7, 8]   