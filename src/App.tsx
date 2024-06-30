import React from 'react';
import LanguageComponent from './components/language-component';
import MenuComponent from './components/menu-component';
import i18next from 'i18next';
import { Trans } from 'react-i18next';


function App() {
  const [language, setLanguage] = React.useState<string>();
  return (
    <>
      <header>
        <MenuComponent extras={[
          <LanguageComponent changeLanguageCallBack={setLanguage}/>
        ]}/>
      </header>
      <main className='container pure-g'>
        <article className='pure-u-5-5'>
          <h1>{i18next.t('title', {ns: 'summary'})}</h1>
          {/* <p>{i18next.t('content', {ns: 'summary'})}</p> */}
          <p><Trans
            i18nKey='content'
            components={{ linkoysho: <a href='https://www.oysho.com/' target='_blank'/>, linksantander: <a href='https://www.santander.com/' target='_blank'/>}}
            ns='summary'
          /></p>
        </article>
        <article className='pure-u-5-5'>
          <h1>{i18next.t('title', {ns: 'technologies'})}</h1>
          <div className='pure-g'>
            <div className='pure-u-12-24'>
              <h2>Frontend</h2>
              <ul>
                <li>Javascript</li>
                <li>css</li>
                <li>sass</li>
                <li>React</li>
                <li>Angular</li>
                <li>Redux</li>
                <li>Jquery</li>
              </ul>
            </div>
            <div className='pure-u-12-24'>
              <h2>Backend</h2>
              <ul>
                <li>PHP</li>
                <li>Java</li>
                <li>Python</li>
                <li>Django</li>
                <li>Yii</li>
                <li>Laravel</li>
              </ul>
            </div>
            <div className='pure-u-12-24'>
            <h2>Database</h2>
              <ul>
                <li>SQL</li>
                <li>NoSQL</li>
                <li>Mongo</li>
                <li>MySql</li>
                <li>Posgresql</li>
              </ul>
            </div>
          </div>
        </article>
        <article className='pure-u-5-5'>
          <h1>{i18next.t('title', {ns: 'projects'})}</h1>
          {/* <p>{i18next.t('content', {ns: 'projects'})}</p> */}
        </article>
      </main>
      <footer>
        <ul className='container'>
          <a href='#' target='_blank'>Changelog</a>
          <li>v0.0.1</li>
        </ul>
      </footer>
    </>
  );
}

export default App;
