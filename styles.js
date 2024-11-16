let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x') 
  navbar.classList.toggle('active'); 
}

document.getElementById('play-game-btn').addEventListener('click', function() {
    window.location.href = 'https://play2048.co/'; 
})


document.addEventListener('DOMContentLoaded',function (){
  setInterval(function(){
    fetch('https://206.189.146.138/api/sensors ')
    .then(response => response.json())
    .then(data => {
        const temperature = data.temperature;
        const humidity = data.humidity;
        const timestamp = data.timestamp;
        const luxsensor = data.luxsensor;
        const motion = data.motion ? 'YES':'NO';

        document.querySelector('#Temperature').innerHTML  = `Temperature      is ${temperature}`;
        document.querySelector('#Humidity').innerHTML     = `Humidity         is ${humidity}`;
        document.querySelector('#Timestamp').innerHTML    = `Timestamp        is ${timestamp}`;
        document.querySelector('#Luxsensor').innerHTML    = `Luxsensor        is ${luxsensor}`;
        document.querySelector('#Motion').innerHTML       = `Motion           is ${motion}`;
      });
    }, 1000);
  });
 

document.addEventListener('DOMContentLoaded',() => {
    document.querySelector("form").onsubmit = ()=>{
      const student_id = document.querySelector("#id").value;
      const student_name = document.querySelector("#name").value;
      const Json = {"id":student_id,"name":student_name};
        
      fetch("https://206.189.146.138/api/students",{
          method:"POST",
          headers:{"Content-type": "application/json",},
          body: JSON.stringify(Json)
      })

      .then((response) => response.json())

      .then((data) => {
          console.log(data);
      })
      .catch(error => console.error('Error:', error));
    }  
})

