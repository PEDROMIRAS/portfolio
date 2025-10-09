//===== Social Contact =====//
// Email
const emailBtn = document.getElementById('email');
function openEmail(){
    window.open(" ","_blank");
};
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