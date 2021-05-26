function checkScope(){
  const localVariable = 'ローカル';
  console.log(localVariable);
}

// console.log(localVariable);
// => Uncaught ReferenceError: localVariable is not defined

checkScope();
// ローカル
