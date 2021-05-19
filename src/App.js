import './App.css';
import Indicators from './components/Indicators/Indicators';
import InputForm from './components/inputForm/InputForm';
import ModalContainer from './components/Modal/ModalContainer';
import TextBlockContainer from './components/TextBlock/TextBlockContainer';
import StoreProvider from './StoreProvider';

function App() {
  return (
    <div className="wrapper">
      <h2>Тренажер слепой печати</h2>
      <StoreProvider>
        <InputForm />
        <TextBlockContainer />
        <Indicators />
        <ModalContainer />
      </StoreProvider>
    </div>
  );
}

export default App;
