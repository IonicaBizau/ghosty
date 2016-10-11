
# ghosty

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/ghosty.svg)](https://www.npmjs.com/package/ghosty) [![Downloads](https://img.shields.io/npm/dt/ghosty.svg)](https://www.npmjs.com/package/ghosty) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> A wrapper around PhantomJS, downloading the Phantom binary.

Using this module, you don't need to take care of installing the PhantomJS binaries. It will automagically install them for you.

## :cloud: Installation

```sh
$ npm i --save ghosty
```


## :clipboard: Example



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
            // We're passing a regular function here because
            // ES6 arrow functions are not yet supported on PhantomJS
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

## :memo: Documentation

### Accessing the PhantomJS path

Use `Ghosty.path` to get the PhantomJS path that is used.

### API

Basically, this library clones the entire functionality of
[phantomjs-node](https://github.com/sgentle/phantomjs-node),
but makes sure that you don't need to install any binaries
(it will do it for you automatically using the
[`phantomjs`](https://github.com/Medium/phantomjs) module.


## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`phantom-jquery`](https://github.com/IonicaBizau/phantom-jquery#readme)—Access DOM elements using jQuery in PhantomJS.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
