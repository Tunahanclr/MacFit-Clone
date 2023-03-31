import React from 'react'
import About from './About'
import İnfermations from './İnfarmations'
export default function Hero() {

  return (
    <div className='relative lg:mx-auto h-screen'>
      <video className='absolute top-0 left-0 w-full h-full object-cover z-10'
        autoPlay loop muted playsInline src="https://marsathletic-p.mncdn.com/macfit_anasayfa_ufak.mp4">
      </video>
      <div className='relative  flex items-center justify-center h-full z-20'>
       <div className='text-center flex flex-col items-center justify-center'>
       <h2 className=' text-white text-[40px] md:text-[80px] font-extrabold max-w-4xl font-sans'>HAZIRSIN, HADİ BAŞLAYALIM!</h2>
        <p className='text-center text-white text-lg mt-4 md:text-xl'>Zihnen, ruhen ve bedenen daha iyi bir yaşam için adım at!</p>
        <button className='text-center flex justify-center items-center mt-10 bg-red-600 rounded-full w-44 md:w-52  text-white font-semibold text-base md:text-lg h-[52px]'>Bize Katıl</button>
       </div>
      </div>
      
      <About/>
    <div className='border-b border-gray-400 mt-36'></div>
    <İnfermations/>

      </div>
  )
}
