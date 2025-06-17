export default function TargetAudience() {
  return (
    <section className="bg-[#0A0726] w-full text-white py-24 px-12 md:px-26 flex gap-8 z-50">
      <div className="basis-[40%] justify-center flex">
        <p className="font-semibold text-4xl">
          A quién nos <br /> dirigimos
        </p>
      </div>

      <div className="basis-[60%] flex  justify-center gap-10">
        <div>
          <span className="text-blue-600 block mb-2">
            Instituciones públicas
          </span>
          <ul className="list-disc list-inside">
            <li>Administraciones locales</li>
            <li>Instituciones de opinión pública</li>
          </ul>
        </div>

        <div>
          <span className="text-blue-600 block mb-2">Sector Privado</span>
          <ul className="list-disc list-inside">
            <li>Empresas del sector servicios</li>
            <li>Grupos de interés</li>
            <li>Empresas demoscópicas</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
