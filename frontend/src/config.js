import sample from 'lodash/sample';
import kebabCase from 'lodash/kebabCase';
import deburr from 'lodash/deburr';
import firstNames from './data/firstNames';
import lastNames from './data/lastNames';
import random from 'lodash/random';
import eatingOutGif from './img/eatingout.gif';
import partyGif from './img/pary.gif';
import movieGif from './img/mvoei.gif';
import shoppingGif from './img/shorpy.gif';

export const userFirstName = sample(firstNames);
export const userLastName = sample(lastNames);

export const monthlyIncome = random(15, 45) * 100;

export const spends = [
  {
    type: 'essential',
    name: 'Internet & Phone',
    value: (random(3, 7) * 10) + 9,
  },
  {
    type: 'essential',
    name: 'Rent',
    value: random(25, 65) * 10,
  },
  {
    type: 'nonessential',
    name: 'Eating out',
    value: 69,
    image: eatingOutGif,
  },
  {
    type: 'nonessential',
    name: 'Partying',
    value: random(15, 25) * 10,
    image: partyGif,
  },
  {
    type: 'nonessential',
    name: 'Movies',
    value: random(0, 5) * 10.99,
    image: movieGif,
  },
  {
    type: 'nonessential',
    name: 'Shopping',
    value: random(15, 25) * 10,
    image: shoppingGif,
  },
  {
    type: 'saving',
    name: 'Money Tucked Under A Pillow',
    value: monthlyIncome * random(0.02, 0.1, true),
  },
].filter((spend) => spend.value > 0);

spends.forEach((spend) => {
  if (!spend.id) {
    // eslint-disable-next-line no-param-reassign
    spend.id = kebabCase(deburr(spend.name));
  }
});
