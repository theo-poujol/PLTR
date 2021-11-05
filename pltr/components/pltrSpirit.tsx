export default function PltrSpirit() {
  return (
    <div className="w-full pb-80 pt-80 text-center">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl z-40 font-rox">
          <h1>
            Tout est une question{" "}
            <span className="italic">d'état d'esprit</span>
          </h1>
        </div>
        <div className="absolute z-30 flex flex-wrap justify-between">
          <div className="w-1/3 mt-40">
            <p className="font-rox text-lg text-palegray italic">00.01</p>
            <img className="w-1/2 mx-auto" src="/ab3.jpg" />
          </div>
          <div className="w-1/3">
            <img className="mx-auto w-screen" src="/ab2.jpg" />
          </div>
          <div className="w-1/3  mt-96">
            <p className="font-rox text-lg text-palegray italic">00.02</p>
            <img className="w-1/2 mx-auto" src="/ab1.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
