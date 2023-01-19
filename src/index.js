
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let indexStr;
    let towel = [];
         if (typeof matrix == 'undefined' || matrix.length === 0) {
            return towel
        };
    for (let i = 0; i < matrix.length; i++) {
   
        for (let j = 0; j < matrix[i].length; j++){
            if (i%2 ===0) {
                indexStr = j
            } else {indexStr = matrix[i].length -j -1}
            towel.push(matrix[i][indexStr])
        }
    } 
    return towel;
}
