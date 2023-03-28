import React from 'react'

export default function About() {
  return (
    <div className='mt-4 container flex flex-col justify-center items-center text-center mx-auto'>
        <h2 className=' text-2xl sm:text-2xl md:text-4xl  mt-32 w-[300px] sm:w-[450px]  md:w-[600px] font-semibold font-sans '>
        İYİ YAŞAMAYA VE SPORA DAİR ARADIĞIN HER ŞEY BURADA!
        </h2>
        <p className='text-gray-90000  text-sm sm:text-lg w-[350px] md:w-[570px] mt-10 font-light'>
        En yeni teknolojiler ve spor ekipmanlarıyla, spor deneyimini bir adım ileri taşı!
Profesyonel eğitmenler ile birlikte antrenman yap, maksimum verim al.
İster kulüpte ister açık havada hayalindeki sağlıklı ve fit yaşam için
Mars Athletic her zaman seninle.
        </p>
        <div className='flex justify-center items-center flex-wrap flex-shrink-0 gap-9 container mx-auto   mt-12'>
                <div className='flex flex-col items-center justify-center '>
                    <img className='lg:w-[440px] w-[400px]' src="https://img-macfit.mncdn.com/mnresize/440/248/wp-content/uploads/2022/07/rsz_2dsc08867-e1658935512804.jpg" alt="" />
                    <h3 className='flex mt-3 text-2xl  font-semibold justify-start'>Kulüp Konseptleri</h3>
                    <p className='mt-2 flex justify-start text-sm lg:text-base text-gray-600 w-[400px]'>Farklı ihtiyaçlara göre tasarlanmış, en yeni teknolojilerle donatılmış kulüplerde yerini al.</p>
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <img className='lg:w-[440px] w-[400px]' src="https://img-macfit.mncdn.com/mnresize/440/248/wp-content/uploads/2022/07/rsz_macfit_0317-e1658935411477.jpg" alt="" />
                    <h3 className='flex mt-3 text-2xl  font-semibold justify-start'>Her Yerde Spor</h3>
                    <p className='mt-2 flex justify-start text-sm lg:text-base text-gray-600 w-[400px]'>MAC+ uygulaması ile dilediğin yer ve zamanda eşsiz bir spor deneyimi.</p>
                </div>
                <div className='flex flex-col items-center justify-center '>
                    <img className='lg:w-[440px] w-[400px]' src="https://img-macfit.mncdn.com/mnresize/440/248/wp-content/uploads/2022/07/MACRunners_Ana-Sayfa-1-e1658935967618.jpeg" alt="" />
                    <h3 className='flex mt-3 text-2xl  font-semibold justify-start'>Topluluk</h3>
                    <p className='mt-2 flex justify-start text-sm lg:text-base text-gray-600 w-[400px]'>Açık havada farklı grup dersi konseptleri ile keyifli bir spor ayrıcalığı.</p>
                </div>
                
        </div>
    </div>
    
  )
}
