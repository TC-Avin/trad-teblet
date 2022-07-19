import React from 'react';
import './Slider.scss';
import Slider from "react-slick";

const RightImage = require('./img/right-side-circle.png');
const LeftImage = require('./img/left-side-circle.png');
const center = require('./img/center.png');


const MainSlider = ()=>{

	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	  };

	  
	return (
		<>
		<div className=" slider-section  " >
				<h2 className="title text-lg lg:text-2xl font-bold sm:text-3xl md:text-lg pt-6 pb-1 text-[#0A2A4A] text-center">
					Brokerage Facility
				</h2>


				<div className='container mx-auto' >
						<Slider								{...settings}  >
							<div className=""  >
								<div className='flex lg:min-h-[35rem] md:min-h-[25rem]  '  >
									<div className='relative  lg:w-[30rem] md:w-[30rem] sm:w-[10rem]	justify-center items-center flex  top-[5rem] right-[-2rem]' >
										<img className='w-full absolute' alt="img" src={LeftImage} />
										<div className='text absolute z-10  text-center text-ellipsis overflow-hidden  mx-[19%] left-[-8%]  ' >
										<p className='font-medium text-[1rem] md:text-sm'>For each slab a Minimum / Percent / Maximum / Fixed brokerage may be defined.</p>
										</div>
									</div>
									<div className='relative  lg:w-[30rem] md:w-[30rem] sm:w-[10rem]	justify-center items-center flex z-10 top-[-4rem] ' >
										<img className='w-full absolute' alt="img" src={center} />
										<div className='text absolute z-10  text-center text-ellipsis overflow-hidden  mx-[19%]  ' >
											<p className='font-mediu text-[1rem] md:text-sm'> Minimum Brokerage per contract may also be defined. </p>
										</div>
									</div>
									<div className='relative  lg:w-[30rem] md:w-[30rem] sm:w-[10rem]	justify-center items-center flex  top-[5rem] left-[-2rem]' >
										<img className='w-full absolute' alt="img" src={RightImage} />
										<div className='text absolute z-10  text-center text-ellipsis overflow-hidden  mx-[19%] right-[-8%]  ' >
											<p className='font-mediu text-[1rem] md:text-sm'>Speculation, Squaring off and delivery brokerages charged can be defined for same client.</p>
										</div>
									</div>

								</div>
							</div>

							<div className=""  >
								<div className='flex lg:min-h-[35rem] md:min-h-[25rem]  '  >
									<div className='relative  lg:w-[30rem] md:w-[30rem] sm:w-[10rem]	justify-center items-center flex  top-[5rem] right-[-2rem]' >
										<img className='w-full absolute' alt="img" src={LeftImage} />
										<div className='text absolute z-10  text-center text-ellipsis overflow-hidden  mx-[19%] left-[-8%]  ' >
											<p className='font-medium text-[1rem] md:text-sm'>
											Brokerage discounts may be offerred based on daily turnover.

											</p>
										</div>
									</div>
									<div className='relative  lg:w-[30rem] md:w-[30rem] sm:w-[10rem]	justify-center items-center flex z-10 top-[-4rem] ' >
										<img className='w-full absolute' alt="img" src={center} />
										<div className='text  z-10 max-h-[25%] max-w-[50%]  text-center text-ellipsis overflow-auto  mx-auto  ' >
											<p className='font-mediu text-[1rem] md:text-sm '> 
											Sharing of brokerage based on % of brokerage charged to client or on bases of excess charged
over a decided base brokerage.Report also available to check if any such
sharing results in negative income for the broker.

											</p>
										</div>
									</div>
									<div className='relative  lg:w-[30rem] md:w-[30rem] sm:w-[10rem]	justify-center items-center flex  top-[5rem] left-[-2rem]' >
										<img className='w-full absolute' alt="img" src={RightImage} />
										<div className='text  z-10 max-h-[25%] max-w-[68%]  text-center text-ellipsis overflow-auto  ml-[10%] right-[8%]  ' >
											<p className='font-mediu text-[1rem] md:text-sm'>
											Introducing facility to introduce credtiting Brokerage of Individual to their account alongwith statement posting or calculated periodically.
											</p>
										</div>
									</div>

								</div>
							</div>



							

					</Slider>
					</div>
				

				{/* <div className="container mx-auto  hidden" id="circle-slider-section" >
				<Slider {...settings}>

					<div className='single-slider ' >

					
						<div className="flex flex-col md:w-1/3  circleThing-right circle-effect-right  justify-center h-full bg-white text-white rounded-full p-4">
							<div className="bg-white p-10 custom-h-w text-gray-400 justify-center text-center items-center flex  border-[2px] rounded-full" >
								<p className='font-medium text-[1rem]'>For each slab a Minimum / Percent / Maximum / Fixed brokerage may be defined.</p>
							</div>
						</div>

					
						<div className="flex flex-col md:w-1/3  circleThing-center circle-effect-center  justify-center h-full bg-white text-white rounded-full p-4">
							<div className="bg-white p-10 custom-h-w text-gray-400 justify-center text-center items-center flex  border-[2px] rounded-full " >
								<p className='font-mediu text-[1rem]m'> Minimum Brokerage per contract may also be defined. </p>
							</div>
						</div>

						<div className="flex flex-col md:w-1/3  circleThing-left circle-effect-right  justify-center h-full bg-white text-white rounded-full p-4">
							<div className="bg-white p-10 custom-h-w text-gray-400 justify-center text-center items-center flex  border-[2px] rounded-full" >
								<p className='font-mediu text-[1rem]m'>Speculation, Squaring off and delivery brokerages charged can be defined for same client.</p>
							</div>
						</div>


					</div>

					<div className='single-slider' >

								
						<div className="flex flex-col md:w-1/3  circleThing-right circle-effect-right  justify-center h-full bg-white text-white rounded-full p-4">
							<div className="bg-white p-10 custom-h-w text-gray-400 justify-center text-center items-center flex  border-[2px] rounded-full" >
								<p className='font-medium'>Brokerage discounts may be offerred based on daily turnover.</p>
							</div>
						</div>

						<div className="flex flex-col md:w-1/3  circleThing-center circle-effect-center  justify-center h-full bg-white text-white rounded-full p-4">
							<div className="bg-white p-10 custom-h-w text-gray-400 justify-center text-center items-center flex  border-[2px] rounded-full" >
								<p className='font-medium'>
									Sharing of brokerage based on % of brokerage charged to client or on bases of excess charged over a decided base brokerage.Report also available to check if any such sharing results in negative income for the broker.
								</p>
							</div>
						</div>

						<div className="flex flex-col md:w-1/3  circleThing-left circle-effect-right  justify-center h-full bg-white text-white rounded-full p-4">
							<div className="bg-white p-10 custom-h-w text-gray-400 justify-center text-center items-center flex  border-[2px] rounded-full" >
								<p className='font-medium'>
								Introducing facility to introduce credtiting Brokerage of Individual to their account alongwith statement posting or calculated periodically.
								</p>
							</div>
						</div>
					</div>
				</Slider>
			  </div> */}

		</div>


		</>)
}
export default MainSlider;