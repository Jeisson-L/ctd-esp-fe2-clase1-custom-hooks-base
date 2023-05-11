import { useContext } from 'react';
import { LenguageContext } from 'contexts/languageContext';


const LanguageComponent = () => {

  const lenguageContext = useContext(LenguageContext);

  return (
    <div className={'language'}>
      <div
        onClick={() => lenguageContext?.setLanguage('SPANISH')}
        className={lenguageContext?.language === 'SPANISH' ? 'language-button active' : 'language-button'}>
        {lenguageContext?.t('language.spanish')}
      </div>
      <button
        onClick={() => lenguageContext?.setLanguage('ENGLISH')}
        className={lenguageContext?.language === 'ENGLISH' ? 'language-button active' : 'language-button'}>
        {lenguageContext?.t('language.english')}
      </button>
      <button
        onClick={() => lenguageContext?.setLanguage('PORTUGUESE')}
        className={lenguageContext?.language === 'PORTUGUESE' ? 'language-button active' : 'language-button'}>
        {lenguageContext?.t('language.portuguese')}
      </button>
    </div>
  );
};
export default LanguageComponent;
