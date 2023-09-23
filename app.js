let str2 = "12+23-333*8"
let arr = []
let arr2 = []
let str=str2

// arr=str.split(/[-+/*]/);
// arr2=str.split(/[1234567890]/)

// console.log(arr2)
console.log(str.length)
for (let i = 0; i < str.length; ++ i) {
    if (str[i] === '+') {
        console.log(str[i], i)
        arr.push(str[i])
    }
    if (str[i] === '-') {
        console.log(str[i], i)
        arr.push(str[i])
    }

    if (str[i] === '/') {
        console.log(str[i], i)
        arr.push(str[i])
    }

    if (str[i] === '*') {
        console.log(str[i], i)
        arr.push(str[i])
    }


}
console.log(arr)
