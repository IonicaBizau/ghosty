# ghosty [![Support this project][donate-now]][paypal-donations]

A wrapper around PhantomJS, downloading the Phantom binary.

## Installation

```sh
$ npm i ghosty
```

## Example

```js
// Dependencies
var Ghosty = require("ghosty");

// Create the phantom process
Ghosty.create(ph => {

    // Create the page
    ph.createPage(page => {

        // Open google.com
        page.open("http://www.google.com", status => {
            console.log("Opened google? ", status);
            // => Opened google?  success

            // Get the document title
            page.evaluate(function () { return document.title; }, result => {
                console.log('Page title is ' + result);
                // => Page title is Google
                ph.exit();
            });
        });
    });
});

// Show the path
console.log("Using phantomjs located at: " + Ghosty.path);
// => Using phantomjs located at: /home/.../ghosty/node_modules/phantomjs/lib/phantom/bin/phantomjs
```

## Documentation

### Accessing the PhantomJS path

Use `Ghosty.path` to get the PhantomJS path that is used.

### API

Basically, this library clones the entire functionality of
[phantomjs-node](https://github.com/sgentle/phantomjs-node),
but makes sure that you don't need to install any binaries
(it will do it for you automatically using the
[`phantomjs`](https://github.com/Medium/phantomjs) module.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

MIT © [Ionică Bizău][website]

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
