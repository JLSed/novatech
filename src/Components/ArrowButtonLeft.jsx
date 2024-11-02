import arrowLeft from '../assets/arrow-left.svg'

// eslint-disable-next-line react/prop-types
const ArrowButtonLeft = ({shadowOn}) => {
  return (
    <button className={`rounded-full bg-primary p-2 ${shadowOn ? `shadow-cus1` : `shadow-none`}`}><img src={arrowLeft} alt="" /></button>
  )
}

export default ArrowButtonLeft