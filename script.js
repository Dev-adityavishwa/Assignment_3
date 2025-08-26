// document.body;


const box11 = document.getElementById('box1')
box11.addEventListener('click', () => {
    box11.classList.add('bg1');
});
const box21 = document.getElementById('box2')
box21.addEventListener('click', () => {
    box21.classList.add('bg2');
});
const box31 = document.getElementById('box3')
box31.addEventListener('click', () => {
    box31.classList.add('bg3');
});
const box41 = document.getElementById('box4')
box41.addEventListener('click', () => {
    box41.classList.add('bg4');
});




function changeGreeting() {
      const name = document.getElementById("nameInput").value;
      const greeting = document.getElementById("greeting");

      if (name.trim() !== "") {
        greeting.textContent = "Hello, " + name;
      } 
    }







