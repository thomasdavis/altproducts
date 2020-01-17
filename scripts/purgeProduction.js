const axios = require("axios");

const FASTLY_HOST = "https://api.fastly.com";

setInterval(() => {
  axios({
    url: `${FASTLY_HOST}/service/1kasrXK1xNshPCritEuWdQ/purge_all`,
    method: "POST",
    headers: {
      "Fastly-Key": "e88156540b8ed81edc3fb243e61538a3",
      Accept: "application/json"
    }
  }).then(res => {
    console.log("Purged cache");
    console.log(res.data);
  });
}, 30000);

setInterval(() => {
  console.log("surely that is enough purging");
  process.exit();
}, 130000);
