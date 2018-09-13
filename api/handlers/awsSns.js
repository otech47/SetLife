var AWS = require('aws-sdk');

var { aws } = require('../config/settings');

AWS.config.update({
    accessKeyId: aws.accessKeyId,
    secretAccessKey: aws.secretAccessKey,
    region: 'us-east-1'
});

var sns = new AWS.SNS();

var awsSns = module.exports = (function() {
    return {
        sendText: (params) => {
            return new Promise((resolve, reject) => {
                var params = {
                    Message: params.message,
                    PhoneNumber: params.phoneNumber
                };

                sns.publish(params, (err, data, res) => {
                    if (err) {
                        console.log('aws.sendText error');
                        console.log(err);
                        reject(err);
                    } else resolve(res);
                });
            });        
        }
    };
})();