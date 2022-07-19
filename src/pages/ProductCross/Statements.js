import React from 'react';
const SegIMg  = require('./img/seg-img.png');

function Statements() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className=' text-center'>
                    <h2 className='title text-lg lg:text-3xl font-bold sm:text-3xl md:text-3xl pt-8 pb-0 text-[#0A2A4A] text-center'>Statements</h2>

                </div>

                <div className="container px-5 pb-10  mx-auto flex flex-wrap">
                    <div className="flex flex-wrap  w-full justify-center">
                        <div className="p-4 md:w-1/2 md:w-full sm:w-1/2">
                            <div className='relative w-full h-[15rem]'>
                                <img src={SegIMg} className="absolute" />
                                <div class="absolute px-[2rem] xl:top-[38%] lg:top-[16%] top-[5%]">
                                    <p className="leading-relaxed text-[#808D9A] lg:text-[1rem] md:text-[0.75rem] sm:text-[0.5rem] font-medium text-center pt-6">Printing Holding statements, Transaction statements for clients at predefined intervals on Dot Matrix Printers / Page Printer.</p>
                                </div>
                            </div>
                        </div>


                        <div className="p-4 md:w-1/2 md:w-full sm:w-1/2">
                            <div className='relative w-full h-[15rem]'>
                                <img src={SegIMg} className="absolute" />
                                <div class="absolute px-[2rem] xl:top-[38%] lg:top-[16%] top-[8%]">
                                    <p className="leading-relaxed text-[#808D9A] lg:text-[1rem] md:text-[0.75rem] sm:text-[0.5rem] font-medium text-center pt-6">Automatic forwarding statements to clients’ e-mail address / Fax at predefined frequency.</p>
                                </div>
                            </div>
                        </div>


                        <div className="p-4 md:w-1/2 md:w-full sm:w-1/2">
                            <div className='relative w-full h-[9rem] lg:top-[-70px] top-[-150px] '>
                                <img src={SegIMg} className="absolute" />
                                <div class="absolute px-[2rem] xl:top-[70%] lg:top-[34%] top-[10%] text-center w-full">
                                    <p className="leading-relaxed text-[#808D9A] lg:text-[1rem] md:text-[0.75rem] sm:text-[0.5rem] font-medium text-center pt-6 w-full">Can be printed on pre-printed stationery with on site set-up utility.</p>
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