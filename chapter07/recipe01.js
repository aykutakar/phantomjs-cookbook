var webpage  = require('webpage').create(),
    filename = 'index.png';

webpage.viewportSize = { width: 1024, height: 768 };

webpage.open('http://localhost:3000/', function(status) {
  if (status === 'fail') {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }

  webpage.render(filename);

  console.log('webpage rendered as ' + filename);

  phantom.exit();
});