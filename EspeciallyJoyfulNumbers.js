/**
 * Положительные целые числа, которые делятся точно на сумму своих цифр, называются числами Харшада .
 * Первые несколько чисел Харшада: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...
 *
 * Нас интересуют числа Харшада, где произведение суммы цифр sи sперевернутых цифр дает исходное число n. Например, рассмотрим число 1729:
 *
 * его сумма цифр s= 1 + 7 + 2 + 9 = 19
 * реверс s= 91
 * и 19 * 91 = 1729 --> число, с которого мы начали.
 * Завершите функцию, которая проверяет, является ли положительное целое число числом nХаршада, и возвращает,
 * True если произведение его суммы цифр и суммы его цифр в обратном порядке равно n; в противном случае возврат False.
 * **/
function numberJoy(n) {
    const resultNum = String(n).split('').reduce((a,b) => (+a + +b), 0)
    const revers = String(resultNum).split('').reverse().join('')
    return revers * resultNum === n
}



console.log(numberJoy(1997), false, 'Not a Harshad number')
console.log(numberJoy(1998), false, 'Harshad but digit sum=27, and 27x72 does not equal 1998')
console.log(numberJoy(1729), true, 'Harshad and digit sum=19, and 19x91 = 1729')
console.log(numberJoy(18), false, 'Harshad but digit sum=9, and 9x9 does not equal 18')
console.log(numberJoy(1), true, "It was correct")
console.log(numberJoy(81), true, "It was correct")
console.log(numberJoy(1458), true, "It was correct")
