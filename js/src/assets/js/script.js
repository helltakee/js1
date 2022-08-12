//Бургер меню
let burgerBtn = document.getElementById('burgerBtn');
let menu1 = document.getElementById('menu1');
burgerBtn.addEventListener('click', function openMenu(){
  burgerBtn.classList.toggle('active');
  menu1.classList.toggle('active');
})

//Аккордеон
document.querySelectorAll('accordion-item__trigger').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode; 

    parentNode.classList.toggle('accordion-item--active')
  })
)

//Форма модалка
var modal = document.getElementById('id01');

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}