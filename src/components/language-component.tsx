import React, { memo } from 'react';
import i18next from 'i18next';
import en from '../translations/en.json';
import es from '../translations/es.json';
import ja from '../translations/ja.json';
import IconComponent from './icon-component';
import { initReactI18next } from 'react-i18next';

interface IProps {
  changeLanguageCallBack: (language: string) => void
}

i18next.use(initReactI18next).init({
  lng: 'en', // if you're using a language detector, do not define the lng option
  debug: !!process.env.NODE_ENV,
  fallbackLng: 'en',
  ns: ['summary', 'technologies', 'projects'],
  resources: {
    en, es, ja
  },
  interpolation: {
    escapeValue: false // react already safes from xss
  }
});

const LanguageComponent = memo((props: IProps) => { 
  const changeLanguage = (event: any) => {
    i18next.changeLanguage(event.target.value).then(() => {props.changeLanguageCallBack(i18next.language)});
  }

  return (
    <form className='pure-form pure-form-aligned' style={{ padding: '0.5em 1em'}}>
      <div className='pure-control-group' style={{marginBottom: 0}}>
        <label htmlFor='language-selector'>
          <IconComponent icon='language'/>
        </label>
        <select name='language' onChange={changeLanguage} id='language-selector'>
          <option value='en'>English</option>
          <option value='ja'>日本語</option>
          <option value='es'>Espaniol</option>
        </select>
      </div>
    </form>
  );
});

export default LanguageComponent;