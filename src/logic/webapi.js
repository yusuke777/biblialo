const webapi = require('superagent');

webapi('https://connpass.com/api/v1/event')
   .query({
      ymd: 20180911,
      order: 3
   })
   .end(function(error, res){
      for(val of res.body.events){
         console.log(val.title);
      }
   });
