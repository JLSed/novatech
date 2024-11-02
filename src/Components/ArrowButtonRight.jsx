import arrowRight from '../assets/arrow-right.svg'

// eslint-disable-next-line react/prop-types
const ArrowButtonRight = ({shadowOn}) => {
  return (
    <button className={`rounded-full bg-primary p-2 ${shadowOn ? `shadow-cus1` : `shadow-none`}`}><img src={arrowRight} alt="" /></button>
  )
}

export default ArrowButtonRight