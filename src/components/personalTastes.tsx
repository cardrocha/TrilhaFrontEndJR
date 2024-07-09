const PersonalTastes = () => {
  return ( 
    <section id="personalTastes">
      <div>
        <h2 className="text-3xl text-center font-bold mb-5 mt-20">Gosto Pessoais</h2>
        <ul className="flex flex-col pmt-4 text-xl">
          <li className="text-2xl font-bold mt-2 bg-white px-2 border-2 border-black py-1 rounded-lg">Assistir series - 📺</li>
          <p className="text-xl text-white bg-[#aa2a2a] px-2 py-1 rounded-lg">Adoro assistir series de comédia tipo <span className="font-bold">Young Sheldon</span>, fantasia tipo <span className="font-bold">Game of Thrones</span>. Melhor de tudo no conforto da minha casa ou no meu celular.</p>
          <li className="text-2xl font-bold mt-2 bg-white border-2 border-black px-2 py-1 rounded-lg">Estudar - 📒</li>
          <p className="text-xl text-white bg-[#aa2a2a]  px-2 py-1 rounded-lg">Ter feito curso de <span className="font-bold">React.js</span> me expandiu conhecimento e não parei só nele, hoje me aventuro no <span className="font-bold">Next.js</span> e <span className="font-bold">Tailwind CSS</span>.</p>
          <li className="text-2xl font-bold mt-2 bg-white border-2 border-black px-2 py-1 rounded-lg">Codar - 💻</li>
          <p className="text-xl text-white bg-[#aa2a2a]  px-2 py-1 rounded-lg">Tenho feito uns projetos pessoais para não perder a prática e adoro quando o código feito na tela se transforma em uma página representada na tela.</p>
          <li className="text-2xl font-bold mt-2 bg-white border-2 border-black px-2 py-1 rounded-lg">Jogar - 🎮</li>
          <p className="text-xl text-white bg-[#aa2a2a]  px-2 py-1 rounded-lg">Adoro jogo de rpg tipo <span>Diablo 3</span>, <span>Chrono Trigger</span>, <span>Final Fantasy</span>. Que expande minha criatividade e que eu possa relaxar.</p>
          <li className="text-2xl font-bold mt-2 bg-white border-2 border-black px-2 py-1 rounded-lg">Cinema - 🎥</li>
          <p className="text-xl text-white bg-[#aa2a2a]  px-2 py-1 rounded-lg">Além de assistir series, adoro filmes de ação, comédia, drama, fantasia e ir no cinema a imersão da sala de cinema faz toda diferença quando e algo que esperei muito pra ver.</p>
          <li className="text-2xl font-bold mt-2 bg-white border-2 border-black px-2 py-1 rounded-lg">Fast Food - 🍟</li>
          <p className="text-xl text-white bg-[#aa2a2a]  px-2 py-1 rounded-lg">Não pode falta uns lanches pra relaxar, uma pizza, hambúrguer, batata frita ou algo feito em casa mesmo.</p>
        </ul>
      </div>
    </section>
   );
}
 
export default PersonalTastes;