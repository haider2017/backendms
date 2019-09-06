var seneca = require('seneca')()
            .use('seneca-amqp-transport');

seneca.add('role:clientservice,cmd:salestax', function (msg, done) {
    var rate  = 0.23
    var total = msg.net * (1 + rate)
    done(null, {total: total})
})
.listen({
    type: 'amqp',
    pin : 'role:clientservice,cmd:salestax',
    url : process.env.AMQP_URL
});

module.exports = seneca;