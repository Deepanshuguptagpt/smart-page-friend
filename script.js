document.addEventListener('DOMContentLoaded', function(){
// set year
document.getElementById('year').textContent = new Date().getFullYear();


// mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
toggle && toggle.addEventListener('click', ()=>{
if(nav.style.display === 'flex') nav.style.display = '';
else nav.style.display = 'flex';
});


// simple form handler (no backend) - validate and show success
const form = document.getElementById('demoForm');
form && form.addEventListener('submit', function(e){
e.preventDefault();
const name = document.getElementById('name');
const email = document.getElementById('email');
if(!name.value.trim() || !email.value.trim()){
alert('Please enter name and company email.');
return;
}
// pretend to send
this.querySelector('button[type="submit"]').textContent = 'Sending...';
setTimeout(()=>{
alert('Thanks! Your request has been sent. We\'ll contact you shortly.');
this.reset();
this.querySelector('button[type="submit"]').textContent = 'Send request';
},900);
});


});