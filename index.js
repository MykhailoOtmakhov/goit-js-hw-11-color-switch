const refStartButton = document.querySelector('[data-action="start"]');
const refStopButton = document.querySelector('[data-action="stop"]');
let bodyColor = null;
let timerId = null;
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
  
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };


refStartButton.addEventListener('click', onStartClick);
refStopButton.addEventListener('click', onStopClick);

function setRandomColor (){
    bodyColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    document.body.style.background = bodyColor;
}
function onStartClick(){
    if (refStartButton.disabled) 
    {return}
    refStartButton.disabled = true;
    timerId = setInterval(() => setRandomColor(),1000);
}

function onStopClick(){
    refStartButton.disabled = false;
    clearInterval(timerId);
}


