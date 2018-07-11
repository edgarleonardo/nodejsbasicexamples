var request = require('request');

// Version 1:  Pipe HTML to standard out
var s = request('http://www.google.com/');

s.pipe(process.stdout);

// Pipe HTML to a file instead of standard out
request('http://www.google.com/').pipe(fs.createWriteStream('pluralsight.html'));

// Pipe HTML through a gzip stream to a compressed file
request('http://www.google.com/').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'));