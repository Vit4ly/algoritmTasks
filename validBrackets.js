const bracketsFirst = '{[({{[()}}})]}'
const bracketsSecond = '{[({{(ads)}})]}'
const checkedBrackets = (brackets) => {
    const open = ['{', '[', '(']
    const close = ['}', ']', ')']
    const listBrackets = [...brackets].filter(el => open.includes(el) || close.includes(el))
    let openIdx, closeIdx;
    const stack = []

    for (let i = 0; i < listBrackets.length; i += 1) {
        openIdx = open.indexOf(listBrackets[i])
        if (openIdx !== -1) {
            stack.push(openIdx)
            continue
        }
        closeIdx = close.indexOf(listBrackets[i])
        if (closeIdx !== -1) {
            openIdx = stack.pop()
            if (openIdx !== closeIdx) {
                return false
            }
        }
    }
    return stack.length === 0
}
console.log(checkedBrackets(bracketsFirst))
console.log(checkedBrackets(bracketsSecond))
