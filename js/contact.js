//===== Social Contact =====//
// Email
const emailBtn = document.getElementById('email');
function openEmail() {
    const destinatario = "p.miraspc35@gmail.com"; //mi correo 
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}`;
    window.open(url, "_blank");
}
emailBtn.addEventListener('click', openEmail);
emailBtn.addEventListener('click', openEmail);
//LinkedIn
const linkedInBtn = document.getElementById('linkedIn');
function openLinkedIn(){
    window.open(" ","_blank");
};
linkedInBtn.addEventListener('click', openLinkedIn);
//Discord
const discordBtn = document.getElementById('discord');
function openDiscord(){
    window.open("https://discord.com/users/372295881925591041", "_blank");
}
discordBtn.addEventListener('click', openDiscord);

//Fin contact.js