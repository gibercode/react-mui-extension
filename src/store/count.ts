import { isExtensionContext } from '../utils';

let useCountStore: any;

if (isExtensionContext()) useCountStore = require('./storeExtension').useCountStore;
else useCountStore = require('./storeWeb').useCountStore;

export { useCountStore };
