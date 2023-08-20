var arr = [10, 20, 9, 25]
arr = [10,20,["a", "b"], 9, 25]
console.log(arr)
console.log(arr[2])
console.log(arr[2][1])

arr=[10, 20,["a", ["word1", "word2"], "b"], 9, 25]
console.log(arr)
console.log(arr[2][1][0])
arr=[1,2["a,", "b"],{prop1:"Item1", prop2:"Item2"}]
console.log(arr[2]["prop2"])
console.log(arr[2].prop1)