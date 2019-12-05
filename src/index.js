import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import App from './app'
import './index.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <App />
        </div>
      </ConnectedRouter>
  </Provider>,
  target
)

store.subscribe(() => {
  const state = store.getState();
  const persist_data = JSON.stringify(state.todoPage);
  localStorage.setItem('todoPage', persist_data)
});
