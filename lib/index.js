// Dependencies
const phantom = require("phantom")
    , phantomJs = require("phantomjs")
    , ul = require("ul")
    , sliced = require("sliced")
    , typpy = require("typpy")
    , deffy = require("deffy")
    ;

// Export the Ghosty object
var Ghosty = module.exports = ul.merge({}, phantom);

// Object.keys(Phantom).forEach(function (c) {
//     Ghosty[c] = Phantom[c];
// });

Ghosty.path = phantomJs.path;

// Save the old create reference to _create
Ghosty._create = Ghosty.create;

// Override the create function
Ghosty.create = function () {

    var args = sliced(arguments)
      , options = args[args.length - 1]
      ;

    if (!typpy(options, Object)) {
        args.push({ binary: Ghosty.path });
    } else {
        options.binary = deffy(options.binary, Ghosty.path);
    }

    return Ghosty._create.apply(this, args);
};

