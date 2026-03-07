export const quizData = [
    {
        id: 1,
        vector: "Email",
        trigger: "Urgencia Tecnológica",
        title: "Alerta de Seguridad Crítica",
        sender: "Soporte TI <admin-support@portal-seguro-it.com>",
        subject: "ACCIÓN REQUERIDA: Su cuenta será suspendida en 15 minutos",
        content: "Hemos detectado un intento de acceso no autorizado a su buzón desde una IP extranjera. Por seguridad, su cuenta ha sido bloqueada temporalmente. Debe cambiar su contraseña en los próximos 15 minutos o su acceso será revocado de forma permanente.",
        buttonText: "ACTUALIZAR CONTRASEÑA AHORA",
        link: "http://seguridad-portal-verificar.net/reset-auth",
        isPhishing: true,
        feedback: {
            technical: "El dominio del remitente '@portal-seguro-it.com' no coincide con el dominio corporativo oficial. Además, el enlace redirige a un sitio '.net' no oficial.",
            ethical: "Este ataque utiliza la **Urgencia** para anular el pensamiento crítico del usuario, forzándolo a actuar por miedo a perder su acceso."
        }
    },
    {
        id: 2,
        vector: "Email / Whaling",
        trigger: "Autoridad",
        title: "Solicitud Confidencial del CEO",
        sender: "Director General <ceo.office.direct@gmail.com>",
        subject: "Tarea urgente y discreta",
        content: "Hola, estoy en una reunión muy importante y necesito un favor personal pero urgente. ¿Podrías comprar 5 tarjetas de regalo de Amazon de $2,000 cada una para un incentivo de cliente? Envíame los códigos por aquí. Te reembolsaré hoy mismo. No me llames, no puedo hablar ahora.",
        buttonText: "RESPONDER CON CÓDIGOS",
        link: null,
        isPhishing: true,
        feedback: {
            technical: "Un CEO nunca usaría una cuenta de @gmail.com para asuntos corporativos, ni solicitaría transacciones financieras informales (Gift Cards) a través de correo electrónico.",
            ethical: "El vector de **Autoridad** busca que el empleado no cuestione la orden debido a la jerarquía, sumado a una restricción de comunicación (no llamar) para evitar la verificación."
        }
    },
    {
        id: 3,
        vector: "Email",
        trigger: "Curiosidad Corporativa",
        title: "Nueva Política de Bonos 2026",
        sender: "Recursos Humanos <rrhh@empresa-internacional.com>",
        subject: "Actualización de Políticas y Beneficios Trimestrales",
        content: "Se han aprobado nuevos criterios para el cálculo de bonos de desempeño para este trimestre. Adjuntamos el PDF con el tabulador detallado por departamento. Por favor, revíselo para asegurar que su información de pago sea correcta.",
        attachment: "Politicas_Bonos_Q1_2026.exe",
        isPhishing: true,
        feedback: {
            technical: "El archivo adjunto tiene una extensión '.exe' disfrazada de documento. Nunca un PDF legítimo llegará como un ejecutable. Los atacantes ocultan extensiones para instalar malware.",
            ethical: "La **Curiosidad** sobre beneficios económicos es uno de los ganchos más efectivos. Prometer información sobre dinero garantiza que un alto porcentaje de usuarios abra el archivo."
        }
    },
    {
        id: 4,
        vector: "Email",
        trigger: "Miedo (Alerta de Nube)",
        title: "Seguridad de Microsoft 365",
        sender: "Microsoft Security <account-security-noreply@microsoft.com>",
        subject: "Inicio de sesión inusual en la cuenta de Microsoft",
        content: "Detectamos algo inusual en un inicio de sesión reciente de la cuenta. País: Rusia. IP: 185.220.101.43. Si no fue usted, haga clic en el botón de abajo para proteger su cuenta.",
        buttonText: "REVISAR ACTIVIDAD RECIENTE",
        link: "https://login.microsoftonline.security-verify.com/common/oauth2",
        isPhishing: true,
        feedback: {
            technical: "Aunque el remitente parece real, el enlace apunta a 'security-verify.com', que es un dominio de phishing que imita a Microsoft. Siempre verifica la URL real pasando el cursor sobre el botón.",
            ethical: "El uso de **Miedo** ante un acceso desde un país extranjero (Rusia) genera un pánico inmediato que impulsa al usuario a 'solucionar' el problema rápidamente sin verificar la fuente."
        }
    },
    {
        id: 5,
        vector: "SMS / Smishing",
        trigger: "Expectativa",
        title: "Notificación de Paquetería",
        sender: "+52 55 1234 5678",
        subject: "SMS",
        content: "[DHL] Su paquete con guía 772849 está retenido en aduana por una tarifa pendiente de $15.42 MXN. Pague ahora para evitar la devolución: https://dhl-mx-aduana.short.link/pay",
        buttonText: "PAGAR $15.42",
        link: "https://dhl-mx-aduana.short.link/pay",
        isPhishing: true,
        feedback: {
            technical: "Las empresas de paquetería no usan acortadores de links aleatorios para cobros de aduana. Además, el monto es deliberadamente bajo para que el usuario no dude en pagar.",
            ethical: "Se basa en la **Expectativa**. Casi siempre estamos esperando un paquete o conocemos a alguien que lo está. La baja fricción (poca cantidad de dinero) hace que la víctima baje la guardia."
        }
    },
    {
        id: 6,
        vector: "Redes Sociales",
        trigger: "Confianza Profesional",
        title: "Mensaje InMail de LinkedIn",
        sender: "LinkedIn <messaging-noreply@linkedin.com>",
        subject: "Tienes una nueva oferta de empleo para el puesto de Senior Security Lead",
        content: "Visto tu perfil y experiencia, la empresa GlobalTech Solutions está interesada en entrevistarte. El salario base es de $120,000 USD anuales. Puedes ver los detalles de la oferta aquí.",
        buttonText: "VER OFERTA DE EMPLEO",
        link: "https://linkedin-jobs-portal.com/view?id=8382",
        isPhishing: true,
        feedback: {
            technical: "El enlace 'linkedin-jobs-portal.com' no es propiedad de LinkedIn (el dominio oficial es línkedin.com). Es una técnica de Typosquatting para robar credenciales profesionales.",
            ethical: "Aprovecha la **Confianza** en una plataforma profesional y el deseo de crecimiento laboral. Una oferta de alto perfil nubla el juicio técnico del usuario."
        }
    },
    {
        id: 7,
        vector: "Email",
        trigger: "Pánico Financiero",
        title: "Aviso de Factura Pendiente",
        sender: "Cobros CFE <facturacion@avisos-luz.com>",
        subject: "AVISO DE CORTE: Factura vencida por $8,450.00 MXN",
        content: "Su último recibo de luz presenta un adeudo inusual. Adjuntamos la factura detallada. Evite el corte de servicio pagando antes de las 24 horas. Si cree que hay un error, descargue el anexo para realizar la aclaración.",
        attachment: "Recibo_Detallado_Vencido.zip",
        isPhishing: true,
        feedback: {
            technical: "El dominio 'avisos-luz.com' es fraudulento. El envío de archivos '.zip' es una técnica común para evadir filtros de correo y entregar malware que roba información bancaria.",
            ethical: "El **Pánico Financiero** ante un cargo excesivo o un corte de servicio básico obliga a una reacción rápida. El atacante sabe que el usuario querrá abrir el archivo para 'ver el error'."
        }
    },
    {
        id: 8,
        vector: "Físico / Baiting",
        trigger: "Curiosidad Física",
        title: "Dispositivo USB Perdido",
        sender: "Entorno Físico (Estacionamiento)",
        subject: "Hardware Sugestivo",
        content: "Encuentras una memoria USB de marca premium en el estacionamiento de la oficina. Tiene una etiqueta escrita a mano que dice: 'Nómina_Confidencial_Socios_2026'. No hay nadie cerca.",
        buttonText: "CONECTAR PARA BUSCAR AL DUEÑO",
        link: null,
        isPhishing: true,
        feedback: {
            technical: "Esta es la técnica clásica de **Baiting**. El USB contiene un script de auto-ejecución que, al conectarse, le da al atacante acceso total a la red corporativa a través de tu computadora.",
            ethical: "Utiliza la **Curiosidad** extrema. La etiqueta está diseñada para ser irresistible. Moralmente, el usuario cree que está ayudando, pero técnicamente está comprometiendo a toda la empresa."
        }
    },
    {
        id: 9,
        vector: "Teams / Collaboration",
        trigger: "Familiaridad",
        title: "Notificación de Grabación",
        sender: "Microsoft Teams <no-reply@teams.microsoft.com>",
        subject: "Gisela Moreno ha compartido una grabación de la reunión con usted",
        content: "La reunión 'Planeación Estratégica Mensual' ha terminado. Puedes ver la grabación y las notas compartidas en el portal de Teams.",
        buttonText: "VER GRABACIÓN",
        link: "https://teams-ms-archive.net/recordings/2849",
        isPhishing: true,
        feedback: {
            technical: "El enlace redirige a un dominio '.net' que imita a Teams. Las grabaciones reales de Teams se alojan en SharePoint o OneDrive dentro del dominio corporativo de la empresa.",
            ethical: "Se basa en la **Familiaridad**. Al mencionar una reunión común o un nombre conocido, el usuario baja sus defensas y asume que es una notificación rutinaria de trabajo."
        }
    },
    {
        id: 10,
        vector: "Email",
        trigger: "Oportunismo",
        title: "Beneficio Exclusivo Empleado",
        sender: "Apple Corporate Benefits <benefits@apple-internal.com>",
        subject: "Descuento del 70% en el nuevo iPhone 17 para empleados de Seguridad",
        content: "Como parte del programa de lealtad, los empleados del departamento de Seguridad Informática pueden adquirir un iPhone 17 Pro con un 70% de descuento. Cantidades limitadas a las primeras 50 unidades.",
        buttonText: "RECLAMAR DESCUENTO",
        link: "https://apple-benefits-portal.com/auth/login",
        isPhishing: true,
        feedback: {
            technical: "El dominio 'apple-internal.com' no es el oficial de Apple. El formulario de login pide credenciales corporativas, las cuales son capturadas inmediatamente por el atacante.",
            ethical: "El **Oportunismo** y la escasez (solo 50 unidades) crean una presión de compra rápida. La oferta es 'demasiado buena para ser verdad', lo cual es la señal de alerta número uno."
        }
    }
];
