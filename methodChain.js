const person = {
  name: '本田',
  age: '30',

  getName() {
    console.log( this.name );
    // オブジェクト全体を戻り値
    return this;
  },

  getAge(){
    console.log( this.age );
    return this;
  }
};

// ①personオブジェクトの中のgetNameを実行
// ②nameを出力し、戻り値としてpersonオブジェクト全体を再び返す
// ③personオブジェクトの中のgetAgeを実行
// ④ageを実行し、personオブジェクトを返す
person.getName().getAge();

// => 本田
// => 30

