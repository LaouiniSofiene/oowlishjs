import authReducer from './authReducer';
import workReducer from './workReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
    auth: authReducer,
    work: workReducer,
    firestore: firestoreReducer,
    firebase : firebaseReducer
})

export default rootReducer;