/*
* Выполните функцию countApplesAndOranges. Он должен вывести количество яблок и апельсинов, упавших на дом Сэма, каждое в отдельной строке.

countApplesAndOranges имеет следующие параметры:

s : целое число, начальная точка расположения дома Сэма.
t : целое число, конечное местоположение дома Сэма.
a : целое число, расположение яблони.
b : целое число, расположение апельсинового дерева.
apples : целочисленный массив, расстояния, на которых каждое яблоко падает с дерева.
апельсины : целочисленный массив, расстояния, на которых каждый апельсин падает с дерева.
*
* */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    const filterCurrentLocation = (arr) => {
        return arr.filter(el => el >= s && el <= t)
    }
    const locationApples = apples.map(el => a + el)
    const locationOranges = oranges.map(el => b + el)
    const applesLength = filterCurrentLocation(locationApples).length
    const orangesLength = filterCurrentLocation(locationOranges).length
    return [applesLength, orangesLength]
}

console.log(countApplesAndOranges(7 ,11 ,5 ,15 ,[ -2, 2, 1 ] ,[ 5, -6 ]))
console.log(countApplesAndOranges(2 ,3 ,1 ,5 ,[ 2 ] ,[-2]))
