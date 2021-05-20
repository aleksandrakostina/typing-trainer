import './App.css';
import StoreProvider from './StoreProvider';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="wrapper">
      <h2>Тренажер слепой печати</h2>
      <StoreProvider>
        <HomePage />
      </StoreProvider>
    </div>
  );
}

export default App;
