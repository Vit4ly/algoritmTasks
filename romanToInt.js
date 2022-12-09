function romanToInt(s) {
    const romeNum = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000, Z: 2000 }
    const splitStr = s.split('')
    const result = []

    for (let idx = 0; idx <= splitStr.length; idx += 1) {
        if (splitStr[idx] === 'I' && (splitStr[idx + 1] === 'V' || splitStr[idx + 1] === 'X') ) {
            result.push(romeNum[splitStr[idx + 1]] - romeNum[splitStr[idx]])
            idx += 1
        }
       else if (splitStr[idx] === 'X' && (splitStr[idx + 1] === 'L' || splitStr[idx + 1] === 'C') ) {
            result.push(romeNum[splitStr[idx + 1]] - romeNum[splitStr[idx]])
            idx += 1
        }
       else if (splitStr[idx] === 'C' && (splitStr[idx + 1] === 'D' || splitStr[idx + 1] === 'M') ) {
            result.push(romeNum[splitStr[idx + 1]] - romeNum[splitStr[idx]])
            idx += 1
        } else {
            result.push(romeNum[splitStr[idx]])
        }
    }
   return result.filter(el => +el).reduce((a,b) => a+b, 0)
};

console.log(romanToInt('MCMXCIV'))
console.log(romanToInt('XC'))
