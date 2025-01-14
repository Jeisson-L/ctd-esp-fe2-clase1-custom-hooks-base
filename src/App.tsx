import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Navbar } from 'features/navigation';
import Page3 from 'pages/Page3';
import Page2 from 'pages/Page2';
import { store } from 'store/store';
import Page1 from 'pages/Page1';
import { LanguageComponent } from 'features/language';
import { TrackingProvider } from 'features/tracking/tracking.context';
import { LenguageProvider } from 'features/language/contexts/languageContext';

const App = () => {
  return (
      <Provider store={store}>
        <TrackingProvider>
          <LenguageProvider >
            <LanguageComponent />
            <Navbar/>
            <Routes>
              <Route path="/" element={<Page3 />} />
              <Route path="/location/:id" element={<Page2 />} />
              <Route path="/following" element={<Page1 />} />
            </Routes>
          </LenguageProvider>
        </TrackingProvider>
      </Provider>
  );
}

export default App;
