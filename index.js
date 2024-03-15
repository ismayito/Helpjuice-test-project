const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('#menu-section');
const menuItems = document.querySelectorAll('.menu-item');
const mainContent = document.querySelector('.main');
const intro = document.querySelector('.intro');
const copyRight = document.querySelector('.copy-right');

// functionality for menu button display navigation menu when clicked
menuBtn.addEventListener('click', () => {
  menu.classList.remove('hidden');
  closeBtn.classList.remove('hidden');
  menuBtn.classList.add('hidden');
  menuBtn.classList.add('absolute');
  mainContent.classList.add('hidden');
  intro.classList.add('hidden');
  copyRight.classList.add('hidden');
});

// functionality for menu button display navigation menu when clicked
closeBtn.addEventListener('click', () => {
  menu.classList.add('hidden');
  closeBtn.classList.add('hidden');
  menuBtn.classList.remove('hidden');
  menuBtn.classList.remove('absolute');
  mainContent.classList.remove('hidden');
  intro.classList.remove('hidden');
  copyRight.classList.remove('hidden');
});

// functionality for menu button display navigation menu when clicked
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menu.classList.add('hidden');
    closeBtn.classList.add('hidden');
    menuBtn.classList.remove('hidden');
    menuBtn.classList.remove('absolute');
    mainContent.classList.remove('hidden');
    intro.classList.remove('hidden');
  });
});

// function to dynamically render mobile menu

function renderMobileMenu() {
  const menu = document.querySelector('#menu-section');
  const mobileMenuContent = `
   <nav class="flex justify-start flex-col border-b-2 gap-3 border-gray pb-3" title="navigation-menu">
          <ul
            class="flex flex-col text-start justify-start gap-6 text-gray-500 text-small"
          >
            <ul class="menu-item mt-4 pl-2">
              <li>
              <a href="#" class=" text-gray-900 active:text-black-900 underline "
                >Home</a
              >
            </li>
            <li class="menu-item mt-5"><a href="#">Features</a></li>
            <li class="menu-item mt-5" ><a href="#">About</a></li>
            <li class="menu-item mt-5" ><a href="#">Help Center &amp; Community</a></li>
            <li class="menu-item mt-5" ><a href="#" class="text-gray-500 pb-2">Log in</a></li>
            <li></li>
          </ul>
        </nav>
        <li class=" w-1/2 mx-auto flex-wrap flex justify-center mt-3 items-center text-center min-w-content">
            <a href="#" class="menu-item btn group">
              <img
                src="./images//assets//chrome-icon.svg"
                alt="chrome-log"
                class="w-4 h-4"
              />
              <p class="text-white text-sm">Install wizardshot</p>
            </a>
          </li>
          <p class="font-madimi  text-sm text-center font-medium">100% free, forever 🤑</p>
  `;

  menu.innerHTML = mobileMenuContent;
}
renderMobileMenu();
