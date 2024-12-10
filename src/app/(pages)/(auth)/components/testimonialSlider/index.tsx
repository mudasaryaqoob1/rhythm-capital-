import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Modules Declaration
// const swiperModules = [Navigation, Pagination, Autoplay];

const SliderComponent = () => {
  return (
    <div className="swiper-wrapper ">
      <Swiper
        // modules={swiperModules}
        // spaceBetween={50}
        // slidesPerView={1}
        // navigation={{

        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // }}
        // pagination={{
        //   clickable: true,
        //   el: '.swiper-pagination',
        // }}
        // autoplay={{ delay: 3000 }}
        // loop
        className="swiper-container"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="slider-card flex flex-col justify-center">
            <div className="">
            <button className=' px-[8px] py-[2px] font-urbanist text-[8.12px] leading-[12.18px] border-[0.68px] rounded-[6821.86px]'>$147/ Month</button>

            </div>
            <h2 className='text-[24.35px] font-urbanist leading-[29px] mt-2 space-x-1'>25K Full</h2>
            <p className='text-[10.82px] leading-[16.24px]'>Starting Capital $25,000</p>
            <button className=' bg-[#C1F338] border-[#89AD28] mt-[10px] border-[0.68px] rounded-[5.46px] text-[#022213] px-[86px] py-[6px] text-[9.47px] leading-[13.53px]'>Rithmic</button>
            <div className="flex justify-between  mt-[10.82px]">
            <p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'>Contracts: </p><p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'> 4 (40 Micros)</p>
            </div>
            <div className="flex justify-between  mt-[10.82px]">
            <p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'>Profit Goal: </p><p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'>$1,500</p>
            </div>
            <div className="flex justify-between  mt-[10.82px]">
            <p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'>Trailing Threshold: </p><p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'> $1,500</p>
            </div>
            <div className="flex justify-between  mt-[10.82px]">
            <p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'>Daily Drawdown: </p><p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'>None</p>
            </div> <div className="flex justify-between  mt-[10.82px]">
            <p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'>NinjaTrader License: </p><p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'>Included</p>
            </div> <div className="flex justify-between  mt-[10.82px]">
            <p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'>Real-Time Fees: </p><p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'> Included</p>
            </div>
           
          </div>
        </SwiperSlide>

        {/* Slide 2 */}/
        <SwiperSlide>
        <div className="slider-card flex flex-col justify-center">
            <div className="">
            <button className=' px-[8px] py-[2px] font-urbanist text-[8.12px] leading-[12.18px] border-[0.68px] rounded-[6821.86px]'>$147/ Month</button>

            </div>
            <h2 className='text-[24.35px] font-urbanist leading-[29px] mt-2 space-x-1'>25K Full</h2>
            <p className='text-[10.82px] leading-[16.24px]'>Starting Capital $25,000</p>
            <button className=' bg-[#C1F338] border-[#89AD28] mt-[10px] border-[0.68px] rounded-[5.46px] text-[#022213] px-[86px] py-[6px] text-[9.47px] leading-[13.53px]'>Rithmic</button>
            <div className="flex justify-between  mt-[10.82px]">
            <p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'>Contracts: </p><p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'> 4 (40 Micros)</p>
            </div>
            <div className="flex justify-between  mt-[10.82px]">
            <p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'>Profit Goal: </p><p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'>$1,500</p>
            </div>
            <div className="flex justify-between  mt-[10.82px]">
            <p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'>Trailing Threshold: </p><p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'> $1,500</p>
            </div>
            <div className="flex justify-between  mt-[10.82px]">
            <p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'>Daily Drawdown: </p><p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'>None</p>
            </div> <div className="flex justify-between  mt-[10.82px]">
            <p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'>NinjaTrader License: </p><p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'>Included</p>
            </div> <div className="flex justify-between  mt-[10.82px]">
            <p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'>Real-Time Fees: </p><p  className='text-[10.82px] leading-[16.24px] font-normal font-urbanist'> Included</p>
            </div>
           
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div className="flex justify-between items-center mt-[10px] z-20">
        <button className="swiper-button-prev "></button> 
        <div className="swiper-pagination">  </div> 
        <button className="swiper-button-next"></button> 
      </div> */}
    </div>
  );
};

export default SliderComponent;
