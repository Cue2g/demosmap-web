import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default async function Page() {
  return (
    <div className="relative min-h-screen">
      <div className="bg-[#0A0726] h-26 w-full">
        <Nav />
      </div>

      <div className="prose prose-sm md:prose-base lg:prose-lg max-w-none text-justify p-5 sm:p-5 md:p-40">
        <div className="mt-20">
          <p>
            <strong>DECLARACIÓN DE ACCESIBILIDAD</strong>
          </p>
          <p>
            La presente declaración de accesibilidad se aplica al sitio web
            https://www.demosmap.com/
          </p>
          <p>
            <strong>SITUACIÓN DE CUMPLIMIENTO</strong>
          </p>
          <p>
            Este sitio web es parcialmente conforme con el{" "}
            <a
              href="http://www.boe.es/diario_boe/txt.php?id=BOE-A-2018-12699"
              className="text-blue-600 underline"
            >
              <strong>RD 1112/2018</strong>
            </a>{" "}
            debido a las excepciones y a la falta de conformidad de los aspectos
            que se indican en el siguiente punto.
          </p>
          <p>
            <strong>CONTENIDO NO ACCESIBLE</strong>
          </p>
          <p>
            El contenido que se recoge a continuación no es accesible por lo
            siguiente:
          </p>

          <ul>
            <li>Falta de conformidad con el RD 1112/2018</li>
          </ul>
          <p>
            Podrían existir algunos aspectos de contraste que no cumplan los
            mínimos exigidos, 3:1, con respecto a los colores adyacentes del
            fondo de la sección de la web en cuestión. [9.1.4.11 Contraste no
            textual]
          </p>
          <p>
            Podrían existir algunas etiquetas o instrucciones no etiquetadas
            correctamente [9.3.3.2 Etiquetas o instrucciones]
          </p>
          <p>
            Podrían existir mensajes de estado que no cumplan con los mínimos
            exigidos [9.4.1.3 Mensajes de estado]
          </p>
          <p>
            Podrían existir sugerencias ante errores que no cumplan con los
            mínimos exigidos [9.3.3.3 Sugerencias ante errores (condicional)]
          </p>

          <ul>
            <li>
              Podrían existir fallos puntuales de edición en alguna página web
            </li>
          </ul>
          <p>Carga desproporcionada. No aplica.</p>
          <p>
            <strong>PREPARACIÓN DE LA SIGUIENTE DECLARACIÓN DE ACCESIBILIDAD</strong>
          </p>
          <p>La presente declaración fue preparada el 25 de junio de 2023.</p>
          <p>
            El método empleado para preparar la declaración ha sido una
            autoevaluación llevada a cabo por la propia empresa.
          </p>
          <p>
            <strong>OBSERVACIONES Y DATOS DE CONTACTO</strong>
          </p>
          <p>
            Puede realizar comunicaciones sobre requisitos de accesibilidad
            (artículo 10.2.a del RD 1112/2018) como, por ejemplo:
          </p>

          <ul>
            <li>
              Informar sobre cualquier posible incumplimiento por parte de este
              sitio web
            </li>
            <li>Transmitir otras dificultades de acceso al contenido</li>
            <li>
              Formular cualquier otra consulta o sugerencia de mejora relativa a
              la accesibilidad del sitio web
            </li>
          </ul>
          <p>A través del email de contacto info@demosmap.com.</p>
          <p>Puede presentar:</p>

          <ul>
            <li>
              <strong>Queja</strong> relativa al cumplimiento de los requisitos
              del RD 1112/2018 o
            </li>
            <li>
              <strong>Solicitud de Información accesible</strong> relativa a:
            </li>
          </ul>
          <p>
            Contenidos que están excluidos del ámbito de aplicación del RD
            1112/2018 según lo establecido por el artículo 3, apartado 4
          </p>
          <p>
            Contenidos que están exentos del cumplimiento de los requisitos de
            accesibilidad por imponer una carga desproporcionada.
          </p>
          <p>
            En la Solicitud de información accesible, se debe concretar, con
            toda claridad, los hechos, razones y petición que permitan constatar
            que se trata de una solicitud razonable y legítima.
          </p>
          <p>
            Las quejas y reclamaciones sobre información accesible se realizarán
            a través del email anterior.
          </p>
          <p>
            <strong>PROCEDIMIENTO DE APLICACIÓN</strong>
          </p>
          <p>
            Si una vez realizada una solicitud de información accesible o queja,
            ésta hubiera sido desestimada, no se estuviera de acuerdo con la
            decisión adoptada, o la respuesta no cumpliera los requisitos
            contemplados en el artículo 12.5, la persona interesada podrá
            iniciar una reclamación. Igualmente se podrá iniciar una reclamación
            en el caso de que haya transcurrido el plazo de veinte días hábiles
            sin haber obtenido respuesta.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
