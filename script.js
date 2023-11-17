/**
 * script.js
 */


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


const texts = Array.from(
  document.getElementsByClassName("text")
)

const radioButtons = Array.from(
  document.getElementsByTagName("input")
)

radioButtons.forEach( radioButton => {
  radioButton.addEventListener("change", setLanguage, false)
})

function setLanguage(event) {
  const lang = event.target.id
  const localizedStrings = strings_LUT[lang]

  texts.forEach( textElement => {
    const id = textElement.id
    const string = localizedStrings[id]
    textElement.innerText = string
  })
}

// Force the text initially to German with a fake "event"
setLanguage({ target: {id: "de" }} )