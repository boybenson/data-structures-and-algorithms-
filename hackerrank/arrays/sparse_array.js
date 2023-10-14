const matchingStrings = (stringList, queries) => {
  let finalArr = [];

  let count = 0;

  for (let i in queries) {
    for (let j in stringList) {
      if (queries[i] === stringList[j]) {
        count++;
      }
    }
    finalArr.push(count);
    count = 0;
  }

  return finalArr;
};

let q = ["de", "lmn", "fgh"];
let s = ["def", "de", "fgh"];

console.log(matchingStrings(s, q));
