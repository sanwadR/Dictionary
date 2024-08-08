const Input = document.querySelector("#WordInput");
const SearchBtn = document.querySelector(".searchbtn");
const wordResult = document.querySelector(".WordResult");
let Audiosrc;
async function SearchWord() {
  let Word = Input.value;
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${Word}`;

  const response = await fetch(url);
  const data = await response.json();

  const WordInfo = data[0];
  console.log(WordInfo);
  const wordName = WordInfo.word;
  const Meaning = WordInfo.meanings[0].definitions[0].definition;
  const phonetic = WordInfo.phonetics[0].text;
  Audiosrc = WordInfo.phonetics[0].audio;
  const Example = WordInfo.meanings[0].definitions[0].example;
  for (let i = 0; i < 10; i++) {
    if (Audiosrc === "") {
      Audiosrc = WordInfo.phonetics[i].audio;
    } else {
      break;
    }
  }

  for (let i = 0; i < 10; i++) {
    if (Example === "") {
      Example = WordInfo.meanings[0].definitions[i].example;
    } else {
      break;
    }
  }

  console.log(WordInfo.word);
  console.log(WordInfo.meanings[0].definitions[0].definition);
  console.log(WordInfo.word);
  wordResult.innerHTML = `



<div class="WordResult">
  <div class="Word">
    <h2>${wordName}</h2>
  </div>
  <div class="searchResults">
    <p class="meaning">${Meaning}<br /></p>
    <p class="meaning">${Example}<br /></p>
    <p class="phonetic">${phonetic}<br /></p>

    <button class="Volumebtn" onClick= "PlaySound()">
      <i class="fa-solid fa-volume-high"></i>
    </button>
    <br />
  </div>
</div>
  `;
}
/*    <div class="Dictionary">
      <div class="InputContainer">
        <input
          type="text"
          placeholder="Enter a word"
          id="WordInput"
          class="Input"
        />
        <button type="button" class="searchbtn">Search</button>
      </div>

      <div class="WordResult">
        <div class="Word">
          <h2>${wordName}</h2>
        </div>
        <div class="searchResults">
          <p class="meaning">${Meaning}<br /></p>
          <p class="phonetic">${phonetic}<br /></p>

          <button class="Volumebtn" onClick= "PlaySound()">
            <i class="fa-solid fa-volume-high"></i>
          </button>
          <br />
        </div>
      </div>
    </div> */
/** <h1>${wordName}</h1>
  <p>${Meaning}<br>
  ${phonetic}<br>
  ${Audiosrc}
  <br>
  <button onClick= "PlaySound()"> 
    SOUND
  </button>
  <br>
  <audio controls>
<source src="${Audiosrc}"></source>
  </audio>
  </p> */
SearchBtn.addEventListener("click", () => {
  SearchWord();
});

function PlaySound() {
  let newAudio = new Audio(Audiosrc);
  newAudio.play();
}

// const Input = document.querySelector("#WordInput");
// const SearchBtn = document.querySelector(".searchbtn");

// async function SearchWord() {
//   let Word = Input.value;
//   const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${Word}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     // Check if the response has the expected structure
//     if (Array.isArray(data) && data.length > 0 && data[0].word) {
//       const wordInfo = data[0];
//       console.log("Word:", wordInfo.word);
//       console.log("Meanings:", wordInfo.meanings);
//       console.log("Phonetics:", wordInfo.phonetics);
//     } else {
//       console.error("Invalid response format");
//     }
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// SearchBtn.addEventListener("click", () => {
//   SearchWord();
// });
