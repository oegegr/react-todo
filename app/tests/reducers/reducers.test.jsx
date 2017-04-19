var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
   describe('searchTextReducer', () => {
      it('Should set searchText', () => {
         var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Dog'
         };
         var res = reducers.searchTextReducer(df(''), df(action));
         expect(res).toEqual(action.searchText);
      });
   });
})