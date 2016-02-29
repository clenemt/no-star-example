'use strict';

/**
 * Remove the need for stars inside example body.
 * @module plugins/no-star-example
 * @author clenemt <https://github.com/clenemt>
 */
exports.handlers = {
    newDoclet: function (e) {
        var doclet = e.doclet,
            rExample = /@example([\w\W]+?)\*/,
            rNotEmpty = /[\w]+/,
            rWhitespace = /^([\s]*)/,
            match, lines, offset;

        // Only if we have an example for that doclet
        if (doclet && doclet.examples) {

            // Find the offset from unparsed comment
            match = rExample.exec(doclet.comment);
            if (match && match[1]) {
                lines = match[1].split('\n');
                lines.some(function (line) {
                    // Find the non empty lines
                    if (rNotEmpty.test(line)) {
                        match = rWhitespace.exec(line);
                        if (match && match[1]) {
                            offset = match[1].length;
                            return true;
                        }
                    }
                });
            }

            // Remove unwanted spacing finally
            doclet.examples = doclet.examples.map(function (example) {
                return example.split('\n').map(function (line, i) {
                    return i ? line.substr(offset) : line;
                }).join('\n');
            });
        }
    }
};
