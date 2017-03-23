
# ghosty

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/ghosty.svg)](https://www.npmjs.com/package/ghosty) [![Downloads](https://img.shields.io/npm/dt/ghosty.svg)](https://www.npmjs.com/package/ghosty)

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

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`phantom-jquery`](https://github.com/IonicaBizau/phantom-jquery#readme)—Access DOM elements using jQuery in PhantomJS.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
