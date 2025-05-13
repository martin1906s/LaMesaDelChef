export interface Canvas {
    id: number;
    curso: string;
    nombreEmprendimiento: string;
    logo: string;
    canva: {
        segmentoMercado: {
            texto: string
        }[];
        propuestaValor: {
            texto: string
        }[];
        canales: {
            texto: string
        }[];
        relacionClientes: {
            texto: string
        }[];
        fuentesIngresos: {
            texto: string
        }[];
        recursosClaves: {
            texto: string
        }[];
        actividadesClaves: {
            texto: string
        }[];
        sociosClaves: {
            texto: string
        }[];
        estructuraCostos: {
            texto: string
        }[]
    }[]
}

export const canvas: Canvas[] = [
    {
        id: 1,
        curso: "3H",
        nombreEmprendimiento: "La Mesa Del Chef",
        logo: "/logo.png",
        canva: [
            {
                segmentoMercado: [
                    { texto: "Empresas" },
                    { texto: "Particulares" },
                    { texto: "Instituciones educativas" },
                    { texto: "Organizaciones religiosas o comunitarias" },
                    { texto: "Por edad" },
                    { texto: "Eventos Formales" },
                    { texto: "Eventos Informales" },
                    { texto: "Eventos Con Temática" },
                    { texto: "Locales" },
                    { texto: "Regiones" },
                    { texto: "Domicilio" },
                ],
                propuestaValor: [
                    { texto: "Nuestro objetivo es brindarte una experiencia gastronómica inolvidable aquí en La Mesa del Chef para compartir con tus amigos y familiares. Nuestro buffet ofrecerá platos preparados exquisitamente con productos frescos y de alta calidad, variedad de opciones para satisfacer todos los gustos y preferencias, un ambiente acogedor y elegante, y un servicio personalizado y atento. Utilizamos solo los mejores ingredientes y seguimos estrictos protocolos de higiene y seguridad alimentaria. Nuestro buffet es perfecto para graduaciones, cumpleaños, bodas, aniversarios y reuniones familiares. ¡Reserva tu mesa hoy mismo y prepárate para una experiencia gastronómica inolvidable! ¡Felicitaciones por tu graduación!" }
                ],
                canales: [
                    { texto: "Contacto directo con instituciones educativas" },
                    { texto: " Redes sociales (Instagram, Facebook)" },
                    { texto: "Recomendaciones boca a boca" },
                    { texto: "Participación en ferias escolares o eventos" },
                ],
                relacionClientes: [
                    { texto: "Brindar una bienvenida amable y personalizada" },
                    { texto: "Mantener una actitud cordial y servicial en todo momento" },
                    { texto: "Calidad del servicio" },
                    { texto: "Asegurar que los alimentos sean frescos y bien presentados" },
                    { texto: "Cuidar la higiene y presentación del personal" },
                    { texto: "Decorar el espacio de manera atractiva y cómoda" },
                    { texto: "Recopilar opiniones: preguntar al cliente cómo fue su experiencia" },
                    { texto: "Ofrecer eventos o promociones para eventos a futuro" }
                ],
                fuentesIngresos: [
                    { texto: "Productos de ingresos diarios por la venta de alimentos a estudiantes" },
                    { texto: "Menú escolar" },
                    { texto: "Ingresos por paquete" },
                    { texto: "Venta de platos de menú" },
                    { texto: "Venta de productos en ferias escolares" },
                    { texto: "Venta en eventos deportivos" },
                    { texto: "Promociones por fechas especiales" },
                    { texto: "Alianza con marcas de alimentos saludables" },
                    { texto: "Subvenciones o apoyos del colegio" }
                ],
                recursosClaves: [
                    { texto: "Equipamiento de cocina" },
                    { texto: "Utensilios" },
                    { texto: "Herramientas" },
                    { texto: "Material de presentación" },
                    { texto: "Menaje" },
                    { texto: "Insumos" },
                    { texto: "Materia prima" },
                    { texto: "Cocina y ayudantes" },
                    { texto: "Mesero" },
                    { texto: "Personal de servicio" },
                    { texto: "Personal de logística" },
                    { texto: "Administrador o coordinador" },
                    { texto: "Transporte adecuado" },
                    { texto: "Planificación del menú" },
                    { texto: "Proveedores confiables" },
                    { texto: "Control de higiene y seguridad" },
                    { texto: "Estrategia de venta" },
                    { texto: "Promociones de venta" }
                ],
                actividadesClaves: [
                    { texto: "Planificación y organización" },
                    { texto: "Diseñar un menú variado y atractivo" },
                    { texto: "Coordinar al equipo de trabajo" },
                    { texto: "Compra y preparación de alimentos" },
                    { texto: "Seleccionar proveedores confiables para ingredientes frescos" },
                    { texto: "Montaje y presentación del buffet" },
                    { texto: "Distribuir estratégicamente las estaciones de comida" },
                    { texto: "Atención y servicio al cliente" },
                    { texto: "Mantener los alimentos bien servidos, calientes o fríos" },
                    { texto: "Limpieza o cierre del servicio" },
                    { texto: "Retirar platos y desechos constantes de los menús" }
                ],
                sociosClaves: [
                    { texto: "Proveedores de Alimentos" },
                    { texto: "Institución Educativa" },
                    { texto: "Personal del Buffet" },
                    { texto: "Personal Administrativo" },
                    { texto: "Transportistas de Logística" }
                ],
                estructuraCostos: [
                    { texto: "Sueldo de personal (cocinero, ayudante y limpieza)" },
                    { texto: "Alquiler de espacios" },
                    { texto: "Servicios básicos" },
                    { texto: "Mantenimiento de equipos" },
                    { texto: "Permiso y licencia sanitaria" },
                    { texto: "Compra de insumos alimentarios" },
                    { texto: "Empaque de utensilios desechables" },
                    { texto: "Productos de limpieza e higiene" },
                    { texto: "Transporte de productos" },
                    { texto: "Costes de reposición de utensilios" },
                    { texto: "Publicidad interna (carteles, menú, promociones)" },
                    { texto: "Capacitaciones del personal" }
                ]
            }
        ]
    },
    {
        id: 2,
        curso: "Desarrollo Web",
        nombreEmprendimiento: "Café de la Calle",
        logo: "/logo.png",
        canva: [
            {
                segmentoMercado: [
                    { texto: "Jóvenes y adultos que buscan un lugar acogedor para disfrutar de café y postres." },
                    { texto: "Estudiantes que necesitan un espacio para estudiar." },
                    { texto: "Personas que buscan un lugar para reunirse." },
                    { texto: "Amantes del café y la repostería." },
                    { texto: "Turistas que visitan la zona." },
                ],
                propuestaValor: [
                    { texto: "Ambiente acogedor, café de calidad y postres caseros." },
                    { texto: "Eventos culturales y artísticos." },
                    { texto: "Promociones especiales para estudiantes." },
                    { texto: "Wi-Fi gratuito y espacios de trabajo." },
                    { texto: "Atención al cliente excepcional." },
                ],
                canales: [
                    { texto: "Redes sociales (Instagram, Facebook)." },
                    { texto: "Página web con menú y reservas." },
                    { texto: "Publicidad local (volantes, carteles)." },
                    { texto: "Colaboraciones con influencers locales." },
                    { texto: "Eventos en la comunidad." },
                ],
                relacionClientes: [
                    { texto: "Atención personalizada y fidelización a través de promociones." },
                    { texto: "Eventos especiales para clientes frecuentes." },
                    { texto: "Encuestas de satisfacción y feedback." },
                    { texto: "Programas de lealtad." },
                    { texto: "Comunicación constante a través de redes sociales." },
                ],
                fuentesIngresos: [
                    { texto: "Ventas de café, postres y eventos especiales." },
                    { texto: "Alquiler del local para eventos privados." },
                    { texto: "Venta de productos de marca propia." },
                    { texto: "Clases de barismo y repostería." },
                    { texto: "Colaboraciones con artistas locales." },
                ],
                recursosClaves: [
                    { texto: "Local, equipo de café, ingredientes y personal capacitado." },
                    { texto: "Relaciones con proveedores de café y postres." },
                    { texto: "Redes sociales y página web." },
                    { texto: "Equipo de marketing." },
                    { texto: "Sistema de gestión de clientes." },
                ],
                actividadesClaves: [
                    { texto: "Preparación de café, atención al cliente y marketing." },
                    { texto: "Gestión de eventos y promociones." },
                    { texto: "Mantenimiento del local y equipo." },
                    { texto: "Capacitación del personal." },
                    { texto: "Colaboraciones con artistas locales." },
                ],
                sociosClaves: [
                    { texto: "Proveedores de café y postres." },
                    { texto: "Empresas de publicidad local." },
                    { texto: "Colaboraciones con artistas y músicos." },
                    { texto: "Asociaciones locales." },
                    { texto: "Influencers y bloggers de comida." },
                ],
                estructuraCostos: [
                    { texto: "Alquiler del local, salarios, ingredientes y publicidad." },
                    { texto: "Mantenimiento del equipo y local." },
                    { texto: "Costos de marketing y publicidad." },
                    { texto: "Capacitación del personal." },
                    { texto: "Costos de eventos y promociones." },
                ]
            }
        ]
    },
    {
        id: 3,
        curso: "Desarrollo Web",
        nombreEmprendimiento: "Café de la Calle",
        logo: "/logo.png",
        canva: [
            {
                segmentoMercado: [
                    { texto: "Jóvenes y adultos que buscan un lugar acogedor para disfrutar de café y postres." },
                    { texto: "Estudiantes que necesitan un espacio para estudiar." },
                    { texto: "Personas que buscan un lugar para reunirse." },
                    { texto: "Amantes del café y la repostería." },
                    { texto: "Turistas que visitan la zona." },
                ],
                propuestaValor: [
                    { texto: "Ambiente acogedor, café de calidad y postres caseros." },
                    { texto: "Eventos culturales y artísticos." },
                    { texto: "Promociones especiales para estudiantes." },
                    { texto: "Wi-Fi gratuito y espacios de trabajo." },
                    { texto: "Atención al cliente excepcional." },
                ],
                canales: [
                    { texto: "Redes sociales (Instagram, Facebook)." },
                    { texto: "Página web con menú y reservas." },
                    { texto: "Publicidad local (volantes, carteles)." },
                    { texto: "Colaboraciones con influencers locales." },
                    { texto: "Eventos en la comunidad." },
                ],
                relacionClientes: [
                    { texto: "Atención personalizada y fidelización a través de promociones." },
                    { texto: "Eventos especiales para clientes frecuentes." },
                    { texto: "Encuestas de satisfacción y feedback." },
                    { texto: "Programas de lealtad." },
                    { texto: "Comunicación constante a través de redes sociales." },
                ],
                fuentesIngresos: [
                    { texto: "Ventas de café, postres y eventos especiales." },
                    { texto: "Alquiler del local para eventos privados." },
                    { texto: "Venta de productos de marca propia." },
                    { texto: "Clases de barismo y repostería." },
                    { texto: "Colaboraciones con artistas locales." },
                ],
                recursosClaves: [
                    { texto: "Local, equipo de café, ingredientes y personal capacitado." },
                    { texto: "Relaciones con proveedores de café y postres." },
                    { texto: "Redes sociales y página web." },
                    { texto: "Equipo de marketing." },
                    { texto: "Sistema de gestión de clientes." },
                ],
                actividadesClaves: [
                    { texto: "Preparación de café, atención al cliente y marketing." },
                    { texto: "Gestión de eventos y promociones." },
                    { texto: "Mantenimiento del local y equipo." },
                    { texto: "Capacitación del personal." },
                    { texto: "Colaboraciones con artistas locales." },
                ],
                sociosClaves: [
                    { texto: "Proveedores de café y postres." },
                    { texto: "Empresas de publicidad local." },
                    { texto: "Colaboraciones con artistas y músicos." },
                    { texto: "Asociaciones locales." },
                    { texto: "Influencers y bloggers de comida." },
                ],
                estructuraCostos: [
                    { texto: "Alquiler del local, salarios, ingredientes y publicidad." },
                    { texto: "Mantenimiento del equipo y local." },
                    { texto: "Costos de marketing y publicidad." },
                    { texto: "Capacitación del personal." },
                    { texto: "Costos de eventos y promociones." },
                ]
            }
        ]
    },
    {
        id: 4,
        curso: "Desarrollo Web",
        nombreEmprendimiento: "Café de la Calle",
        logo: "/logo.png",
        canva: [
            {
                segmentoMercado: [
                    { texto: "Jóvenes y adultos que buscan un lugar acogedor para disfrutar de café y postres." },
                    { texto: "Estudiantes que necesitan un espacio para estudiar." },
                    { texto: "Personas que buscan un lugar para reunirse." },
                    { texto: "Amantes del café y la repostería." },
                    { texto: "Turistas que visitan la zona." },
                ],
                propuestaValor: [
                    { texto: "Ambiente acogedor, café de calidad y postres caseros." },
                    { texto: "Eventos culturales y artísticos." },
                    { texto: "Promociones especiales para estudiantes." },
                    { texto: "Wi-Fi gratuito y espacios de trabajo." },
                    { texto: "Atención al cliente excepcional." },
                ],
                canales: [
                    { texto: "Redes sociales (Instagram, Facebook)." },
                    { texto: "Página web con menú y reservas." },
                    { texto: "Publicidad local (volantes, carteles)." },
                    { texto: "Colaboraciones con influencers locales." },
                    { texto: "Eventos en la comunidad." },
                ],
                relacionClientes: [
                    { texto: "Atención personalizada y fidelización a través de promociones." },
                    { texto: "Eventos especiales para clientes frecuentes." },
                    { texto: "Encuestas de satisfacción y feedback." },
                    { texto: "Programas de lealtad." },
                    { texto: "Comunicación constante a través de redes sociales." },
                ],
                fuentesIngresos: [
                    { texto: "Ventas de café, postres y eventos especiales." },
                    { texto: "Alquiler del local para eventos privados." },
                    { texto: "Venta de productos de marca propia." },
                    { texto: "Clases de barismo y repostería." },
                    { texto: "Colaboraciones con artistas locales." },
                ],
                recursosClaves: [
                    { texto: "Local, equipo de café, ingredientes y personal capacitado." },
                    { texto: "Relaciones con proveedores de café y postres." },
                    { texto: "Redes sociales y página web." },
                    { texto: "Equipo de marketing." },
                    { texto: "Sistema de gestión de clientes." },
                ],
                actividadesClaves: [
                    { texto: "Preparación de café, atención al cliente y marketing." },
                    { texto: "Gestión de eventos y promociones." },
                    { texto: "Mantenimiento del local y equipo." },
                    { texto: "Capacitación del personal." },
                    { texto: "Colaboraciones con artistas locales." },
                ],
                sociosClaves: [
                    { texto: "Proveedores de café y postres." },
                    { texto: "Empresas de publicidad local." },
                    { texto: "Colaboraciones con artistas y músicos." },
                    { texto: "Asociaciones locales." },
                    { texto: "Influencers y bloggers de comida." },
                ],
                estructuraCostos: [
                    { texto: "Alquiler del local, salarios, ingredientes y publicidad." },
                    { texto: "Mantenimiento del equipo y local." },
                    { texto: "Costos de marketing y publicidad." },
                    { texto: "Capacitación del personal." },
                    { texto: "Costos de eventos y promociones." },
                ]
            }
        ]
    },
]