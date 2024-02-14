// function play() {
//   //hide the home screen.to hide the screen add the class hidden to the home screen
//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");
//   //  console.log(homeSection.classList)

//   //show the playground
//   const playGroundSection = document.getElementById('play-ground');
//   playGroundSection.classList.remove('hidden');
// }

function continueGame() {
  // generated -1 : generate a random alphabate
  const alphabet = getARandomAlphabet();
  console.log("your random alphabet", alphabet);

  // set random game alphabet to the screen (show it)
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;

  //set background color
  setBackgroundById(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}

function getARandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  return alphabet;
}

// function getARandomAlphabet() {
//   const alphabetString = "afdfhfghfgfhfgfhghhbhufjfbvcv";
//   const alphabets = alphabetString.split("");
//   console.log(alphabets);

//   //get a random index between 0-25
//   const randomNumber = Math.random() * 25;
//   const index = Math.round(randomNumber);
//   console.log(index);

//   const alphabet = alphabets[index];
//   // console.log(index, alphabet);
//   return alphabet;
// }
