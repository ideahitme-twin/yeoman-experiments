var Generator = require('yeoman-generator');
module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.option('owner');
  }
  method1() {
    this.log('method 1 invoked');
  }
  method2() {
    this.log('method 2 invoked');
  }
};