"use strict";

// https://github.com/substack/deep-freeze
function deepFreeze (o) {
    Object.freeze(o);
  
    Object.getOwnPropertyNames(o).forEach(function (prop) {
      if (o.hasOwnProperty(prop)
      && o[prop] !== null
      && (typeof o[prop] === "object" || typeof o[prop] === "function")
      && !Object.isFrozen(o[prop])) {
        deepFreeze(o[prop]);
      }
    });
    
    return o;
};


function inspectState(thizState) {
    console.log("####");
    const keys = Object.keys(thizState);
    for (var i = 0; i < keys.length; i++) {
      console.log("K- " + keys[i]);
      const stateElem = thizState[keys[i]];
      console.log(typeof stateElem);
      if (stateElem !== null && typeof stateElem === 'object') {
        console.log("freezing " + keys[i]);
        deepFreeze(stateElem);
      }
    }
  
}
  
export function freezeComponent(thiz) {
    inspectState(thiz.state);
    var origSetState = thiz.setState;
    origSetState = origSetState.bind(thiz);
    thiz.setState = function (obj) {
        console.log("my set state!");
        inspectState(obj);
        origSetState(obj);
    };
}