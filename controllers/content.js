/** */
const getContent = (req, res)  => {
  let code = req.params.code;
  switch(code) {
    case 'about-us':
      res.status(200).send({
        code,
        type: 'section',
        value: [
          {
            code: 'about-us-meta-title',
            type: 'meta-title',
            value: `Acerca de Nosotros - ITECH NEWS`
          },
          {
            code: 'about-us-title',
            type: 'html',
            value: `Acerca de Nosotros`
          },
          {
            code: 'about-us-text',
            type: 'html',
            value: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dolor leo. Duis dictum eros sed diam fringilla, at eleifendelit imperdiet. Etiam vel lectus nec sapien pharetra bibendum. Sed nec ante leo. Sed vitae semper massa. Vestibulum lacusnibh, tempor sed laoreet nec, sodales non massa. Phasellus accumsan ultrices malesuada. Suspendisse auctor metus et diamconvallis suscipit. Curabitur quis accumsan turpis. Mauris lectus libero, dictum id lorem non, ornare iaculis magna. Nullam elit tellus, finibus sit amet mauris in, porta convallis ante. Fusce sagittis rutrum diam, sit amet placerat estdapibus ut.</p><p> Nunc convallis dui scelerisque porta convallis. Ut massa diam, fermentum id convallis a, ultricies in nisi. Ut fermentum sit amet dui et porta. Nulla rhoncus luctus nisi, aliquam facilisis nulla aliquam a. Quisque vulputate nulla est, atincidunt sapien blandit quis. Phasellus nibh risus, egestas in fermentum vitae, dignissim sed est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed urna felis, aliquet id hendrerit placerat, tincidunt ut diam. Etiam placerat tempus elementum. </p><p>Vivamus elementum sapien tincidunt auctor tristique. Sed non metus ultricies, lacinia est nec, volutpat risus. Proin et dolor at quam lobortis ullamcorper. Fusce iaculis, justo et convallis pellentesque, eros nisl dignissim augue, et condimentum velit tortor quis metus. Cras sodales egestas volutpat. Nunc ultrices nec sem accumsan facilisis. Pellentesque at neque sagittis, pulvinar enim ac, vestibulum metus. Nunc lorem metus,laoreet nec elit vel, rhoncus semper tellus. Integer interdum, orci fermentum varius pharetra, massa elit vehicula odio, et consequat lectus orci vel orci. Cras purus mi, imperdiet a suscipit in, dapibus eu felis.</p>`
          },
          {
            code: 'about-us-pic',
            type: 'gif',
            value: `https://media3.giphy.com/media/xTiTnJ3BooiDs8dL7W/giphy.gif`
          }
        ]
      });
      break;
    case 'contact':
      res.status(200).send({
        code,
        type: 'section',
        value: [
          {
            code: 'contact-meta-title',
            type: 'meta-title',
            value: `Contáctanos - ITECH NEWS`
          },
          {
            code: 'contact-title',
            type: 'text',
            value: `Ponte en contacto con nosotros`
          },
          {
            code: 'contact-text',
            type: 'html',
            value: `<p>Completa el siguiente formulario y nos estaremos comunicando a la brevedad</p>`
          }
        ]
      });
      break;
    case 'newsletter':
      res.status(200).send({
        code,
        type: 'section',
        value: [
          {
            code: 'newsletter-title',
            type: 'text',
            value: `Subscricion a nuestro newsletter`
          },
          {
            code: 'newsletter-text',
            type: 'text',
            value: `Mantenete al tanto de lo que sucede dentro de la carrera de desarrollo de software del ITEC.`
          },
          {
            code: 'newsletter-button',
            type: 'text',
            value: `Registrarse`
          },
          {
            code: 'newsletter-success-message',
            type: 'text',
            value: `Se ha registrado con éxito al newsletter.`
          },
        ]
      });
      break;
     default:
      res.status(400).send({
        errors: [{
          param: 'code',
          message: `code not found for the value: ${code}`
        }]
      });
      break;
  }
};

module.exports = {
  getContent
};