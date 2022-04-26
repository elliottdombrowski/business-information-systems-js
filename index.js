const lottoNum = document.getElementById('lotto-num');
const max = 100000;

const cycleLottoNumbers = () => {
  lottoNum.innerHTML = Math.floor(Math.random() * max);
  lottoNum.innerHTML > 1000 ? alert("Too bad! You've lost!") : alert("Congratulations! You've won!");
};