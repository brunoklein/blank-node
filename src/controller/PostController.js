const { parse } = require('querystring');

function post(req, res) {

    console.log('***              ***');
    console.log('*** Post Request ***');
    console.log('***              ***\n');

    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    const FORM_MULTIPART_FORMDATA = 'multipart/formdata';

    if (req.headers['content-type'] === FORM_MULTIPART_FORMDATA) {

        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            var reqObj = parse(body);
            console.log({ ...reqObj });
            console.log('\n');
            res.send(body);
        });

    } else {
            console.log(req.method)
            console.log(req.headers['content-type']);
            console.log(req.body);
            console.log('\n');
            res.send(req.body);
    }

}

exports.post = post;