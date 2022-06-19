import axios from "axios";

async function getSpending() {
  return await axios.get("http://localhost:4000/api/Spending");
}

export default getSpending;
