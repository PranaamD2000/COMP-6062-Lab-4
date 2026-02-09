//  Calculate the area of a triangle
function areaTriangle (base, height) {
    
   return (base * height / 2).toFixed(1);

}

//Findings value by Id
const triangleInputBase = document.getElementById('triangle-base'); // returns an Element object
const triangleInputHeight = document.getElementById('triangle-height');
const triangleInputArea = document.getElementById('triangle-area');

//Adding Listener so that this functions trigger every time value of base changes
triangleInputBase.addEventListener('input', (event) => {
  const base = Number(event.target.value);
  const height = Number(triangleInputHeight.value);
  const area = areaTriangle(base, height);
  
  // Set the final result
  triangleInputArea.value = area;
});

//Adding Listener so that this functions trigger every time value of height changes
triangleInputHeight.addEventListener('input', (event) => {
  const height = Number(event.target.value);
  const base = Number(triangleInputBase.value);
  const area = areaTriangle(base, height);

  // Set the final result
  triangleInputArea.value = area;
});



console.log(`Area = ${areaTriangle(3, 4)}`);
console.log(`Area = ${areaTriangle(5, 7)}`);    



///////////////////////////////////////////////////////////////////////////////////////////////////

//Calculate of the volume of a sphere

function volumeSphere (radius){
    
    return (4/3*Math.PI*radius**3).toFixed(1);

}

const sphereLabelRadius = document.getElementById('sphere-radius');
const sphereInputVolume = document.getElementById('sphere-volume');


//Adding Listener so that this functions trigger every time value of radius changes
sphereLabelRadius.addEventListener('input', (event) => {
  const radius = Number(event.target.value);

  const volume = volumeSphere(radius);

  // Set the final result
  sphereInputVolume.value = volume;
  
});


console.log(`Volume = ${volumeSphere(3)}`);
console.log(`Volume = ${volumeSphere(5)}`);    


///////////////////////////////////////////////////////////////////////////////////////////////////

//Convert Distance to meters

const distanceValue = document.getElementById('distance');
const unitValue = document.getElementById('unit');
const result = document.getElementById('result');


function convertToMeters(distance, unit) {

    // short circuit
    if (distance === 0 || unit === "m") {
        return distance;
    }

    let meters;

    switch (unit) {
        case "km":
            meters = distance * 1000;
            break;

        case "y":
            meters = distance * 0.9144;
            break;

        case "mi":
            meters = distance * 1609.34;
            break;

        default:
            console.log("Unknown unit");
            return null;
    }

    return meters;
}


//Adding Listener so that this functions trigger every time value of base changes
distanceValue.addEventListener('input', (event) => {
  const distanceVal = event.target.value;
  const unitVal = unitValue.value;
  const finalDistance = convertToMeters(distanceVal, unitVal);
  
  // Set the final result
  result.value = finalDistance;
});


unitValue.addEventListener('input', (event) => {
  const distanceVal = distanceValue.value;
  const unitVal = event.target.value
  const finalDistance = convertToMeters(distanceVal, unitVal);

  // Set the final result
  result.value = finalDistance;
});


console.log(`Distance in Meters ${convertToMeters(50, "m").toFixed(2)}`);
console.log(`Distance in Meters ${convertToMeters(100, "y").toFixed(2)}`);
console.log(`Distance in Meters ${convertToMeters(1, "mi").toFixed(2)}`);
console.log(`Distance in Meters ${convertToMeters(1.234, "km").toFixed(2)}`);


///////////////////////////////////////////////////////////////////////////////////////////////////

//Convert String time to seconds


const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const time = document.getElementById('time');

function convertToSeconds(time) {

    let parts = time.split(":");
    let seconds = 0;

    if (parts.length === 3) {
        // HH:MM:SS
        seconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
    } 
    else if (parts.length === 2) {
        // MM:SS
        seconds = parts[0] * 60 + parts[1];
    } 
    else if (parts.length === 1) {
        // SS
        seconds = parts[0];
    }

    return seconds;
}


hour.addEventListener('input', (event) => {
  const hourVal = event.target.value;
  const minutesVal = minutes.value;
  const secondsVal = seconds.value;

  const convertedTime = convertToSeconds(`${hourVal}:${minutesVal}:${secondsVal}`);

  // Set the final result
  time.value = convertedTime;
});

minutes.addEventListener('input', (event) => {
  const hourVal = hour.value;
  const minutesVal = event.target.value;
  const secondsVal = seconds.value;

  const convertedTime = convertToSeconds(`${hourVal}:${minutesVal}:${secondsVal}`);

  // Set the final result
  time.value = convertedTime;
});


seconds.addEventListener('input', (event) => {
  const hourVal = hour.value;
  const minutesVal = minutes.value;
  const secondsVal = event.target.value;

  const convertedTime = convertToSeconds(`${hourVal}:${minutesVal}:${secondsVal}`);

  // Set the final result
  time.value = convertedTime;
});

console.log(`Converted Time ${convertToSeconds('02:33:21')}`);
console.log(`Converted Time ${convertToSeconds('00:04:51')}`);
console.log(`Converted Time ${convertToSeconds('04:51')}`);
console.log(`Converted Time ${convertToSeconds('00:13')}`);
console.log(`Converted Time ${convertToSeconds('13')}`);
