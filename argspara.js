function text(...args) {
    return args
      .filter(function (e) {
        return typeof e === 'string';
      })
      .reduce(function (prev, curr) {
        return prev + curr;
      });
  }
  
  let result = text(30, 'Hi', null ,undefined, 40, undefined, 50, 70, ' there!'); 
  console.log(result);