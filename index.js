// GRAB HTML ELEMENTS BY ID 
const lottoNum = document.getElementById('lotto-num');
const modal = document.getElementById('results-modal');
const result = document.getElementById('result');

//DECLARE MAX MULTIPLE FOR MATH.RANDOM
const max = 100000;

//DECLARE VARIABLE TO STORE MOST RECENTLY GENERATED NUMBER
let latestNum = 0;

const cycleLottoNumbers = () => {
  //ENSURE MODAL IS CLOSED WHEN FIRING OFF NEW GAME
  closeModal();

  //KEEP TRACK OF INTERVAL ITERATIONS
  let intervalCount = 0;

  const interval = setInterval(() => {
    let randomNum = Math.floor(Math.random() * max);

    //FOR EACH INTERVAL ITERATION, ASSIGN CURRENT RANDOM NUMBER TO HTML ELEMENT FOR 'SLOT MACHINE' EFFECT
    //INCREMENT INTERVAL COUNT
    lottoNum.innerHTML = randomNum;
    intervalCount++;

    // ONCE INTERVAL HAS ITERATED 10 TIMES, ASSIGN LATEST RANDOM NUMBER TO VARIABLE,
    // CALL DECLARERESULTS FUNCTION TO DISPLAY RESULTS MODAL,
    // AND CLEAR INTERVAL
    if (intervalCount === 10) {
      latestNum = randomNum;
      declareResults(latestNum);
      clearInterval(interval);
    };
  }, 100);
};

const declareResults = latestNum => {
  modal.style = "display: flex";

  if (latestNum > 1000) {
    result.innerHTML = "Too bad! You've lost!";
  } else result.innerHTML = "Congratulations! You've won!";
};

const closeModal = () => {
  modal.style = "display: none";
};