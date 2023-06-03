// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[undefined, undefined],
//     [undefined, undefined]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//   matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

const array = [ 
    [1,  2,  3,  4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10,  9,  8, 7]  
]

const n = array.length

let startRow = 0
let endRow = n - 1
let startColumn = 0
let endColumn = n - 1

let newArray = [] //=== Empty 2d array for spiral matrix ===//

// While loop is used to spiral into the 2d array.
while (startRow <= endRow && startColumn <= endColumn) {

    // Reading top row; Left to right.
    for (let i = startColumn; i <= endColumn; i++) {
        newArray.push(array[startColumn][i])
    }
    startRow++ // Top row 

    // Reading right column; Top right to bottom right.
    for (let i = startRow; i <= endRow; i++) {
        newArray.push(array[i][endColumn])
    }
    endColumn-- // Right column 

    // Reading bottom row; Bottom right to bottom left.
    for (let i = endColumn; i >= startColumn; i--) {
        newArray.push(array[endRow][i])
    }
    endRow-- // Bottom row 

    // Reading left column, from bottom left to top left.
    for (let i = endRow; i >= startRow; i--) {
        newArray.push(array[i][startColumn])
    }
    startColumn++ // left column 

} 

console.log(newArray)