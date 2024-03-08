import { Link } from 'react-router-dom'
import IcLogo from '../Image/logo'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-slate-200">
      <IcLogo />
      <div className="flex gap-2">
        <Link to={'/ads'}>Ads</Link>
        <Link to={'/q&a'}>Qustions</Link>
      </div>
    </div>
  )
}
export default Navbar
