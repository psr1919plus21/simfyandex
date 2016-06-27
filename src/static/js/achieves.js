const achievesList = document.querySelector('.profile-achieves');
const mockAchievesRecievedFromServer = [
  {
    'type': 'cat',
    'food': 'omnivorous'
  },
  {
    'type': 'owl',
    'food': 'predator'
  },
  {
    'type': 'wolf',
    'food': 'predator'
  },
  {
    'type': 'bear',
    'food': 'omnivorous'
  },
  {
    'type': 'rabit',
    'food': 'herbivores'
  },
  {
    'type': 'fish',
    'food': 'predator'
  },
  {
    'type': 'dog',
    'food': 'omnivorous'
  },
  {
    'type': 'bull',
    'food': 'herbivores'
  },
  {
    'type': 'horse',
    'food': 'herbivores'
  }
]

addAchieves(mockAchievesRecievedFromServer);

function addAchieves(data) {
  console.log(data);
  data.forEach((achieve) => {
    let newAchieve = document.createElement('li');
    newAchieve.classList.add('profile-achieves_item');
    newAchieve.classList.add('profile-achieves_item__' + achieve.type);
    newAchieve.classList.add('profile-achieves_item__' + achieve.food);
    achievesList.appendChild(newAchieve);
  });

}












