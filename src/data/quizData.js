export const quizData = [
    {
        id: 1,
        vector: "Email",
        mockupType: "email",
        title: "Correo de tu banco pidiendo verificación urgente",
        senderName: "Seguridad Banamex",
        senderEmail: "seguridad@banamex-alertas.net",
        senderInitial: "S",
        senderColor: "#dc2626",
        subject: "URGENTE: Tu cuenta ha sido bloqueada",
        bodyParts: [
            { text: "Estimado cliente,", type: "normal" },
            { text: "Se detectó ", type: "normal" },
            { text: "actividad sospechosa", type: "bold" },
            { text: ". Verifica tus datos en las próximas ", type: "normal" },
            { text: "2 horas", type: "danger" },
            { text: " para evitar bloqueo permanente.", type: "normal" }
        ],
        linkText: "Verificar cuenta ahora",
        footerText: "Seguridad — Banamex",
        isPhishing: true,
        feedback: {
            title: "Se acabó el tiempo",
            points: [
                "Dominio falso: banamex-alertas.net (el oficial es banamex.com)",
                "Urgencia artificial: 2 horas para actuar",
                "Enlace genérico sin URL verificable"
            ],
            technical: "Phishing clásico: dominio 'banamex-alertas.net' es falso (el real es banamex.com), urgencia artificial y enlace genérico."
        }
    },
    {
        id: 2,
        vector: "Email",
        mockupType: "email",
        title: "Correo de PayPal sobre actividad inusual",
        senderName: "PayPal Security",
        senderEmail: "security@paypal-account-verify.com",
        senderInitial: "P",
        senderColor: "#0070ba",
        subject: "Actividad inusual detectada en su cuenta",
        bodyParts: [
            { text: "Estimado usuario,", type: "normal" },
            { text: "Hemos detectado un ", type: "normal" },
            { text: "intento de acceso no autorizado", type: "bold" },
            { text: " desde una ubicación desconocida. Su cuenta ha sido ", type: "normal" },
            { text: "temporalmente limitada", type: "danger" },
            { text: ". Para restaurar el acceso completo, verifique su identidad.", type: "normal" }
        ],
        linkText: "Restaurar acceso a mi cuenta",
        footerText: "PayPal — Seguridad de Cuentas",
        isPhishing: true,
        feedback: {
            points: [
                "Dominio falso: paypal-account-verify.com (el real es paypal.com)",
                "Lenguaje alarmista: 'cuenta limitada'",
                "PayPal nunca pide verificar identidad por email"
            ],
            technical: "El dominio 'paypal-account-verify.com' no pertenece a PayPal. Es un sitio de captura de credenciales."
        }
    },
    {
        id: 3,
        vector: "SMS",
        mockupType: "sms",
        title: "SMS de tu banco alertando una compra",
        senderName: "BBVA Alertas",
        senderPhone: "+52 55 1234 5678",
        bodyParts: [
            { text: "BBVA: Intento de compra en ", type: "normal" },
            { text: "APPLE STORE", type: "bold" },
            { text: " por ", type: "normal" },
            { text: "$15,999 MXN", type: "danger" },
            { text: ". Si NO reconoce esta transacción presione aquí para cancelar inmediatamente: ", type: "normal" },
            { text: "https://bbva-auth.net/cancelar", type: "link" }
        ],
        isPhishing: true,
        feedback: {
            points: [
                "Dominio falso: bbva-auth.net (BBVA usa bbva.mx)",
                "Los bancos nunca envían links para cancelar cargos por SMS",
                "Urgencia artificial para evitar el razonamiento"
            ],
            technical: "El dominio 'bbva-auth.net' es fraudulento. Los bancos nunca usan links directos en SMS."
        }
    },
    {
        id: 4,
        vector: "Email",
        mockupType: "email",
        title: "Notificación de GitHub sobre tu repositorio",
        senderName: "GitHub",
        senderEmail: "noreply@github.com",
        senderInitial: "G",
        senderColor: "#333",
        subject: "[Dependabot] Vulnerability fixed in your repository",
        bodyParts: [
            { text: "Dependabot ha detectado y corregido automáticamente una vulnerabilidad en ", type: "normal" },
            { text: "package.json", type: "bold" },
            { text: ". La PR ha sido aprobada según tus políticas de seguridad automática. Puedes revisar el log de cambios en tu tablero de GitHub.", type: "normal" }
        ],
        linkText: "Ver cambios en GitHub",
        footerText: "GitHub — Security Alerts",
        isPhishing: false,
        feedback: {
            points: [
                "El dominio github.com es legítimo",
                "No solicita datos personales ni credenciales",
                "Mejor práctica: navegar manualmente a github.com"
            ],
            technical: "Mensaje LEGÍTIMO de GitHub. Sin embargo, la mejor práctica es navegar manualmente al sitio."
        }
    },
    {
        id: 5,
        vector: "Email",
        mockupType: "email",
        title: "Correo del SAT sobre un adeudo fiscal",
        senderName: "SAT - Buzón Tributario",
        senderEmail: "contacto@sat.gob.mx.seguridad-fiscal.com",
        senderInitial: "S",
        senderColor: "#1e40af",
        subject: "ADEUDO FISCAL DETECTADO - Acción Inmediata",
        bodyParts: [
            { text: "Se han encontrado ", type: "normal" },
            { text: "discrepancias graves", type: "bold" },
            { text: " en sus declaraciones del ejercicio fiscal 2025. Se ha generado una ", type: "normal" },
            { text: "orden de embargo precautorio", type: "danger" },
            { text: " que se ejecutará en ", type: "normal" },
            { text: "48 horas", type: "danger" },
            { text: " si no presenta su aclaración.", type: "normal" }
        ],
        linkText: "Presentar aclaración fiscal",
        footerText: "SAT — Servicio de Administración Tributaria",
        isPhishing: true,
        feedback: {
            points: [
                "Dominio real es 'seguridad-fiscal.com', no 'sat.gob.mx'",
                "Urgencia artificial: amenaza de embargo en 48 horas",
                "El SAT nunca solicita aclaraciones por email"
            ],
            technical: "El dominio real es 'seguridad-fiscal.com', no 'sat.gob.mx'. Los atacantes usan nombres largos para ocultar el dominio."
        }
    },
    {
        id: 6,
        vector: "Email",
        mockupType: "email",
        title: "Alerta de Microsoft sobre nuevo inicio de sesión", 
        senderName: "Microsoft",
        senderEmail: "no-reply@microsoft.com",
        senderInitial: "M",
        senderColor: "#0078d4",
        subject: "Alerta de seguridad: Nuevo inicio de sesión",
        bodyParts: [
            { text: "Se ha detectado un ", type: "normal" },
            { text: "inicio de sesión", type: "bold" },
            { text: " en tu cuenta desde un nuevo dispositivo (", type: "normal" },
            { text: "Windows 11, Chrome, Monterrey NL", type: "bold" },
            { text: "). Si has sido tú, puedes ignorar este mensaje. Si no, revisa tu actividad de seguridad.", type: "normal" }
        ],
        linkText: "Revisar actividad reciente",
        footerText: "Microsoft — Tu cuenta",
        isPhishing: false,
        feedback: {
            points: [
                "El dominio microsoft.com es legítimo",
                "No exige acción urgente ni amenaza con consecuencias",
                "Mejor práctica: ingresar manualmente a account.microsoft.com"
            ],
            technical: "Alerta LEGÍTIMA de Microsoft. La postura 'Zero Trust' sugiere siempre entrar a los paneles de seguridad manualmente."
        }
    },
    {
        id: 7,
        vector: "SMS",
        mockupType: "sms",
        title: "SMS de Meta sobre tu cuenta de WhatsApp",
        senderName: "Meta Verify",
        senderPhone: "+1 (555) 012-3456",
        bodyParts: [
            { text: "Alguien ha solicitado un ", type: "normal" },
            { text: "código de verificación", type: "bold" },
            { text: " para tu número en un nuevo dispositivo. Si no fuiste tú, cancela el acceso aquí: ", type: "normal" },
            { text: "https://verify-meta.security-auth.net", type: "link" }
        ],
        isPhishing: true,
        feedback: {
            points: [
                "Dominio falso: security-auth.net no es de Meta",
                "Meta nunca envía links para 'cancelar' códigos",
                "Si no diste el código, el atacante no puede entrar"
            ],
            technical: "Meta nunca envía links para 'cancelar' códigos. El portal es un Phishing de OTP."
        }
    },
    {
        id: 8,
        vector: "Email",
        mockupType: "email",
        title: "Alerta de Chrome sobre una actualización crítica",
        senderName: "Google Chrome",
        senderEmail: "update@chrome-security-patch.com",
        senderInitial: "C",
        senderColor: "#ea4335",
        subject: "CRITICAL: Tu navegador es vulnerable",
        bodyParts: [
            { text: "Su versión de Chrome está ", type: "normal" },
            { text: "desactualizada", type: "danger" },
            { text: " y es vulnerable a ataques de ", type: "normal" },
            { text: "día cero (CVE-2026-4871)", type: "bold" },
            { text: ". Haga clic abajo para instalar el parche de seguridad oficial v144.0.2.", type: "normal" }
        ],
        linkText: "ACTUALIZAR CHROME AHORA",
        footerText: "Google Chrome — Security Team",
        isPhishing: true,
        feedback: {
            points: [
                "Dominio falso: chrome-security-patch.com no es de Google",
                "Chrome se actualiza solo desde su menú interno",
                "Nunca descargues actualizaciones desde páginas web"
            ],
            technical: "Ataque de Malvertising. Los navegadores se actualizan desde su propio menú, nunca por botones web."
        }
    },
    {
        id: 9,
        vector: "Teams",
        mockupType: "teams",
        title: "Mensaje de RH pidiendo tu firma digital",
        senderName: "María (Recursos Humanos)",
        senderStatus: "En línea",
        bodyParts: [
            { text: "¡Hola! ¿Me ayudas con tu firma para el nuevo ", type: "normal" },
            { text: "anexo de trabajo remoto", type: "bold" },
            { text: "? Súbelo por aquí plis: ", type: "normal" },
            { text: "https://rh-portal.sharepoint-files.net/anexo", type: "link" }
        ],
        isPhishing: true,
        feedback: {
            points: [
                "Dominio falso: sharepoint-files.net (el real es sharepoint.com)",
                "Lenguaje informal ('plis') para bajar la guardia",
                "Siempre verificar por otro canal (llamada, presencial)"
            ],
            technical: "El dominio 'sharepoint-files.net' no es oficial de Microsoft SharePoint. Es un sitio para capturar credenciales."
        }
    },
    {
        id: 10,
        vector: "Email",
        mockupType: "email",
        title: "LinkedIn te notifica sobre visitas a tu perfil",
        senderName: "LinkedIn Insights",
        senderEmail: "insights-alert@linkedin-premium.biz",
        senderInitial: "L",
        senderColor: "#0a66c2",
        subject: "Tu perfil fue visto 50 veces hoy",
        bodyParts: [
            { text: "Tu perfil está siendo ", type: "normal" },
            { text: "extremadamente popular", type: "bold" },
            { text: ". Un reclutador de una empresa ", type: "normal" },
            { text: "Fortune 500", type: "bold" },
            { text: " ha revisado tus datos repetidamente. Descubre quién es y qué vacante tiene para ti.", type: "normal" }
        ],
        linkText: "Ver quién visitó tu perfil",
        footerText: "LinkedIn — Premium Insights",
        isPhishing: true,
        feedback: {
            points: [
                "Dominio falso: linkedin-premium.biz (el real es linkedin.com)",
                "LinkedIn nunca usa dominios .biz",
                "Explota la vanidad profesional para que bajes la guardia"
            ],
            technical: "Ataque de Vanidad/Typosquatting. El dominio '.biz' es señal clara de fraude."
        }
    },
    {
        id: 11,
        vector: "Email",
        mockupType: "email",
        title: "Oferta de trabajo con salario altísimo",
        senderName: "Tech Recruiters Global",
        senderEmail: "careers@techrecruit-global.net",
        senderInitial: "T",
        senderColor: "#7c3aed",
        subject: "Propuesta de CISO Regional — $180,000 USD",
        bodyParts: [
            { text: "Hola, hemos revisado tu perfil y creemos que eres el candidato ideal para nuestra vacante. El paquete incluye ", type: "normal" },
            { text: "bonos y acciones", type: "bold" },
            { text: ". Adjunto los detalles técnicos de la posición.", type: "normal" }
        ],
        attachment: "Propuesta_Confidencial.iso",
        footerText: "Tech Recruiters — Global Talent",
        isPhishing: true,
        feedback: {
            points: [
                "Archivo adjunto .ISO es altamente sospechoso",
                "Un PDF no debería venir dentro de un .ISO",
                "Los .ISO montan discos virtuales que ejecutan malware"
            ],
            technical: "Un PDF no debería venir en un .ISO. Estos archivos montan discos virtuales que eluden antivirus."
        }
    },
    {
        id: 12,
        vector: "Email",
        mockupType: "email",
        title: "Tu empresa te envía un cupón de Starbucks",
        senderName: "Cultura Organizacional",
        senderEmail: "beneficios@tu-empresa.com",
        senderInitial: "C",
        senderColor: "#059669",
        subject: "¡Felicidades por tus 3 años con nosotros!",
        bodyParts: [
            { text: "¡Gracias por tu compromiso y dedicación! Aquí tienes un ", type: "normal" },
            { text: "cupón digital de $200", type: "bold" },
            { text: " para tu café favorito en Starbucks. Puedes canjearlo directamente en la ", type: "normal" },
            { text: "App oficial de Starbucks", type: "bold" },
            { text: " o escanearlo en la sucursal.", type: "normal" }
        ],
        linkText: "Descargar cupón",
        footerText: "Cultura Organizacional — Tu Empresa",
        isPhishing: false,
        feedback: {
            points: [
                "El dominio tu-empresa.com es interno y legítimo",
                "No solicita datos personales ni credenciales",
                "Dirige a una app oficial ya establecida"
            ],
            technical: "Recompensa LEGÍTIMA. No pide datos sensibles y dirige a una aplicación oficial."
        }
    },
    {
        id: 13,
        vector: "Teams",
        mockupType: "teams",
        title: "Tu VP te envía una directiva urgente por Teams",
        senderName: "Carlos Rodríguez (VP Operaciones)",
        senderStatus: "Ocupado",
        bodyParts: [
            { text: "Hola, necesito que revises este ", type: "normal" },
            { text: "memorándum confidencial", type: "bold" },
            { text: " sobre cambios en tu departamento. Es información ", type: "normal" },
            { text: "altamente sensible", type: "danger" },
            { text: ". No lo compartas. Autentícate aquí para escuchar: ", type: "normal" },
            { text: "https://teams-voice.auth-portal.com/memo", type: "link" }
        ],
        isPhishing: true,
        feedback: {
            points: [
                "Dominio falso: auth-portal.com no es de Microsoft",
                "El tono de exclusividad busca reducir tu escepticismo",
                "Verificar siempre por una llamada directa al VP"
            ],
            technical: "Ataque de AitM. El portal captura tu token de sesión real incluso con MFA."
        }
    },
    {
        id: 14,
        vector: "Email",
        mockupType: "email",
        title: "Notificación de Slack sobre una nueva app",
        senderName: "Slack",
        senderEmail: "feedback@slack.com",
        senderInitial: "S",
        senderColor: "#611f69",
        subject: "Nueva integración instalada en tu Workspace",
        bodyParts: [
            { text: "Un administrador ha instalado la app '", type: "normal" },
            { text: "Google Drive for Slack", type: "bold" },
            { text: "' en tu espacio de trabajo. Si no reconoces esta acción, por favor contacta a tu admin de Slack.", type: "normal" }
        ],
        footerText: "Slack — Workspace Notifications",
        isPhishing: false,
        feedback: {
            points: [
                "El dominio slack.com es legítimo",
                "Solo informa, no solicita credenciales",
                "Buena práctica: consultar con el admin por chat"
            ],
            technical: "Notificación LEGÍTIMA. No solicita credenciales, solo informa de un cambio administrativo."
        }
    },
    {
        id: 15,
        vector: "SMS",
        mockupType: "sms",
        title: "SMS del Service Desk pidiendo un código",
        senderName: "IT Helpdesk",
        senderPhone: "Ext. 5500",
        bodyParts: [
            { text: "Hola, habla Luis de IT. Estamos reparando un error en tu laptop desde el backend. Necesito que nos des el ", type: "normal" },
            { text: "código de 6 dígitos", type: "danger" },
            { text: " que te acaba de llegar por SMS para validar la licencia de Windows.", type: "normal" }
        ],
        isPhishing: true,
        feedback: {
            points: [
                "IT nunca pide códigos de verificación por teléfono o SMS",
                "El código es para que el atacante cambie tu contraseña",
                "Siempre reporta intentos de obtener códigos MFA"
            ],
            technical: "Ataque de Vishing/MFA Push. El código permite al atacante resetear contraseñas."
        }
    },
    {
        id: 16,
        vector: "Email",
        mockupType: "email",
        title: "AWS te notifica sobre mantenimiento programado",
        senderName: "AWS Health",
        senderEmail: "no-reply-aws@amazon.com",
        senderInitial: "A",
        senderColor: "#ff9900",
        subject: "Scheduled Maintenance — EC2 us-east-1",
        bodyParts: [
            { text: "AWS ha programado una ventana de mantenimiento para su instancia EC2 (region us-east-1) para el 15 de Mayo. ", type: "normal" },
            { text: "No se requiere ninguna acción por su parte", type: "bold" },
            { text: ", pero el servicio podría experimentar latencia breve durante el proceso.", type: "normal" }
        ],
        footerText: "Amazon Web Services — Service Health",
        isPhishing: false,
        feedback: {
            points: [
                "El dominio amazon.com es legítimo",
                "Dice explícitamente 'No se requiere acción'",
                "Los ataques siempre te piden hacer algo"
            ],
            technical: "Aviso LEGÍTIMO. Note que dice 'No se requiere acción'. Los ataques siempre exigen interacción."
        }
    },
    {
        id: 17,
        vector: "Email",
        mockupType: "email",
        title: "Factura gigante de Azure que no reconoces",
        senderName: "Azure Billing",
        senderEmail: "billing@microsoft-azure-cloud.net",
        senderInitial: "A",
        senderColor: "#0078d4",
        subject: "Factura procesada: $142,500 MXN",
        bodyParts: [
            { text: "Se ha procesado exitosamente el cargo de ", type: "normal" },
            { text: "$142,500 MXN", type: "danger" },
            { text: " a tu tarjeta corporativa. Si hay un error en el consumo, revisa el desglose inmediato.", type: "normal" }
        ],
        linkText: "Ver desglose de factura",
        footerText: "Microsoft Azure — Billing Center",
        isPhishing: true,
        feedback: {
            points: [
                "Dominio falso: microsoft-azure-cloud.net (Azure usa azure.com)",
                "Shock financiero: $142k para que actúes sin pensar",
                "Verificar siempre en portal.azure.com directamente"
            ],
            technical: "El dominio 'microsoft-azure-cloud.net' es falso. El link captura credenciales de administrador."
        }
    },
    {
        id: 18,
        vector: "Email",
        mockupType: "email",
        title: "Tu empresa te invita a una encuesta de clima laboral",
        senderName: "Cultura & Talento",
        senderEmail: "encuestas@tu-empresa.com",
        senderInitial: "C",
        senderColor: "#7c3aed",
        subject: "Encuesta de Clima Laboral 2026",
        bodyParts: [
            { text: "Queremos saber tu opinión ", type: "normal" },
            { text: "anónima", type: "bold" },
            { text: " sobre el liderazgo de la empresa. La encuesta se realiza en ", type: "normal" },
            { text: "Microsoft Forms interno", type: "bold" },
            { text: " y no requiere login adicional si estás en tu equipo de trabajo.", type: "normal" }
        ],
        linkText: "Responder encuesta",
        footerText: "Cultura & Talento — Tu Empresa",
        isPhishing: false,
        feedback: {
            points: [
                "Dominio interno de la empresa (legítimo)",
                "No requiere login adicional (SSO válido)",
                "Usa herramientas del ecosistema M365"
            ],
            technical: "Proceso LEGÍTIMO. Las empresas usan Forms de M365 para procesos internos."
        }
    },
    {
        id: 19,
        vector: "Email",
        mockupType: "email",
        title: "Ticket de IT confirmando cambio de permisos",
        senderName: "Service Desk",
        senderEmail: "it.support@tu-empresa.com",
        senderInitial: "I",
        senderColor: "#475569",
        subject: "Ticket #8829: Actualización de privilegios completada",
        bodyParts: [
            { text: "Hola, según la solicitud enviada por tu gerente, se han actualizado tus permisos en el ", type: "normal" },
            { text: "ERP corporativo", type: "bold" },
            { text: ". Recibirás un correo de sistema automático con las nuevas políticas. Si no solicitaste esto, contacta la ", type: "normal" },
            { text: "extensión 5555", type: "bold" },
            { text: ".", type: "normal" }
        ],
        footerText: "Service Desk — IT Department",
        isPhishing: false,
        feedback: {
            points: [
                "Dominio interno legítimo (tu-empresa.com)",
                "Ofrece canal de verificación fuera de banda (ext. 5555)",
                "No incluye links sospechosos ni botones externos"
            ],
            technical: "Comunicación LEGÍTIMA. No incluye links sospechosos y ofrece un canal de verificación fuera de banda."
        }
    },
    {
        id: 20,
        vector: "Teams",
        mockupType: "teams",
        title: "Mensaje en Slack sobre el viernes de pizza",
        senderName: "Delegado de Cultura",
        senderStatus: "Activo",
        bodyParts: [
            { text: "¡Mañana hay ", type: "normal" },
            { text: "Pizza en la oficina", type: "bold" },
            { text: "! 🍕 Vota tu sabor favorito en el canal ", type: "normal" },
            { text: "#general", type: "bold" },
            { text: " antes de las 4pm para hacer el pedido correcto.", type: "normal" }
        ],
        isPhishing: false,
        feedback: {
            points: [
                "Publicado en un canal interno establecido",
                "No incluye links a sitios de autenticación",
                "Evento de cultura organizacional legítimo"
            ],
            technical: "Escenario LEGÍTIMO de cultura organizacional. Usa canales internos sin links de autenticación."
        }
    }
];
