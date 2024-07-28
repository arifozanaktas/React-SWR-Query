import './App.css';
import { Route, Routes } from 'react-router-dom';
import ListQuery from './components/ListQuery';
import ListSWR from './components/ListSWR';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<ListQuery />} />  
    <Route path="/ListSWR" element={<ListSWR/>} />
    </Routes>
    </>
  );
}

export default App;
