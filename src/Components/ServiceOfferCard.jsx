



// eslint-disable-next-line react/prop-types
const ServiceOfferCard = ({offercard, header, subheader}) => {

  return (
    <div className='flex flex-col justify-between gap-5 items-center text-center w-[360px]'>
        <img src={offercard} className='h-[200px] w-full object-cover' alt="offer" />
        <h1 className="text-secondary text-3xl font-bold font-poppins">{header}</h1>
        <p className="text-background font-roboto">{subheader}</p>
    </div>
  )
}

export default ServiceOfferCard