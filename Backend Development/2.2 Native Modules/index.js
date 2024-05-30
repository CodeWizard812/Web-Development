const { isUtf8 } = require("buffer");
const fs = require("fs");

// fs.writeFile("message.txt", "Hello Node!", (er) =>{ //Creates file message.txt with Hello Node! in it and callback function er.
//     if(er) throw er;
//     console.log("The file is saved!");
// });

fs.readFile("message.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 