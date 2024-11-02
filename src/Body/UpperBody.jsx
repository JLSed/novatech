import bg1 from '../assets/bg1.jpg'
import arrowDown from '../assets/arrow-down.png'
import HeadNav from '../Components/HeadNav'

const UpperBody = () => {
  return (
    <section className="flex flex-col">
        <HeadNav />
        <div className="flex relative flex-col">
            <img className="h-[800px] w-full object-cover max-sm:h-[400px]" src={bg1} alt="hello" />
            <div className="absolute flex flex-col bottom-0 left-0 right-0 h-96 max-sm:h-52">
                <h1 className="z-10 ml-20 text-accent text-6xl font-bold max-sm:text-4xl xl:text-7xl max-sm:ml-10">Connecting Filipinos <br/> with the Best Solution</h1>
                <p className="z-10 ml-20 text-background text-wrap w-2/4 max-sm:text-xs xl:text-lg max-sm:ml-10">At NovaTech, we connect you with top-notch tech professionals ready to elevate your issues. Whether you need virtual assistance or hands-on support, our platform is designed to meet your unique needs.</p>
                <div className=" absolute inset-0 bg-gradient-to-t from-primary/100 via-primary/100 to-transparent" />
            </div>
        </div>
        <div className="h-[800px] bg-primary flex flex-col items-center xl:pt-9 shadow-2xl ring-1 ring-thirdary">
          <div className="flex justify-evenly w-full">
            <img src={arrowDown} alt="arrow-down" className='max-sm:h-10 h-20' />
            <h1 className="text-secondary font-serif text-5xl xl:text-5xl max-sm:text-3xl text-center">Explore Our Service Offerings</h1>
            <img src={arrowDown} alt="arrow-down" className='max-sm:h-10 h-20' />
          </div>
            <p className="text-background mt-10 w-1/2 text-center max-sm:text-xs max-sm:mt-2">We provide a wide range of tech-related services tailored to meet your needs. Whether you&apos;re looking for virtual assistance or hands-on support, we&apos;ve got you covered.</p>
        </div>
    </section>

  )
}

export default UpperBody