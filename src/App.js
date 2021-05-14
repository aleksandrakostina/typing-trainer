import './App.css';
import InputForm from './components/inputForm/InputForm';
import TextBlockContainer from './components/TextBlock/TextBlockContainer';
import StoreProvider from './StoreProvider';

function App() {
  return (
    <div className="wrapper">
      <StoreProvider>
        <InputForm />
        <TextBlockContainer />
      </StoreProvider>
    </div>
  );
}

export default App;
