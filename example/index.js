// Dependencies
var Ghosty = require("../lib");

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
