# default-port

Get the default port for a given protocol.

## Installation

````sh
npm install default-port --save
````

## Usage

Get it into your program.
````javascript
var defaultPort = require('default-port');
````

Retrieve the default port for a protocol, as a lowercase string.

````javascript
var protocol = 'https',
    port = defaultPort(
        protocol,           // protocol you want to check
    );
console.log(port)  // => 443
````

## Contributing

See our [contribution guidelines](https://github.com/sholladay/default-port/blob/master/CONTRIBUTING.md "The guidelines for being involved in this project.") for more details.

1. [Fork it](https://github.com/sholladay/default-port/fork).
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/default-port/compare "Submit code to this repo now for review.").

## License

[MPL-2.0](https://github.com/sholladay/default-port/blob/master/LICENSE "The license for default-port.")

Go make something, dang it.
