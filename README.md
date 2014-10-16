config-rc
================

Simple `.*rc` configuration module designed for command line applications.

## Example

#### Setting values

```javascript
'use strict';

var configrc = require('configrc');


var myconf = configrc.make('myapp');

myconf.set('login', 'jack');
myconf.set('password', '123456');
```

Saves in `~/.myapprc` the following JSON:

```json
{
  "login": "jack",
  "password": "123456"
}
```


#### Retrieving values

```javascript
'use strict';

var configrc = require('configrc');


var myconf = configrc.make('myapp');

var login = myconf.get('login'),
    password = myconf.get('password');

// login <- 'jack'
// password <- '123456'
```


#### Destroying the config

```javascript
'use strict';

var configrc = require('configrc');


var myconf = configrc.make('myapp');

myconf.destroy();
```
Deletes the config file `~/.myapprc`.


## License 

MIT
