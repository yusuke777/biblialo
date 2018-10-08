const webapi = require('superagent');

function getBookData(bookname){
    webapi('https://www.googleapis.com/books/v1/volumes')
   .query({
      q: bookname + '&Country=JP'
   })
   .end(function(error, res){
    console.log(res.body);
   });
}