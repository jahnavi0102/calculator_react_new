import './index.css';


function App() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-64 h-96 rounded-lg '>
        <div className='h-24 w-50 border-double border-4 border-x-purple border-t-purple bg-black rounded-lg '>
          <div className='flex justify-end items-end h-10 text-red mr-2'>456</div>
          <div className='flex justify-end mr-3 items-end h-12 text-red text-end text-2xl '>879</div>
        </div>
        <div className=' h-72 w-50 border-double border-4 border-purple bg-black rounded-lg'>
          <div className='flex h-14 p-1 gap-1.5'>
            <button className='w-2/4 border border-turquoise text-yellow rounded-lg '>AC</button>
            <button className='w-1/4 border border-turquoise text-yellow rounded-lg'>DEL</button>
            <button className='w-1/4 border border-turquoise text-yellow rounded-lg'>/</button>
          </div>
          <div className='flex h-14 p-1 gap-1.5'>
            <button className='w-1/4 border border-turquoise text-yellow rounded-lg'>1</button>
            <button className='w-1/4 border border-turquoise text-yellow rounded-lg'>2</button>
            <button className='w-1/4 border border-turquoise text-yellow rounded-lg'>3</button>
            <button className='w-1/4 border border-turquoise text-yellow rounded-lg'>*</button>
          </div>
          <div className='flex h-14 p-1 gap-1.5'>
            <button className='w-1/4 border border-turquoise text-yellow rounded-lg'>4</button>
            <button className='w-1/4 border border-turquoise text-yellow rounded-lg'>5</button>
            <button className='w-1/4 border border-turquoise text-yellow rounded-lg'>6</button>
            <button className='w-1/4 border border-turquoise text-yellow rounded-lg'>+</button>
          </div>
          <div className='flex h-14 p-1 gap-1.5'>
            <button className='w-1/4 border border-turquoise text-yellow rounded-lg'>7</button>
            <button className='w-1/4 border border-turquoise text-yellow rounded-lg'>8</button>
            <button className='w-1/4 border border-turquoise text-yellow rounded-lg'>9</button>
            <button className='w-1/4 border border-turquoise text-yellow rounded-lg'>-</button>
          </div>
          <div className='flex h-14 p-1 gap-1.5'>
            <button className='w-1/4 border border-turquoise text-yellow rounded-lg'>.</button>
            <button className='w-1/4 border border-turquoise text-yellow rounded-lg'>0</button>
            <button className='w-2/4 border border-turquoise text-yellow rounded-lg'>=</button>
          </div>
        </div>
      </div>
      </div>
  );
}

export default App;
