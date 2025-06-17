
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
         <h2><strong>POLÍTICA DE COOKIES</strong></h2>
      <p>
        DEMOSMAP comunica a los usuarios, a través de este aviso, que puede utilizar cookies cuando el usuario navega por las diferentes pantallas y páginas del sitio.
      </p>
      <p>
        Durante el uso de nuestra página Web usted acepta y autoriza expresamente el uso de cookies, de acuerdo con nuestra Política de Privacidad.
      </p>

      <h3><strong>¿Qué son las cookies?</strong></h3>
      <p>
        Una cookie es un archivo de texto muy pequeño que un servidor Web puede guardar en el navegador de un equipo para almacenar algún tipo de información sobre el usuario.
      </p>
      <p>
        Una cookie no es un archivo ejecutable ni un programa y por lo tanto no puede propagar o contener un virus u otro software malicioso, ni puede tener una longitud superior a 4.000 caracteres.
      </p>

      <h3><strong>¿Para qué sirven las cookies?</strong></h3>
      <p>
        La utilización de las cookies tiene como finalidad recordar las preferencias del usuario (idioma, país, inicio de sesión, características de su navegador, información de uso de nuestra Web, etc.)
      </p>
      <p>
        Recordando sus preferencias no tendremos que preguntarle por su país cada vez que visite nuestra Web...
      </p>

      <h3><strong>Tipos de cookies</strong></h3>
      <p>Las cookies se pueden clasificar en función a la entidad que las gestione, el tiempo que éstas permanecen activas o según su finalidad.</p>

      <h4 className="mt-4"><strong>En función a su propiedad</strong></h4>
      <ul className="list-disc ml-6">
        <li><strong>Cookies propias</strong>: Enviadas desde un equipo o dominio gestionado por DEMOSMAP.</li>
        <li><strong>Cookies de terceros</strong>: Enviadas desde un dominio no gestionado por el editor.</li>
      </ul>

      <h4 className="mt-4"><strong>En función a su tiempo de vida</strong></h4>
      <ul className="list-disc ml-6">
        <li><strong>Cookies de sesión</strong>: Recaban datos mientras el usuario navega por la página web.</li>
        <li><strong>Cookies persistentes</strong>: Datos almacenados en el terminal durante un periodo definido.</li>
      </ul>

      <h4 className="mt-4"><strong>En función a su finalidad</strong></h4>
      <ul className="list-disc ml-6">
        <li><strong>Cookies técnicas</strong>: Necesarias para el funcionamiento de la web.</li>
        <li><strong>Cookies analíticas</strong>: Permiten recopilar información estadística de los usuarios.</li>
        <li><strong>Cookies de personalización</strong>: Permiten acceder con características personalizadas como idioma o región.</li>
        <li><strong>Cookies publicitarias</strong>: Gestionan eficazmente los espacios publicitarios.</li>
        <li><strong>Cookies de publicidad comportamental</strong>: Permiten mostrar publicidad basada en hábitos de navegación.</li>
      </ul>

      <h4 className="mt-4"><strong>Finalidades de las cookies</strong></h4>
      <p>
        A continuación, se presenta una lista de las cookies que puede encontrar en nuestro sitio Web:
      </p>

      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full text-sm border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-2 py-1">Cookie</th>
              <th className="border px-2 py-1">Finalidad</th>
              <th className="border px-2 py-1">Fuente</th>
              <th className="border px-2 py-1">Duración</th>
              <th className="border px-2 py-1">Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-2 py-1">_ga</td>
              <td className="border px-2 py-1">Análisis</td>
              <td className="border px-2 py-1">Google Analytics</td>
              <td className="border px-2 py-1">2 años</td>
              <td className="border px-2 py-1">Identificador único del usuario, frecuencia y fecha de visitas, ubicación aproximada, etc.</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">_gat</td>
              <td className="border px-2 py-1">Análisis</td>
              <td className="border px-2 py-1">Google Analytics</td>
              <td className="border px-2 py-1">Fin de sesión</td>
              <td className="border px-2 py-1">Controlar la tasa de solicitudes en sitios de alto tráfico.</td>
            </tr>
            <tr>
              <td className="border px-2 py-1">_gid</td>
              <td className="border px-2 py-1">Análisis</td>
              <td className="border px-2 py-1">Google Analytics</td>
              <td className="border px-2 py-1">24 horas</td>
              <td className="border px-2 py-1">Distinción de usuarios únicos por sesión.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6"><strong>Salvaguardas de protección</strong></h3>
      <p>
        El usuario puede configurar su navegador para aceptar o no las cookies, o para que le avise cuando se intente guardar una cookie. En el caso de las cookies de Google Analytics...
      </p>
      <p>
        Si desea impedir que Google Analytics recopile estadísticas, puede visitar:{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 underline">
          https://tools.google.com/dlpage/gaoptout
        </a>
      </p>

      <h4 className="mt-4"><strong>Ejemplos de configuración por navegador:</strong></h4>
      <ul className="list-disc ml-6">
        <li>Internet Explorer: Herramientas &gt; Opciones de Internet &gt; Privacidad &gt; Configuración.</li>
        <li>Firefox: Herramientas &gt; Opciones &gt; Privacidad &gt; Cookies.</li>
        <li>Chrome: Configuración &gt; Privacidad.</li>
        <li>Safari: Preferencias &gt; Seguridad.</li>
        <li>Opera: Configuración &gt; Eliminar información personal.</li>
        <li>Explorador móvil: Ajustes &gt; Borrar datos o Privacidad y Seguridad *</li>
      </ul>

      <p className="text-sm text-gray-600">*Puede variar según la versión del sistema operativo.</p>

      <p>
        Muchos navegadores permiten un modo privado en el cual las cookies se eliminan al cerrar la sesión. Ejemplos:
      </p>
      <ul className="list-disc ml-6">
        <li>Internet Explorer 8 y superior: InPrivate</li>
        <li>Firefox 3.5 y superior: Navegación Privada</li>
        <li>Google Chrome: Incógnito</li>
        <li>Safari 2 y superior: Navegación Privada</li>
        <li>Opera 10.5 y superior: Navegación Privada</li>
      </ul>
     </div>
    </div>
      <Footer />
    </div>
  );
}
