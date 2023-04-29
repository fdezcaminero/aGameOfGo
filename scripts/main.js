function menuMobile() {
  const mobileDisplay = document.getElementById('mobileDisplay');
  const mobileMenu = document.getElementById('mobileMenu');

  mobileDisplay.classList.toggle('dispNone1');
  mobileMenu.classList.toggle('dispNone1');
}

const Speakers = [{
  picture: {
    imgSrc: 'resources/gennanInseki.jpeg',
    imgAlt: 'Gennan Inseki',
  },
  name: 'Gennan Inseki',
  title: 'Head of the Inoue House',
  bio: 'One of the Four Sages of Go',
},
{
  picture: {
    imgSrc: 'resources/noamChomsky.jpg',
    imgAlt: 'Noam Chomsky',
  },
  name: 'Noam Chomsky',
  title: 'MIT Linguist',
  bio: 'World-acclaimed linguist - celebrated for his ideas about Universal Grammar and generative grammar, among other things',
},
{
  picture: {
    imgSrc: 'resources/Hegel.jpg',
    imgAlt: 'Hegel',
  },
  name: 'G.W.F. Hegel',
  title: 'Philosopher',
  bio: 'Very famous philosopher (celebrated for being the most difficult philosopher to understand)',
},
{
  picture: {
    imgSrc: 'resources/honinboDosaku.jpg',
    imgAlt: 'Honinbo Dosaku',
  },
  name: 'Honinbo Dosaku',
  title: '9 Dan Go Player',
  bio: 'World class Japanese Go player',
},
{
  picture: {
    imgSrc: 'resources/yasunariKawabata.jpg',
    imgAlt: 'Yasunari Kawabata',
  },
  name: 'Yasunari Kawabata',
  title: 'Writer',
  bio: 'Nobel prize winning Japanese writer, author of The Master of Go',
},
{
  picture: {
    imgSrc: 'resources/matsuoBasho.jpg',
    imgAlt: 'Matsuo Basho',
  },
  name: 'Matsuo Basho',
  title: 'Poet',
  bio: 'Japense Poet from the 17th Century',
},
];

function loadHTML() {
  const superHTML = `
  <h3 class="h3Style1">Guest Speakers</h3>

  <div class="redbar3"></div>
  
  <section class="gridSpeakers">
    <div class="flexSpeakers">
      <div class="pRelative">
        <img class="checkerpattern" src="resources/checkerpattern.svg">
        <img id="projectImage1" class="imgSize">
      </div>
      <div>
        <p id="speaker1" class="LatoBold speaker">Gennan Inseki</p>
        <p id="title1" class="redText1">Head of the Inoue House</p>
        <img class="horizontalLine" src="resources/horizontalrule.svg" alt="Horizontal Line">
        <p id="bio1"></p>
      </div>
    </div>

    <div class="flexSpeakers">
      <div class="pRelative">
        <img class="checkerpattern" src="resources/checkerpattern.svg">
        <img id="projectImage2" class="imgSize">
      </div>
      <div>
        <p id="speaker2" class="LatoBold speaker">Noam Chomsky</p>
        <p id="title2" class="redText1">MIT Linguist</p>
        <img class="horizontalLine" src="resources/horizontalrule.svg" alt="Horizontal Line">
        <p id="bio2"></p>
      </div>
    </div>

    <div class="bottomSpeakers">
      <div class="pRelative">
        <img class="checkerpattern" src="resources/checkerpattern.svg">
        <img id="projectImage3" class="imgSize">
      </div>
      <div>
        <p id="speaker3" class="LatoBold speaker">G.W.F. Hegel</p>
        <p id="title3" class="redText1">Philosopher</p>
        <img class="horizontalLine" src="resources/horizontalrule.svg" alt="Horizontal Line">
        <p id="bio3"></p>
      </div>
    </div>

    <div class="bottomSpeakers">
      <div class="pRelative">
        <img class="checkerpattern" src="resources/checkerpattern.svg">
        <img id="projectImage4" class="imgSize">
      </div>
      <div>
        <p id="speaker4" class="LatoBold speaker">Honinbo Dosaku</p>
        <p id="title4" class="redText1">9 Dan Go Player</p>
        <img class="horizontalLine" src="resources/horizontalrule.svg" alt="Horizontal Line">
        <p id="bio4"></p>
      </div>
    </div>

    <div class="bottomSpeakers">
      <div class="pRelative">
        <img class="checkerpattern" src="resources/checkerpattern.svg">
        <img id="projectImage5" class="imgSize">
      </div>
      <div>
        <p id="speaker5" class="LatoBold speaker">Yasunari Kawabata</p>
        <p id="title5" class="redText1">Writer</p>
        <img class="horizontalLine" src="resources/horizontalrule.svg" alt="Horizontal Line">
        <p id="bio5"></p>
      </div>
    </div>

    <div class="bottomSpeakers">
      <div class="pRelative">
        <img class="checkerpattern" src="resources/checkerpattern.svg">
        <img id="projectImage6" class="imgSize">
      </div>
      <div>
        <p id="speaker6" class="LatoBold speaker">Matsuo Basho</p>
        <p id="title6" class="redText1">Poet</p>
        <img class="horizontalLine" src="resources/horizontalrule.svg" alt="Horizontal Line">
        <p id="bio6"></p>
      </div>
    </div>
  </section>
  `;

  document.querySelector('.speakersSection').innerHTML = superHTML;
}

function loadSpeakers() {
  const num = Speakers.length;
  for (let i = 1; i <= num; i += 1) {
    const BigImg = `projectImage${i}`;
    const BigName = `speaker${i}`;
    const BigTitle = `title${i}`;
    const BigBio = `bio${i}`;

    document.getElementById(BigName).innerHTML = Speakers[i - 1].name;
    document.getElementById(BigTitle).innerHTML = Speakers[i - 1].title;
    document.getElementById(BigBio).innerHTML = Speakers[i - 1].bio;
    document.getElementById(BigImg).src = Speakers[i - 1].picture.imgSrc;
    document.getElementById(BigImg).alt = Speakers[i - 1].picture.imgAlt;
  }
}

window.addEventListener('load', loadHTML);
window.addEventListener('load', loadSpeakers);

document.getElementById('toolbar').addEventListener('click', menuMobile);
document.getElementById('xButton').addEventListener('click', menuMobile);
