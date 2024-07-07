import { CSSProperties, memo } from 'react';

interface IProps {}

const LoadingComponent = memo(() => {
  const style: CSSProperties = {
    textAlign: 'center',
    position: 'fixed',
    height: '10px',
    top: '50%',
    width: '0',
    backgroundColor: 'red',
    borderRadius: '10px',
    left: '50%',
    transform: 'translateX(calc(50%))',
    animation: 'loading 2s linear infinite'
  }
  return (
    <div style={style} >
      <style>
      {`@keyframes loading {
        0% {
          width: 0;
          transform: translateX(50%);
        }
        50% {
          width: 200px;
          transform: translateX(calc(50% - 200px));
        }
        100% {
          width: 0;
          transform: translateX(50%);
        }
      }`}
      </style>
    </div>
  );
});

export default LoadingComponent;