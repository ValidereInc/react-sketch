/*eslint no-unused-vars: 0*/

const fabric = require('fabric').fabric;

export const addToValue = (value, objects) => {
    return {
        ...value,
        objects: [
            ...value.objects,
            ...objects
        ]
    };
}

export const createLine = (coords, opts = {}) => {
    const defaults =  {
      selectable: false,
      evented: false
    };

    return new fabric.Line(coords, Object.assign(defaults, opts));
  };

export default {
    addToValue,
    createLine
}