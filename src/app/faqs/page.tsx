import Nav from "@/components/Nav";

import Footer from "@/components/Footer";

export default async function Page() {
  return (
    <div className="relative min-h-screen">
      <div className="bg-[#0A0726] h-26 w-full">
        <Nav />
      </div>

      <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none text-justify p-5 sm:p-5  md:p-40">
        <div className="mt-20">
          <h2 className="font-bold">FAQS</h2>

          <p>
            <strong>– ¿Cuál es la funcionalidad de Demosmap?</strong>
          </p>
          <p>
            Demosmap es un software que facilita la comprensión de la opinión
            pública mediante una mejor visibilización del agregado de datos para
            poder interpretar mejor cómo proceder y, <em>a posteriori</em>,
            mantener una comunicación directa y segmentada con la ciudadanía que
            haya contestado a los cuestionarios.
          </p>
          <p>
            El software puede ser útil tanto a instituciones del sector público
            como del sector privado, pues ayuda a mantener una comunicación
            directa con la ciudadanía/clientes, especialmente aquellos que estén
            descontentos o puedan tener alguna queja. Por otro lado, aparte de
            ser clave para una comunicación más personal, provee una información
            mediante la visualización de datos avanzada que ayudará al cliente
            en la toma de decisiones.
          </p>

          <p>
            <strong>
              – ¿Se adecúa Demosmap al cumplimiento del ordenamiento jurídico
              legal?
            </strong>
          </p>
          <p>
            El funcionamiento de Demosmap está validado por un equipo de
            abogados especializado en la materia. Cumple con la normativa
            vigente en protección de datos:
          </p>
          <ul>
            <li>
              Reglamento 2016/679 del Parlamento Europeo y el Consejo de 27 de
              abril de 2016, relativo a la protección de las personas físicas en
              lo que respecta al tratamiento de datos personales y a la libre
              circulación de estos datos.
            </li>
            <li>
              Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
              Personales y garantía de los derechos digitales.
            </li>
          </ul>

          <p>
            <strong>– ¿Cómo voy a visualizar los datos?</strong>
          </p>
          <p>
            Al acceder al programario de Demosmap, el cliente se encontrará un
            mapa actualizándose en tiempo real con las respuestas geolocalizadas
            que vaya dando la ciudadanía. Como añadido a un mapa actualizado en
            tiempo real, se proporcionan al cliente gráficos y resúmenes
            ejecutivos para facilitar una mayor comprensión y extracción de
            inteligencia.
          </p>

          <p>
            <strong>
              – ¿Cómo voy a poder gestionar la comunicación <em>one to one</em>{" "}
              con la ciudadanía?
            </strong>
          </p>
          <p>
            Demosmap ofrece la posibilidad de enviar mensajes personalizados a
            cada uno de los ciudadanos. Sin embargo, en función del volumen de
            ciudadanos que pueden llegar a contestar, existe también la opción
            de enviar mensajes idénticos al sector de población deseado. De este
            modo, estandarizamos y dinamizamos mucho más la comunicación con la
            ciudadanía.
          </p>

          <p>
            <strong>– ¿Es un sustituto de las encuestas?</strong>
          </p>
          <p>
            Demosmap no es un sustituto de una encuesta “tradicional”. Sirve
            para complementarlas y conseguir sacar el máximo provecho de ellas.
            Va un paso más allá de las encuestas. Las funcionalidades de
            visualización avanzada de datos y la comunicación bilateral que
            ofrece con cada uno de los encuestados servirán para reducir las
            distancias entre la ciudadanía y el cliente final, proveyendo a este
            último de unos datos y una inteligencia muy útiles para facilitar la
            toma de decisiones.
          </p>

          <p>
            <strong>– ¿Qué necesito para empezar?</strong>
          </p>
          <p>
            Al darse de alta, el cliente es provisto con el número de muestra
            necesaria para que los datos recabados de sus cuestionarios sean
            representativos. Una vez sabemos la muestra, se consigue la parte de
            ciudadanía necesaria para responder los cuestionarios, mediante
            campañas de participación ciudadana y de promoción. Una vez llegados
            al número suficiente de ciudadanos, los cuestionarios contestados
            empiezan a ser representativos y el cliente tiene un primer esbozo
            de las respuestas dadas por la ciudadanía.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
