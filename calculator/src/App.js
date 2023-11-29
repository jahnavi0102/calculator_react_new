import './index.css';

function App() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-64 h-96 rounded-lg '>
        <div className='h-24 w-50 border-double border-4 border-x-pink border-t-pink bg-black rounded-lg '>
          <div className='previous-operand'></div>
          <div className='current-operand'></div>
        </div>
        <div className=' h-72 w-50 border-double border-4 border-pink bg-black rounded-lg'>
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
      </div>
  );
}

export default App;
