# Switch language with vanilla JavaScript #

[Demo](https://followuprepos.github.io/switchLanguage-vanillajs/)

A set of radio buttons in created, each inside a `<label>` element. Each label also contains an image representing the flag of a country. The buttons themselves are moved way off the screen to the left.

The CSS of the images is set so that the younger sibling of a checked button appears with full opacity, but other buttons appear with an `opacity` of `0.33`.

Each radio button is given an event listener which checks the `id` of the target button. This selects the appropriate set of language strings from a look-up table, and tells each element with a class name of `"text"` to choose the string that matches its own id.