import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-24 px-24  flex-col md:px-16 flex items-stretch bg-[#0A0B37] ">
      <div className="flex w-full  ">
        <div className="flex flex-col  gap-6 p-4 flex-1/2 ">
          <Image alt="Demosmap" width={223} height={35} src="Demosmap.svg" />
          <div className="flex flex-col text-white">
            <span>+34 613 320 670</span>
            <span>info@demosmap.com</span>
          </div>
        </div>

        <div className="flex flex-1/2  justify-end">
          <div className="flex flex-col gap-2 p-4 text-white  ">
            <a className="text-white" target="_blank" rel="noopener noreferrer">
              FAQS
            </a>
            <a className="text-white" target="_blank" rel="noopener noreferrer">
              Política de Cookies
            </a>
            <a className="text-white" target="_blank" rel="noopener noreferrer">
              Política de Privacidad
            </a>
            <a className="text-white" target="_blank" rel="noopener noreferrer">
              Términos y Condiciones
            </a>
            <a className="text-white" target="_blank" rel="noopener noreferrer">
              Declaración de accesibilidad
            </a>
          </div>

          <div className="flex flex-col gap-2 p-4 text-white">
            <a className="text-white" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a className="text-white" target="_blank" rel="noopener noreferrer">
              Whatsapp
            </a>
            <a className="text-white" target="_blank" rel="noopener noreferrer">
              X
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full h-[1px] bg-white my-10 " />
      </div>

      <div className="flex">
        <Image
          src="Financiado.svg"
          className="flex-1/2"
          alt="Financiado"
          width={500}
          height={500}
        />
        <div className="flex-1/2 text-white flex flex-col justify-items-end items-end">
          <span className="font-normal">
            Financiado por la Unión Europea - Next GenerationEU
          </span>
          <span className="font-light">
            © 2023. Handcrafted with love by Mr. Addison
          </span>
        </div>
      </div>
    </footer>
  );
}
