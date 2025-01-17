var post_data = {};

var post_options = {
  host: this._host,
  path: path,
  method: 'POST',
  headers: {
    Cookie: "session=" + session,
    'Content-Type': 'application/json',
    'Content-Length': post_data.length,
  }
};

// Set up the request
var post_req = http.request(post_options, function (res) {
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('========Response========: ' + chunk);
  });
});

// post the data
post_req.write(post_data);
post_req.end();
