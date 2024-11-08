import { useParams } from "react-router-dom"

const HomePage = () => {
    const {id} = useParams()
  return (
    <div>HomePage {id}</div>
  )
}

export default HomePage