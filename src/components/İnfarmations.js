import React from 'react'

export default function İnfarmations() {
  return (
        <div className='mt-7'>
            <div className='text-center flex flex-col justify-center items-center mt-12 md:mt-24'>
                    <h4 className='text-xl  font-bold'>KULÜP VE STÜDYOLAR</h4>
                    <h2 className='md:text-5xl text-2xl w-[300px] font-bold mt-2 md:mt-8 md:w-[800px]'>YAŞAM TARZINLA UYUMLU KULÜP VE STÜDYOLAR</h2>
                    <button className='mt-8 text-white text-lg bg-red-600 rounded-full w-44 hidden md:block  h-11 hover:bg-red-800 transition-all'>Kulüpleri İncele</button>
            </div>
       <div className='container mx-auto mt-4 md:mt-24'>
                <div className='lg:grid flex flex-wrap  lg:grid-cols-2 gap-9 justify-center '>
                    <div className='flex flex-col items-center'>
                            <img className='md:w-full w-[550px]' src="https://img-macfit.mncdn.com/mnresize/676/450/wp-content/uploads/2023/02/Macone.jpg" alt="" />
                         <h2 className=' text-base  md:text-2xl font-bold text-black mt-4'>Ayrıcalıklı standartlarda performans için: MAC/One</h2>
                         <p className='text-gray-600 font-light text-sm md:ml-0 ml-8 md:text-lg mt-2 w-[400px] md:w-[700px]'>Mars Athletic’in yeni konsepti MAC/One yüksek performans, dinamizm ve konforu birlikte sunuyor, sen de yenilenmek için MAC/One’da yerini al.</p>
                         <a href="" className=' ml-96 text-red-600 text-base whitespace-nowrap md:text-lg mt-2 font-extraboldd mr-96'>En Yakın Kulübü Bul</a>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img className='md:w-full w-[550px]' src="https://img-macfit.mncdn.com/mnresize/676/450/wp-content/uploads/2022/07/MACFIT2-979X450.jpeg" alt="" />
                        <h2 className='font-bold text-base  md:text-2xl text-black mt-4'>Spor hayatının ayrılmaz parçası olanlar için: MACFit</h2>
                        <p className='text-gray-600 font-light text-sm md:ml-0 ml-8 md:text-lg mt-2 w-[400px] md:w-[700px]'>Alanında uzman eğitmenler, ileri teknoloji ekipmanlar ve grup dersleri ile sınırlarını sonuna kadar zorla.</p>
                        <a href=""  className=' ml-96 text-red-600 text-base whitespace-nowrap md:text-lg mt-2 font-extraboldd mr-96'>En Yakın Kulübü Bul</a>
                    </div>
                </div>
       </div>
        </div>
    )
}
