function App() {
  return (
    <div className='h-[100vh] grid place-items-center'>
      <div className='slider w-full max-w-[800px] h-[350px] relative overflow-hidden rounded-2xl'>
        <div className='slide w-full max-w-[800px] h-[350px] absolute transition duration-500'>
          <div className='w-full h-full bg-red-600 flex items-center justify-center text-5xl'>1</div>
        </div>

        <div className='slide w-full max-w-[800px] h-[350px] absolute transition duration-500'>
          <div className='w-full h-full bg-green-600 flex items-center justify-center text-5xl'>2</div>
        </div>

        <div className='slide w-full max-w-[800px] h-[350px] absolute transition duration-500'>
          <div className='w-full h-full bg-blue-600 flex items-center justify-center text-5xl'>3</div>
        </div>

        <div className='slide w-full max-w-[800px] h-[350px] absolute transition duration-500'>
          <div className='w-full h-full bg-purple-600 flex items-center justify-center text-5xl'>4</div>
        </div>

        <button className='btn btn-next flex justify-center items-center absolute top-[45%] right-[2%] w-[40px] h-[40px] p-[10px] border-none rounded-[50%] z-[10] cursor-pointer bg-[#fff] text-[18px] active:transform active:scale-[1.1]'>
          {'>'}
        </button>
        <button className='btn btn-prev flex justify-center items-center absolute top-[45%] left-[2%] w-[40px] h-[40px] p-[10px] border-none rounded-[50%] z-[10] cursor-pointer bg-[#fff] text-[18px] active:transform active:scale-[1.1]'>
          {'<'}
        </button>
      </div>
    </div>
  )
}

export default App
