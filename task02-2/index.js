function calculatePosition(data) {
    const arr = data.split(',')
    let horizontalPosition = 0
    let depth = 0
    let aim = 0

    for(let position of arr) {
        const numberInPostion = position[position.length - 1]
        if(position.includes('forward')) {
            horizontalPosition += Number(numberInPostion)
            depth += numberInPostion * aim
        } else if(position.includes('down')) {
            aim += Number(numberInPostion)
        } else {
            aim -= Number(numberInPostion)

        }
    }

    return horizontalPosition * depth
}

module.exports = calculatePosition