import sample from 'lodash/sample';
import firstNames from './data/firstNames';
import lastNames from './data/lastNames';

export const userFirstName = sample(firstNames);
export const userLastName = sample(lastNames);
