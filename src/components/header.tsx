import Image from 'next/image';
import logo from '../../public/codigoCerto.png'

const Header = () => {
  return ( 
    <div className="flex flex-col xl:flex-row items-center xl:justify-between py-2 px-10 mx-auto bg-black text-white">
      <div className='flex item-center'>
        <a href="#"><Image className='w-16' src={logo} alt="logo perfil" /></a>
        <h1 className="text-2xl mt-2 font-bold">
          -Ricardo Rocha-
        </h1>
      </div>
      <nav className="flex gap-5">
        <a className="text-sm xl:text-lg py-1 px-2 rounded-2xl hover:bg-red-600" href="#about">Sobre</a>
        <a className="text-sm py-1 px-2 whitespace-nowrap rounded-2xl xl:text-lg hover:bg-red-600" href="#personalTastes">Gostos Pessoais</a>
        <a className="text-sm xl:text-lg py-1 px-2 rounded-2xl hover:bg-red-600" href="#motivations">Motivações</a>
        <a className="text-sm xl:text-lg py-1 px-2 rounded-2xl hover:bg-red-600" href="#contacts">Contato</a>
      </nav>
    </div>
   );
}
 
export default Header;