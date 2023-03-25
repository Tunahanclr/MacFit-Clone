import React from 'react'

export default function Hero() {

  return (
    <div className='relative lg:mx-auto h-screen'>
      <video className='absolute top-0 left-0 w-full h-full object-cover z-10'
        autoPlay loop muted playsInline src="https://marsathletic-p.mncdn.com/macfit_anasayfa_ufak.mp4">
      </video>
      <div className='relative  flex items-center justify-center h-full z-20'>
       <div className='text-center flex flex-col items-center justify-center'>
       <h2 className=' font-sans  text-white text-[80px] font-extrabold max-w-4xl'>HAZIRSIN, HADİ BAŞLAYALIM!</h2>
        <p className='text-center text-white text-xl'>Zihnen, ruhen ve bedenen daha iyi bir yaşam için adım at!</p>
        <button className='text-center flex justify-center items-center mt-10 bg-red-500 rounded-full w-52  text-white font-semibold text-lg h-[52px]'>Bize Katıl</button>
       </div>
      </div>
      </div>
  )
}
