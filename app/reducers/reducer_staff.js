import _ from 'lodash';

import { STAFF } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case STAFF:
      return [
        {
          name: 'John Doe',
          number: '520-123-4569',
          ext: '1234',
          title: 'Senior Goober',
          picture: './goober.img'
        },
        {
          name: 'Alison Brie',
          number: '456-987-1598',
          ext: '7896',
          title: 'QT Pi',
          picture: './AlisonBrie.img'
        },
        {
          name: 'Annie Edison',
          number: '456-789-1238',
          ext: '1597',
          title: 'Totes Adorbs',
          picture: './AB.img'
        }
      ]
    default:
      return state;
  }
}
