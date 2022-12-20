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

function createPopup(project){
  let popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');

  let thumbnail = document.createElement('img');
  thumbnail.classList.add('proj-thumbnail');
  thumbnail.src=projectObj[project].image.imageUrl;
  thumbnail.src=projectObj[project].image.altText;

  let projHeader = document.createElement('h2');
  projHeader.classList.add('proj-header');
  projHeader.textContent=projectObj[project].title;

  let techContainer = document.createElement('ul');
  techContainer.style.display='flex';
  techContainer.style.flexDirection='column'
  techContainer.classList.add('tech-container');
  projectObj[project].technologies.array.forEach(tech => {
    let techItem = document.createElement('li');
    techItem.textContent=tech;
    techItem.classList.add('texh-item');
    techContainer.appendChild.techItem;
  });

  let projDescription = document.createElement('p');
  projDescription.classList.add('proj-description');
  projDescription.textContent=projectObj[project].description;

  let liveButton = document.createElement('button');
  liveButton.textContent='See Live';
  liveButton.classList.add('live-button');
  liveButton.style.float='left';

  let srcButton = document.createElement('button');
  srcButton.textContent='See Source';
  srcButton.classList.add('src-button');
  srcButton.style.float='right';

  popupContainer.appendChild(thumbnail);
  popupContainer.appendChild(projHeader);
  popupContainer.appendChild(techContainer);
  popupContainer.appendChild(projDescription);
  popupContainer.appendChild(liveButton);
  popupContainer.appendChild(srcButton);

  let workSection = document.querySelector('.work');
  let welcomeSection = document.querySelector('.welcome');
  welcomeSection.insertBefore(popupContainer,workSection);

}