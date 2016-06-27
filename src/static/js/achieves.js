import {addAchieves} from './addAchieves';

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

addAchieves(achievesList, mockAchievesRecievedFromServer);













