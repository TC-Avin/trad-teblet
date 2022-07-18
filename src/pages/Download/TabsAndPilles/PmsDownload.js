import React from 'react'
import SliderCard from './SliderCard'

const PmsDownload = (props) => {
  return (
    <div className='bg-[#fffff]'>
        <div>
        <div className='font-medium text-3xl mb-4	text-center pt-12 text-[#0A2A4A]'>PMS</div>
        <div className='mb-6 text-lg text-center text-[#808D9A] font-normal pb-12'> Manages portfolios with high degree of automation, internal controls and compliance.</div>
        </div>
        <div className='flex flex-wrap justify-between px-12	py-6'> 
        <div className='relative'>

<h2 className=" text-center lg:text-2xl text-base font-medium text-[#000000]">
Head Office
</h2>
    <SliderCard  subTitle='PMS' img={'/assets/img/svg-1.png'} arrow={false} index={props.index}/>
    </div>
    <div className='relative'>

<h2 className=" text-center lg:text-2xl text-base font-medium text-[#000000]">
Branch & Individual Client
</h2>
    <SliderCard  subTitle='Circular' img={'/assets/img/svg-7.svg'} arrow={false} index={props.index}/>
    </div>
    <div class="text-gray-600 body-font">
          <div className="single-slider px-5 py-0">
            <div>
              <div className="flex justify-center p-2  bg-slate-300 md:p-5 bg-[#FFFFFF] items-center w-80  rounded-xl">
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>


    </div>
    </div>
  )
}

export default PmsDownload