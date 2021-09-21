// var firstName = "jonas";
const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2021 - this.year);

    const isMillienial = function () {
      console.log(`${this.firstName} is a millienial`);
    };
    isMillienial();
  },
  greet: () => {
    console.log(this);
    console.log(`hi ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();
