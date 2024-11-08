import bg1 from '../assets/bg1.jpg'
import arrowDown from '../assets/arrow-down.png'
import HeadNav from '../Components/HeadNav'
import ServiceOfferCard from '../Components/ServiceOfferCard'
import offercard1 from '../assets/offercard1.jpg';
import offercard2 from '../assets/offercard2.jpg';
import offercard3 from '../assets/offercard3.jpg';

const UpperBody = () => {
  return (
    <section className="flex flex-col">
        <HeadNav />
        <div className="flex relative flex-col">
            <img className="h-[800px] w-full object-cover max-sm:h-[400px]" src={bg1} alt="hello" />
            <div className="absolute flex flex-col bottom-0 left-0 right-0 h-96 max-sm:h-52">
                <h1 className="z-10 ml-20 text-accent text-6xl font-poppins font-bold max-sm:text-4xl xl:text-7xl max-sm:ml-10">Connecting Filipinos <br/> with the Best Solution</h1>
                <p className="z-10 ml-20 text-background text-wrap font-roboto w-2/4 mt-2 max-sm:text-xs xl:text-lg max-sm:ml-10">At NovaTech, we connect you with top-notch tech professionals ready to elevate your issues. Whether you need virtual assistance or hands-on support, our platform is designed to meet your unique needs.</p>
                <div className=" absolute inset-0 bg-gradient-to-t from-primary/100 via-primary/100 to-transparent" />
            </div>
        </div>
        <div className="pb-56 shadow-cus1 bg-primary flex flex-col items-center xl:pt-9 ring-1 ring-thirdary max-sm:pt-20">
          <div className="flex justify-evenly w-full">
            <img src={arrowDown} alt="arrow-down" className='max-sm:h-10 h-10' />
            <h1 className="text-secondary font-outfit text-5xl xl:text-5xl max-sm:text-4xl text-center">Explore Our Service Offerings</h1>
            <img src={arrowDown} alt="arrow-down" className='max-sm:h-10 h-10' />
          </div>
            <p className="font-roboto text-background mt-10 w-1/2 text-center max-sm:text-sm max-sm:mt-3 max-sm:w-full">We provide a wide range of tech-related services tailored to meet your needs. Whether you&apos;re looking for virtual assistance or hands-on support, we&apos;ve got you covered.</p>
          <div className='flex gap-6 mt-20 max-sm:flex-col max-sm:mt-10'>
              <ServiceOfferCard offercard={offercard1} 
              header={"Virtual Services Tailored for your Needs"}
              subheader={"Our virtual services include everything from IT support to graphic design."} />
              <ServiceOfferCard offercard={offercard2} 
              header={"Physical Services for a Thorough Assistance"}
              subheader={"Need on-site assistance? Our physical services are here to help."} />
              <ServiceOfferCard offercard={offercard3} 
              header={"Discounts and Loyalty to All Users"}
              subheader={"We prioritize quality, efficiency, and customer satisfaction."} />
          </div>
        </div>
    </section>

  )
}

export default UpperBody