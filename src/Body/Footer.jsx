import logo from '../assets/Logo.svg'
import twitterLogo from '../assets/twitter.png'
import linkedinLogo from '../assets/linkedin-logo.png'
import youtubeLogo from '../assets/youtube.png'
import instaLogo from '../assets/instagram.png'
import fbLogo from '../assets/fb-logo.png'

const Footer = () => {
  return (
    <footer className='font-roboto [&_h1]:font-poppins bg-thirdary flex justify-start gap-32 p-20 max-sm:flex-col max-sm:mt-auto'>
        <div className='w-fit'>
            <img src={logo} alt="Logo" className='object-contain w-[52px] cursor-pointer' />
            <div className='h-[24px] flex gap-4 w-fit mt-10'>
                <img src={twitterLogo} alt="" className='object-contain cursor-pointer' />
                <img src={linkedinLogo} alt="" className='object-contain cursor-pointer' />
                <img src={youtubeLogo} alt="" className='object-contain cursor-pointer' />
                <img src={instaLogo} alt="" className='object-contain cursor-pointer' />
                <img src={fbLogo} alt="" className='object-contain cursor-pointer' />
            </div>
        </div>
        <div className='text-background'>
            <h1 className='font-bold text-xl mb-5'>NovaTech</h1>
            <ul>
                <li><a href="" >About Us</a></li>
                <li><a href="" >Contact</a></li>
            </ul>
        </div>
        <div className='text-background'>
            <h1 className='font-bold text-xl mb-5'>For Clients</h1>
            <ul>
                <li><a href="" >Blog</a></li>
                <li><a href="" >Best Practices</a></li>
            </ul>
        </div>
        <div className='text-background'>
            <h1 className='font-bold text-xl mb-5'>For Freelancers</h1>
            <ul>
                <li><a href="" >Become a Freelancer</a></li>
                <li><a href="" >Community Hub</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer