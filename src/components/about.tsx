import Image from "next/image";
import reactLogo from '../../public/react.svg'
import typescriptLogo from '../../public/typescript.png'
import styledLogo from '../../public/styled-components.png'

const About = () => {
  return (
    <section id="about">
      <div className="container max-w-7xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-center">Sobre mim:</h2>
        <p className="text-xl mt-4 p-2">Olá! Carioca apaixonado por tecnologia e desenvolvimento web, com forte interesse na área desenvolvimento web. Desde 2022, venho me dedicando à programação, buscando constantemente aprimorar minhas habilidades. Atualmente, estou em transição de carreira para me dedicar exclusivamente ao front-end, área onde tenho grande afinidade e experiência.</p>
      </div>
      <div>
        <h3 className="text-3xl font-bold mt-10 mb-10 text-center">Minhas principais skills:</h3>
        <div className="flex flex-col xl:flex-row items-center gap-16 xl:gap-36 justify-center">
          <div className="flex flex-col">
            <Image className="rounded-full" width={100} src={reactLogo} alt="react logo" />
            <a className="text-2xl font-bold" href="#">React.Js</a>
          </div>
          <div className="flex flex-col items-center">
            <Image width={100} src={typescriptLogo} alt="logo typescript" />
            <a className="text-2xl font-bold" href="#">Typescript</a>
          </div>
          <div className="flex flex-col items-center">
            <Image width={100} src={styledLogo} alt="logo styled" />
            <a className="text-2xl font-bold" href="#">Styled-components</a>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default About;