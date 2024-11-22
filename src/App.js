import './App.css';
import BlogDetail from './components/BlogDetail';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Home />} />
        <Route path="/blog-detail/:title" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
