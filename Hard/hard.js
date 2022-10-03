function personalInfo() {
  let pii = {
    fName: "Richard",
    lName: "Mena",
    ssn: 0101010101,
  };
  return {
    getName: function () {
      // we only want the name to be accessed utilizing this function

      return `${pii.fName} ${pii.lName}`;
    },
  };
}
let mailingAddress = personalInfo();
console.log(mailingAddress.getName());
