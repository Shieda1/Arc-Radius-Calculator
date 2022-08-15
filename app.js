// https://calculator.swiftutors.com/arc-radius-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const radiusofanArcRadio = document.getElementById('radiusofanArcRadio');
const heightofanArcRadio = document.getElementById('heightofanArcRadio');
const widthofanArcRadio = document.getElementById('widthofanArcRadio');

let radiusofanArc;
let heightofanArc = v1;
let widthofanArc = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

radiusofanArcRadio.addEventListener('click', function() {
  variable1.textContent = '(h) Height of an Arc';
  variable2.textContent = '(w) Width of an Arc';
  heightofanArc = v1;
  widthofanArc = v2;
  result.textContent = '';
});

heightofanArcRadio.addEventListener('click', function() {
  variable1.textContent = 'Radius of an Arc';
  variable2.textContent = '(w) Width of an Arc';
  radiusofanArc = v1;
  widthofanArc = v2;
  result.textContent = '';
});

widthofanArcRadio.addEventListener('click', function() {
  variable1.textContent = 'Radius of an Arc';
  variable2.textContent = '(h) Height of an Arc';
  radiusofanArc = v1;
  heightofanArc = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(radiusofanArcRadio.checked)
    result.textContent = `Radius of an Arc = ${computeRadiusofanArc().toFixed(2)}`;

  else if(heightofanArcRadio.checked)
    result.textContent = `Height of an Arc = ${computeHeightofanArc().toFixed(2)}`;

  else if(widthofanArcRadio.checked)
    result.textContent = `Width of an Arc = ${computeWidthofanArc().toFixed(2)}`;
})

// calculation

function computeRadiusofanArc() {
  return (Number(heightofanArc.value) / 2) + (Math.pow(Number(widthofanArc.value), 2) / (8 * Number(heightofanArc.value)));
}

function computeHeightofanArc() {
  return Number(decliningBalanceDepreciation.value) / Number(bookValueofAsset.value);
}

function computeWidthofanArc() {
  return Math.sqrt((Number(radiusofanArc.value) - (Number(heightofanArc.value) / 2)) * (8 * Number(heightofanArc.value)));
}