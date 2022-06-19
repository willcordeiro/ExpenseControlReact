import axios from "axios";

function newPayments() {
  let payments1 = document.getElementById("payments1").value;

  if (payments1 === "") {
    alert("Please add some value to the Payments field");
  } else {
    axios
      .post("http://localhost:4000/api/payments", {
        payments: payments1,
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

export default newPayments;
