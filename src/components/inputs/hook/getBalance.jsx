import axios from "axios";

async function getBalance() {
  return await axios.get("http://localhost:4000/api/balance");
}

export default getBalance;
