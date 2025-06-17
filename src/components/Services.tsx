import ColumsService from "./ColumsService";

export default function Services() {
  return (
    <section className=" py-16 px-16 md:px-16 bg-[linear-gradient(to_right,_#94DF73_0%,_#71DEA9_30%,_#3DD8E9_65%,_#3A80EB_98%)] flex justify-center gap-8 items-stretch ">
      <ColumsService
        iconSrc="/Location.svg"
        title="Geolocaliza los resultados a través de mapas de calor"
        description="Visualiza los resultados de manera clara y precisa, utilizando mapas de calor geolocalizados que te permiten analizar la distribución de datos."
      />
      <ColumsService
        iconSrc="/Estadistic.svg"
        title="Grado de representatividad científica garantizado"
        description="emosmap asegura la represen-tatividad y fiabilidad de los resultados aplicando rigurosos criterios estadísticos que garantizan que la encuesta sea representativa y fiable. "
      />
      <ColumsService
        iconSrc="/Whatsapp.svg"
        title="Uso de whatsapp para envíos micro segmentados"
        description="Conecta directamente con tu público. Te damos la posibilidad de segmentar tu audiencia de interés para el posterior envío de comunicaciones vía WhatsApp.
"
      />
    </section>
  );
}
