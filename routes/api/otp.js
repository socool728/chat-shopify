const express = require('express')
const router = express.Router();
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '87b59597',
  apiSecret: 'kcd04pz98799OwiQ'
});

router.post('/send', (req, res) => {
  // Send SMS
  nexmo.verify.request(
    {
      number: "18017884331",
      brand: "Pixs",
      code_length: "6",
    },
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        const verifyRequestId = result.request_id;
      }
    }
  )
});

module.exports = router;