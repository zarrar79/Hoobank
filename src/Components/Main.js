import React from 'react'
import Star from './Star.png'
import Verify from './Verify.png'
import Telegram from './Telegram.png'
import PayPal from './Paypal.png'
export const Main = () => {
    return (
        <>
            {/* background */}
            <div className='bg-[#0c101a] pt-[0.5px]'>
                {/* fluid container */}
                <div className='max-w-[1100px] mx-auto large'>
                    {/* Parent */}
                    <div>
                        {/* grid */}
                        <div className='grid_container grid grid-cols-2 font-Poppins mt-28'>
                            {/* left */}
                            <div>
                                {/* left parent */}
                                <div className='space-y-5'>
                                    {/* large */}
                                    <div className='grid_container_left text-[#ffff] font-[600] text-[48px] leading-[76.8px]'>You do the business, we’ll handle the money.</div>
                                    {/* small */}
                                    <div className='grid_container_left font-[400] text-[18px] text-[#FFFFFFB2]'>With the right credit card, you can improve your financial life by building credit,
                                        earning rewards and saving money. But with hundreds of credit cards on the market.</div>
                                    {/* button */}
                                    <div className='grid_container_button'><button className='hover:transition hover:duration-[0.4s] transition duration-[0.4s] mt-7 text-center background_main text-[#00040E] text-[18px] font-[500] py-4 px-8 rounded-[10px]'>Get Started</button></div>
                                </div>
                            </div>
                            {/* right */}
                            <div>
                                {/* right parent */}
                                <div className='right_container space-y-9 ml-24 mt-7'>
                                    {/* first container */}
                                    <div>
                                        {/* inner content */}
                                        <div className='flex items-center ml-4'>
                                            {/* img */}
                                            <div><img src={Star}></img></div>
                                            {/* text */}
                                            <div className='space-y-1 ml-5'>
                                                {/* header */}
                                                <div className='font-[600] text-[18px] text-[#ffff]'>Rewards</div>
                                                {/* small */}
                                                <div className='font-[400] text-[16px] text-[#FFFFFFB2]'>The best credit cards offer some
                                                    tantalizing combinations of promotions and prizes</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* second container */}
                                    <div className='container_bg p-4 rounded-3xl'>
                                        {/* inner content */}
                                        <div className='flex items-center'>
                                            {/* img */}
                                            <div><img src={Verify}></img></div>
                                            {/* text */}
                                            <div className='space-y-1 ml-5'>
                                                {/* header */}
                                                <div className='font-[600] text-[18px] text-[#ffff]'>100% Secured</div>
                                                {/* small */}
                                                <div className='font-[400] text-[16px] text-[#FFFFFFB2]'>We take proactive steps make sure your information and
                                                    transactions are secure.</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* third continer */}
                                    <div>
                                        {/* inner content */}
                                        <div className='flex items-center ml-4'>
                                            {/* img */}
                                            <div><img src={Telegram}></img></div>
                                            {/* text */}
                                            <div className='space-y-1 ml-5'>
                                                {/* header */}
                                                <div className='font-[600] text-[18px] text-[#ffff]'>Balance Transfer</div>
                                                {/* small */}
                                                <div className='font-[400] text-[16px] text-[#FFFFFFB2]'>A balance transfer credit card can save you a lot
                                                    of money in interest charges.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Cards Section */}
                        <div className='font-Poppins'>
                            {/* left */}
                            <div className='relative'>
                                {/* PayPal Card */}
                                <div className='max-w-[227px] h-[216px] container_bg px-6 py-6 rounded-[10px]'>
                                    {/* Inner Parent */}
                                    <div className='space-y-5 paypal_background'>
                                        {/* img + text */}
                                        <div className='flex'>
                                            {/* img */}
                                            <div className='relative p-7 bg-white w-[56px] h-[56px] rounded-full'>
                                                <div className='absolute bottom-4 right-4 top-4 left-4'><img src={PayPal}></img></div>
                                            </div>
                                            {/* text */}
                                            <div className='ml-[14px]'>
                                                {/* head */}
                                                <div className='font-[600] text-[24px] text-[#ffff]'>Paypal</div>
                                                {/* small */}
                                                <div className='font-[400] text-[12px] text-[#FFFFFFB2]'>Checkout</div>
                                            </div>
                                        </div>
                                        {/* text + btn */}
                                        <div className='flex justify-between items-center'>
                                            {/* text */}
                                            <div>
                                                {/* small */}
                                                <div className='text-[12px] font-[400] text-[#FFFFFFB2]'>Total</div>
                                                {/* head */}
                                                <div className='text-[18px] font-[500] text-[#ffff]'>$210</div>
                                            </div>
                                            {/* btn */}
                                            <div><button className='font-[400] text-[12px] background_3 px-3 py-2  border-solid border rounded border-[#49d0dc]'>Change</button></div>
                                        </div>
                                        {/* button */}
                                        <div><button className='rounded-xl px-[68px] py-[9px] font-[500] text-[12px] text-[#00030D] background_main'>Make Payment</button></div>
                                    </div>
                                </div>
                                {/* social Card */}
                                <div>
                                    {/* Inner Parent */}
                                    <div>
                                        {/* header */}
                                        <div></div>
                                        {/* box 1 */}
                                        <div>
                                            {/* left */}
                                            <div>
                                                {/* image box */}
                                                <div></div>
                                                {/* text box */}
                                                <div></div>
                                            </div>
                                            {/* right */}
                                            <div>
                                                {/* image */}
                                                <div></div>
                                                {/* text */}
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* bar */}
                            </div>
                            {/* right */}
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
