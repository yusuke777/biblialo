const webapi = require('superagent');

webapi('https://www.googleapis.com/books/v1/volumes')
   .query({
      q: "haryy potter",
   })
   .end(function(error, res){
      for(val of res.body.events){
         console.log(val.title);
      }
   });
