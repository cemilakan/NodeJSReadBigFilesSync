var fs = require('fs');
var readline = require('readline');
var stream = require('stream');
var outstream = new stream();
var lineCount = 0;
var number = "";
var input = fs.createReadStream('../../../filenode/readbig/file.xml');
var rl = readline.createInterface(input, outstream);

function readLines({ input }) {
  const output = new stream.PassThrough({ objectMode: true });
  const rl = readline.createInterface({ input });
  rl.on("line", line => {
    output.write(line);
  });
  rl.on("close", () => {
    output.push(null);
  });
  return output;
}

(async () => {
  console.time("Finished in: ");
  for await (var line of readLines({ input })) {
    lineCount++;
    //Her bir satır ile burada işlem yapılabilir
    console.log(line);
  }
  console.timeEnd("Finished in: ");
  console.log("Line Count: " + lineCount);

})();
