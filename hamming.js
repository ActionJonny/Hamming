class Hamming {
  compute(inputOne, inputTwo) {
    let difference = 0
    if(inputOne.length !== inputTwo.length) {
      throw new Error('DNA strands must be of equal length.')
    } else {
      for(let i = 0; i < inputOne.length; i++) {
        if(inputOne[i] !== inputTwo[i]) {
          difference += 1
        }
      }
      return difference
    }
  }
}


module.exports = Hamming
