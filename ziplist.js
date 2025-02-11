"use strict";
function zipList(list1, list2) {
    const result = [];
    for (let i = 0; i < list1.length; i++) {
        result.push(list1[i]);
        result.push(list2[i]);
    }
    return result;
}
function zipListTheFunctionalWay(list1, list2) {
    return list1.flatMap((item, index) => [item, list2[index]]);
}
console.log(zipList(['a', 'b', 'c'], ['1', '2', '3'])); // ['a', 1, 'b', 2, 'c', 3]
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], ['1', '2', '3'])); // ['a', 1, 'b', 2, 'c', 3]
