import Logo from './hoo.png'
import Discount from './Discount.png'
import Arrow from './Arrow.png'
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
                                <div>Home</div>
                                <div>About Us</div>
                                <div>Features</div>
                                <div>Solution</div>
                            </div>
                            {/* Hamburger */}
                            <div id="menuToggle" onClick={display}>
                                {/* <!--
      A fake / hidden checkbox is used as click reciever,
      so you can use the :checked selector on it.
      --> */}
                                <input type="checkbox" />

                                {/* <!--
      Some spans to act as a hamburger.
      
      They are acting like a real hamburger,
      not that McDonalds stuff.
      --> */}
                                <span></span>
                                <span></span>
                                <span></span>

                                {/* <!--
      Too bad the menu has to be inside of the button
      but hey, it's pure CSS magic.
      --> */}
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
            {/* text +image +mx-width */}
            {/* fluid container */}
            <div className='background'>
                {/* image + text */}
                <div className='grid grid-cols-2 font-Poppins'>
                    {/* text */}
                    <div>
                        {/* strip */}
                        <div className='background_1 flex max-w-[408px] p-[0.3rem] items-center rounded-md space-x-3'>
                            {/* image */}
                            <div ><img src={Discount}></img></div>
                            {/* text */}
                            <div className='font-Poppins text-[18px] font-[400] text-[#FFFFFF99]'><span className='text-[#ffff]'>20%</span> DISCOUNT FOR <span className='text-[#ffff]'>1 MONTH</span> ACCOUNT</div>
                        </div>
                        {/* b-text and round */}
                        <div>
                            {/* b-text */}
                            <div className='text-[72px] font-[600] text-[#ffff]'>
                                The Next <span className='background_3'>Generation</span> Payment Method.
                            </div>
                            {/* round + img */}
                            <div className='p-8 flex justify-center border-[#49d0dc] relative rounded-full border-[1.5px] max-w-[140px] h-[140px]'>
                                {/*round  */}
                                <div className='flex justify-center border-[] text-[18px] font-[500] background_4 mt-3'>Get<br></br>Started</div>
                                {/* img */}
                                <div className='left-16 top-[42px] absolute text-center'><img src={Arrow}></img></div>
                            </div>
                        </div>

                    </div>
                    {/* image */}
                    <div></div>
                </div>
            </div>
            <div></div>

        </>
    )
}
