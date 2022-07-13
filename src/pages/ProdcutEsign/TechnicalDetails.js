import React from "react";

function TechnicalDetails() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6  ">


          <div className=' rounded-xl h-30 mx-auto mb-10 mt-0 border-technical p-[1.5px] from-[#0FCE7E] via-[#0080F6] to-[#9333EA] w-full min-w-min'  >
            <div className='flex  justify-center h-full bg-white text-white rounded-lg p-4 '  >
              <div className='text-[#0A2A4A] text-center text-xl font-medium p-4 place-content-center justify-center '>
                <div className='flex items-center place-content-center justify-center'>
                  <div><svg width="98" height="12" viewBox="0 0 98 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M97.7735 6L92 0.226497L86.2265 6L92 11.7735L97.7735 6ZM92 5L-8.74228e-08 5.00001L8.74228e-08 7.00001L92 7L92 5Z" fill="#92C8FB" />
                  </svg></div>
                  <div className='px-[1rem] text-center place-content-center justify-center'>Technical Details</div>
                  <div><svg width="98" height="12" viewBox="0 0 98 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.226494 6.00001L6 11.7735L11.7735 6.00001L6 0.226505L0.226494 6.00001ZM98 5L6 5.00001L6 7.00001L98 7L98 5Z" fill="#92C8FB" />
                  </svg></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TechnicalDetails;
