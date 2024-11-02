import star from '../assets/full-star.svg'
// eslint-disable-next-line react/prop-types
const FeedbackCard = ({name,statement}) => {
  return (
    <div className='flex flex-col gap-3 w-[500px] shadow-xl rounded-lg p-3'>
        <div className='flex h-10'>
            <img src={star} alt="" className='object-contain' />
            <img src={star} alt="" className='object-contain' />
            <img src={star} alt="" className='object-contain' />
            <img src={star} alt="" className='object-contain' />
            <img src={star} alt="" className='object-contain' />
        </div>
        <h1 className='text-primary font-bold'>{name}</h1>
        <p className='text-thirdary'>{statement}</p>
    </div>
  )
}

export default FeedbackCard