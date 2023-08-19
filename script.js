const password = document.getElementById('password');
const slash = document.getElementById('eye');
const show = document.getElementById('eyed');


// show and hide password 
slash.addEventListener("click", function () {
    if (password.type === "password") {
      password.type = "text";
      show.classList.remove('d-none');
      slash.classList.add('d-none');
    }
  });

show.addEventListener("click", function () {
    if (password.type === "text") {
      password.type = "password";
      show.classList.add('d-none');
      slash.classList.remove('d-none');
    }
  });


const explore = document.getElementById('explore');
const dropdown = document.getElementById('dropdown');
const dropdown1 = document.getElementById('dropdown1');


// show and hide explore dropdown 
explore.addEventListener("mouseenter", function () {
      dropdown.classList.add('show');
  });
explore.addEventListener("mouseleave", function () {
        dropdown.classList.remove('show');
});
dropdown.addEventListener("mouseenter", function () {
    dropdown.classList.add('show');
});
dropdown.addEventListener("mouseleave", function () {
    dropdown.classList.remove('show');
});

const darkmod = document.getElementById('dark');
const darkmod1 = document.getElementById('darkoff');
const light1 = document.getElementById('light');
const light = document.getElementById('lightoff');
const textchange = document.querySelectorAll('.text-muted');
const body = document.getElementById('body');
const imgl = document.getElementById('imgl');
const imgld = document.getElementById('imgld');
const img = document.getElementById('img');
const imgd = document.getElementById('imgd');
const img1 = document.getElementById('img1');
const imgd1 = document.getElementById('imgd1');
const login = document.getElementById('login');
const login1 = document.getElementById('login1');
const search = document.getElementById('search');
const search1 = document.getElementById('search1');
const mail = document.getElementById('mail');
const email = document.getElementById('inp');
const passbg = document.getElementById('passbg');
const offcanvas = document.getElementById('offcanvasExample');
const navbar = document.getElementById('navbar');
const back = document.getElementById('back');

// toggle light and dark mode -------------------------------------------------------------------------------------
darkmod1.addEventListener ('click', darkmode);
darkmod.addEventListener ('click', darkmode);
function darkmode (d){
    d.preventDefault();
    if(light1.classList.contains('d-none')){
    
        body.classList.add('bg-dark', 'text-white', 'transition', 'ease-in-out', 'delay-300');

        search1.classList.replace('bg-white','bg-dark');
        
        navbar.classList.add('navbar-dark');

        textchange.forEach(element => {
            element.classList.remove("text-muted");
            element.classList.add("text-white");
          });
          
          const elementstohide = [
            darkmod, darkmod1, imgl, img, img1  
          ];
          
          elementstohide.forEach(element => {
            element.classList.add('d-none');
          });

          const elementstodisplay = [
            light1, light, imgld, imgd, imgd1  
          ];

          elementstodisplay.forEach(element => {
            element.classList.remove('d-none');
          });

          const elementsToAddDark = [
            dropdown, dropdown1, login, login1, search, search1, password, passbg, email, mail, offcanvas
          ];
          
          elementsToAddDark.forEach(element => {
            element.classList.add('bg-dark', 'border-secondary');
          });
      
}} 

// toggle light and dark mode -------------------------------------------------------------------------------------
light.addEventListener ('click', lightmode);
light1.addEventListener ('click', lightmode);
function lightmode (l){
    l.preventDefault();
    if(darkmod.classList.contains('d-none')){
    
        body.classList.remove('bg-dark', 'text-white', 'transition', 'ease-in-out', 'delay-300');

        search1.classList.replace('bg-dark','bg-white');
        
        navbar.classList.remove('navbar-dark');

        textchange.forEach(element => {
            element.classList.add("text-muted");
            element.classList.remove("text-white");
          });
          
          const elementstohide = [
            darkmod, darkmod1, imgl, img, img1  
          ];
          
          elementstohide.forEach(element => {
            element.classList.remove('d-none');
          });

          const elementstodisplay = [
            light1, light, imgld, imgd, imgd1  
          ];

          elementstodisplay.forEach(element => {
            element.classList.add('d-none');
          });

          const elementsToAddDark = [
            dropdown, dropdown1, login, login1, search, search1, password, passbg, email, mail, offcanvas
          ];
          
          elementsToAddDark.forEach(element => {
            element.classList.remove('bg-dark', 'border-secondary');
          });
      
}} 