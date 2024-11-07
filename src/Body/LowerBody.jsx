import getStartedImg from '../assets/get-started.jpg'
import joinImg from '../assets/join-img.jpg'

import Button from '../Components/Button'
import ArrowButtonLeft from '../Components/ArrowButtonLeft'
import ArrowButtonRight from '../Components/ArrowButtonRight'
import FeedbackCard from '../Components/FeedbackCard'

const LowerBody = () => {
  return (
    <section className="bg-background pt-52 pb-24 flex flex-col justify-center items-center">
        <div className="relative self-stretch">
            <div className='absolute max-h-[500px] p-28 z-30 flex flex-col gap-10 max-sm:p-10'>
                <h1 className='text-secondary font-bold text-6xl'>Get Started with NovaTech</h1>
                <p className='text-background text-xl'>Join us now to access a world of tech solutions just for you.</p>
                <div className='flex gap-5'>
                    <Button label={"Sign Up"} bgColor={"bg-primary"} borderColor={"border-primary"} labelColor={"text-background"} />
                    <Button label={"Learn More"} bgColor={"bg-background"} borderColor={"border-primary"} labelColor={"text-primary"} />
                </div>
            </div>
            <img src={getStartedImg} alt="get-started with novatech" className='brightness-50 object-cover h-[500px] w-full' />
        </div>
        <div className='p-14 mt-20 max-w-[2000px] max-sm:max-w-full max-sm:p-0'>
            <div className='bg-primary flex p-10 gap-5 rounded-xl max-sm:rounded-none'>
                <div className='flex flex-col gap-6 w-1/2 max-sm:w-full'>
                    <h1 className='text-secondary font-bold text-5xl'>Unlock Your Potential and Become One of Us</h1>
                    <p className='text-background'>Join our community of skilled freelancers ready to bring your ideas and service to life. Sign up today as our freelancer and start collaborating with top talent in the tech industry.</p>
                    <div className='flex gap-5'>
                        <Button label={"Become a Freelancer"} bgColor={"bg-secondary"} borderColor={"border-secondary"} labelColor={"text-primary"} />
                        <Button label={"Learn More"} bgColor={"bg-primary"} borderColor={"border-secondary"} labelColor={"text-secondary"} />
                    </div>
                </div>
                <div className='w-1/2 max-sm:hidden'>
                    <img src={joinImg} alt="join us" className='rounded-xl object-cover' />
                </div>
            </div>
        </div>
        <div className='bg-primary h-[5px] w-auto max-sm:hidden my-10 mx-14'></div>
        <div className='flex flex-col gap-5 px-10'>
            <div className='flex justify-between pr-10 max-sm:flex-col'>
                <h1 className='text-primary font-extrabold text-5xl'>Customer Feedback</h1>
                <div className='flex gap-5 h-fit'>
                    <ArrowButtonLeft shadowOn={true} />
                    <ArrowButtonRight shadowOn={true} />
                </div>
            </div>
            <p className='text-primary'>Testimonies from our clients</p>
            <div className='flex gap-5 max-sm:flex-col'>
                <FeedbackCard name={"Juan Dela Cruz"} statement={"kini ga NovaTech nakatabang sa pagsulbad sa akong problema sa PC. Daghang salamat NovaTech"}/>
                <FeedbackCard name={"Juan Dela Cruz"} statement={"kini ga NovaTech nakatabang sa pagsulbad sa akong problema sa PC. Daghang salamat NovaTech"}/>
            </div>
        </div>
    </section>
  )
}

export default LowerBody