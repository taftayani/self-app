import { Link } from 'react-router-dom'
import IcLogo from '../../assets/Image/logo'
import '../../assets/scss/components/Navigation/Navbar.scss'
import InputMitraku from '../Element/input'

const Navbar = () => {
  return (
    <div className="Navbar">
      <IcLogo />
      <InputMitraku />
      <div className="flex gap-4">
        <Link to={'/ads'} className="Navbar_link">
          Ads
        </Link>
        <Link to={'/q&a'}>Qustions</Link>
      </div>
    </div>
  )
}
export default Navbar
