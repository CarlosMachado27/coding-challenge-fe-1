export const toggle = id => ({
  type: 'TOGGLE',
  id
});

export const add = title => ({
  type: 'ADD',
  title
});

export const filter = value => ({
  type: 'FILTER',
  value

});
