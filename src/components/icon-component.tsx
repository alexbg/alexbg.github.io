import { memo } from 'react';

interface IProps {
  icon: string;
}

const IconComponent = memo(({icon}: IProps) => {
  return (
    <span className='material-symbols-outlined' style={{display: 'block'}}>{icon}</span>
  );
});

export default IconComponent;