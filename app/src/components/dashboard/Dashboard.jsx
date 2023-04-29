 import { UserContext } from '../../assets/context/Context'
import {useContext} from 'react'

const Dashboard = () => {
    const first = useContext(UserContext)

  return (
    <div>{first}+Dashboard</div>
  )
}

export default Dashboard