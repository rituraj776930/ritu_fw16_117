// create store here
import {legacy_createStore as createStore} from 'redux'
import { reducer } from './reducer';


export const store = createStore(reducer);



// do not remove this code, its for testing purpose
if (window.Cypress) {
  window.store = store;
}


