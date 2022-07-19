import React from 'react';
const dataList = [
    {content:"Complete demat request management system right from entering data and uploading file to DPM system, printing of covering letters, generating courier lots by courier docket No."},
    {content:"Keeping track of courier details and over due demat requests."},
]



const DematRequest = ()=>{
    return (
        <>
        <section id="demate-request" className='text-gray-600 body-font bg-[#F4FAFF] py-20 '>
            <div className='container relative lg:px-20 mx-auto px-0' >
                <div className='container-title'>
                    <h2 className='title text-lg lg:text-2xl font-bold sm:text-3xl md:text-3xl pt-5 pb-0 text-[#0A2A4A] relative text-center 
                     '>Demat Requests</h2>
                    <div className="rounded-full w-[60px] h-[60px] mx-auto  mt-10 bg-gradient-to-r p-[30px] from-[#0080F6]  via-[#05C876]  to-[#6EE7B7] flex justify-center items-center z-10
                    
                    before:conten-[''] before:h-[2.5rem] before:w-[2px]  before:bg-[green]  before:absolute before:right[42.5rem]
                    before:top-[3.2rem] 
                    before:z-0
                    ">
                            <div className="flex flex-col justify-between h-full bg-white text-white rounded-full w-[15px] h-[15px] p-[1rem] bg-white z-10 ">
                            </div>
                    </div>
                </div>

                <div className='absolute border-2 border-[#29AEAA] h-[100%] w-[58%] left-[21%] top-[34%]'>

                </div>
                <div className=' grid grid-cols-2  gap-x-[25rem] gap-y-[4rem] mt-10 mb-10 z-10 '>
                    {dataList.map((singleList,index)=>(
                        <div className='rounded-lg bg-white  flex items-center justify-center  
                            relative z-10
                            after:content-[""] after:bg-[#D7F4EE] after:absolute after:h-[10rem]  after:w-[10rem]
                            after:rotate-[45deg] after:z-0 shadow-lg 
                        ' key={index} >
                            <div className='rounded-lg bg-white h-[10rem] flex items-center justify-center lg:p-10 p-5 overflow-auto text-[#808D9A]
                            relative z-10'>
                                {singleList.content}
                            </div>

                            {(index%2===0) ? <div className="block   relative  
                                after:bg-[#D7F4EE] after:content-[''] after:w-[5rem] after:h-[5rem] after:border-dashed-[2px] after:absolute after:lg:left-[9.5rem] after:md:left-[10rem] after:rotate-[45deg] after:top-[-3rem]
                                 before:content-[''] before:w-[26rem] before:h-[5rem]  before:absolute before:left-[auto]  before:top-[-0.5rem] before:border-t-[2px] before:border-dashed before:border-[green] 
                            "></div> : ""}
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}
export default DematRequest;