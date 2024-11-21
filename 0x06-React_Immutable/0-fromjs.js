import { fromJS } from 'immutable';

export default function getImmutableObject(object) {
  return fromJS(object);
}

const obj = { 
  fear: true, 
  smell: -1033575916.9145899, 
  wall: false, 
  thing: -914767132 
}; 

const immutableObj = getImmutableObject(obj); 
console.log(immutableObj);