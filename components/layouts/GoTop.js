import {createRipples } from 'react-ripples'
import {BiArrowToTop} from 'react-icons/bi';
import { useState } from 'react';
export default function GoToTop({ posts, globalData }) {
    const Ripples = createRipples({
        color: 'rgba(0,46,86,0.11)',
        during: 1200,
    })
    const [showScroll, setShowScroll] = useState(false)
    const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300){
        setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 300){
            setShowScroll(false)
        }
    };
    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    if(typeof window != 'undefined'){
        window.addEventListener('scroll', checkScrollTop)
    }
    
    return (
        <>
            <Ripples>
                <BiArrowToTop 
                    title='GoTop'
                    className="scrollTop fixed text-[#002e56] rounded-full shadow-md transition-all duration-100 hover:scale-105 hover:shadow-xl -translate-x-1/2 left-1/2 text-[30px] bottom-5 sm:right-52"
                    onClick={scrollTop} 
                    style={{ display: showScroll ? 'block' : 'none'}}/>
            </Ripples>
        </>

    );
}

