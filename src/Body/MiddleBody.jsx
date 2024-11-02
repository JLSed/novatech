import techService from '../assets/techservice.jpg'
import computerCleaning from '../assets/computer-cleaning.jpg'
import networkRepair from '../assets/network-troubleshooting.jpg'
import softwareDev from '../assets/software-development.jpg'
import verified from '../assets/verified.svg'
import loyalty from '../assets/loyalty.svg'
import support from '../assets/support.svg'
import comService from '../assets/com-service.svg'

import Button from '../Components/Button'
import ArrowButtonLeft from '../Components/ArrowButtonLeft'
import ArrowButtonRight from '../Components/ArrowButtonRight'
import ServiceCard from '../Components/ServiceCard'
import QualityCard from '../Components/QualityCard'

const MiddleBody = () => {
  return (
    <section className="bg-background flex flex-col items-center justify-center self-center">
        <div className="flex p-14 gap-5 max-sm:flex-col max-w-[1500px]">
            <div className='w-1/2 max-sm:w-full'>
                <h1 className="text-primary font-extrabold text-4xl xl:text-5xl xl:font-bold">Discover Our Diverse Range of Tech-Related Services Tailored for You.</h1>
                <p className='text-primary text-1xl mt-5'>At NovaTech, we connect you with skilled professionals and registered companies offering both virtual and physical tech services. Explore our categories to find the perfect solution for your needs.</p>
                <div className='flex gap-3 mt-20 max-sm:mt-5'>
                    <Button label={"Sign Up"} bgColor={"bg-primary"} borderColor={"border-primary"} labelColor={"text-background"} />
                    <Button label={"Learn More"} bgColor={"bg-background"} borderColor={"border-primary"} labelColor={"text-primary"} />
                </div>
            </div>
            <div className='flex justify-center items-center w-1/2 max-sm:w-full'>
                <img className='object-cover max-h-[500px]' src={techService} alt="" />
            </div>
        </div>
        <div className='mt-10 px-10 flex flex-col gap-5 justify-center'>
            <div className='flex items-center gap-5 px-14 max-sm:justify-center max-sm:flex-col'>
                <h1 className='font-bold text-primary text-5xl max-sm:text-6xl'>Services</h1>
                <div className='bg-primary h-[5px] w-full max-sm:hidden'></div>
                <div className='flex size-full max-w-[100px] gap-5 justify-end'>
                    <ArrowButtonLeft shadowOn={false} />
                    <ArrowButtonRight shadowOn={false} />
                </div>
            </div>
            {/* change sa grid ito */}
            <div className='flex gap-5 justify-center'>
                <ServiceCard label={"Computer Repair"} img={techService}/>
                <ServiceCard label={"Computer Cleaning"} img={computerCleaning} />
                <ServiceCard label={"Network Troubleshooting"} img={networkRepair} />
                <ServiceCard label={"Software Development"} img={softwareDev} />
            </div>
            <div className='bg-primary h-[5px] w-auto max-sm:hidden my-10 mx-10'></div>
        </div>
        <div className='mt-20 flex flex-col justify-center items-center gap-5'>
            <h1 className='text-6xl text-primary text-center'>Your One-Stop Solution for Tech Services</h1>
            <div className='grid grid-rows-2 grid-cols-2 gap-4 mt-10 max-sm:grid-cols-1'>
                <QualityCard img={verified} header={"Verified Freelancer"} subheader={"Hire Professional who are vetted and rated based on skills and customer feedback."} />
                <QualityCard img={support} header={"Virtual and Physical Support"} subheader={"Choose between the “Meet and Fix” service, for hands-on repairs, or online troubleshooting for quick, remote solutions"} />
                <QualityCard img={loyalty} header={"Discounts and Loyalty"} subheader={"Regular users benefit from discounts, coupons, and loyalty rewards, encouraging repeat use and community engagement."} />
                <QualityCard img={comService} header={"Comprehensive Services"} subheader={"From hardware cleaning to software diagnostics, NovaTech offers a wide range of services tailored to each customer’s needs."} />
            </div>
        </div>
    </section>
  )
}

export default MiddleBody