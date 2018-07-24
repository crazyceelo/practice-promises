console.log('test');

module.exports = {
  test: new Promise(function tester(resolve, reject) {
    var test = 'string';
    return test;
  })
}

test.test();