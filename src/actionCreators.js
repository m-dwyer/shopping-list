export const ADD_ITEM = 'ADD_ITEM';
export const DEL_ITEM = 'DEL_ITEM';

const addItem = (item) => {
  return {
    type: ADD_ITEM,
    item: item
  };
};

const delItem = (key) => {
  return {
    type: DEL_ITEM,
    key: key
  };
};

export {addItem, delItem};