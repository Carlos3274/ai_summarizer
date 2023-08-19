import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="resum_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/Carlos3274/ai_summarizer")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Resumidor de Artigos com <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplifique sua leitura com o Summize, um resumidor de artigos em código
        aberto que transforma longos artigos em claros e concisos resumos.
      </h2>
    </header>
  );
};

export default Hero;
