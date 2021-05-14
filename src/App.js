import './App.css';
import TextBlockContainer from './components/TextBlock/TextBlockContainer';
import StoreProvider from './StoreProvider';

function App() {
  return (
    <div className="wrapper">
      <StoreProvider>
        <TextBlockContainer />
      </StoreProvider>
    </div>
  );
}

export default App;
