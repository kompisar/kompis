const request = require('request');
const constants = require('constants');

function requestNordea(relUrl) {
  const headers = {};
  Object.assign(headers, {
    'X-IBM-Client-ID': process.env.CLIENT_ID,
    'X-IBM-Client-Secret': process.env.CLIENT_SECRET,
    'Authorization': 'Bearer ' + process.env.ACCESS_TOKEN,
  });
  const url = 'https://api.hackathon.developer.nordeaopenbanking.com' + relUrl;
  return new Promise((resolve, reject) => {
    request({
      url,
      headers,
      //agentOptions: {
      //  ciphers: 'ECDHE-RSA-AES256-GCM-SHA384',
      //  secureOptions: constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_SSLv2,
      //  secureProtocol: 'TLSv1_2_method',
      //},
    }, (err, response, body) => {
      if (err) {
        debugger;
        console.log(err);
        return;
      }
      return resolve(body);
    });
  });
}

requestNordea('/v2/accounts/FI6593857450293470-EUR/transactions')
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.log(err);
  });


//setTimeout(() => 0, 800000);
