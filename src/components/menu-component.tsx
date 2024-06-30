import { ReactElement, memo } from 'react';
import IconComponent from './icon-component';
import React from 'react';

interface IProps {
  extras?: ReactElement[];
}

const MenuComponent = (props: IProps) => {
  const extras = props.extras;

  // States
  const [isOpen, setIsOpen] = React.useState(false);

  // Actions
  const toggleMenu = () => {setIsOpen(!isOpen);}

  const extrasComponents = () => {
    return extras?.map((element: ReactElement, index: number) => {
      return (
        <li className="pure-menu-item" key={index} style={{flex: 1, display: 'flex', justifyContent: 'end'}}>
            {element}
        </li>
      );
    })
  }

  return (
    <>
      <button className='pure-button open-menu' onClick={toggleMenu}>
        <IconComponent icon='menu'/>
      </button>
      <button className={`veil ${isOpen ? 'open' : ''}`} onClick={toggleMenu}/>
      <nav className={`container pure-menu pure-menu-horizontal ${isOpen ? 'open' : ''}`}>
        <span className="pure-menu-heading">Alexbg</span>
        <ul className="pure-menu-list">
            <li className="pure-menu-item">
                <a href="https://github.com/alexbg" className="pure-menu-link" target='_blank'>
                  Github
                </a>
            </li>
            <li className="pure-menu-item">
                <a href="https://www.linkedin.com/in/alejandro-barata-b15576100" className="pure-menu-link" target='_blank'>
                  Linkedin
                </a>
            </li>
            {extrasComponents()}
        </ul>
      </nav>
    </>
  )
};

export default MenuComponent;