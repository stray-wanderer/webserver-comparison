const express = require('express')
const fs = require('fs')
const app = express()
const os = require('os');
const port = 5000
const folder = 'Pics'

function base64encode(file){

	var readFile = fs.readFileSync(file);
	return new Buffer(readFile).toString('base64');
}

var files = []
fs.readdirSync(folder).forEach(file=>{
	files.push(folder +'/'+ file)
}) 

var base64Files = []
for(var i = 0; i < files.length; i++){
	base64Files.push(base64encode(files[i]))
}

var html = ''
for(var i = 0; i < base64Files.length; i++){
	html += '<img src = "data:image/jpg;base64, ' + base64Files[i] +'"/>'
}

app.get('/', (req, res) => {
    res.send(`<h3>It's ${os.hostname()}</h3>`);
})

app.get('/imagetest', (req, res) => {
    res.send(html);

})

app.listen(port, () => {
    console.log(`Server Started on Port  ${port}`)
})