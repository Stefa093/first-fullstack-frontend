import FormSearch from "./atom/FormSearch"
import AtomInput from "./AtomInput"
const Header = () => {
  return (
    <div className="w-320 h-128 bg-header-img bg-no-repeat mx-auto">     
    <div className="h-128 flex flex-col justify-center items-center mx-auto ">
      <i className="w-60 h-48 bg-header-frame-img bg-no-repeat "></i>
      <FormSearch/>
      <div className="flex gap-5">
        <AtomInput
      placeHolder='Marcas y tiendas'
        />
        <AtomInput 
      placeHolder='Artistas y conciertos'
        />
        <AtomInput
      placeHolder='Torneos'
        />
      </div>
    </div>
  </div>
  )
}

export default Header
