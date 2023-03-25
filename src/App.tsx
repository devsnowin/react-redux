import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import About from './pages/about';
import Home from './pages/home';
import NotFound from './pages/notfound';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
export default App;
