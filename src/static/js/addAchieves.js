export function addAchieves(container, data) {
  data.forEach((achieve) => {
    let newAchieve = document.createElement('li');
    newAchieve.classList.add('profile-achieves_item');
    newAchieve.classList.add('profile-achieves_item__' + achieve.type);
    newAchieve.classList.add('profile-achieves_item__' + achieve.food);
    container.appendChild(newAchieve);
  });
};
