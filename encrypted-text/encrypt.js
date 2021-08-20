var CryptoJS = require("crypto-js");
var args = process.argv.slice(2);
console.log(args);

fs = require('fs');
fs = require('fs')
fs.readFile(args[0] + ".txt", 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  console.log(data.toString());
  text = data

  secretKey = args[1]

  let text2 = CryptoJS.AES.encrypt(text, secretKey);
  console.log(text2.toString());

  fs.writeFile(args[0] + "-encrypt.txt", text2.toString(), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
  });
});
