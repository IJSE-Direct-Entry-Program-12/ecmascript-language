/* import directive, import declaration - Static Import */
// import {myConst2} from './index8.js';

console.log("Module started");
// Import Statement - Dynamic Import
const {myConst2} = await import('./index8.js');

console.log(myConst2);

console.log("Module is about to exit");
