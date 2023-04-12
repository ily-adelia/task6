let btn = document.querySelector('.button')
let sun = document.querySelector('.sun')
let sky = document.querySelector('.sky')

btn.addEventListener('click', function()
{
if(btn.innerHTML == 'включить луну'){
    sky.style.backgroundImage = 'URL(https://gamerwall.pro/uploads/posts/2022-02/1645553563_1-gamerwall-pro-p-mesyats-i-zvezdi-krasivie-oboi-1.jpg)'
    sun.style.backgroundColor = '#c5c28d'
    btn.innerHTML = 'Включить солнце'

} else{
    sky.style.backgroundImage = 'linear-gradient(to bottom, #65a9f0, #ebb2b1)',
    btn.innerHTML = 'включить луну',
    sun.style.backgroundColor = '#f5e555';
}
})