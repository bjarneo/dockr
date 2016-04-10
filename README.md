Dockr
======
Automatically build docker image and push it to your registry.

Installation
------
```bash
$ npm i --save dockr
```

Usage
------
```js
const execute = require('dockr');

execute({
    registry: 'docker.yourRegistry.com', // default '' which pushes to docker.io/library
    username: 'username', // default ''
    imageName: 'myawesomeimage', // default ''
    dockerFileLocation: '.', // default '.' current location,
    timestamp: true // default false. Append timestamp to the docker tag
}).then(tag => {
    console.log('Image successfully pushed to %s', tag);
}).catch(console.error);
```

Tests
------
```bash
$ npm test
```

Contribution
------
Contributions are appreciated.

License
------
MIT-licensed. See LICENSE.
