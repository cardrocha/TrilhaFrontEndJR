import Image from "next/image";
import maskImage from '../../public/mask-image.png';
import photoPerfil from '../../public/photo-perfil.jpg';

const Hero = () => {

  const dataAtual = new Date();

  const anoAtual = dataAtual.getFullYear();

  const meuAno = 1979;

  const resultado = anoAtual - meuAno;

  return (
    <>
      <div className="flex flex-col xl:flex-row p-2 items-center justify-between mt-14 max-w-7xl mx-auto container">
        <div>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-white via-black inline-block text-transparent bg-clip-text">Desenvolvedor Front-end</h2>

          <p className="text-xl">Olá, me chamo Ricardo Rocha Araújo, tenho {resultado} anos, sou desenvolvedor front-end,</p>
          <p className="text-xl mb-5">criando páginas responsivas e adaptáveis!</p>
          <div className="flex gap-2">
            <a className="bg-red-900 hover:bg-red-600 hover:scale-105 py-2 px-4 border-2 text-white text-xl border-black rounded-xl" href="https://www.linkedin.com/in/cardrocha/" target="_blank">Linkedin</a>
            <a className="bg-red-900 hover:bg-red-600 hover:scale-105 py-2 px-8 border-2 text-white text-xl border-black rounded-xl" href="https://github.com/cardrocha" target="_blank">Github</a>
          </div>
        </div>
        <div className="filter drop-shadow-[0px_35px_35px_rgba(0,0,0,0.25)]" style={{ width: '400px', height: '400px' }}>
          <Image
            src={photoPerfil}
            alt="foto de perfil"
            layout="fill"
            objectFit="cover"
            style={{ maskImage: `url(${maskImage.src})`, WebkitMaskImage: `url(${maskImage.src})`, maskSize: 'cover', maskPosition: 'center' }}
          />
        </div>
      </div>
      
    </> 
  );
}

export default Hero;


