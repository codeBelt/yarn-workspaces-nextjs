import camelcase from 'lodash.camelcase';
import startcase from 'lodash.startcase';
import kebabcase from 'lodash.kebabcase';

export const titleCase = (str) => startcase(camelcase(str));
export const camelCase = (str) => camelcase(str);
export const pascalCase = (str) => startcase(camelcase(str)).replace(/ /g, '');
export const kebabCase = (str) => kebabcase(str);
