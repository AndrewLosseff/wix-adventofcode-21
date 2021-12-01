function numberOfTimesDepthIncreases(data) {
    const arr = data.split(' ').map(el => Number(el))
    let counter = 0

    for (let i = 1; i < arr.length; i++) {
        const measurement = arr[i];
        const prevMeasurement = arr[i - 1];
        if(prevMeasurement < measurement) {
            counter++
        }     
    }

    return counter
}

module.exports = numberOfTimesDepthIncreases