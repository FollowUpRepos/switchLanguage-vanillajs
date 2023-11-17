/**
 * script.js
 */

// Create a look-up table of all the text that will be displayed
// in the page. The key for each language must match the id of
// one of the radio buttons in index.html
const strings_LUT = {
  de: {
    showText: "Zeigen Sie die seite auf Englisch an",
    welcome: "Willkommen!"
  },
  en: {
    showText: "Show the page in English",
    welcome: "Welcome!"
  },
  fr: {
    showText: "Montrer la page en français",
    welcome: "Bienvenu !"
  }
}


// Find all the HTML elements that contain text to localize.
// Array.from() converts the "array-like" object returned by
// document.getElementxxxx() to a real array. This means that
// forEach can be used on the array.
const texts = Array.from(
  document.getElementsByClassName("text")
)

// Find all the radio buttons. In this demo, all the inputs are
// radio buttons with the same `name` attribute, so they all
// belong to the same group. In a more complex case, you might
// have to use a different document method like...
//  document.querySelectorAll("input[type=radio][name=language]")
// ...or filter the result

const radioButtons = Array.from(
  document.getElementsByTagName("input")
)

// Add the same event listener to each radio button in the group
radioButtons.forEach( radioButton => {
  radioButton.addEventListener("change", setLanguage, false)
})


function setLanguage(event) {
  // Find which button was clicked...
  const lang = event.target.id
  // ... and select the corresponding strings
  const localizedStrings = strings_LUT[lang]

  // For each element with the "text" class...
  texts.forEach( textElement => {
    // ... use its id to determine which string to show
    const id = textElement.id
    const string = localizedStrings[id]
    textElement.innerText = string
  })
}

// Find which radio button is checked in index.html...
let defaultButton = radioButtons.find( button => button.checked )
if (!defaultButton) {
  // ... and if none are checked, marually check the first one
  defaultButton = radioButtons[0]
  defaultButton.checked = true
}

// Set the language corresponding to the checked button
const id = defaultButton.id
setLanguage({ target: { id }} )