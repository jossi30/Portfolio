const projectObj = {
  project1: {
    image: {
      imageUrl: './img/Snapshoot Portfolio',
      altText: 'project image',
    },
    name: 'Multi-Post StoriesGain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveUrl: 'See Project',
    sourceUrl: '#',
    sourceCode: '#',
  },

  project2: {
    image: {
      imageUrl: './img/Snapshoot Portfolio',
      altText: 'project image',
    },
    name: 'Multi-Post StoriesGain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveUrl: 'See Project',
    sourceUrl: '#',
    sourceCode: '#',

  },

  project3: {
    image: {
      imageUrl: './img/Snapshoot Portfolio',
      altText: 'project image',
    },
    name: 'Multi-Post StoriesGain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveUrl: 'See Project',
    sourceUrl: '#',
    sourceCode: '#',
  },

  project4: {
    image: {
      imageUrl: './img/Snapshoot Portfolio',
      altText: 'project image',
    },
    name: 'Multi-Post StoriesGain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveUrl: 'See Project',
    sourceUrl: '#',
    sourceCode: '#',
  },

  project5: {
    image: {
      imageUrl: './img/Snapshoot Portfolio',
      altText: 'project image',
    },
    name: 'Multi-Post StoriesGain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveUrl: 'See Project',
    sourceUrl: '#',
    sourceCode: '#',
  },
  project6: {
    image: {
      imageUrl: './img/Snapshoot Portfolio',
      altText: 'project image',
    },
    name: 'Multi-Post StoriesGain+Glory',
    title: 'Keeping track of hundreds of components',
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    liveUrl: 'See Project',
    sourceUrl: '#',
    sourceCode: '#',
  },
};

const projects = [
  projectObj.project1,
  projectObj.project2,
  projectObj.project3,
  projectObj.project4,
  projectObj.project5,
  projectObj.project6,
];

function createPopup(cardNumber) {
  const modalCard = document.querySelector('#modal');
  modalCard.classList.toggle('invisible');
  const modaltitle = document.querySelector('.modal-heading');
  const modallist = document.querySelector('.modal-list');
  modallist.innerHTML = '';
  const modalImg = document.querySelector('.img1');
  const modalDesc = document.querySelector('.modal-p');
  const buttonLive = document.querySelector('.f-icon-1');

  modaltitle.innerHTML = projects[cardNumber].title;

  for (let i = 0; i < projects[cardNumber].technologies.length; i += 1) {
    const list = document.createElement('li');
    list.textContent = projects[cardNumber].technologies[i];
    modallist.appendChild(list);
  }
  buttonLive.setAttribute(
    'onclick',
    `windows.open('${projects[cardNumber].sourceUrl}', '_blank');`,
  );
  buttonLive.setAttribute(
    'onclick',
    `windows.open('${projects[cardNumber].sourceUrl}', '_blank');`,
  );
  modalDesc.innerHTML = projects[cardNumber].description;

  modalImg.setAttribute(
    'src',
    `${projects[cardNumber].image.imageUrl + (cardNumber + 1)}.png`,
  );
}

function toggle() {
  const card = document.querySelector('#modal');
  card.classList.toggle('invisible');
}

createPopup(1);
toggle();
