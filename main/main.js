module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
o) 最大值 = ${sequence.maximum()}
o) 元素数量 = ${sequence.size}
o) 平均值 = ${sequence.average()}`);
};
class Sequence {
  constructor(input) {
    this.input = input;
    this.size = input.length;
  }
  minimum() {
    return Math.min(...this.input);//ES6扩展特性
  }
  maximum() {
    return Math.max(...this.input);//ES6扩展特性
  }
  average() {
    var sum = 0;
    for(var i =0;i<this.size;i++)
    {
        sum += this.input[i];
    } 
    return (sum/this.size).toFixed(2);
  }
}
