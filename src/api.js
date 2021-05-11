//const getApiHash = require("marvel-api-hash-generator");

//import { getApiHash } from "marvel-api-hash-generator";

//require("dotenv").config();
const PUBLIC_KEY = "58bb4ebb82f5a4c44065af684d19ff87";

//const PUBLIC_KEY = "86d97bd335d36fde308bd9351d0ab5a4";
//const API_KEY = process.env.REACT_APP_API_KEY;
//const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
const PRIVATE_KEY = "b0575c5fcf08b6bfb6c40fd30c28e670b84af7e2";
//const PRIVATE_KEY = "5e8255869698bc24c996642f69227ef653909f5e";
const timeStamp = 1;
const ts = new Date().getTime();
console.log(ts);
//const hash = getApiHash(timeStamp, PRIVATE_KEY, PUBLIC_KEY);
const hash = `${ts}b0575c5fcf08b6bfb6c40fd30c28e670b84af7e258bb4ebb82f5a4c44065af684d19ff87`;

export { PUBLIC_KEY, timeStamp, hash, ts };
