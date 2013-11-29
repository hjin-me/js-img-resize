/**
 * Created by huangjin02 on 13-11-29.
 */
var arr = [];
for(var i = 0; i < 1000000; i ++) {
  arr.push([parseInt(Math.random() * 1000000), parseInt(Math.random() * 1000000)]);
}

var bit;
console.time('bit');
for(i = 0; i < 1000000; i ++) {
  bit = (arr[i][0] + arr[i][1]) >> 1
}
console.timeEnd('bit');


console.time('separate');
for(i = 0; i < 1000000; i ++) {
  bit = (arr[i][0] + arr[i][1]) / 2;
}
console.timeEnd('separate');
