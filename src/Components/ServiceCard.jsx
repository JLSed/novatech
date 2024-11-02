
// eslint-disable-next-line react/prop-types
const ServiceCard = ({label, img}) => {
  return (
    <div className=" bg-white rounded-xl shadow-cus2 flex flex-col justify-between gap-24">
        <h1 className="text-primary text-2xl font-bold p-3">{label}</h1>
        <img className="object-cover h-[200px] rounded-2xl p-3 " src={img} alt="" />
    </div>
  )
}

export default ServiceCard