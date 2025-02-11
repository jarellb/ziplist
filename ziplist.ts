function zipList(list1: string[], list2: string[]): string[] {
  const result: string[] = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

function zipListTheFunctionalWay<T>(list1: T[], list2: T[]): T[] {
  return list1.flatMap((item, index) => [item, list2[index]]);
}

console.log(zipList(['a', 'b', 'c'], ['1', '2', '3'])); // ['a', 1, 'b', 2, 'c', 3]
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], ['1', '2', '3'])); // ['a', 1, 'b', 2, 'c', 3]
