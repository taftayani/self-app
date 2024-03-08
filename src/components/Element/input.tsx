import { FaSearch } from 'react-icons/fa'
import '../../assets/scss/components/Element/InputType.scss'

const InputMitraku = () => {
  return (
    <div className="InputType">
      <FaSearch />
      <input placeholder="Silakan Cari Produk" className="InputType_input" />
    </div>
  )
}

export default InputMitraku
