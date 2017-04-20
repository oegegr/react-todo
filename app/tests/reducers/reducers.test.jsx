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
   describe('todosReducer', () => {
      it('Should add new todo', () => {
         var action = {
            type: 'ADD_TODO',
            text: 'Walk the dog'
         };
         var res =  reducers.todosReducer(df([]), df(action));
         expect(res.length).toEqual(1);
         expect(res[0].text).toEqual(action.text);
      })
      it('Should toggle todo', () => {
         var todos = [{
            id: '123',
            text: 'Something',
            completed: true
         }];
         var action = {
            type: 'TOGGLE_TODO',
            id: '123'
         };
         var res = reducers.todosReducer(df(todos), df(action));
         expect(res[0].completed).toEqual(false);

      });
   })
})