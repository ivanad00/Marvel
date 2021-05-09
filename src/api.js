const { getApiHash } = require("marvel-api-hash-generator");

require("dotenv").config();

const PUBLIC_KEY = "86d97bd335d36fde308bd9351d0ab5a4";
//const API_KEY = process.env.REACT_APP_API_KEY;
//const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
const PRIVATE_KEY = "5e8255869698bc24c996642f69227ef653909f5e";
const timeStamp = 1;

const hash = getApiHash(timeStamp, PRIVATE_KEY, PUBLIC_KEY);

export { PUBLIC_KEY, timeStamp, hash };
