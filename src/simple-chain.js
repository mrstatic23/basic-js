const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chain: [],
  
  getLength() {
      return this.chain.length;
  },
  addLink(value) {
      this.chain.push(`( ${String(value) ? String(value) : ''} )`);

      return this;
  },
  removeLink(position) {
      if (typeof position !== 'number' || Number(position) % 1 !== 0 || Number(position - 1) > this.chain.length ) {
          this.chain.length = 0;
          throw Error('Invalid postion value')
      }

      this.chain.splice(position - 1, 1);

      return this;
  },
  reverseChain() {
      this.chain.reverse();

      return this;
  },
  finishChain() {
      const result = this.chain.join('~~');

      this.chain.length = 0;

      return result;
  }
};

module.exports = chainMaker;
