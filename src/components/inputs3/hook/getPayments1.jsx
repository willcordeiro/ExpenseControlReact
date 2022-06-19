import axios from "axios";

async function getPayments() {
  return await axios.get("http://localhost:4000/api/payments");
}

export default getPayments;
