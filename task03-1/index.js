function binaryDiagnostic(data) {
    const arr = data.split('\n')

    let gammaRateBinary = ''
    let epsilonRateBinary = ''

    for (let i = 0; i < arr[0].length; i++) {
        let counter = 0

        for (let j = 0; j < arr.length; j++) {
            const bit = arr[j][i];
            bit > 0 ? counter++ : counter--
        }

        if(counter > 0) {
            gammaRateBinary += '1'
            epsilonRateBinary += '0'
        } else {
            epsilonRateBinary += '1'
            gammaRateBinary += '0'
        }

    }

    const gammaRate = parseInt(Number(gammaRateBinary), 2)
    const epsilonRate = parseInt(Number(epsilonRateBinary), 2)

    return gammaRate * epsilonRate

}


module.exports = binaryDiagnostic