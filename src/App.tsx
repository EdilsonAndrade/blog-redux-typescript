import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './styles/global';
import Blog from './pages/Blog';
import Header from './components/Header';
import Banner from './components/Banner';
import UserBar from './components/UserBar';

const App: React.FC = () => (
  <Provider store={store}>
    <Header />
    <Banner />
    <UserBar />
    <Blog />
    <GlobalStyle />
  </Provider>
);

export default App;
