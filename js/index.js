let main = document.querySelector("#main")
let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let arr1 = JSON.parse(localStorage.getItem("zal1"))
let arr2 = JSON.parse(localStorage.getItem("zal2"))
let arr3 = JSON.parse(localStorage.getItem("zal3"))
let itog = document.getElementById("itog")
console.log(arr1)
console.log(arr2)
console.log(arr3)
for (let i = 0; i < arr1.length; i++) {
    one.innerHTML += `<div>Ряд: ${arr1[i].ryad}, место: ${arr1[i].meat}`
}
for (let i = 0; i < arr2.length; i++) {
    two.innerHTML += `<div>Ряд: ${arr2[i].ryad}, место: ${arr2[i].meat}`
}
for (let i = 0; i < arr3.length; i++) {
    three.innerHTML += `<div>Ряд: ${arr3[i].ryad}, место: ${arr3[i].meat}`
}
itog.innerHTML = `Итого: ${(arr1.length + arr2.length + arr3.length) * 200}₽`