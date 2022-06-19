import axios from "axios";

async function getDebts() {
  return await axios.get("http://localhost:4000/api/debts");
}

export default getDebts;
