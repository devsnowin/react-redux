import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { store } from './app/store';

import Layout from './components/layout';
import About from './pages/about';
import CartPage from './pages/cart';
import Home from './pages/home';
import NotFound from './pages/notfound';

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Provider>
    </HashRouter>
  );
}
export default App;
