const log = require('./logger');
//console.log(logger);


log('hello i am piya');
const path=require('path');
var pathobj= path.parse(__filename);
console.log(pathobj);
const os=require('os');
// console.log(os);
var total_memory=os.totalmem();
var free_memory=os.freemem();

var total=total_memory+free_memory;  
console.log(total);


