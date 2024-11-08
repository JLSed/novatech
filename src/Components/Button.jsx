
// eslint-disable-next-line react/prop-types
const Button = ({bgColor, borderColor, labelColor, label}) => {
  return (
    <button className={`font-outfit border-2 px-6 py-2 rounded-sm ${borderColor} ${bgColor} ${labelColor}`}>{label}</button>
  )
}

export default Button