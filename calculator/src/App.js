import './index.css';

function App() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='shadow-2xl w-64 h-96 rounded-lg bg-neutral-900 '>
        <div className='h-24 w-50 border-rose-500 bg-neutral-600 rounded-lg'>
          <div className='previous-operand'></div>
          <div className='current-operand'></div>
        </div>
        <button className='span-two'>AC</button>
        <button>DEL</button>
        <button>/</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button className='span-two'>=</button>
      </div>
      </div>
  );
}

export default App;
