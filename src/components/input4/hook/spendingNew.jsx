import axios from "axios";

function newSpending() {
  let spending1 = document.getElementById("spending1").value;
  if (spending1 === "") {
    alert("Please add some value to the Spending field");
  } else {
    axios
      .post("http://localhost:4000/api/spending", {
        spending: spending1,
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

export default newSpending;
