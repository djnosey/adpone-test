const myStr = "aaaabbbbbcca";

const myFunc = (str) => {
  let myArr = [...str];
  let results = [];
  let count = 1;

  myArr.forEach((item, index) => {
    if (item === myArr[index + 1]) {
      count++;
    } else {
      results.push([item, count]);
      count = 1;
    }
  });

  return results;
};

myFunc(myStr);
