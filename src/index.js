import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { getFirebase, createFirestoreInstance, ReactReduxFirebaseProvider } from 'react-redux-firebase'; 
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
      reduxFirestore(firebase, fbConfig)
    )
  );

  const rrfConfig = {
    userProfile: 'Users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }

  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
  };

  function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div>splash screen...</div>;
    return children
  }



ReactDOM.render(<Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <AuthIsLoaded>
                            <App />
          </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
        </Provider>, document.getElementById('root'));

serviceWorker.unregister();
