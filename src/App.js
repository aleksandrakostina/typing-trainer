import './App.css';
import Indicators from './components/Indicators/Indicators';
import InputForm from './components/inputForm/InputForm';
import TextBlockContainer from './components/TextBlock/TextBlockContainer';
import StoreProvider from './StoreProvider';

function App() {
  return (
    <div className="wrapper">
      <StoreProvider>
        <InputForm />
        <TextBlockContainer />
        <Indicators />
      </StoreProvider>
    </div>
  );
}

export default App;
