export const quizData = [
    {
        id: 1,
        vector: "Email / Quishing",
        trigger: "Curiosidad Técnica",
        title: "Actualización de Protocolo de Acceso Físico",
        sender: "Seguridad Patrimonial <patrimonial-security@corporativo-central.com>",
        subject: "IMPORTANTE: Nuevo QR de Acceso a Oficinas - Mayo 2026",
        content: "Estimado colaborador, debido a la actualización de los lectores biométricos en la recepción, su tarjeta física dejará de funcionar mañana. Es obligatorio escanear el siguiente código QR para sincronizar su identidad digital con la nueva app de acceso 'SmartGate'.",
        attachment: "Instrucciones_Sincronizacion.pdf",
        options: [
            { id: 0, text: "Escanear QR y seguir instrucciones", isCorrect: false },
            { id: 1, text: "Reportar como posible Phishing", isCorrect: true },
            { id: 2, text: "Ignorar el correo y esperar a mañana", isCorrect: false }
        ],
        isPhishing: true,
        feedback: {
            technical: "El vector es **Quishing**. Los atacantes usan QRs porque evaden filtros de texto. El dominio '@corporativo-central.com' no es el oficial y la urgencia es una señal de alerta.",
            ethical: "Aprovecha la **Dependencia Operativa**. El miedo a no poder entrar a trabajar induce a una acción impulsiva."
        }
    },
    {
        id: 2,
        vector: "Teams / AI-Whaling",
        trigger: "Autoridad (Deepfake)",
        title: "Mensaje del VP de Operaciones",
        sender: "VP Operaciones (Direct Assistant)",
        subject: "Directiva Confidencial: Reestructuración",
        content: "Hola. Necesito que revises este memorándum de voz generado por mi asistente IA sobre cambios en tu departamento. Es información sensible. No lo compartas. Haz clic para autenticarte y escuchar.",
        options: [
            { id: 0, text: "Acceder al portal de voz y autenticarse", isCorrect: false },
            { id: 1, text: "Verificar con el VP por otro canal oficial", isCorrect: true },
            { id: 2, text: "Enviar el link a un compañero para confirmar", isCorrect: false }
        ],
        isPhishing: true,
        feedback: {
            technical: "Uso de **AitM (Adversary-in-the-Middle)**. El portal pide login para 'escuchar', capturando tu token de sesión real incluso con MFA.",
            ethical: "Explota la **Exclusividad**. Hacer sentir al usuario parte de un círculo de confianza reduce su escepticismo."
        }
    },
    {
        id: 3,
        vector: "GitHub / System",
        trigger: "Mantenimiento Real",
        title: "Alert: Dependabot Vulnerability Fixed",
        sender: "GitHub <noreply@github.com>",
        subject: "[P-2026] Fix merged in your personal repository",
        content: "Dependabot ha detectado y corregido automáticamente una vulnerabilidad en 'package.json'. La PR ha sido aprobada según tus políticas de seguridad automática. Puedes revisar el log de cambios en tu tablero de GitHub oficial.",
        options: [
            { id: 0, text: "Hacer clic en el link del correo", isCorrect: false },
            { id: 1, text: "Ir a github.com manualmente y revisar", isCorrect: true },
            { id: 2, text: "Marcar como Phishing y borrar", isCorrect: false }
        ],
        isPhishing: false,
        feedback: {
            technical: "Este es un mensaje **LEGÍTIMO** de GitHub. Sin embargo, la mejor práctica (seguridad proactiva) es **nunca** usar links de correos, sino navegar manualmente al sitio oficial.",
            ethical: "Este escenario mide la **Paranoia Funcional**. Ser cauteloso incluso ante comunicaciones reales es el nivel más alto de resiliencia."
        }
    },
    {
        id: 4,
        vector: "SMS / Smishing",
        trigger: "Pánico Bancario",
        title: "Alerta de Seguridad BBVA",
        sender: "BBVA_SMS",
        content: "BBVA: Intento de compra en APPLE STORE por $15,999 MXN. Si NO reconoce presione aquí para cancelar: https://bbva-auth.net/cancelar-token",
        options: [
            { id: 0, text: "Hacer clic para cancelar el cargo", isCorrect: false },
            { id: 1, text: "Entrar a la App oficial de BBVA", isCorrect: true },
            { id: 2, text: "Llamar al número que envió el SMS", isCorrect: false }
        ],
        isPhishing: true,
        feedback: {
            technical: "El dominio 'bbva-auth.net' es fraudulento. Los bancos nunca usan dominios '.net' ni piden cancelar cargos vía links directos en SMS.",
            ethical: "Usa el **Pánico Financiero**. La urgencia emocional de detener una pérdida de dinero nubla el juicio técnico."
        }
    },
    {
        id: 5,
        vector: "Email / Soporte",
        trigger: "Notificación Real IT",
        title: "Ticket #8829: Cambio de Perfil solicitado",
        sender: "Service Desk <it.support@tu-empresa-real.com>",
        subject: "Confirmación de actualización de privilegios",
        content: "Hola, según la solicitud enviada por tu gerente, se han actualizado tus permisos en el ERP. Recibirás un correo de sistema automático con las nuevas políticas. Si no solicitaste esto, contacta a la línea de ayuda interna ext. 5555.",
        options: [
            { id: 0, text: "Ignorar, es un proceso normal", isCorrect: true },
            { id: 1, text: "Hacer clic en 'Confirmar'", isCorrect: false },
            { id: 2, text: "Reportar como Phishing", isCorrect: false }
        ],
        isPhishing: false,
        feedback: {
            technical: "Es una comunicación **LEGÍTIMA** de un sistema de tickets. No incluye links sospechosos, usa dominios internos correctos y ofrece un canal de verificación fuera de banda (extensión 5555).",
            ethical: "Evalúa la **Atención al Detalle**. Diferenciar un proceso corporativo normal de un ataque requiere conocer cómo opera tu propia organización."
        }
    },
    {
        id: 6,
        vector: "LinkedIn / Social",
        trigger: "Headhunting Senior",
        title: "Propuesta de CISO Regional",
        sender: "Tech Recruiters Global",
        subject: "Tu perfil ha sido seleccionado para una vacante de $180k USD",
        content: "Hola, estamos buscando un líder de seguridad. El paquete incluye bonos y acciones. Adjunto el PDF con los detalles técnicos de la posición para nuestra entrevista de mañana.",
        attachment: "Detalles_Posicion.iso",
        options: [
            { id: 0, text: "Descargar y abrir el archivo para prepararme", isCorrect: false },
            { id: 1, text: "Preguntar por qué el archivo es .ISO", isCorrect: true },
            { id: 2, text: "Bloquear al reclutador inmediatamente", isCorrect: false }
        ],
        isPhishing: true,
        feedback: {
            technical: "Un PDF no debería venir dentro de un **.ISO**. Estos archivos montan un disco virtual que puede contener ejecutables que eluden el escaneo de antivirus básico.",
            ethical: "Usa el **Ego y la Curiosidad**. Las ofertas salariales altas son el método #1 para que profesionales de IT bajen la guardia."
        }
    },
    {
        id: 7,
        vector: "Browser / Hijack",
        trigger: "Actualización Browser",
        title: "Critical Update: Google Chrome 2026",
        sender: "Chrome System Alert",
        content: "Su versión de Chrome está desactualizada y es vulnerable a ataques de día cero. Haga clic abajo para instalar el parche de seguridad oficial v144.0.2.",
        buttonText: "UPDATE CHROME NOW",
        options: [
            { id: 0, text: "Hacer clic para descargar el parche", isCorrect: false },
            { id: 1, text: "Cerrar y actualizar el navegador desde la configuración real", isCorrect: true },
            { id: 2, text: "Continuar navegando, no es importante", isCorrect: false }
        ],
        isPhishing: true,
        feedback: {
            technical: "Ataque de **Malvertising**. Los navegadores se actualizan solos o a través de su propio menú interno, nunca mediante botones en páginas web de terceros.",
            ethical: "Usa la **Falsa Seguridad**. El atacante se disfraza de la solución al problema que él mismo inventó."
        }
    },
    {
        id: 8,
        vector: "Email / Admin",
        trigger: "Aviso de Seguridad Real",
        title: "Microsoft 365: Nuevo inicio de sesión",
        sender: "Microsoft <no-reply@microsoft.com>",
        content: "Se ha detectado un inicio de sesión en tu cuenta desde un nuevo dispositivo (Windows 11, Chrome). Si has sido tú, puedes ignorar este mensaje. Si no, revisa tu actividad de seguridad.",
        options: [
            { id: 0, text: "Hacer clic en 'Revisar Actividad'", isCorrect: false },
            { id: 1, text: "Ingresar manualmente a mysignins.microsoft.com", isCorrect: true },
            { id: 2, text: "Marcar como Phishing", isCorrect: false }
        ],
        isPhishing: false,
        feedback: {
            technical: "Es una alerta **LEGÍTIMO**. Aunque el link del correo podría ser real, la postura de 'Zero Trust' dicta que siempre debes entrar a los paneles de seguridad manualmente.",
            ethical: "Mide la **Disciplina Operativa**. El experto no toma atajos, incluso cuando la alerta parece genuina de un servicio oficial."
        }
    },
    {
        id: 9,
        vector: "Teams / Chat",
        trigger: "Familiaridad Fake",
        title: "Mensaje de Mar&iacute;a (RH)",
        sender: "RH Admin (Teams)",
        content: "Hola! Me ayudas con tu firma para el nuevo anexo de trabajo remoto? S&uacute;belo por aqu&iacute; plis: https://rh-portal-empresa.sharepoint-files.net/anexo_2026",
        options: [
            { id: 0, text: "Hacer clic y subir la firma", isCorrect: false },
            { id: 1, text: "Llamar a Mar&iacute;a por voz para confirmar", isCorrect: true },
            { id: 2, text: "Ignorar el mensaje", isCorrect: false }
        ],
        isPhishing: true,
        feedback: {
            technical: "El dominio 'sharepoint-files.net' no es oficial de Microsoft SharePoint (que usa .com). Es un sitio para capturar credenciales o inyectar scripts.",
            ethical: "Explota la **Familiaridad**. Al usar un nombre común y un lenguaje informal ('plis'), el atacante intenta saltarse los protocolos de seguridad corporativos."
        }
    },
    {
        id: 10,
        vector: "Physical / Hardware",
        trigger: "Regalo de Empresa Real",
        title: "Cup&oacute;n de Starbucks Corporativo",
        sender: "Cultura Organizacional <cultura@tu-empresa.com>",
        content: "¡Gracias por tus 3 años en la empresa! Aquí tienes un cup&oacute;n digital de $200 para tu café favorito. Escanea el código en la sucursal o regístralo en la App de Starbucks oficial.",
        options: [
            { id: 0, text: "Confirmar recepción y usar el cup&oacute;n", isCorrect: true },
            { id: 1, text: "Reportar como Phishing", isCorrect: false },
            { id: 2, text: "Hacer clic en un link oculto en el correo", isCorrect: false }
        ],
        isPhishing: false,
        feedback: {
            technical: "Es una recompensa **LEGÍTIMA**. No pide datos sensibles, el remitente es correcto y te dirige a una app externa oficial ya establecida sin intermediarios sospechosos.",
            ethical: "Cierra el ciclo de **Discernimiento**. El objetivo final de la concienciación no es bloquear todo, sino tener el criterio para distinguir lo bueno de lo malo."
        }
    },
    {
        id: 11,
        vector: "Email / Spoofing",
        trigger: "Pánico Fiscal",
        title: "SAT: Notificaci&oacute;n de Embargo Precautorio",
        sender: "SAT - Buz&oacute;n Tributario <contacto@sat.gob.mx.seguridad.com>",
        subject: "ADEUDO FISCAL DETECTADO - Acci&oacute;n Inmediata",
        content: "Se han encontrado discrepancias en sus declaraciones del ejercicio fiscal 2025. Se ha generado una orden de embargo que se ejecutar&aacute; en 48 horas si no presenta la aclaraci&oacute;n correspondiente.",
        options: [
            { id: 0, text: "Entrar al link para ver la aclaraci&oacute;n", isCorrect: false },
            { id: 1, text: "Ingresar al Buz&oacute;n Tributario oficial vía sat.gob.mx", isCorrect: true },
            { id: 2, text: "Llamar a un contador de confianza", isCorrect: false }
        ],
        isPhishing: true,
        feedback: {
            technical: "El dominio real es 'seguridad.com', no 'sat.gob.mx'. Los atacantes usan nombres largos para ocultar el dominio final en dispositivos m&oacute;viles.",
            ethical: "Usa el **Miedo a la Autoridad**. La amenaza de embargo es un estresor muy potente que anula el pensamiento cr&iacute;tico."
        }
    },
    {
        id: 12,
        vector: "Slack / Workspace",
        trigger: "Seguridad de Cuenta Real",
        title: "Slack: Nueva integraci&oacute;n instalada",
        sender: "Slack Systems <feedback@slack.com>",
        content: "Un administrador ha instalado la app 'Google Drive for Slack' en tu espacio de trabajo. Si no reconoces esta acci&oacute;n, por favor contacta a tu admin de Slack.",
        options: [
            { id: 0, text: "Hacer clic en 'De-autorizar App'", isCorrect: false },
            { id: 1, text: "Preguntar al admin de TI por un canal interno", isCorrect: true },
            { id: 2, text: "Ignorar si usas Google Drive", isCorrect: false }
        ],
        isPhishing: false,
        feedback: {
            technical: "Notificaci&oacute;n **LEG&Iacute;TIMA**. No solicita credenciales ni pins, solo informa de un cambio administrativo. Consultar con el admin es la mejor pr&aacute;ctica de seguridad corporativa.",
            ethical: "Mide la **Comunicaci&oacute;n Interna**. Muchos ataques dependen de que el empleado no hable con sus compar&ntilde;eros ante dudas menores."
        }
    },
    {
        id: 13,
        vector: "Teams / Vishing",
        trigger: "Soporte Técnico (Audio)",
        title: "Llamada perdida: Service Desk",
        sender: "IT Helpdesk Automations",
        content: "Has recibido un mensaje de voz de soporte. Transcripci&oacute;n: 'Hola, habla Luis de IT. Estamos reparando un error en tu laptop desde el backend. Necesito que nos des el c&oacute;digo de 6 d&iacute;gitos que te acaba de llegar por SMS'.",
        options: [
            { id: 0, text: "Dar el c&oacute;digo para que terminen la reparaci&oacute;n", isCorrect: false },
            { id: 1, text: "Colgar o ignorar y reportar el intento de fraude", isCorrect: true },
            { id: 2, text: "Pedir que se identifiquen con su ID de empleado", isCorrect: false }
        ],
        isPhishing: true,
        feedback: {
            technical: "Ataque de **Vishing / MFA Push**. El c&oacute;digo es para que el atacante cambie tu contraseña o autorice un nuevo dispositivo. IT nunca pide códigos por teléfono.",
            ethical: "Se basa en la **Cooperaci&oacute;n**. El usuario quiere ayudar a 'Luis' a terminar su trabajo r&aacute;pido."
        }
    },
    {
        id: 14,
        vector: "Email / Cloud",
        trigger: "Mantenimiento AWS Real",
        title: "Amazon Web Services: Scheduled Maintenance",
        sender: "AWS Health <no-reply-aws@amazon.com>",
        content: "AWS ha programado una ventana de mantenimiento para su instancia EC2 (region us-east-1) para el 15 de Mayo. No se requiere ninguna acci&oacute;n por su parte, pero el servicio podr&iacute;a experimentar latencia.",
        options: [
            { id: 0, text: "Confirmar mantenimiento haciendo clic", isCorrect: false },
            { id: 1, text: "Revisar el panel 'Service Health Dash' de AWS", isCorrect: true },
            { id: 2, text: "Marcar como Phishing por precauci&oacute;n", isCorrect: false }
        ],
        isPhishing: false,
        feedback: {
            technical: "Aviso **LEG&Iacute;TIMO** de salud de nube. Note que expl&iacute;citamente dice 'No se requiere ninguna acci&oacute;n'. Los ataques siempre te piden hacer algo.",
            ethical: "Ense&ntilde;a a **Diferenciar Avisos Pasivos**. Aprender a filtrar ruido informativo sin caer en el bloqueo sistem&aacute;tico de correos reales."
        }
    },
    {
        id: 15,
        vector: "SMS / OTP",
        trigger: "Pánico de Cuenta",
        title: "Meta: C&oacute;digo de recuperaci&oacute;n de WhatsApp",
        sender: "Meta Systems (+1)",
        content: "Alguien ha solicitado un c&oacute;digo de verificaci&oacute;n para tu n&uacute;mero en un nuevo dispositivo. Si no fuiste t&uacute;, cancela el acceso ingresando el c&oacute;digo aqu&iacute;: https://verify-meta.security-auth.net",
        options: [
            { id: 0, text: "Ingresar el c&oacute;digo para cancelar", isCorrect: false },
            { id: 1, text: "No hacer nada y activar el PIN de 2 pasos en la App de WhatsApp", isCorrect: true },
            { id: 2, text: "Responder al SMS diciendo que no fui yo", isCorrect: false }
        ],
        isPhishing: true,
        feedback: {
            technical: "El portal es un **Phishing de OTP**. Meta nunca env&iacute;a links para 'cancelar' c&oacute;digos; si no lo pediste, el atacante simplemente no puede entrar si t&uacute; no le das el n&uacute;mero.",
            ethical: "Usa el **Instinto de Protecci&oacute;n**. El usuario cree que al 'cancelar' est&aacute; protegiendo su cuenta, cuando en realidad est&aacute; entregando la llave."
        }
    },
    {
        id: 16,
        vector: "Slack / Social",
        trigger: "Evento Corporativo Real",
        title: "Comisi&oacute;n de Cultura: Registro de Pizza",
        sender: "Slack Bot / Delegado Cultura",
        content: "¡Ma&ntilde;ana hay Pizza en la oficina! Por favor, vota tu sabor favorito en el canal #general antes de las 4pm para hacer el pedido correcto.",
        options: [
            { id: 0, text: "Votar en el canal oficial de Slack", isCorrect: true },
            { id: 1, text: "Ignorar, seguro es Phishing", isCorrect: false },
            { id: 2, text: "Hacer clic en un link externo sospechoso", isCorrect: false }
        ],
        isPhishing: false,
        feedback: {
            technical: "Scenario **LEG&Iacute;TIMO** de cultura organizacional. Usa canales internos establecidos sin links a sitios de autenticaci&oacute;n.",
            ethical: "Promueve la **Participaci&oacute;n Segura**. La ciberseguridad no debe matar la cultura de la empresa, sino convivir con ella de forma inteligente."
        }
    },
    {
        id: 17,
        vector: "Email / Finance",
        trigger: "Factura Inflada",
        title: "Microsoft Azure: Tu factura de este mes es de $142,500 MXN",
        sender: "Azure Billing <billing@microsoft-cloud-serv.com>",
        subject: "Factura generada y cobrada autom&aacute;ticamente",
        content: "Se ha procesado exitosamente el cargo a tu tarjeta corporativa. Si hay un error en el consumo o crees que tus credenciales fueron usadas por terceros, revisa el desglose inmediato aqu&iacute;.",
        options: [
            { id: 0, text: "Bajar el PDF de desglose para ver el error", isCorrect: false },
            { id: 1, text: "Entrar al Portal de Azure (portal.azure.com) y revisar Billing", isCorrect: true },
            { id: 2, text: "Llamar al banco para cancelar la tarjeta", isCorrect: false }
        ],
        isPhishing: true,
        feedback: {
            technical: "Uso de **Phishing de Mal de Pago**. El dominio real es 'microsoft-cloud-serv.com' (falso). Microsoft oficial usa dominios internos. El link del desglose captura tus credenciales de Admin.",
            ethical: "Utiliza el **Shock Financiero**. Un cargo tan alto provoca que el administrador de TI act&uacute;e sin pensar antes de tener que dar explicaciones a finanzas."
        }
    },
    {
        id: 18,
        vector: "Salesforce / Admin",
        trigger: "Actualización de Datos Real",
        title: "Salesforce: Inactividad detectada",
        sender: "Salesforce Personalization <no-reply@salesforce.com>",
        content: "Llevas 30 d&iacute;as sin usar tu m&oacute;dulo de Trailhead. Tus puntos est&aacute;n por expirar. Entra a completar tu siguiente reto para mantener tu ranking de 'Ranger'.",
        options: [
            { id: 0, text: "Entrar a Trailhead desde el marcador de tu navegador", isCorrect: true },
            { id: 1, text: "Ignorar el correo", isCorrect: true },
            { id: 2, text: "Reportar como malware", isCorrect: false }
        ],
        isPhishing: false,
        feedback: {
            technical: "Mensaje **LEG&Iacute;TIMO** de gamificaci&oacute;n. Ambas opciones (1 y 2) son v&aacute;lidas; lo importante es no usar el link del correo si no se est&aacute; seguro, aunque sea real.",
            ethical: "Ense&ntilde;a **Higiene Digital**. Mantenimiento de cuentas y descarte de ruido sin comprometer la seguridad."
        }
    },
    {
        id: 19,
        vector: "LinkedIn / Admin",
        trigger: "Seguidad de Perfil Fake",
        title: "LinkedIn: Alguien ha visualizado tu perfil 50 veces hoy",
        sender: "LinkedIn Insights <insights-alert@linkedin-premium.biz>",
        content: "Tu perfil est&aacute; siendo muy popular. Un reclutador de una empresa 'Fortune 500' ha visto tus datos repetidamente. Mira qui&eacute;n es y qu&eacute; vacante tiene para ti.",
        options: [
            { id: 0, text: "Hacer clic para ver al reclutador", isCorrect: false },
            { id: 1, text: "Ignorar; LinkedIn no usa dominios .biz", isCorrect: true },
            { id: 2, text: "Actualizar a Premium usando el bot&oacute;n del correo", isCorrect: false }
        ],
        isPhishing: true,
        feedback: {
            technical: "Ataque de **Vanidad / Typosquatting**. El dominio '.biz' es una señal clara de fraude. LinkedIn oficial usa .com.",
            ethical: "Explota la **Vanidad Profesional**. Queremos saber quién nos mira, lo que nos hace ignorar señales técnicas obvias."
        }
    },
    {
        id: 20,
        vector: "Teams / HR",
        trigger: "Encuesta de Clima Real",
        title: "Encuesta de Clima Laboral 2026",
        sender: "Cultura & Talento (vía Microsoft Forms)",
        content: "Queremos saber tu opini&oacute;n annima sobre el liderazgo de la empresa. La encuesta se realiza en Microsoft Forms interno y no requiere login adicional si est&aacute;s en tu equipo de trabajo.",
        options: [
            { id: 0, text: "Responder la encuesta en el Forms interno", isCorrect: true },
            { id: 1, text: "Reportar como espionaje de TI", isCorrect: false },
            { id: 2, text: "Ignorar por desconfianza", isCorrect: false }
        ],
        isPhishing: false,
        feedback: {
            technical: "Proceso **LEG&Iacute;TIMO**. Las empresas usan herramientas del ecosistema M365 (como Forms) para procesos internos. Note que NO pide login, lo cual es indicio de una herramienta SSO v&aacute;lida.",
            ethical: "Fomenta la **Confianza Organizacional**. Diferenciar el seguimiento administrativo leg&iacute;timo de la vigilancia orwelliana o ataques externos."
        }
    }
];


