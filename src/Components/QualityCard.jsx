
// eslint-disable-next-line react/prop-types
const QualityCard = ({header, subheader, img}) => {
  return (
    <div className="flex items-start w-[500px] gap-3">
        <img src={img} alt={header} className="h-[45px]" />
        <div className=" flex flex-col">
            <h1 className="font-bold text-primary text-2xl">{header}</h1>
            <p className="text-thirdary pl-5">{subheader}</p>
        </div>
    </div>
  )
}

export default QualityCard