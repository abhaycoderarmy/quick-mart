import React, { use, useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TypeAnimation} from 'react-type-animation';
import { FaArrowLeft } from 'react-icons/fa';
import useMobile from '../hooks/useMobile';


const Search = ()=>{

    const navigator = useNavigate();
    const location = useLocation();
    
    const [searchPage, setSearchPage] = useState(false);
    const [isMobile] = useMobile();


    useEffect(() => {
       const isSearchPage = location.pathname === '/search';
        setSearchPage(isSearchPage);
    }, [location]);



    const redirectToSearhPage = () => {
        navigator('/search')
    }

  return (
    <div className='w-full min-w-[300px] lg:min-w-[420px] h-11 lg:h-12 rounded-lg border overflow-hidden flex items-center text-neutral-500 bg-slate-50 group focus-within:border-yellow-300'>
            <div>
            {
                (isMobile && searchPage) ? (
                    <Link to={'/'} className='flex justify-center items-center h-full p-2 m-1 group-focus-within:text-yellow-300 bg-while rounded-full shadow-md'>
                      <FaArrowLeft size={22} />
                   </Link>
                ):(
                    <button className='flex justify-center items-center h-full p-3 group-focus-within:text-yellow-300'>
                         <IoSearch size={22}/>
                    </button>
                )
            }

            </div>
            <div className='h-full w-full'>
                  {
                    !searchPage ? (
                        <div onClick={redirectToSearhPage} className='h-full w-full flex items-center'>
                        <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Search "Milk"',
                            1000, // Delay in milliseconds
                            'Search "Bread"',
                            1000,
                            'Search "Chocolates"',
                            1000,
                            'Search "Fruits"',
                            1000
                        ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                   </div>
                    ):(
                        <div className='h-full w-full'>
                        <input
                            className='w-full h-full bg-transparent outline-none' 
                            type="text" 
                            placeholder='Search items' 
                            autoFocus={true} />
                        </div>
                    )
                  }
            </div>
            
    </div>
  )
}

export default Search