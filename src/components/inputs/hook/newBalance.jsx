import axios from "axios";

function newBalance(balance11) {
  let balance1 = balance11;
  if (balance1 === "") {
    alert("Please add some value to the balance field");
  } else {
    axios
      .post("http://localhost:4000/api/balance", {
        balance: balance1,
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
export default newBalance;
