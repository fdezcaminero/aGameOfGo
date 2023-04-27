function menuMobile() {
  const mobileDisplay = document.getElementById('mobileDisplay');
  const mobileMenu = document.getElementById('mobileMenu');
  
  mobileDisplay.classList.toggle('dispNone1');
  mobileMenu.classList.toggle('dispNone1');
}

const Speakers = [{
  picture: '',
  name: 'Gennan Inseki',
  title: 'Head of the Inoue House',
  bio: '',
},
{
  picture: '',
  name: 'Noam Chomsky',
  title: 'MIT Linguist',
  bio: '',
},
{
  picture: '',
  name: 'G.W.F. Hegel',
  title: 'Philosopher',
  bio: '',
},
{
  picture: '',
  name: 'Honinbo Dosaku',
  title: '9 Dan Go Player',
  bio: '',
},
{
  picture: '',
  name: 'Yasunari Kawabata',
  title: 'Writer',
  bio: '',
},
{
  picture: '',
  name: 'Matsuo Basho',
  title: 'Poet',
  bio: '',
},
]

function loadHTML() {
  const superHTML = `
  <h3 class="h3Style1">Guest Speakers</h3>
  
  <div>
    <img>
    <div>
      <p>Gennan Inseki</p>
      <p class="redText1">Head of the Inoue House</p>
      <img class="horizontalLine" src="resources/horizontalrule.svg" alt="Horizontal Line">
      <p></p>
    </div>
  </div>

  <div>
    <img>
    <div>
      <p>Noam Chomsky</p>
      <p class="redText1">MIT Linguist</p>
      <img class="horizontalLine" src="resources/horizontalrule.svg" alt="Horizontal Line">
      <p></p>
    </div>
  </div>

  <section class="bottomSpeakers">
    <div>
      <img>
      <div>
        <p>G.W.F. Hegel</p>
        <p class="redText1">Philosopher</p>
        <img class="horizontalLine" src="resources/horizontalrule.svg" alt="Horizontal Line">
        <p></p>
      </div>
    </div>

    <div>
      <img>
      <div>
        <p>Honinbo Dosaku</p>
        <p class="redText1">9 Dan Go Player</p>
        <img class="horizontalLine" src="resources/horizontalrule.svg" alt="Horizontal Line">
        <p></p>
      </div>
    </div>

    <div>
      <img>
      <div>
        <p>Yasunari Kawabata</p>
        <p class="redText1">Writer</p>
        <img class="horizontalLine" src="resources/horizontalrule.svg" alt="Horizontal Line">
        <p></p>
      </div>
    </div>

    <div>
      <img>
      <div>
        <p>Matsuo Basho</p>
        <p class="redText1">Poet</p>
        <img class="horizontalLine" src="resources/horizontalrule.svg" alt="Horizontal Line">
        <p></p>
      </div>
    </div>
  `;

  document.querySelector('.speakersSection').innerHTML = superHTML;
}

function loadProjects() {
  
}

window.addEventListener('load', loadHTML);

document.getElementById('toolbar').addEventListener('click', menuMobile);
document.getElementById('xButton').addEventListener('click', menuMobile);
