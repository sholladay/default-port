# default-port

> Get the default port for a protocol.

## Why?

 - Translate user input to server config.
 - Useful defaults for connecting to services.
 - Determine if you can strip the port from a URL.

## Install

```sh
npm install default-port --save
```

## Usage

Get it into your program.

```js
const defaultPort = require('default-port');
```

Retrieve the default port for a protocol, as a lowercase string.

```js
const port = defaultPort(
    'https',  // protocol you want to check
);
console.log(port);  // => 443
```

## Contributing

See our [contributing guidelines](https://github.com/sholladay/default-port/blob/master/CONTRIBUTING.md "The guidelines for participating in this project.") for more details.

1. [Fork it](https://github.com/sholladay/default-port/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/default-port/compare "Submit code to this project for review.").

## License

[MPL-2.0](https://github.com/sholladay/default-port/blob/master/LICENSE "The license for default-port.") © [Seth Holladay](http://seth-holladay.com "Author of default-port.")

Go make something, dang it.
