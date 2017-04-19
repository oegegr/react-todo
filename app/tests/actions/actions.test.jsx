var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
    it('Should generate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        };
        var result = actions.setSearchText(action.searchText);
        expect(result).toEqual(action);
    });
    it('Should generate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            text: 'Things to do'
        }
        var res = actions.addTodo(action.text);
        expect(res).toEqual(action);
    });
});