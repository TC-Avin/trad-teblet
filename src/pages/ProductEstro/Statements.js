import React from 'react';
const SegIMg  = require('./img/seg-img.png');

function Statements() {
    return (
        <>
            <section className="text-gray-600 body-font">
            <div className=' text-center my-10'>
                <h2 className='title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-3 pb-0 text-[#0A2A4A] text-center'>Statements</h2>
            </div>
                <div className="container px-5 pb-10  mx-auto flex flex-wrap">
                    <div className="flex flex-wrap  w-full">
                        <div className="p-4 lg:w-1/2 md:w-full sm:w-full">
                            <div className='relative w-full h-[15rem] '>
                                <img src={SegIMg} className="absolute" />
                                <div class="absolute px-[2rem] top-[36%] ">
                                    <p className="leading-relaxed text-[#808D9A] text-[1rem] font-medium text-center md:pt-6 sm:pt-2">Printing Holding statements, Transaction statements for clients at predefined intervals on Dot Matrix Printers / Page Printer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2 md:w-full sm:w-full">

                            <div className='relative w-full h-[15rem]'>
                                <img src={SegIMg} className="absolute" />
                                <div class="absolute px-[2rem] top-[36%] ">
                                    <p className="leading-relaxed text-[#808D9A] text-[1rem] font-medium text-center md:pt-6 sm:pt-2">Automatic forwarding statements to clients’ e-mail address / Fax on predefined dates.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Statements