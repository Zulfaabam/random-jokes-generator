// grab a reference for necessary HTML elements
const jokesText = document.querySelector('.jokes-text')
const randomBtn = document.querySelector('.random-btn')

// add 'click' eventListener to .random-btn
randomBtn.addEventListener('click', () => {
  getJoke()
})

// getJoke() function definition
function getJoke() {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  })
    .then((response) => {
      /* convert Stringified JSON response to Javascript Object */
      return response.json()
    })
    .then((data) => {
      /* replace innerText of .joke-text with data.joke */
      // extract the joke text
      const joke = data.joke
      // do the replacement
      jokesText.innerText = joke
      console.log(data)
    })
    .catch((error) => {
      // if some error occured
      jokesText.innerText = 'Oops! Some error happened :('
      // console log the error
      console.log(error)
    })
}
