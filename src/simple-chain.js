const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    let chainLength = this.chain.length;
    return chainLength;
  },
  addLink(value) {
    let stringValue = `( ${value} )`;
    this.chain.push(stringValue);
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number" || position > this.getLength() ||position < 1) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finishOfChain = this.chain.slice();
    this.chain = [];
    return finishOfChain.join("~~");
  },
};
module.exports = chainMaker;
