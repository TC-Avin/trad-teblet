import React from 'react';
const BiCir = require('./img/bil-circle.png');
const ZigZag = require('./img/zig-zag.png');
const Billing = ()=>{
    return (
        <>
            <section className=' bg-[#F4FAFF] py-10 px-14'>
                <div className='container mx-auto relative' >

                    <div className="flex flex-col text-center w-full mb-10">
                    <h2 className='title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-0 pb-0 text-[#0A2A4A]'>Billing</h2>
                    </div>

                    <img src={ZigZag} className="absolute max-h-full left-[45%] w-[8rem] h-[90%] " />

                    <ul className='list-wrraper'>
                        <li>
                            <div className='flex  justify-start relative'>
                                <div className='content-left flex justify-center items-center w-[46%] px-12 ' >
                                    <p className='text-left text-[#808D9A] text-[1rem]'>
                                        Including Demat request charges in bills for better accounting. (upfront collection is also possible and simplified)
                                    </p>
                                </div> 
                                <div className='box-right relative text-center  flex justify-center items-center ' >
                                <div className='w-[6.9rem] h-20 relative  flex justify-start items-center ' >
                                    <img src={BiCir} className="h-10 w-10 absolute z-[0] left-[-30px]" />
                                    <span  className='text-[#FFFFFF] text-[1rem] z-[10] absolute left-[-19px] top-[28px] font-semibold font-Lexend ' >
                                        01
                                    </span>
                                </div>
                                </div>
                                <div className='content-left flex items-center  w-[61%] px-12 absolute side-line1' >
                                <svg width="1020" height="12" viewBox="0 0 1020 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 6L10 11.7735V0.226497L0 6ZM1020 5H1017.5V7H1020V5ZM1012.5 5L1007.5 5V7L1012.5 7V5ZM1002.5 5L997.5 5V7L1002.5 7V5ZM992.5 5H987.5V7H992.5V5ZM982.5 5L977.5 5V7L982.5 7V5ZM972.5 5L967.5 5V7L972.5 7V5ZM962.5 5L957.5 5V7H962.5V5ZM952.5 5L947.5 5V7L952.5 7V5ZM942.5 5H937.5V7L942.5 7V5ZM932.5 5L927.5 5V7L932.5 7V5ZM922.5 5H917.5V7H922.5V5ZM912.5 5L907.5 5V7L912.5 7V5ZM902.5 5L897.5 5V7L902.5 7V5ZM892.5 5H887.5V7H892.5V5ZM882.5 5L877.5 5V7L882.5 7V5ZM872.5 5L867.5 5V7L872.5 7V5ZM862.5 5H857.5V7H862.5V5ZM852.5 5L847.5 5V7L852.5 7V5ZM842.5 5L837.5 5V7L842.5 7V5ZM832.5 5H827.5V7H832.5V5ZM822.5 5L817.5 5V7L822.5 7V5ZM812.5 5H807.5V7L812.5 7V5ZM802.5 5L797.5 5V7L802.5 7V5ZM792.5 5L787.5 5V7L792.5 7V5ZM782.5 5H777.5V7L782.5 7V5ZM772.5 5L767.5 5V7L772.5 7V5ZM762.5 5H757.5V7H762.5V5ZM752.5 5L747.5 5V7L752.5 7V5ZM742.5 5L737.5 5V7L742.5 7V5ZM732.5 5H727.5V7H732.5V5ZM722.5 5L717.5 5V7L722.5 7V5ZM712.5 5L707.5 5V7L712.5 7V5ZM702.5 5H697.5V7H702.5V5ZM692.5 5L687.5 5V7L692.5 7V5ZM682.5 5L677.5 5V7L682.5 7V5ZM672.5 5L667.5 5V7H672.5V5ZM662.5 5L657.5 5V7L662.5 7V5ZM652.5 5H647.5V7H652.5V5ZM642.5 5L637.5 5V7L642.5 7V5ZM632.5 5L627.5 5V7H632.5V5ZM622.5 5L617.5 5V7L622.5 7V5ZM612.5 5L607.5 5V7L612.5 7V5ZM602.5 5H597.5V7H602.5V5ZM592.5 5L587.5 5V7L592.5 7V5ZM582.5 5L577.5 5V7L582.5 7V5ZM572.5 5H567.5V7H572.5V5ZM562.5 5L557.5 5V7L562.5 7V5ZM552.5 5L547.5 5V7L552.5 7V5ZM542.5 5H537.5V7H542.5V5ZM532.5 5L527.5 5V7L532.5 7V5ZM522.5 5H517.5V7L522.5 7V5ZM512.5 5L507.5 5V7L512.5 7V5ZM502.5 5L497.5 5V7L502.5 7V5ZM492.5 5H487.5V7L492.5 7V5ZM482.5 5L477.5 5V7L482.5 7V5ZM472.5 5H467.5V7H472.5V5ZM462.5 5L457.5 5V7L462.5 7V5ZM452.5 5L447.5 5V7L452.5 7V5ZM442.5 5H437.5V7H442.5V5ZM432.5 5L427.5 5V7L432.5 7V5ZM422.5 5L417.5 5V7L422.5 7V5ZM412.5 5H407.5V7H412.5V5ZM402.5 5L397.5 5V7L402.5 7V5ZM392.5 5L387.5 5V7L392.5 7V5ZM382.5 5L377.5 5V7H382.5V5ZM372.5 5L367.5 5V7L372.5 7V5ZM362.5 5H357.5V7H362.5V5ZM352.5 5L347.5 5V7L352.5 7V5ZM342.5 5L337.5 5V7H342.5V5ZM332.5 5L327.5 5V7L332.5 7V5ZM322.5 5L317.5 5V7L322.5 7V5ZM312.5 5H307.5V7H312.5V5ZM302.5 5L297.5 5V7L302.5 7V5ZM292.5 5L287.5 5V7L292.5 7V5ZM282.5 5H277.5V7H282.5V5ZM272.5 5L267.5 5V7L272.5 7V5ZM262.5 5L257.5 5V7L262.5 7V5ZM252.5 5H247.5V7H252.5V5ZM242.5 5L237.5 5V7L242.5 7V5ZM232.5 5H227.5V7L232.5 7V5ZM222.5 5L217.5 5V7L222.5 7V5ZM212.5 5L207.5 5V7L212.5 7V5ZM202.5 5H197.5V7L202.5 7V5ZM192.5 5L187.5 5V7L192.5 7V5ZM182.5 5H177.5V7H182.5V5ZM172.5 5L167.5 5V7L172.5 7V5ZM162.5 5L157.5 5V7L162.5 7V5ZM152.5 5H147.5V7H152.5V5ZM142.5 5L137.5 5V7L142.5 7V5ZM132.5 5L127.5 5V7L132.5 7V5ZM122.5 5H117.5V7H122.5V5ZM112.5 5L107.5 5V7L112.5 7V5ZM102.5 5L97.5 5V7L102.5 7V5ZM92.5 5L87.5 5V7H92.5V5ZM82.5 5L77.5 5V7L82.5 7V5ZM72.5 5H67.5V7H72.5V5ZM62.5 5L57.5 5V7L62.5 7V5ZM52.5 5L47.5 5V7H52.5V5ZM42.5 5L37.5 5V7L42.5 7V5ZM32.5 5L27.5 5V7L32.5 7V5ZM22.5 5H17.5V7H22.5V5ZM12.5 5L7.5 5V7L12.5 7V5Z" fill="#29AEAA"/>
                                </svg>
                                </div>
                            </div>
                        </li>


                        <li>
                            <div className='flex justify-end relative'>
                            <div className='content-left flex justify-center items-center w-[58%] px-12 absolute side-line' >
                            <svg width="1020" height="12" viewBox="0 0 1020 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1020 6L1010 0.226497V11.7735L1020 6ZM1012.5 5L1007.5 5V7L1012.5 7V5ZM1002.5 5L997.5 5V7L1002.5 7V5ZM992.5 5H987.5V7H992.5V5ZM982.5 5L977.5 5V7L982.5 7V5ZM972.5 5L967.5 5V7L972.5 7V5ZM962.5 5L957.5 5V7H962.5V5ZM952.5 5L947.5 5V7L952.5 7V5ZM942.5 5H937.5V7L942.5 7V5ZM932.5 5L927.5 5V7L932.5 7V5ZM922.5 5H917.5V7H922.5V5ZM912.5 5L907.5 5V7L912.5 7V5ZM902.5 5L897.5 5V7L902.5 7V5ZM892.5 5H887.5V7H892.5V5ZM882.5 5L877.5 5V7L882.5 7V5ZM872.5 5L867.5 5V7L872.5 7V5ZM862.5 5H857.5V7H862.5V5ZM852.5 5L847.5 5V7L852.5 7V5ZM842.5 5L837.5 5V7L842.5 7V5ZM832.5 5H827.5V7H832.5V5ZM822.5 5L817.5 5V7L822.5 7V5ZM812.5 5H807.5V7L812.5 7V5ZM802.5 5L797.5 5V7L802.5 7V5ZM792.5 5L787.5 5V7L792.5 7V5ZM782.5 5H777.5V7L782.5 7V5ZM772.5 5L767.5 5V7L772.5 7V5ZM762.5 5H757.5V7H762.5V5ZM752.5 5L747.5 5V7L752.5 7V5ZM742.5 5L737.5 5V7L742.5 7V5ZM732.5 5H727.5V7H732.5V5ZM722.5 5L717.5 5V7L722.5 7V5ZM712.5 5L707.5 5V7L712.5 7V5ZM702.5 5H697.5V7H702.5V5ZM692.5 5L687.5 5V7L692.5 7V5ZM682.5 5L677.5 5V7L682.5 7V5ZM672.5 5L667.5 5V7H672.5V5ZM662.5 5L657.5 5V7L662.5 7V5ZM652.5 5H647.5V7H652.5V5ZM642.5 5L637.5 5V7L642.5 7V5ZM632.5 5L627.5 5V7H632.5V5ZM622.5 5L617.5 5V7L622.5 7V5ZM612.5 5L607.5 5V7L612.5 7V5ZM602.5 5H597.5V7H602.5V5ZM592.5 5L587.5 5V7L592.5 7V5ZM582.5 5L577.5 5V7L582.5 7V5ZM572.5 5H567.5V7H572.5V5ZM562.5 5L557.5 5V7L562.5 7V5ZM552.5 5L547.5 5V7L552.5 7V5ZM542.5 5H537.5V7H542.5V5ZM532.5 5L527.5 5V7L532.5 7V5ZM522.5 5H517.5V7L522.5 7V5ZM512.5 5L507.5 5V7L512.5 7V5ZM502.5 5L497.5 5V7L502.5 7V5ZM492.5 5H487.5V7L492.5 7V5ZM482.5 5L477.5 5V7L482.5 7V5ZM472.5 5H467.5V7H472.5V5ZM462.5 5L457.5 5V7L462.5 7V5ZM452.5 5L447.5 5V7L452.5 7V5ZM442.5 5H437.5V7H442.5V5ZM432.5 5L427.5 5V7L432.5 7V5ZM422.5 5L417.5 5V7L422.5 7V5ZM412.5 5H407.5V7H412.5V5ZM402.5 5L397.5 5V7L402.5 7V5ZM392.5 5L387.5 5V7L392.5 7V5ZM382.5 5L377.5 5V7H382.5V5ZM372.5 5L367.5 5V7L372.5 7V5ZM362.5 5H357.5V7H362.5V5ZM352.5 5L347.5 5V7L352.5 7V5ZM342.5 5L337.5 5V7H342.5V5ZM332.5 5L327.5 5V7L332.5 7V5ZM322.5 5L317.5 5V7L322.5 7V5ZM312.5 5H307.5V7H312.5V5ZM302.5 5L297.5 5V7L302.5 7V5ZM292.5 5L287.5 5V7L292.5 7V5ZM282.5 5H277.5V7H282.5V5ZM272.5 5L267.5 5V7L272.5 7V5ZM262.5 5L257.5 5V7L262.5 7V5ZM252.5 5H247.5V7H252.5V5ZM242.5 5L237.5 5V7L242.5 7V5ZM232.5 5H227.5V7L232.5 7V5ZM222.5 5L217.5 5V7L222.5 7V5ZM212.5 5L207.5 5V7L212.5 7V5ZM202.5 5H197.5V7L202.5 7V5ZM192.5 5L187.5 5V7L192.5 7V5ZM182.5 5H177.5V7H182.5V5ZM172.5 5L167.5 5V7L172.5 7V5ZM162.5 5L157.5 5V7L162.5 7V5ZM152.5 5H147.5V7H152.5V5ZM142.5 5L137.5 5V7L142.5 7V5ZM132.5 5L127.5 5V7L132.5 7V5ZM122.5 5H117.5V7H122.5V5ZM112.5 5L107.5 5V7L112.5 7V5ZM102.5 5L97.5 5V7L102.5 7V5ZM92.5 5L87.5 5V7H92.5V5ZM82.5 5L77.5 5V7L82.5 7V5ZM72.5 5H67.5V7H72.5V5ZM62.5 5L57.5 5V7L62.5 7V5ZM52.5 5L47.5 5V7H52.5V5ZM42.5 5L37.5 5V7L42.5 7V5ZM32.5 5L27.5 5V7L32.5 7V5ZM22.5 5H17.5V7H22.5V5ZM12.5 5L7.5 5V7L12.5 7V5ZM2.5 5L0 5V7L2.5 7V5Z" fill="#29AEAA"/>
                            </svg>
                            </div> 
                                <div className='box-right relative text-center  flex justify-center items-center' >
                                    <div className='w-[6.9rem] h-20 relative  flex justify-end items-center  ' >
                                        <img src={BiCir} className="h-10 w-10 absolute z-[0] right-[-20px]" />
                                        <span  className='text-[#FFFFFF] text-[1rem] z-[10] absolute right-[-9px] top-[28px] font-semibold font-Lexend ' >
                                            02
                                        </span>
                                    </div>
                                </div>

                                <div className='content-left flex justify-center items-center w-[46%] px-10' >
                                    <p className='text-[#808D9A] text-[1rem]'>
                                    Levying additional charges for special tasks carried out for clients. (e.g. charges for indemnity bond)                                    </p>
                                </div>

                            </div>
                        </li>

                        <li>
                            <div className='flex  justify-start relative'>
                                <div className='content-left flex justify-center items-center w-[46%] px-12 ' >
                                    <p className='text-left text-[#808D9A] text-[1rem]'>
                                    Printing bills on blank papers / letter heads / pre defined stationery on Dot Matrix Printer / line Printer / Page printer in summarised / detailed mode.
                                    </p>
                                </div> 
                                <div className='box-right relative text-center  flex justify-center items-center ' >
                                <div className='w-[6.9rem] h-20 relative  flex justify-start items-center ' >
                                    <img src={BiCir} className="h-10 w-10 absolute z-[0] left-[-30px]" />
                                    <span  className='text-[#FFFFFF] text-[1rem] z-[10] absolute left-[-19px] top-[28px] font-semibold font-Lexend ' >
                                        03
                                    </span>
                                </div>
                                </div>
                                <div className='content-left flex items-center  w-[61%] px-12 absolute side-line1' >
                                <svg width="1020" height="12" viewBox="0 0 1020 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 6L10 11.7735V0.226497L0 6ZM1020 5H1017.5V7H1020V5ZM1012.5 5L1007.5 5V7L1012.5 7V5ZM1002.5 5L997.5 5V7L1002.5 7V5ZM992.5 5H987.5V7H992.5V5ZM982.5 5L977.5 5V7L982.5 7V5ZM972.5 5L967.5 5V7L972.5 7V5ZM962.5 5L957.5 5V7H962.5V5ZM952.5 5L947.5 5V7L952.5 7V5ZM942.5 5H937.5V7L942.5 7V5ZM932.5 5L927.5 5V7L932.5 7V5ZM922.5 5H917.5V7H922.5V5ZM912.5 5L907.5 5V7L912.5 7V5ZM902.5 5L897.5 5V7L902.5 7V5ZM892.5 5H887.5V7H892.5V5ZM882.5 5L877.5 5V7L882.5 7V5ZM872.5 5L867.5 5V7L872.5 7V5ZM862.5 5H857.5V7H862.5V5ZM852.5 5L847.5 5V7L852.5 7V5ZM842.5 5L837.5 5V7L842.5 7V5ZM832.5 5H827.5V7H832.5V5ZM822.5 5L817.5 5V7L822.5 7V5ZM812.5 5H807.5V7L812.5 7V5ZM802.5 5L797.5 5V7L802.5 7V5ZM792.5 5L787.5 5V7L792.5 7V5ZM782.5 5H777.5V7L782.5 7V5ZM772.5 5L767.5 5V7L772.5 7V5ZM762.5 5H757.5V7H762.5V5ZM752.5 5L747.5 5V7L752.5 7V5ZM742.5 5L737.5 5V7L742.5 7V5ZM732.5 5H727.5V7H732.5V5ZM722.5 5L717.5 5V7L722.5 7V5ZM712.5 5L707.5 5V7L712.5 7V5ZM702.5 5H697.5V7H702.5V5ZM692.5 5L687.5 5V7L692.5 7V5ZM682.5 5L677.5 5V7L682.5 7V5ZM672.5 5L667.5 5V7H672.5V5ZM662.5 5L657.5 5V7L662.5 7V5ZM652.5 5H647.5V7H652.5V5ZM642.5 5L637.5 5V7L642.5 7V5ZM632.5 5L627.5 5V7H632.5V5ZM622.5 5L617.5 5V7L622.5 7V5ZM612.5 5L607.5 5V7L612.5 7V5ZM602.5 5H597.5V7H602.5V5ZM592.5 5L587.5 5V7L592.5 7V5ZM582.5 5L577.5 5V7L582.5 7V5ZM572.5 5H567.5V7H572.5V5ZM562.5 5L557.5 5V7L562.5 7V5ZM552.5 5L547.5 5V7L552.5 7V5ZM542.5 5H537.5V7H542.5V5ZM532.5 5L527.5 5V7L532.5 7V5ZM522.5 5H517.5V7L522.5 7V5ZM512.5 5L507.5 5V7L512.5 7V5ZM502.5 5L497.5 5V7L502.5 7V5ZM492.5 5H487.5V7L492.5 7V5ZM482.5 5L477.5 5V7L482.5 7V5ZM472.5 5H467.5V7H472.5V5ZM462.5 5L457.5 5V7L462.5 7V5ZM452.5 5L447.5 5V7L452.5 7V5ZM442.5 5H437.5V7H442.5V5ZM432.5 5L427.5 5V7L432.5 7V5ZM422.5 5L417.5 5V7L422.5 7V5ZM412.5 5H407.5V7H412.5V5ZM402.5 5L397.5 5V7L402.5 7V5ZM392.5 5L387.5 5V7L392.5 7V5ZM382.5 5L377.5 5V7H382.5V5ZM372.5 5L367.5 5V7L372.5 7V5ZM362.5 5H357.5V7H362.5V5ZM352.5 5L347.5 5V7L352.5 7V5ZM342.5 5L337.5 5V7H342.5V5ZM332.5 5L327.5 5V7L332.5 7V5ZM322.5 5L317.5 5V7L322.5 7V5ZM312.5 5H307.5V7H312.5V5ZM302.5 5L297.5 5V7L302.5 7V5ZM292.5 5L287.5 5V7L292.5 7V5ZM282.5 5H277.5V7H282.5V5ZM272.5 5L267.5 5V7L272.5 7V5ZM262.5 5L257.5 5V7L262.5 7V5ZM252.5 5H247.5V7H252.5V5ZM242.5 5L237.5 5V7L242.5 7V5ZM232.5 5H227.5V7L232.5 7V5ZM222.5 5L217.5 5V7L222.5 7V5ZM212.5 5L207.5 5V7L212.5 7V5ZM202.5 5H197.5V7L202.5 7V5ZM192.5 5L187.5 5V7L192.5 7V5ZM182.5 5H177.5V7H182.5V5ZM172.5 5L167.5 5V7L172.5 7V5ZM162.5 5L157.5 5V7L162.5 7V5ZM152.5 5H147.5V7H152.5V5ZM142.5 5L137.5 5V7L142.5 7V5ZM132.5 5L127.5 5V7L132.5 7V5ZM122.5 5H117.5V7H122.5V5ZM112.5 5L107.5 5V7L112.5 7V5ZM102.5 5L97.5 5V7L102.5 7V5ZM92.5 5L87.5 5V7H92.5V5ZM82.5 5L77.5 5V7L82.5 7V5ZM72.5 5H67.5V7H72.5V5ZM62.5 5L57.5 5V7L62.5 7V5ZM52.5 5L47.5 5V7H52.5V5ZM42.5 5L37.5 5V7L42.5 7V5ZM32.5 5L27.5 5V7L32.5 7V5ZM22.5 5H17.5V7H22.5V5ZM12.5 5L7.5 5V7L12.5 7V5Z" fill="#29AEAA"/>
                                </svg>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='flex justify-end relative'>
                            <div className='content-left flex justify-center items-center w-[58%] px-12 absolute side-line' >
                            <svg width="1020" height="12" viewBox="0 0 1020 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1020 6L1010 0.226497V11.7735L1020 6ZM1012.5 5L1007.5 5V7L1012.5 7V5ZM1002.5 5L997.5 5V7L1002.5 7V5ZM992.5 5H987.5V7H992.5V5ZM982.5 5L977.5 5V7L982.5 7V5ZM972.5 5L967.5 5V7L972.5 7V5ZM962.5 5L957.5 5V7H962.5V5ZM952.5 5L947.5 5V7L952.5 7V5ZM942.5 5H937.5V7L942.5 7V5ZM932.5 5L927.5 5V7L932.5 7V5ZM922.5 5H917.5V7H922.5V5ZM912.5 5L907.5 5V7L912.5 7V5ZM902.5 5L897.5 5V7L902.5 7V5ZM892.5 5H887.5V7H892.5V5ZM882.5 5L877.5 5V7L882.5 7V5ZM872.5 5L867.5 5V7L872.5 7V5ZM862.5 5H857.5V7H862.5V5ZM852.5 5L847.5 5V7L852.5 7V5ZM842.5 5L837.5 5V7L842.5 7V5ZM832.5 5H827.5V7H832.5V5ZM822.5 5L817.5 5V7L822.5 7V5ZM812.5 5H807.5V7L812.5 7V5ZM802.5 5L797.5 5V7L802.5 7V5ZM792.5 5L787.5 5V7L792.5 7V5ZM782.5 5H777.5V7L782.5 7V5ZM772.5 5L767.5 5V7L772.5 7V5ZM762.5 5H757.5V7H762.5V5ZM752.5 5L747.5 5V7L752.5 7V5ZM742.5 5L737.5 5V7L742.5 7V5ZM732.5 5H727.5V7H732.5V5ZM722.5 5L717.5 5V7L722.5 7V5ZM712.5 5L707.5 5V7L712.5 7V5ZM702.5 5H697.5V7H702.5V5ZM692.5 5L687.5 5V7L692.5 7V5ZM682.5 5L677.5 5V7L682.5 7V5ZM672.5 5L667.5 5V7H672.5V5ZM662.5 5L657.5 5V7L662.5 7V5ZM652.5 5H647.5V7H652.5V5ZM642.5 5L637.5 5V7L642.5 7V5ZM632.5 5L627.5 5V7H632.5V5ZM622.5 5L617.5 5V7L622.5 7V5ZM612.5 5L607.5 5V7L612.5 7V5ZM602.5 5H597.5V7H602.5V5ZM592.5 5L587.5 5V7L592.5 7V5ZM582.5 5L577.5 5V7L582.5 7V5ZM572.5 5H567.5V7H572.5V5ZM562.5 5L557.5 5V7L562.5 7V5ZM552.5 5L547.5 5V7L552.5 7V5ZM542.5 5H537.5V7H542.5V5ZM532.5 5L527.5 5V7L532.5 7V5ZM522.5 5H517.5V7L522.5 7V5ZM512.5 5L507.5 5V7L512.5 7V5ZM502.5 5L497.5 5V7L502.5 7V5ZM492.5 5H487.5V7L492.5 7V5ZM482.5 5L477.5 5V7L482.5 7V5ZM472.5 5H467.5V7H472.5V5ZM462.5 5L457.5 5V7L462.5 7V5ZM452.5 5L447.5 5V7L452.5 7V5ZM442.5 5H437.5V7H442.5V5ZM432.5 5L427.5 5V7L432.5 7V5ZM422.5 5L417.5 5V7L422.5 7V5ZM412.5 5H407.5V7H412.5V5ZM402.5 5L397.5 5V7L402.5 7V5ZM392.5 5L387.5 5V7L392.5 7V5ZM382.5 5L377.5 5V7H382.5V5ZM372.5 5L367.5 5V7L372.5 7V5ZM362.5 5H357.5V7H362.5V5ZM352.5 5L347.5 5V7L352.5 7V5ZM342.5 5L337.5 5V7H342.5V5ZM332.5 5L327.5 5V7L332.5 7V5ZM322.5 5L317.5 5V7L322.5 7V5ZM312.5 5H307.5V7H312.5V5ZM302.5 5L297.5 5V7L302.5 7V5ZM292.5 5L287.5 5V7L292.5 7V5ZM282.5 5H277.5V7H282.5V5ZM272.5 5L267.5 5V7L272.5 7V5ZM262.5 5L257.5 5V7L262.5 7V5ZM252.5 5H247.5V7H252.5V5ZM242.5 5L237.5 5V7L242.5 7V5ZM232.5 5H227.5V7L232.5 7V5ZM222.5 5L217.5 5V7L222.5 7V5ZM212.5 5L207.5 5V7L212.5 7V5ZM202.5 5H197.5V7L202.5 7V5ZM192.5 5L187.5 5V7L192.5 7V5ZM182.5 5H177.5V7H182.5V5ZM172.5 5L167.5 5V7L172.5 7V5ZM162.5 5L157.5 5V7L162.5 7V5ZM152.5 5H147.5V7H152.5V5ZM142.5 5L137.5 5V7L142.5 7V5ZM132.5 5L127.5 5V7L132.5 7V5ZM122.5 5H117.5V7H122.5V5ZM112.5 5L107.5 5V7L112.5 7V5ZM102.5 5L97.5 5V7L102.5 7V5ZM92.5 5L87.5 5V7H92.5V5ZM82.5 5L77.5 5V7L82.5 7V5ZM72.5 5H67.5V7H72.5V5ZM62.5 5L57.5 5V7L62.5 7V5ZM52.5 5L47.5 5V7H52.5V5ZM42.5 5L37.5 5V7L42.5 7V5ZM32.5 5L27.5 5V7L32.5 7V5ZM22.5 5H17.5V7H22.5V5ZM12.5 5L7.5 5V7L12.5 7V5ZM2.5 5L0 5V7L2.5 7V5Z" fill="#29AEAA"/>
                            </svg>
                            </div> 
                                <div className='box-right relative text-center  flex justify-center items-center' >
                                    <div className='w-[6.9rem] h-20 relative  flex justify-end items-center  ' >
                                        <img src={BiCir} className="h-10 w-10 absolute z-[0] right-[-20px]" />
                                        <span  className='text-[#FFFFFF] text-[1rem] z-[10] absolute right-[-9px] top-[28px] font-semibold font-Lexend ' >
                                            04
                                        </span>
                                    </div>
                                </div>

                                <div className='content-left flex justify-center items-center w-[46%] px-10' >
                                    <p className='text-[#808D9A] text-[1rem]'>
                                    Billing may be done for client himself or on a branch or franchise.                                    </p>
                                </div>

                            </div>
                        </li>
                        
                        <li>
                            <div className='flex  justify-start relative'>
                                <div className='content-left flex justify-center items-center w-[46%] px-12 ' >
                                    <p className='text-left text-[#808D9A] text-[1rem]'>
                                    File export of bill summery for plugging into your other software for users like banks, exchanges, brokers etc.                                    
                                    </p>
                                </div> 
                                <div className='box-right relative text-center  flex justify-center items-center ' >
                                <div className='w-[6.9rem] h-20 relative  flex justify-start items-center ' >
                                    <img src={BiCir} className="h-10 w-10 absolute z-[0] left-[-30px]" />
                                    <span  className='text-[#FFFFFF] text-[1rem] z-[10] absolute left-[-19px] top-[28px] font-semibold font-Lexend ' >
                                        05
                                    </span>
                                </div>
                                </div>
                                <div className='content-left flex items-center  w-[61%] px-12 absolute side-line1' >
                                <svg width="1020" height="12" viewBox="0 0 1020 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 6L10 11.7735V0.226497L0 6ZM1020 5H1017.5V7H1020V5ZM1012.5 5L1007.5 5V7L1012.5 7V5ZM1002.5 5L997.5 5V7L1002.5 7V5ZM992.5 5H987.5V7H992.5V5ZM982.5 5L977.5 5V7L982.5 7V5ZM972.5 5L967.5 5V7L972.5 7V5ZM962.5 5L957.5 5V7H962.5V5ZM952.5 5L947.5 5V7L952.5 7V5ZM942.5 5H937.5V7L942.5 7V5ZM932.5 5L927.5 5V7L932.5 7V5ZM922.5 5H917.5V7H922.5V5ZM912.5 5L907.5 5V7L912.5 7V5ZM902.5 5L897.5 5V7L902.5 7V5ZM892.5 5H887.5V7H892.5V5ZM882.5 5L877.5 5V7L882.5 7V5ZM872.5 5L867.5 5V7L872.5 7V5ZM862.5 5H857.5V7H862.5V5ZM852.5 5L847.5 5V7L852.5 7V5ZM842.5 5L837.5 5V7L842.5 7V5ZM832.5 5H827.5V7H832.5V5ZM822.5 5L817.5 5V7L822.5 7V5ZM812.5 5H807.5V7L812.5 7V5ZM802.5 5L797.5 5V7L802.5 7V5ZM792.5 5L787.5 5V7L792.5 7V5ZM782.5 5H777.5V7L782.5 7V5ZM772.5 5L767.5 5V7L772.5 7V5ZM762.5 5H757.5V7H762.5V5ZM752.5 5L747.5 5V7L752.5 7V5ZM742.5 5L737.5 5V7L742.5 7V5ZM732.5 5H727.5V7H732.5V5ZM722.5 5L717.5 5V7L722.5 7V5ZM712.5 5L707.5 5V7L712.5 7V5ZM702.5 5H697.5V7H702.5V5ZM692.5 5L687.5 5V7L692.5 7V5ZM682.5 5L677.5 5V7L682.5 7V5ZM672.5 5L667.5 5V7H672.5V5ZM662.5 5L657.5 5V7L662.5 7V5ZM652.5 5H647.5V7H652.5V5ZM642.5 5L637.5 5V7L642.5 7V5ZM632.5 5L627.5 5V7H632.5V5ZM622.5 5L617.5 5V7L622.5 7V5ZM612.5 5L607.5 5V7L612.5 7V5ZM602.5 5H597.5V7H602.5V5ZM592.5 5L587.5 5V7L592.5 7V5ZM582.5 5L577.5 5V7L582.5 7V5ZM572.5 5H567.5V7H572.5V5ZM562.5 5L557.5 5V7L562.5 7V5ZM552.5 5L547.5 5V7L552.5 7V5ZM542.5 5H537.5V7H542.5V5ZM532.5 5L527.5 5V7L532.5 7V5ZM522.5 5H517.5V7L522.5 7V5ZM512.5 5L507.5 5V7L512.5 7V5ZM502.5 5L497.5 5V7L502.5 7V5ZM492.5 5H487.5V7L492.5 7V5ZM482.5 5L477.5 5V7L482.5 7V5ZM472.5 5H467.5V7H472.5V5ZM462.5 5L457.5 5V7L462.5 7V5ZM452.5 5L447.5 5V7L452.5 7V5ZM442.5 5H437.5V7H442.5V5ZM432.5 5L427.5 5V7L432.5 7V5ZM422.5 5L417.5 5V7L422.5 7V5ZM412.5 5H407.5V7H412.5V5ZM402.5 5L397.5 5V7L402.5 7V5ZM392.5 5L387.5 5V7L392.5 7V5ZM382.5 5L377.5 5V7H382.5V5ZM372.5 5L367.5 5V7L372.5 7V5ZM362.5 5H357.5V7H362.5V5ZM352.5 5L347.5 5V7L352.5 7V5ZM342.5 5L337.5 5V7H342.5V5ZM332.5 5L327.5 5V7L332.5 7V5ZM322.5 5L317.5 5V7L322.5 7V5ZM312.5 5H307.5V7H312.5V5ZM302.5 5L297.5 5V7L302.5 7V5ZM292.5 5L287.5 5V7L292.5 7V5ZM282.5 5H277.5V7H282.5V5ZM272.5 5L267.5 5V7L272.5 7V5ZM262.5 5L257.5 5V7L262.5 7V5ZM252.5 5H247.5V7H252.5V5ZM242.5 5L237.5 5V7L242.5 7V5ZM232.5 5H227.5V7L232.5 7V5ZM222.5 5L217.5 5V7L222.5 7V5ZM212.5 5L207.5 5V7L212.5 7V5ZM202.5 5H197.5V7L202.5 7V5ZM192.5 5L187.5 5V7L192.5 7V5ZM182.5 5H177.5V7H182.5V5ZM172.5 5L167.5 5V7L172.5 7V5ZM162.5 5L157.5 5V7L162.5 7V5ZM152.5 5H147.5V7H152.5V5ZM142.5 5L137.5 5V7L142.5 7V5ZM132.5 5L127.5 5V7L132.5 7V5ZM122.5 5H117.5V7H122.5V5ZM112.5 5L107.5 5V7L112.5 7V5ZM102.5 5L97.5 5V7L102.5 7V5ZM92.5 5L87.5 5V7H92.5V5ZM82.5 5L77.5 5V7L82.5 7V5ZM72.5 5H67.5V7H72.5V5ZM62.5 5L57.5 5V7L62.5 7V5ZM52.5 5L47.5 5V7H52.5V5ZM42.5 5L37.5 5V7L42.5 7V5ZM32.5 5L27.5 5V7L32.5 7V5ZM22.5 5H17.5V7H22.5V5ZM12.5 5L7.5 5V7L12.5 7V5Z" fill="#29AEAA"/>
                                </svg>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='flex justify-end relative'>
                            <div className='content-left flex justify-center items-center w-[58%] px-12 absolute side-line' >
                            <svg width="1020" height="12" viewBox="0 0 1020 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1020 6L1010 0.226497V11.7735L1020 6ZM1012.5 5L1007.5 5V7L1012.5 7V5ZM1002.5 5L997.5 5V7L1002.5 7V5ZM992.5 5H987.5V7H992.5V5ZM982.5 5L977.5 5V7L982.5 7V5ZM972.5 5L967.5 5V7L972.5 7V5ZM962.5 5L957.5 5V7H962.5V5ZM952.5 5L947.5 5V7L952.5 7V5ZM942.5 5H937.5V7L942.5 7V5ZM932.5 5L927.5 5V7L932.5 7V5ZM922.5 5H917.5V7H922.5V5ZM912.5 5L907.5 5V7L912.5 7V5ZM902.5 5L897.5 5V7L902.5 7V5ZM892.5 5H887.5V7H892.5V5ZM882.5 5L877.5 5V7L882.5 7V5ZM872.5 5L867.5 5V7L872.5 7V5ZM862.5 5H857.5V7H862.5V5ZM852.5 5L847.5 5V7L852.5 7V5ZM842.5 5L837.5 5V7L842.5 7V5ZM832.5 5H827.5V7H832.5V5ZM822.5 5L817.5 5V7L822.5 7V5ZM812.5 5H807.5V7L812.5 7V5ZM802.5 5L797.5 5V7L802.5 7V5ZM792.5 5L787.5 5V7L792.5 7V5ZM782.5 5H777.5V7L782.5 7V5ZM772.5 5L767.5 5V7L772.5 7V5ZM762.5 5H757.5V7H762.5V5ZM752.5 5L747.5 5V7L752.5 7V5ZM742.5 5L737.5 5V7L742.5 7V5ZM732.5 5H727.5V7H732.5V5ZM722.5 5L717.5 5V7L722.5 7V5ZM712.5 5L707.5 5V7L712.5 7V5ZM702.5 5H697.5V7H702.5V5ZM692.5 5L687.5 5V7L692.5 7V5ZM682.5 5L677.5 5V7L682.5 7V5ZM672.5 5L667.5 5V7H672.5V5ZM662.5 5L657.5 5V7L662.5 7V5ZM652.5 5H647.5V7H652.5V5ZM642.5 5L637.5 5V7L642.5 7V5ZM632.5 5L627.5 5V7H632.5V5ZM622.5 5L617.5 5V7L622.5 7V5ZM612.5 5L607.5 5V7L612.5 7V5ZM602.5 5H597.5V7H602.5V5ZM592.5 5L587.5 5V7L592.5 7V5ZM582.5 5L577.5 5V7L582.5 7V5ZM572.5 5H567.5V7H572.5V5ZM562.5 5L557.5 5V7L562.5 7V5ZM552.5 5L547.5 5V7L552.5 7V5ZM542.5 5H537.5V7H542.5V5ZM532.5 5L527.5 5V7L532.5 7V5ZM522.5 5H517.5V7L522.5 7V5ZM512.5 5L507.5 5V7L512.5 7V5ZM502.5 5L497.5 5V7L502.5 7V5ZM492.5 5H487.5V7L492.5 7V5ZM482.5 5L477.5 5V7L482.5 7V5ZM472.5 5H467.5V7H472.5V5ZM462.5 5L457.5 5V7L462.5 7V5ZM452.5 5L447.5 5V7L452.5 7V5ZM442.5 5H437.5V7H442.5V5ZM432.5 5L427.5 5V7L432.5 7V5ZM422.5 5L417.5 5V7L422.5 7V5ZM412.5 5H407.5V7H412.5V5ZM402.5 5L397.5 5V7L402.5 7V5ZM392.5 5L387.5 5V7L392.5 7V5ZM382.5 5L377.5 5V7H382.5V5ZM372.5 5L367.5 5V7L372.5 7V5ZM362.5 5H357.5V7H362.5V5ZM352.5 5L347.5 5V7L352.5 7V5ZM342.5 5L337.5 5V7H342.5V5ZM332.5 5L327.5 5V7L332.5 7V5ZM322.5 5L317.5 5V7L322.5 7V5ZM312.5 5H307.5V7H312.5V5ZM302.5 5L297.5 5V7L302.5 7V5ZM292.5 5L287.5 5V7L292.5 7V5ZM282.5 5H277.5V7H282.5V5ZM272.5 5L267.5 5V7L272.5 7V5ZM262.5 5L257.5 5V7L262.5 7V5ZM252.5 5H247.5V7H252.5V5ZM242.5 5L237.5 5V7L242.5 7V5ZM232.5 5H227.5V7L232.5 7V5ZM222.5 5L217.5 5V7L222.5 7V5ZM212.5 5L207.5 5V7L212.5 7V5ZM202.5 5H197.5V7L202.5 7V5ZM192.5 5L187.5 5V7L192.5 7V5ZM182.5 5H177.5V7H182.5V5ZM172.5 5L167.5 5V7L172.5 7V5ZM162.5 5L157.5 5V7L162.5 7V5ZM152.5 5H147.5V7H152.5V5ZM142.5 5L137.5 5V7L142.5 7V5ZM132.5 5L127.5 5V7L132.5 7V5ZM122.5 5H117.5V7H122.5V5ZM112.5 5L107.5 5V7L112.5 7V5ZM102.5 5L97.5 5V7L102.5 7V5ZM92.5 5L87.5 5V7H92.5V5ZM82.5 5L77.5 5V7L82.5 7V5ZM72.5 5H67.5V7H72.5V5ZM62.5 5L57.5 5V7L62.5 7V5ZM52.5 5L47.5 5V7H52.5V5ZM42.5 5L37.5 5V7L42.5 7V5ZM32.5 5L27.5 5V7L32.5 7V5ZM22.5 5H17.5V7H22.5V5ZM12.5 5L7.5 5V7L12.5 7V5ZM2.5 5L0 5V7L2.5 7V5Z" fill="#29AEAA"/>
                            </svg>
                            </div> 
                                <div className='box-right relative text-center  flex justify-center items-center' >
                                    <div className='w-[6.9rem] h-20 relative  flex justify-end items-center  ' >
                                        <img src={BiCir} className="h-10 w-10 absolute z-[0] right-[-20px]" />
                                        <span  className='text-[#FFFFFF] text-[1rem] z-[10] absolute right-[-9px] top-[28px] font-semibold font-Lexend ' >
                                            06
                                        </span>
                                    </div>
                                </div>

                                <div className='content-left flex justify-center items-center w-[46%] px-10' >
                                    <p className='text-[#808D9A] text-[1rem]'>
                                    Specifying minimum bill amount below which amounts will be carried forward to next billing cycle for accumulation.                                    </p>
                                </div>

                            </div>
                        </li>
                        
                        <li>
                            <div className='flex  justify-start relative'>
                                <div className='content-left flex justify-center items-center w-[46%] px-12 ' >
                                    <p className='text-left text-[#808D9A] text-[1rem]'>
                                    Broker DPs may redirect charges attributable to broking division to other account or offer NIL charges on them.                                    
                                    </p>
                                </div> 
                                <div className='box-right relative text-center  flex justify-center items-center ' >
                                <div className='w-[6.9rem] h-20 relative  flex justify-start items-center ' >
                                    <img src={BiCir} className="h-10 w-10 absolute z-[0] left-[-30px]" />
                                    <span  className='text-[#FFFFFF] text-[1rem] z-[10] absolute left-[-19px] top-[28px] font-semibold font-Lexend ' >
                                        05
                                    </span>
                                </div>
                                </div>
                                <div className='content-left flex items-center  w-[61%] px-12 absolute side-line1' >
                                <svg width="1020" height="12" viewBox="0 0 1020 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 6L10 11.7735V0.226497L0 6ZM1020 5H1017.5V7H1020V5ZM1012.5 5L1007.5 5V7L1012.5 7V5ZM1002.5 5L997.5 5V7L1002.5 7V5ZM992.5 5H987.5V7H992.5V5ZM982.5 5L977.5 5V7L982.5 7V5ZM972.5 5L967.5 5V7L972.5 7V5ZM962.5 5L957.5 5V7H962.5V5ZM952.5 5L947.5 5V7L952.5 7V5ZM942.5 5H937.5V7L942.5 7V5ZM932.5 5L927.5 5V7L932.5 7V5ZM922.5 5H917.5V7H922.5V5ZM912.5 5L907.5 5V7L912.5 7V5ZM902.5 5L897.5 5V7L902.5 7V5ZM892.5 5H887.5V7H892.5V5ZM882.5 5L877.5 5V7L882.5 7V5ZM872.5 5L867.5 5V7L872.5 7V5ZM862.5 5H857.5V7H862.5V5ZM852.5 5L847.5 5V7L852.5 7V5ZM842.5 5L837.5 5V7L842.5 7V5ZM832.5 5H827.5V7H832.5V5ZM822.5 5L817.5 5V7L822.5 7V5ZM812.5 5H807.5V7L812.5 7V5ZM802.5 5L797.5 5V7L802.5 7V5ZM792.5 5L787.5 5V7L792.5 7V5ZM782.5 5H777.5V7L782.5 7V5ZM772.5 5L767.5 5V7L772.5 7V5ZM762.5 5H757.5V7H762.5V5ZM752.5 5L747.5 5V7L752.5 7V5ZM742.5 5L737.5 5V7L742.5 7V5ZM732.5 5H727.5V7H732.5V5ZM722.5 5L717.5 5V7L722.5 7V5ZM712.5 5L707.5 5V7L712.5 7V5ZM702.5 5H697.5V7H702.5V5ZM692.5 5L687.5 5V7L692.5 7V5ZM682.5 5L677.5 5V7L682.5 7V5ZM672.5 5L667.5 5V7H672.5V5ZM662.5 5L657.5 5V7L662.5 7V5ZM652.5 5H647.5V7H652.5V5ZM642.5 5L637.5 5V7L642.5 7V5ZM632.5 5L627.5 5V7H632.5V5ZM622.5 5L617.5 5V7L622.5 7V5ZM612.5 5L607.5 5V7L612.5 7V5ZM602.5 5H597.5V7H602.5V5ZM592.5 5L587.5 5V7L592.5 7V5ZM582.5 5L577.5 5V7L582.5 7V5ZM572.5 5H567.5V7H572.5V5ZM562.5 5L557.5 5V7L562.5 7V5ZM552.5 5L547.5 5V7L552.5 7V5ZM542.5 5H537.5V7H542.5V5ZM532.5 5L527.5 5V7L532.5 7V5ZM522.5 5H517.5V7L522.5 7V5ZM512.5 5L507.5 5V7L512.5 7V5ZM502.5 5L497.5 5V7L502.5 7V5ZM492.5 5H487.5V7L492.5 7V5ZM482.5 5L477.5 5V7L482.5 7V5ZM472.5 5H467.5V7H472.5V5ZM462.5 5L457.5 5V7L462.5 7V5ZM452.5 5L447.5 5V7L452.5 7V5ZM442.5 5H437.5V7H442.5V5ZM432.5 5L427.5 5V7L432.5 7V5ZM422.5 5L417.5 5V7L422.5 7V5ZM412.5 5H407.5V7H412.5V5ZM402.5 5L397.5 5V7L402.5 7V5ZM392.5 5L387.5 5V7L392.5 7V5ZM382.5 5L377.5 5V7H382.5V5ZM372.5 5L367.5 5V7L372.5 7V5ZM362.5 5H357.5V7H362.5V5ZM352.5 5L347.5 5V7L352.5 7V5ZM342.5 5L337.5 5V7H342.5V5ZM332.5 5L327.5 5V7L332.5 7V5ZM322.5 5L317.5 5V7L322.5 7V5ZM312.5 5H307.5V7H312.5V5ZM302.5 5L297.5 5V7L302.5 7V5ZM292.5 5L287.5 5V7L292.5 7V5ZM282.5 5H277.5V7H282.5V5ZM272.5 5L267.5 5V7L272.5 7V5ZM262.5 5L257.5 5V7L262.5 7V5ZM252.5 5H247.5V7H252.5V5ZM242.5 5L237.5 5V7L242.5 7V5ZM232.5 5H227.5V7L232.5 7V5ZM222.5 5L217.5 5V7L222.5 7V5ZM212.5 5L207.5 5V7L212.5 7V5ZM202.5 5H197.5V7L202.5 7V5ZM192.5 5L187.5 5V7L192.5 7V5ZM182.5 5H177.5V7H182.5V5ZM172.5 5L167.5 5V7L172.5 7V5ZM162.5 5L157.5 5V7L162.5 7V5ZM152.5 5H147.5V7H152.5V5ZM142.5 5L137.5 5V7L142.5 7V5ZM132.5 5L127.5 5V7L132.5 7V5ZM122.5 5H117.5V7H122.5V5ZM112.5 5L107.5 5V7L112.5 7V5ZM102.5 5L97.5 5V7L102.5 7V5ZM92.5 5L87.5 5V7H92.5V5ZM82.5 5L77.5 5V7L82.5 7V5ZM72.5 5H67.5V7H72.5V5ZM62.5 5L57.5 5V7L62.5 7V5ZM52.5 5L47.5 5V7H52.5V5ZM42.5 5L37.5 5V7L42.5 7V5ZM32.5 5L27.5 5V7L32.5 7V5ZM22.5 5H17.5V7H22.5V5ZM12.5 5L7.5 5V7L12.5 7V5Z" fill="#29AEAA"/>
                                </svg>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className='flex justify-end relative'>
                            <div className='content-left flex justify-center items-center w-[58%] px-12 absolute side-line' >
                            <svg width="1020" height="12" viewBox="0 0 1020 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1020 6L1010 0.226497V11.7735L1020 6ZM1012.5 5L1007.5 5V7L1012.5 7V5ZM1002.5 5L997.5 5V7L1002.5 7V5ZM992.5 5H987.5V7H992.5V5ZM982.5 5L977.5 5V7L982.5 7V5ZM972.5 5L967.5 5V7L972.5 7V5ZM962.5 5L957.5 5V7H962.5V5ZM952.5 5L947.5 5V7L952.5 7V5ZM942.5 5H937.5V7L942.5 7V5ZM932.5 5L927.5 5V7L932.5 7V5ZM922.5 5H917.5V7H922.5V5ZM912.5 5L907.5 5V7L912.5 7V5ZM902.5 5L897.5 5V7L902.5 7V5ZM892.5 5H887.5V7H892.5V5ZM882.5 5L877.5 5V7L882.5 7V5ZM872.5 5L867.5 5V7L872.5 7V5ZM862.5 5H857.5V7H862.5V5ZM852.5 5L847.5 5V7L852.5 7V5ZM842.5 5L837.5 5V7L842.5 7V5ZM832.5 5H827.5V7H832.5V5ZM822.5 5L817.5 5V7L822.5 7V5ZM812.5 5H807.5V7L812.5 7V5ZM802.5 5L797.5 5V7L802.5 7V5ZM792.5 5L787.5 5V7L792.5 7V5ZM782.5 5H777.5V7L782.5 7V5ZM772.5 5L767.5 5V7L772.5 7V5ZM762.5 5H757.5V7H762.5V5ZM752.5 5L747.5 5V7L752.5 7V5ZM742.5 5L737.5 5V7L742.5 7V5ZM732.5 5H727.5V7H732.5V5ZM722.5 5L717.5 5V7L722.5 7V5ZM712.5 5L707.5 5V7L712.5 7V5ZM702.5 5H697.5V7H702.5V5ZM692.5 5L687.5 5V7L692.5 7V5ZM682.5 5L677.5 5V7L682.5 7V5ZM672.5 5L667.5 5V7H672.5V5ZM662.5 5L657.5 5V7L662.5 7V5ZM652.5 5H647.5V7H652.5V5ZM642.5 5L637.5 5V7L642.5 7V5ZM632.5 5L627.5 5V7H632.5V5ZM622.5 5L617.5 5V7L622.5 7V5ZM612.5 5L607.5 5V7L612.5 7V5ZM602.5 5H597.5V7H602.5V5ZM592.5 5L587.5 5V7L592.5 7V5ZM582.5 5L577.5 5V7L582.5 7V5ZM572.5 5H567.5V7H572.5V5ZM562.5 5L557.5 5V7L562.5 7V5ZM552.5 5L547.5 5V7L552.5 7V5ZM542.5 5H537.5V7H542.5V5ZM532.5 5L527.5 5V7L532.5 7V5ZM522.5 5H517.5V7L522.5 7V5ZM512.5 5L507.5 5V7L512.5 7V5ZM502.5 5L497.5 5V7L502.5 7V5ZM492.5 5H487.5V7L492.5 7V5ZM482.5 5L477.5 5V7L482.5 7V5ZM472.5 5H467.5V7H472.5V5ZM462.5 5L457.5 5V7L462.5 7V5ZM452.5 5L447.5 5V7L452.5 7V5ZM442.5 5H437.5V7H442.5V5ZM432.5 5L427.5 5V7L432.5 7V5ZM422.5 5L417.5 5V7L422.5 7V5ZM412.5 5H407.5V7H412.5V5ZM402.5 5L397.5 5V7L402.5 7V5ZM392.5 5L387.5 5V7L392.5 7V5ZM382.5 5L377.5 5V7H382.5V5ZM372.5 5L367.5 5V7L372.5 7V5ZM362.5 5H357.5V7H362.5V5ZM352.5 5L347.5 5V7L352.5 7V5ZM342.5 5L337.5 5V7H342.5V5ZM332.5 5L327.5 5V7L332.5 7V5ZM322.5 5L317.5 5V7L322.5 7V5ZM312.5 5H307.5V7H312.5V5ZM302.5 5L297.5 5V7L302.5 7V5ZM292.5 5L287.5 5V7L292.5 7V5ZM282.5 5H277.5V7H282.5V5ZM272.5 5L267.5 5V7L272.5 7V5ZM262.5 5L257.5 5V7L262.5 7V5ZM252.5 5H247.5V7H252.5V5ZM242.5 5L237.5 5V7L242.5 7V5ZM232.5 5H227.5V7L232.5 7V5ZM222.5 5L217.5 5V7L222.5 7V5ZM212.5 5L207.5 5V7L212.5 7V5ZM202.5 5H197.5V7L202.5 7V5ZM192.5 5L187.5 5V7L192.5 7V5ZM182.5 5H177.5V7H182.5V5ZM172.5 5L167.5 5V7L172.5 7V5ZM162.5 5L157.5 5V7L162.5 7V5ZM152.5 5H147.5V7H152.5V5ZM142.5 5L137.5 5V7L142.5 7V5ZM132.5 5L127.5 5V7L132.5 7V5ZM122.5 5H117.5V7H122.5V5ZM112.5 5L107.5 5V7L112.5 7V5ZM102.5 5L97.5 5V7L102.5 7V5ZM92.5 5L87.5 5V7H92.5V5ZM82.5 5L77.5 5V7L82.5 7V5ZM72.5 5H67.5V7H72.5V5ZM62.5 5L57.5 5V7L62.5 7V5ZM52.5 5L47.5 5V7H52.5V5ZM42.5 5L37.5 5V7L42.5 7V5ZM32.5 5L27.5 5V7L32.5 7V5ZM22.5 5H17.5V7H22.5V5ZM12.5 5L7.5 5V7L12.5 7V5ZM2.5 5L0 5V7L2.5 7V5Z" fill="#29AEAA"/>
                            </svg>
                            </div> 
                                <div className='box-right relative text-center  flex justify-center items-center' >
                                    <div className='w-[6.9rem] h-20 relative  flex justify-end items-center  ' >
                                        <img src={BiCir} className="h-10 w-10 absolute z-[0] right-[-20px]" />
                                        <span  className='text-[#FFFFFF] text-[1rem] z-[10] absolute right-[-9px] top-[28px] font-semibold font-Lexend ' >
                                            08
                                        </span>
                                    </div>
                                </div>

                                <div className='content-left flex justify-center items-center w-[46%] px-10' >
                                    <p className='text-[#808D9A] text-[1rem]'>
                                    Forwarding detailed bill to client via E-mail to who are provided summarised bills in print.                                    </p>
                                </div>

                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
export default Billing;