import React from 'react'
import browsedress from '../../assets/Home/browsedress.svg'
import causal from '../../assets/Home/causal.svg'
import formal from '../../assets/Home/formal.svg'
import party from '../../assets/Home/party.svg' 
import gym from '../../assets/Home/gym.svg'

const browsedressstyle = () => {
  return (
    <div className='flex flex-col items-center bg-[#F2F0F1] w-11/12 justify-center m-auto rounded-[20px] mt-4 lg:pt-[40px] mb-6 '>

        <div className='image-browse-dress'>
            <img src={browsedress} alt="" />
        </div>

        {/* <div className="images  grid grid-cols-1 gap-3 lg:grid-cols-2 lg:w-[980px] w-[280px] mt-4 lg:mt-[50px]"> */}
        <div className="images grid grid-rows-1 lg:grid-rows-2 lg:w-[980px] w-[280px] mt-4 lg:mt-[50px] lg:mb-[50px]">

                <div className="lg:flex lg:flex-cols gap-3 justify-center mb-3">
                    {/* <div className="flex-1 causal_image rounded-[20px] gap-3 "> */}
                        <img className='lg:flex-1 rounded-[20px] lg:w-full lg:h-[289px]' src={causal} alt="" />
                    {/* </div> */}
                    {/* <div className="flex-2 formal_image"> */}
                        <img className='lg:flex-2 rounded-[20px] lg:w-full lg:h-[289px]' src={formal} alt="" />
                    {/* </div> */}
                </div>
                <div className="flex flex-cols gap-3 justify-center">
                    {/* <div className="flex-2 party_image bg-white rounded-[20px]"> */}
                        {/* <img className='w-[260px]  rounded-[20px] lg:w-[780px] 'src={party} alt="" /> */}
                        <img className='flex-2 rounded-[20px] lg:h-[289px]' src={party} alt="" />
                    {/* </div> */}
                    {/* <div className="flex-1 gym_image bg-white rounded-[20px]"> */}
                        {/* <img  className='w-[200px] h-[110px] rounded-[20px] lg:w-[380px]'src={gym} alt="" /> */}
                        <img  className='flex-1 rounded-[20px] lg:h-[289px]' src={gym} alt="" />
                    {/* </div> */}
                
            </div>
        </div>




    </div>
  )
}

export default browsedressstyle