import authReducer from '../../reducers/auth';

test('test of login reducer, setting uid', () => {
  const action = {
    type: 'LOGIN',
    uid: 'foobar'
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test('test of logout reducer, clearing uid', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({uid: 'foo'}, action);
  expect(state).toEqual({});
});