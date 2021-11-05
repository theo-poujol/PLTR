export default function Hero() {
  return (
    <div className="hero">
      <div className="flex flex-wrap text-white ">
        <div className="w-1/2">
          <div className="mt-48"></div>
          <div className="flex flex-wrap absolute origin-left transform -rotate-90 space-x-10 mt-80 text-sm tracking-widest mx-3">
            <div>
              <a className="hover:underline" href="">
                instagram
              </a>
            </div>
            <div>
              <a className="hover:underline" href="">
                tiktok
              </a>
            </div>
            <div>
              <a className="hover:underline" href="">
                twitter
              </a>
            </div>
          </div>

          <br />
          <div className="px-60 mt-60">
            <div className="z-40 mt-52 text-8xl font-black absolute origin-left transform -rotate-90 uppercase">
              <h1 className="glitch">
                <span aria-hidden="true">Prolétaire</span>Prolétaire
                <span aria-hidden="true">Prolétaire</span>
              </h1>
            </div>
            <h1 className="z-30 mt-60 text-5xl text-yellow-200 tracking-widest font-black absolute origin-left transform -rotate-90 mx-16">
              Sell me if you're broke
            </h1>
            <h3 className="z-40 text-4xl bg-black p-2 bg-opacity-75 uppercase font-semibold absolute origin-left transform -rotate-90 mx-28 mt-60">
              Collection 2021
            </h3>

            <div className="z-40 text-lg absolute origin-left transform -rotate-90 mx-48 mt-52 w-80">
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="img-wrapper">
            <img className="mt-40 mx-auto" src="/veste1bg.png"></img>
            <div className="mt-10 bg-black p-4">
              <h2 className="bg-white text-black text-center text-xl uppercase hover:underline p-2 font-bold">
                {" "}
                <a href="">Voir la collection 2021 </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
