import Logo from './hoo.png'
import Discount from './Discount.png'
import Arrow from './Arrow.png'
import AI from './AI.png'
import Line from './Line.png'
export const Hero = () => {
    const display = () => {
        const menuElements = document.getElementsByClassName('menuNew');

        // Loop through each element with the 'menuNew' class and toggle its display style
        for (let i = 0; i < menuElements.length; i++) {
            if (menuElements[i].style.display === "block") {
                menuElements[i].style.display = "none";
            } else {
                menuElements[i].style.display = "block";
            }
        }
    }
    return (
        // background and parent
        <>
            <div className='background pt-[0.1px] pb-10'>
                {/* nav max-width */}
                <div className='mx-auto max-w-[1050px] mt-7 large'>
                    {/* nav parent */}
                    <div className='font-Poppins flex justify-between'>
                        {/* left */}
                        <div>
                            {/* image+text */}
                            <div className='flex items-center'>
                                {/* image */}
                                <div><img src={Logo}></img></div>
                                {/* text */}
                                <div className='font-[600] text-[#ffff] text-[18px] ml-[2px]'>Hoo<span className='text-[#5CE1E6]'>Bank</span></div>
                            </div>
                        </div>
                        {/* right */}
                        <div className=''>
                            {/* components */}
                            <div className='r_compo font-[400] text-[16px] text-[#FFFFFFB2] flex space-x-16'>
                                {/* texts */}
                                <div className='hover:text-[#ffff] transition duration-[0.6s] hover:transition hover:duration-[0.6s] cursor-pointer'>Home</div>
                                <div className='hover:text-[#ffff] transition duration-[0.6s] hover:transition hover:duration-[0.6s] cursor-pointer'>About Us</div>
                                <div className='hover:text-[#ffff] transition duration-[0.6s] hover:transition hover:duration-[0.6s] cursor-pointer'>Features</div>
                                <div className='hover:text-[#fff] transition duration-[0.6s] hover:transition hover:duration-[0.6s] cursor-pointer'>Solution</div>
                            </div>
                            {/* Hamburger */}
                            <div id="menuToggle" onClick={display}>

                                <input type="checkbox" />


                                <span></span>
                                <span></span>
                                <span></span>


                                <ul id="menu">
                                    <a href="#"><li>Home</li></a>
                                    <a href="#"><li>About</li></a>
                                    <a href="#"><li>Info</li></a>
                                    <a href="#"><li>Contact</li></a>
                                    <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
                                </ul>
                            </div>
                            <div className='menuNew bg-[#080c17] custom-shadow space-y-5 p-6 rounded absolute top-16 right-11 hidden'>
                                <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Home</div>
                                <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>About Us</div>
                                <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Features</div>
                                <div className='hover:text-[#494a4c] transition duration-[0.6s] hover:transition hover:duration-[0.6s] text-[16px] font-medium text-white cursor-pointer'>Solution</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* fluid container */}
            <div className='background pt-[0.1px]' >
                {/* text +image +mx-width */}

                <div className='mx-auto max-w-[1050px] large'>
                    {/* image + text */}
                    <div className='text_center text_img font-Poppin mt-5'>
                        {/* text */}
                        <div className='text_center mt-[105px]'>
                            {/* strip */}
                            <div className='text_center_1 mb-3 background_1 flex max-w-[408px] p-[0.3rem] items-center rounded-md space-x-3'>
                                {/* image */}
                                <div ><img src={Discount}></img></div>
                                {/* text */}
                                <div className='strip font-Poppins text-[18px] font-[400] text-[#FFFFFF99]'><span className='text-[#ffff]'>20%</span> DISCOUNT FOR <span className='text-[#ffff]'>1 MONTH</span> ACCOUNT</div>
                            </div>
                            {/* b-text and round */}
                            <div className='relative'>
                                {/* b-text */}
                                <div className='next_generation text-[72px] font-[600] text-[#ffff] leading-[100.8px]'>
                                    The Next<br></br> <span className='background_3'>Generation</span><br></br> Payment Method.
                                </div>
                                {/* wrap absolute */}
                                <div className='absolute left-[28rem] top-2'>
                                    {/* round + img */}
                                    <div className='get_start hover:bg-[#49454599] cursor-pointer transition duration-[0.6s] hover:transition hover:duration-[0.6s] p-8 flex justify-center border-[#49d0dc] relative rounded-full border-[1.5px] max-w-[200px] h-[130px]'>
                                        {/*round  */}
                                        <div className='flex justify-center text-[18px] font-[500] background_4 mt-1'>Get<br></br>Started</div>
                                        {/* img */}
                                        <div className='left-[3.7rem] top-[34px] absolute text-center'><img src={Arrow}></img></div>
                                    </div>
                                </div>
                            </div>
                            {/* s-text */}
                            <div className='small mt-8 font-[400] text-[18px] leading-[30.6px] text-[#FFFFFFB2]'>Our team of experts uses a methodology to identify<br></br> the credit cards most likely to fit your needs.<br></br>
                                We examine annual percentage rates, annual fees.</div>

                        </div>
                        {/* image */}
                        <div className='hand_Ai absolute top-[8rem] right-0'><img className='max-w-[550px]' src={AI}></img></div>
                    </div>
                     {/* footer of hero */}
                <div className='footer mt-[8rem] font-Poppins flex justify-between items-center'>
                    {/* amount */}
                    <div className='font-[600] text-[40.89px] text-[#ffff]'>3800+</div>
                    {/* text */}
                    <div className='font-[400] text-[20.45px] background_3'>User Active</div>
                    {/* line */}
                    <div><img src={Line}></img></div>
                    {/* amount */}
                    <div className='font-[600] text-[40.89px] text-[#ffff]'>230+</div>
                    {/* text */}
                    <div className='font-[400] text-[20.45px] background_3'>TRUSTED BY COMPANY</div>
                    {/* line */}
                    <div><img src={Line}></img></div>
                    {/* amount */}
                    <div className='font-[600] text-[40.89px] text-[#ffff]'>$230M+</div>
                    {/* text */}
                    <div className='font-[400] text-[20.45px] background_3'>TRANSACTION</div>
                </div>
            </div>
                </div>
               


        </>
    )
}
