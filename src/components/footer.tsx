import Image from "next/image";
import logo from '../../public/codigoCerto.png'

const Footer = () => {

  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();

  return ( 
    <footer id="contacts" className="bg-black flex flex-col xl:flex-row gap-3 xl:gap-0 items-center justify-between px-6 py-4">
    <div className="flex flex-col xl:flex-row items-center gap-4">     
      <a href="#">
        <Image className="w-14" src={logo} alt="logo codigo certo" />
      </a>
      <h3 className="text-sm xl:text-base whitespace-nowrap text-white">{anoAtual} @ Ricardo Rocha - Todos os direitos reservados -</h3>
    </div>
    <div className="flex gap-7">
      <a className="text-sm xl:text-base text-white" href="#">Fale conosco</a>
      <a className="text-sm xl:text-base text-white" href="#">Quem somos</a>
    </div>
    <div className="text-white">
      <h4 className="text-center text-base xl:text-lg">Minhas redes:</h4>
      <div className="flex gap-4">
        <a className="text-sm xl:text-base" href="#">Linkedin</a>
        <a className="text-sm xl:text-base" href="#">Github</a>
        <a className="text-sm xl:text-base" href="#">Instagram</a>
      </div>
    </div>
  </footer>
   );
}
 
export default Footer;