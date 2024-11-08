import logoBlack from "../assets/Logo-Black.svg"
import mailIcon from "../assets/mail.svg"
import bellIcon from "../assets/bell.svg"
import searchIcon from "../assets/search-logo.svg"
import pfp from "../assets/aa.jpg"

import {Link } from 'react-router-dom'

const HomeHeadNav = () => {
  return (
    <header className="fixed top-0 left-0 right-0 font-outfit bg-background flex justify-between p-4 gap-5 shadow-cus1">
        <div className="flex text-primary gap-5 items-center">
            <img src={logoBlack} alt="" />
            <Link>Explore</Link>
            <Link>Freelancers</Link>
            <Link>Solutions</Link>
        </div>
        <div className="relative flex flex-1 max-w-[1000px] items-center">
            <input type="text" placeholder="Search a Service" className="flex-1 rounded-full py-2 border-2 border-primary px-5" />
            <img src={searchIcon} alt="" className="absolute h-8 right-5" />
        </div>
        <div className="flex gap-5 pl-40">
            <button><img src={mailIcon} alt="" /></button>
            <button><img src={bellIcon} alt="" /></button>
            <img className="rounded-full h-12" src={pfp} alt="" />
        </div>
    </header>
  )
}

export default HomeHeadNav