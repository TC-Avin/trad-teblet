import React from 'react'
import './changesfacility.css'

function ChargeFacility() {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-12 mx-auto">
                    <div class="flex flex-col text-center w-full mb-5">
                    <h2 className='title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-5 pb-0 text-[#0A2A4A] text-center'>Charge Facility</h2>
                    </div>
                    <div class="flex flex-wrap justify-around">
                        <div class="w-[310px]  py-6 relative mt-6">
                            <div class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md h-40">
                               <div className='ellipse-img'><img alt="No Image" src="/assets/img/Ellipse-1.svg" className="  h-20 w-20 mb-3 place-content-between block "/>                                            
                                <span className='text-center text-3xl title-font font-semibold text-[#2F97F8] text-one'>01</span></div> 
                                <p class="font-normal text-[#808D9A] pt-5 text-center ">Formulation of various scheme and default scheme concept for easy definition of schemes to individual accounts.</p>
                            </div>
                        </div>
                        <div class="w-[310px]  py-6 relative mt-6">
                        <div class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md h-40">
                        <div className='ellipse-img'>    <img alt="No Image" src="/assets/img/Ellipse-1.svg" className="  h-20 w-20 mb-3 place-content-between block "/>                                            
                                <span className='text-center text-3xl title-font font-semibold text-[#2F97F8] text-one'>02</span> </div>
                                <p class="font-normal text-[#808D9A] pt-5 text-center ">Mass redefining scheme for selected clients.</p>
                            </div>
                        </div>
                        <div class=" w-[310px] py-6 relative mt-6">
                        <div class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md h-40">
                        <div className='ellipse-img'>   <img alt="No Image" src="/assets/img/Ellipse-1.svg" className="  h-20 w-20 mb-3 place-content-between block "/>                                            
                                <span className='text-center text-3xl title-font font-semibold text-[#2F97F8] text-one'>03</span> </div>
                                <p class="font-normal text-[#808D9A] pt-5 text-center ">Provision of charges on rejected entries, Demat request, late pay-ins, additional copies of statements etc.</p>
                            </div>
                        </div>
                        <div class="w-[310px]  py-6 relative mt-6">
                        <div class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md h-40">
                        <div className='ellipse-img'>   <img alt="No Image" src="/assets/img/Ellipse-1.svg" className="  h-20 w-20 mb-3 place-content-between block "/>                                            
                                <span className='text-center text-3xl title-font font-semibold text-[#2F97F8] text-one'>04</span> </div>
                                <p class="font-normal text-[#808D9A] pt-5 text-center ">Displaying transaction carrying out cost, cash collection and issuing of receipts for the same while entering instructions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ChargeFacility