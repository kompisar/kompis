import sample from 'lodash/sample';
import firstNames from './data/firstNames';
import lastNames from './data/lastNames';
import random from 'lodash/random';

export const userFirstName = sample(firstNames);
export const userLastName = sample(lastNames);

export const monthlyIncome = random(15, 45) * 100;

export const internetSpend = (random(3, 7) * 10) + 9;
export const rentSpend = random(25, 65) * 10;

export const essentialSpend = (internetSpend + rentSpend);
export const savingSpend = monthlyIncome * random(0.02, 0.1, true);
export const nonEssentialSpend = (monthlyIncome - savingSpend - essentialSpend) * random(0.2, 0.7, true);

