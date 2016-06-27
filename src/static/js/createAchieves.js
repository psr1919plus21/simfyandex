export function createAchieves(container, data) {
  let achievesMaxCount = 100;

  if (data.length > achievesMaxCount) {
    throw new Error('Sorry, count of achieves exceed available value');
  }

  data.forEach((achieve) => {
    let newAchieve = document.createElement('li');
    newAchieve.classList.add('profile-achieves_item');
    newAchieve.classList.add('profile-achieves_item__' + achieve.type);
    newAchieve.classList.add('profile-achieves_item__' + achieve.food);
    container.appendChild(newAchieve);
  });
};
