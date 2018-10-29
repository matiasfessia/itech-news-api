const sleep = milliseconds => {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

/** */
function getPosts(req, res) {
  res.status(200).send([
    {
      title: 'Google Chrome',
      date: '2018-08-15T22:46:41.500Z',
      author: 'Nicholas C. Schwartz',
      extract: 'Google Chrome es un navegador web de software privativo o código cerrado​ desarrollado por Google, aunque derivado de proyectos de código abierto (como el motor de renderizado Blink).​ Está disponible gratuitamente. El nombre del navegador deriva del término en inglés usado para el marco de la interfaz gráfica de usuario.',
      // post: `<p>La alternativa de navegador web libre tras Mozilla Firefox, es sin duda alguna <b>Google Chrome</b>. Chrome es el nuevo navegador desarrollado por Google, que se describe por sus creadores como "un navegador construido para la red de hoy y las aplicaciones de mañana". Este navegador es compatible con Windows (XP, Vista y 7), para Mac (OS 10.5 y superior, solo intel) y para Linux (Debian, Ubuntu, Fedora y openSUSE).</p><p>Chrome mejora a sus antecesores en 4 puntos:</p><p><b>Velocidad</b></p><ul><li>Carga de la propia aplicación, tras hacer doble clic en el icono.</li><li>Carga de páginas web.</li><li>Ejecución de aplicaciones web (flash y javascript).</li><li>Mayor velocidad al buscar y navegar, ya que se pueden introducir tanto búsquedas como direcciones en la propia barra de direcciones, llamada "omnibox".</li></ul><p><br><b>Sencillez</b></p><p>La ventana del navegador es funcional, clara y de sencillo manejo. Un ejemplo de sencillez es la omnibox que permite desde un mismo sitio navegar y realizar búsquedas. Está dotado igual que sus antecesores de un sistema de pestañas que son deslizables en la barra de pestañas y desacoplables de la misma simplemente arrastrándolas.</p><p><b>Seguridad</b></p><p>Al igual que los navegadores de última generación está dotado con mecanismos de seguridad contra la suplantación de identidad y el software malintencionado, avisando también al usuario de aquellas páginas que son de dudosa procedencia o presentan amenazas. Mantiene un sistema de actualizaciones automático que permite tener siempre el navegador en condiciones óptimas de protección.</p>`,
      slug: 'google-chrome',
      picture: 'http://as01.epimg.net/betech/imagenes/2018/01/16/portada/1516112274_303663_1516112399_noticia_normal.jpg',
    },
    {
      title: 'Mozilla Firefox',
      date: '2018-05-02T22:46:41.500Z',
      author: 'Donna J. Medina',
      extract: 'Mozilla Firefox (llamado simplemente Firefox) es un navegador web libre y de código abierto8​ desarrollado para Linux, Android, IOS, OS X y Microsoft Windows coordinado por la Corporación Mozilla y la Fundación Mozilla. Usa el motor Gecko para renderizar páginas web, el cual implementa actuales y futuros estándares web.',
      // post: `<p><strong>Firefox</strong> es el segundo navegador web más popular del mundo, es un navegador de <strong>código libre</strong> bajo ambientes de desarrolladores que trabajan en el día tras día. Firefox proviene de los laboratorios de Mozilla Aplicación Suite, en la actualidad cuenta con las de 500 millones de usuarios, se basa en el poderoso <strong>motor de búsqueda Gecko</strong>, el cual implementa estándares webs siempre actualizados. Por ser de software libre, este motor puede ser modificado a placer, lo que lo convierte en uno de los sistemas operativos favoritos por hackers y desarrolladores de aplicaciones.</p><p>Entre sus características más sonadas esta la navegación por pestañas, su perfecto acoplamiento es una virtud que posee, corrector ortográfico, ideal para editores de documentos o paginas dentro del navegador, un administrador de tareas que te permite ver un proceso limpio, “Sincero” y detallado de la descarga, aceleración tipo GPU, y la posibilidad de insertarle complementos desarrollados por terceros a fin de hacer la experiencia de navegar personalmente más agradable.</p><p>Su última actualización llego con el lema “<strong>Vuelve a descubrir la web</strong>” refiriéndose a la capacidad que tiene la versión 6.0.2 de mostrar su código <a href="https://conceptodefinicion.de/fuente/">fuente</a> totalmente gratis para cualquier usuario que lo desee. Este importante navegador funciona con <a href="https://conceptodefinicion.de/windows/">Windows</a>, <a href="https://conceptodefinicion.de/linux/">Linux</a>, Mac OS X y varios sistemas operativos más. </p>`,
      slug: 'mozilla-firefox',
      picture: 'https://mozilla-ni.org/wp/src/media/2018/01/Yo-Firefox.jpg',
    },
    {
      title: 'Opera',
      date: '2018-02-25T22:46:41.500Z',
      author: 'Tonie D. Garrett',
      extract: 'Opera es un navegador web creado por la empresa noruega Opera Software. Usa el motor de renderizado Blink. Tiene versiones para computadoras de escritorio, teléfonos móviles y tabletas.',
      // post: `<p>El navegador especial desglosado en las <strong>características de Opera</strong> se considera uno de los mejores <a href="https://www.12caracteristicas.com/navegadores/" title="características de navegadores">navegadores</a> del mundo de <a href="https://www.12caracteristicas.com/internet/" title="características de internet">internet</a>, pues a pesar de ser uno de los más nuevos, cuenta con un tipo de motor renderizado Blink, que lo hace realmente infalible a cualquier necesidad por parte de los usuarios, ciertamente.</p><p>No solo es compatible con <strong>móviles comunes <a href="https://www.12caracteristicas.com/android/" title="características de Android">Android</a></strong>, las características de Opera suelen adaptarse sencillamente a móviles y tableta de diferentes sistemas operativos en los que se describen a partir de opciones especiales y que resultan altamente interesantes.</p><p>Puedes ver su directa <strong>compatibilidad con Android</strong>, sistemas <a href="https://www.12caracteristicas.com/mac/" title="características de Mac">Mac</a>, así como Sistemas <a href="https://www.12caracteristicas.com/windows/" title="características de Windows">Windows</a> Mobile, el cual va comprimiendo cada una de las webs en la que se desplaza con alta exclusividad a partir de los recursos que son necesarios para una visión completa de sus utilidades una vez que abre la aplicación.</p><p>Así mismo, va reduciendo el tiempo de carga de una web haciendo que se torne una aplicación de navegador realmente deseada y de máximas perspectivas para todos los clientes, ciertamente.</p>`,
      slug: 'opera',
      picture: 'https://www-static-blogs.operacdn.com/multi/wp-content/uploads/sites/2/2015/09/opera-new-logo-wallpaper-computer-2560x1440.jpg',
    }
  ]);
}

/** */
function getPost(req, res) {
  let slug = req.params.slug;
  switch(slug) {
    case 'google-chrome':
      res.status(200).send({
        title: 'Google Chrome',
        date: '2018-08-15T22:46:41.500Z',
        author: 'Nicholas C. Schwartz',
        extract: 'Google Chrome es un navegador web de software privativo o código cerrado​ desarrollado por Google, aunque derivado de proyectos de código abierto (como el motor de renderizado Blink).​ Está disponible gratuitamente. El nombre del navegador deriva del término en inglés usado para el marco de la interfaz gráfica de usuario.',
        text: `<p>La alternativa de navegador web libre tras Mozilla Firefox, es sin duda alguna <b>Google Chrome</b>. Chrome es el nuevo navegador desarrollado por Google, que se describe por sus creadores como "un navegador construido para la red de hoy y las aplicaciones de mañana". Este navegador es compatible con Windows (XP, Vista y 7), para Mac (OS 10.5 y superior, solo intel) y para Linux (Debian, Ubuntu, Fedora y openSUSE).</p><p>Chrome mejora a sus antecesores en 4 puntos:</p><p><b>Velocidad</b></p><ul><li>Carga de la propia aplicación, tras hacer doble clic en el icono.</li><li>Carga de páginas web.</li><li>Ejecución de aplicaciones web (flash y javascript).</li><li>Mayor velocidad al buscar y navegar, ya que se pueden introducir tanto búsquedas como direcciones en la propia barra de direcciones, llamada "omnibox".</li></ul><p><br><b>Sencillez</b></p><p>La ventana del navegador es funcional, clara y de sencillo manejo. Un ejemplo de sencillez es la omnibox que permite desde un mismo sitio navegar y realizar búsquedas. Está dotado igual que sus antecesores de un sistema de pestañas que son deslizables en la barra de pestañas y desacoplables de la misma simplemente arrastrándolas.</p><p><b>Seguridad</b></p><p>Al igual que los navegadores de última generación está dotado con mecanismos de seguridad contra la suplantación de identidad y el software malintencionado, avisando también al usuario de aquellas páginas que son de dudosa procedencia o presentan amenazas. Mantiene un sistema de actualizaciones automático que permite tener siempre el navegador en condiciones óptimas de protección.</p>`,
        slug: 'google-chrome',
        picture: 'http://as01.epimg.net/betech/imagenes/2018/01/16/portada/1516112274_303663_1516112399_noticia_normal.jpg',
      });
      break; 
    case 'mozilla-firefox':
      res.status(200).send({
        title: 'Mozilla Firefox',
        date: '2018-05-02T22:46:41.500Z',
        author: 'Donna J. Medina',
        extract: 'Mozilla Firefox (llamado simplemente Firefox) es un navegador web libre y de código abierto8​ desarrollado para Linux, Android, IOS, OS X y Microsoft Windows coordinado por la Corporación Mozilla y la Fundación Mozilla. Usa el motor Gecko para renderizar páginas web, el cual implementa actuales y futuros estándares web.',
        text: `<p><strong>Firefox</strong> es el segundo navegador web más popular del mundo, es un navegador de <strong>código libre</strong> bajo ambientes de desarrolladores que trabajan en el día tras día. Firefox proviene de los laboratorios de Mozilla Aplicación Suite, en la actualidad cuenta con las de 500 millones de usuarios, se basa en el poderoso <strong>motor de búsqueda Gecko</strong>, el cual implementa estándares webs siempre actualizados. Por ser de software libre, este motor puede ser modificado a placer, lo que lo convierte en uno de los sistemas operativos favoritos por hackers y desarrolladores de aplicaciones.</p><p>Entre sus características más sonadas esta la navegación por pestañas, su perfecto acoplamiento es una virtud que posee, corrector ortográfico, ideal para editores de documentos o paginas dentro del navegador, un administrador de tareas que te permite ver un proceso limpio, “Sincero” y detallado de la descarga, aceleración tipo GPU, y la posibilidad de insertarle complementos desarrollados por terceros a fin de hacer la experiencia de navegar personalmente más agradable.</p><p>Su última actualización llego con el lema “<strong>Vuelve a descubrir la web</strong>” refiriéndose a la capacidad que tiene la versión 6.0.2 de mostrar su código <a href="https://conceptodefinicion.de/fuente/">fuente</a> totalmente gratis para cualquier usuario que lo desee. Este importante navegador funciona con <a href="https://conceptodefinicion.de/windows/">Windows</a>, <a href="https://conceptodefinicion.de/linux/">Linux</a>, Mac OS X y varios sistemas operativos más. </p>`,
        slug: 'mozilla-firefox',
        picture: 'https://mozilla-ni.org/wp/src/media/2018/01/Yo-Firefox.jpg',
      });
      break; 
    case 'opera':
      res.status(200).send({
        title: 'Opera',
        date: '2018-02-25T22:46:41.500Z',
        author: 'Tonie D. Garrett',
        extract: 'Opera es un navegador web creado por la empresa noruega Opera Software. Usa el motor de renderizado Blink. Tiene versiones para computadoras de escritorio, teléfonos móviles y tabletas.',
        text: `<p>El navegador especial desglosado en las <strong>características de Opera</strong> se considera uno de los mejores <a href="https://www.12caracteristicas.com/navegadores/" title="características de navegadores">navegadores</a> del mundo de <a href="https://www.12caracteristicas.com/internet/" title="características de internet">internet</a>, pues a pesar de ser uno de los más nuevos, cuenta con un tipo de motor renderizado Blink, que lo hace realmente infalible a cualquier necesidad por parte de los usuarios, ciertamente.</p><p>No solo es compatible con <strong>móviles comunes <a href="https://www.12caracteristicas.com/android/" title="características de Android">Android</a></strong>, las características de Opera suelen adaptarse sencillamente a móviles y tableta de diferentes sistemas operativos en los que se describen a partir de opciones especiales y que resultan altamente interesantes.</p><p>Puedes ver su directa <strong>compatibilidad con Android</strong>, sistemas <a href="https://www.12caracteristicas.com/mac/" title="características de Mac">Mac</a>, así como Sistemas <a href="https://www.12caracteristicas.com/windows/" title="características de Windows">Windows</a> Mobile, el cual va comprimiendo cada una de las webs en la que se desplaza con alta exclusividad a partir de los recursos que son necesarios para una visión completa de sus utilidades una vez que abre la aplicación.</p><p>Así mismo, va reduciendo el tiempo de carga de una web haciendo que se torne una aplicación de navegador realmente deseada y de máximas perspectivas para todos los clientes, ciertamente.</p>`,
        slug: 'opera',
        picture: 'https://www-static-blogs.operacdn.com/multi/wp-content/uploads/sites/2/2015/09/opera-new-logo-wallpaper-computer-2560x1440.jpg',
      });
      break;
  }
}

module.exports = {
  getPosts,
  getPost
};