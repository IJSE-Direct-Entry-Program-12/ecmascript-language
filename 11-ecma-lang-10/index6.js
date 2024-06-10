import './index7.js'; // Side-effect import
import './index7.js'; // Side-effect import
import './index7.js'; // Side-effect import
import './index7.js'; // Side-effect import

// Namespace import
import * as module from './index7.js';
console.log(module.myConst);

// Named imports
import edf, {myConst, ABC, myConst3, myConst5, y as k, myFun as myMethod, default as Customer} from './index7.js';

// Default imports
import abc from './index7.js';

console.log(myConst, ABC, myConst3);
console.log(k);
new Customer();
new abc();
new edf();
myMethod();

//console.log(myConst);