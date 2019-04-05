// check if value is astring
import {Internal} from './enums';
import {ComponentElement, InternalComponentInstance} from '../types';

export const isString = (i) => typeof i === 'string';

// check if value is a number
export const isNumber = (i) => typeof i === 'number';

// check if value is an array
export const isArray = (i) => typeof i === 'object' && Array.isArray(i);

// check if value is function
export const isFunction = (i) => typeof i === 'function';

// check if value is undefined or null
export const isExist = (i) => i !== undefined && i !== null;

// checks if a value is boolean
export const isBoolean = (i) => typeof i === 'boolean';

// A simple, non secure hash function that turns a string to numbers for faster comparison
// derived from:
// https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
export const fastHash = (s) => {
    let hash = 0;
    if (s.length == 0) {
        return hash;
    }
    for (let i = 0; i < s.length; i++) {
        const char = s.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
};

export const isStateFullComponent = (c: InternalComponentInstance) => c && c.publicInstance && c.publicInstance[Internal.isStateFullComponent];

export const isFunctionalComponent = (c: InternalComponentInstance) => c && c.publicInstance && c.publicInstance[Internal.isFunctionalComponent];

export const isComponent = isStateFullComponent || isFunctionalComponent;
