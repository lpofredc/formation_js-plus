// Create content
import getJson from "./getJson.js";

const url1 =
  "https://raw.githubusercontent.com/iOiurson/data/master/data/tweets.json";
const url2 =
  "https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json";

export default [url1, url2].map(getJson);
