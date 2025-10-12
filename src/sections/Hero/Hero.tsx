function Hero() {
  return (
    <div className="flex w-full h-fit grid-cols-2 justify-around border-2 p-4 gap-2">
      <div>
        <h1>
          Transformando dados em decisões inteligentes para impulsionar o
          futuro.
        </h1>
        <p>
          O LAMDEC desenvolve métodos avançados de aprendizado de máquina e
          estatística para paior a tomade de decisão de gestores dos setores
          público e privado, transformando dados complexos em insights
          acionávies
        </p>
      </div>
      <img
        className="h-100 rounded-2xl"
        src="https://preview.redd.it/ironman-drawn-by-me-using-colored-pencils-v0-hvhlbmna6vid1.jpeg?width=1080&crop=smart&auto=webp&s=6d2da6a26d0ebc17e65921e06c92a455dee5f2df"
        alt=""
      />
    </div>
  );
}

export default Hero;
