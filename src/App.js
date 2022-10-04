import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const loadingTransition = () => {
      // Select all slides
      const slides = document.querySelectorAll('.slide')

      // loop through slides and set each slides translateX
      slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${indx * 100}%)`
      })

      // select next slide button
      const nextSlide = document.querySelector('.btn-next')

      // current slide counter
      let curSlide = 0
      // maximum number of slides
      let maxSlide = slides.length - 1

      const next = function () {
        // check if current slide is the last and reset current slide
        if (curSlide === maxSlide) {
          curSlide = 0
        } else {
          curSlide++
        }

        //   move slide by -100%
        slides.forEach((slide, indx) => {
          slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`
        })
      }

      // add event listener and navigation functionality
      nextSlide.addEventListener('click', next)

      // select next slide button
      const prevSlide = document.querySelector('.btn-prev')

      const prev = function () {
        // check if current slide is the first and reset current slide to last
        if (curSlide === 0) {
          curSlide = maxSlide
        } else {
          curSlide--
        }

        // move slide by 100%
        slides.forEach((slide, indx) => {
          slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`
        })
      }

      // add event listener and navigation functionality
      prevSlide.addEventListener('click', prev)
    }

    loadingTransition()
  }, [])


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
