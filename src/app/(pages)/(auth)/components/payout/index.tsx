import React from 'react'

export const Payout = () => {
  return (
    <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center  lg:grid-cols-4  gap-4">
              <div className="w-full p-4 max-w-[258.25px] rounded-xl bg-white border-[1px] border-[#D0D5DD]">
                <div className="">
                  <img src="/payoutimges/Payaneer.png" alt="" />
                </div>
                <div className="pt-3">
                  <h1 className="font-medium text-[#4D525A] font-urbanist leading-[24px] text-[16px]">
                    Payoneer
                  </h1>
                </div>
              </div>
              <div className="w-full p-4 max-w-[258.25px] rounded-xl bg-white border-[1px] border-[#D0D5DD]">
                <div className="">
                  <img src="/payoutimges/Mastercard.png" alt="" />
                </div>
                <div className="pt-3">
                  <h1 className="font-medium text-[#4D525A] font-urbanist leading-[24px] text-[16px]">
                    Mastercard
                  </h1>
                </div>
              </div>
              <div className="w-full p-4 max-w-[258.25px] rounded-xl bg-white border-[1px] border-[#D0D5DD]">
                <div className="">
                  <img src="/payoutimges/Paypal.png" alt="" />
                </div>
                <div className="pt-3">
                  <h1 className="font-medium text-[#4D525A] font-urbanist leading-[24px] text-[16px]">
                    Paypal
                  </h1>
                </div>
              </div>
              <div className="w-full p-4 max-w-[258.25px] rounded-xl bg-white border-[1px] border-[#D0D5DD]">
                <div className="">
                  <img src="/payoutimges/Stripe.png" alt="" />
                </div>
                <div className="pt-3">
                  <h1 className="font-medium text-[#4D525A] font-urbanist leading-[24px] text-[16px]">
                    Stripe
                  </h1>
                </div>
              </div>
            </div>
          </div>
  )
}
