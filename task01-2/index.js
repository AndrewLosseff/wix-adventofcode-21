function numberOfTimesDepthIncreases(data) {
    const arr = data.split(' ').map(el => Number(el))
    let counter = 0

    for (let i = 1; i < arr.length - 2; i++) {
        const measurement = arr[i] + arr[i + 1] + arr[i + 2];
        const prevMeasurement = arr[i - 1] + arr[i] + arr[i + 1]
        if(prevMeasurement < measurement) {
            counter++
        }     
    }

    return counter
}

module.exports = numberOfTimesDepthIncreases