var express =require('express');
var app = express();

app.use(express.static(__dirname + '/assets'));
app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.set('view options',{
   open: '<%',
    close: '%>'
});
app.get('/', function(req,res){
   res.render('pages/login');
});
app.get('/login', function(req,res){
    res.render('pages/index');
});
console.log('server is running on 8080. ctrl + c to shutdown');
app.listen(8080);
