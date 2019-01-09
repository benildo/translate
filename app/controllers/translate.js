const config = require('../../config/config');
const TJO = require('translate-json-object')();

exports.translate = function(req, res){
    
    var language = req.params.language || 'en';
    TJO.init({
        yandexApiKey: config.yandexApiKey
      });

      var example = req.body;

      TJO.translate(example, language)
          .then(function(data) {
            res.send(data)
          }).catch(function(err) {
            console.log('error ', err)
          });


}