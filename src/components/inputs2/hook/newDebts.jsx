import axios from "axios";

function newDebts(newDebts) {
  let debts1 = newDebts;

  if (debts1 === "") {
    alert("Please add some value to the debts field");
  } else {
    console.log(JSON.stringify(debts1));
    axios
      .post("http://localhost:4000/api/debts", {
        debts: debts1,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}

export default newDebts;
