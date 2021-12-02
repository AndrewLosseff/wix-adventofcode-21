function calculatePosition(data) {
    const arr = data.split(',')
    let horizontalPosition = 0
    let depth = 0

    for(let position of arr) {
        const numberInPostion = position[position.length - 1]
        if(position.includes('forward')) {
            horizontalPosition += Number(numberInPostion)
        } else if(position.includes('down')) {
            depth += Number(numberInPostion)
        } else {
            depth -= Number(numberInPostion)

        }
    }

    return horizontalPosition * depth
}

module.exports = calculatePosition