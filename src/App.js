import logo from './logo.svg';
import './App.css';
import Appbar from './components/Appbar';
import Underbar from './components/Underbar';

export default function App() {
  return (
    <div className="App">
      <Appbar />
      <Underbar />
    </div>
  );
}