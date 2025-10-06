// Count occurrences of an element

arr = [1, 2, 2, 3, 2]

const  target = 2
let Count = 0

for(let i=0; i<arr.length; i++) {
    if(arr[i] == target){
        Count++
    }
}

console.log('count', Count)



