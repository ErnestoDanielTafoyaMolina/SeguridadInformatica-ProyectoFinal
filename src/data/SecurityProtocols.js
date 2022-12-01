//añade aqui la informacion isabel
//la descripcion de lo que se pide 
export const protocols = [
    {
        id:1,
        name:"HTTPS",
        description:`HTTPS (protocolo de Transferencia de Hiper-Texto) es un protocolo que permite establecer una conexión segura entre el servidor y el cliente, que no puede ser interceptada por personas no autorizadas. En resumidas cuentas, es la versión segura de el http (Hyper Text Transfer Protocol).

        Una conexión HTTP estándar en Internet puede ser fácilmente secuestrada por partes no autorizadas. El propósito de una conexión HTTPS es evitar esto: encriptar los datos para asegurar una transmisión de datos segura. La transmisión está encriptada y el servidor autenticado.
        
        Cuando un usuario hace clic en un enlace o confirma una entrada de URL en la barra de direcciones con el botón Enter, el navegador establece una conexión. El servidor presenta un certificado que lo autentica como un proveedor genuino y confiable. Una vez que el cliente ha verificado la autenticidad, envía una clave de sesión que sólo puede leer el servidor. Sobre la base de estos datos clave, ahora se puede realizar el cifrado. Normalmente, se utiliza un certificado SSL.`,
    },
    {
        id:2,
        name:"SSL",
        description:"EL SSL proporciona un canal seguro entre dos computadoras o dispositivos que operan a través de Internet o de una red interna. Un ejemplo frecuente es el uso de SSL para proteger las comunicaciones entre un navegador web y un servidor web. Este protocolo cambia la dirección del sitio web de HTTP a HTTPS, donde «S» significa «seguridad».",
    },
    {
        id:3,
        name:"FTPS",
        description:"FTPS (FTP sobre SSL) es un protocolo seguro de transferencia de archivos que le permite conectarse de forma segura con sus socios de Negocio, clientes y usuarios. Cuando se envían transferencias de archivos, se utiliza FTPS para el intercambio y se pueden autenticar con métodos que FTPS soporta, como contraseñas, certificados de cliente y certificados de servidor.",
    },
    {
        id:4,
        name:"SSh",
        description:`SSH o Secure Shell, es un protocolo de administración remota que le permite a los usuarios controlar y modificar sus servidores remotos a través de Internet a través de un mecanismo de autenticación.

        Proporciona un mecanismo para autenticar un usuario remoto, transferir entradas desde el cliente al host y retransmitir la salida de vuelta al cliente. El servicio se creó como un reemplazo seguro para el Telnet sin cifrar y utiliza técnicas criptográficas para garantizar que todas las comunicaciones hacia y desde el servidor remoto sucedan de manera encriptada.
        
        La imagen de abajo muestra una ventana típica de SSH. Cualquier usuario de Linux o macOS puede usar SSH en su servidor remoto directamente desde la ventana del terminal. Los usuarios de Windows pueden aprovechar los clientes SSH como Putty.`,
    },
    {
        id:5,
        name:"IPSEC",
        description:`IPsec es un grupo de protocolos que se utilizan conjuntamente para establecer conexiones encriptadas entre dispositivos. Ayuda a mantener seguros los datos enviados a través de redes públicas. IPsec se suele utilizar para establecer VPN, y funciona mediante la encriptación de paquetes IP, junto con la autenticación de la fuente de la que proceden los paquetes.

        Dentro del término "IPsec," "IP" significa "Protocolo de Internet" y "sec" "seguro." El Protocolo de Internet es el principal protocolo de enrutamiento utilizado en Internet; designa a dónde irán los datos mediante el uso de direcciones IP. IPsec es seguro porque añade encriptación* y autenticación a este proceso.`,
    },
    {
        id:6,
        name:"SET",
        description:`SET (acrónimo de Secure Electronic Transaction) es un protocolo que ofrece paquetes de datos para todas las transacciones y cada transacción es autentificada con una firma digital.
        Esta normativa apareció con el auge de las páginas que venden directamente sus productos y servicios a través de la red.
        En la actualidad el medio de pago más usado en las tiendas electrónicas o e-commerce son las tarjetas de crédito tanto las emitidas por bancos, como la Visa o MasterCard, como aquellas emitidas por otras empresas como American Express.
        
        se realiza una transacción segura por medio de SET, los datos del cliente son enviados al servidor del vendedor, pero dicho vendedor sólo recibe la orden. Los números de la tarjeta del banco se envían directamente al banco del vendedor, quien podrá leer los detalles de la cuenta bancaria del comprador y contactar con el banco para verificarlos en tiempo real.`,
    },
    {
        id:7,
        name:"SCP",
        description:` Secure Copy Protocol (SCP), a menudo denominado simplemente Secure Copy, es un protocolo para sistemas informáticos, que garantiza la transferencia segura de datos entre un equipo local (host local) y un equipo remoto (host remoto) o, alternativamente, entre dos equipos remotos. Se basa en los comandos RCP, (remote copy), que se publicaron en 1982 como parte de los “comandos r” de la Universidad de California (Berkeley). Permiten el control de la transmisión de datos a través de la línea de comandos.

        SCP ofrece un método de autenticación entre los dos equipos, así como un cifrado de la transmisión. Por lo tanto, el protocolo no solo garantiza la seguridad, sino también la autenticidad de los datos transferidos. En ambos mecanismos de seguridad el SCP protocol se basa en SSH (Secure Shell), que también se utiliza en protocolos alternativos de transmisión como FTP (o SFTP). El puerto TCP que utiliza para la transferencia a través de SCP es el puerto estándar SSH 22.
        
        Secure Copy es multiplataforma: existen aplicaciones y programas para los sistemas operativos más conocidos, como Windows, macOS y Linux, así como para Android y iOS.`,
    },
    {
        id:8,
        name:"SFTP",
        description:`SFTP es la abreviatura de Secure File Transfer Protocol (Protocolo de transferencia segura de archivos). Este protocolo permite transferir datos cifrados entre tu ordenador local y el espacio web del que dispones en tu hosting de STRATO a través de Secure Shell (SSH).

        El protocolo de transferencia de archivos SFTP es independiente del sistema operativo que utilices y del tipo de conexión. Además de la posibilidad de transferir archivos a través de SFTP, también permite visualizar directorios, cambiar el nombre o limitar derechos. SFTP es el sucesor de FTP: la diferencia es una mayor seguridad, como lo revela el añadido "Seguro".
         
        Un programa SFTP te permite subir archivos para tu página web a tu espacio web. También puedes crear una copia de seguridad del sitio web con SFTP. Para ello, copia los datos del espacio web localmente en tu ordenador.
         
        Con un programa SFTP también puedes borrar ficheros y/o carpetas enteras. Si borras contenidos, estos ya no aparecerán para los visitantes de tu página web. Para ello, solo deberás seleccionar el contenido que desees y hacer clic con el botón derecho del
        ratón. Si eliges la opción Eliminar, tras confirmar la pregunta de seguridad, el contenido se borrará de tu espacio web.`,
    },
    {
        id:9,
        name:"SMTPS",
        description:`El protocolo simple de transferencia de correo (SMTP) es un protocolo TCP/IP que se utiliza para enviar y recibir correo electrónico. Normalmente se utiliza con POP3 o con el protocolo de acceso a mensajes de Internet (IMAP) para guardar mensajes en un buzón del servidor y descargarlos periódicamente del servidor para el usuario.`,
    },
    {
        id:10,
        name:"IMAPS",
        description:`IMAP es un protocolo para obtener acceso al correo electrónico. Es el método
        recomendado cuando necesita comprobar los correos electrónicos de varios
        dispositivos diferentes. 
        Y aunque no es el tema principal, también debemos habla acerca de POP, el cual
        es otro protocolo que se utiliza de igual manera para acceder al correo electrónico
        desde un servidor pero funciona distinto.
        `,
    },
]