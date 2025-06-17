import Image from "next/image";

function SelectorLang() {
  return (
    <div className="flex gap-2">
      <button className="w-[97px] h-auto px-4 py-2 bg-transparent border-blue-500 border rounded-[10px] text-white">
        ESP
      </button>
      <a
        className="w-[97px] h-auto px-4 py-2 bg-blue-500 text-white text-center rounded-[10px]"
        href="#test"
      >
        Login
      </a>
    </div>
  );
}

export default function Nav() {
  return (
    <nav className="absolute z-10 flex justify-between  items-center  w-full  px-16 py-6">
      <div id="logo" className="flex justify-center items-center space-x-2">
        <Image
          width={48}
          height={51}
          src="demosmapLogo.svg"
          alt="demosmapLogo.svg"
        />
        <Image width={145} height={24} src="Wordmark.svg" alt="Wordmark.svg" />
      </div>
      <div className="flex gap-8">
        <div className="flex gap-8 font-bold text-white">
          <a href="#">Demosmap</a>
          <a href="#">Funcionalidades</a>
          <a href="#">Solicitar una demo</a>
        </div>
        <SelectorLang />
      </div>
    </nav>
  );
}
