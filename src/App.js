import { Routes, Route } from 'react-router-dom';

import 'styles/App.scss';
import Layout from 'components/Layout';
import Home from 'routes/Home';
import Calculator from 'routes/Calculator';
import Quotes from 'routes/Quotes';
import NotMatch from 'routes/NotMatch';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="*" element={<NotMatch />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
