const Express = require('express');
const app = Express();
const path = require('path');

console.log(__dirname);
// let call1 = function (req, res, next) {                                   <-------
//     res.sendFile('./style.css', { root: path.join('../stylesheets') });
//     next();
// }

// let call2 = function (req, res) {
//     res.sendFile('./register.html', { root: path.join('../html') });
// }
// app.get('/demo', [call1, call2]);                                          not possible----->  
// app.get('/demo', function (req, res) {
//     res.sendFile('./style.css', { root: path.join('../stylesheets') });
// });

let Emp = [{
    name: 'piya',
    id: 1
},
{
    name: 'abc',
    id: 2
}
];

app.get('/demo',function(req,res){
// res.json(Emp);
res.send(Emp);
});

app.listen(8080, function () {
    console.log('listening to port 8080');
})

