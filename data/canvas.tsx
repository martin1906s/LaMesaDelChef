export interface Canvas {
    id: number;
    curso: string;
    nombreEmprendimiento: string;
    slogan: string;
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
        curso: "3 H",
        nombreEmprendimiento: "LA MESA DEL CHEF",
        slogan: "Come todo lo que quieras, disfruta lo que amas",
        logo: "/logo.png",
        canva: [
            {
                segmentoMercado: [
                    { texto: "Por tipo de cliente empresas particulares instituciones educativas " },
                    { texto: "Por ubicación geográfica, local, regional a domicilio" },
                ],
                propuestaValor: [
                    { texto: "En la Mesa Del Chef nuestro objetivo es brindarte una experiencia gastronómica inolvidable. Nuestro buffet ofrecerá platos preparados con productos frescos y de alta calidad, variedad de opciones para satisfacer todos los gustos y preferencias, un ambiente acogedor y elegante, y un servicio personalizado y atento. Nuestro buffet es perfecto para graduaciones, cumpleaños, bodas, aniversarios y reuniones familiares. ¡Reserva tu mesa hoy mismo y prepárate para una experiencia gastronómica inolvidable! ¡Felicitaciones por tu graduación! " }
                ],
                canales: [
                    { texto: "Contacto directo con instituciones educativas" },
                    { texto: "Redes sociales (Instagram, Facebook)" },
                    { texto: "Participación en ferias escolares o eventos" },
                ],
                relacionClientes: [
                    { texto: "Atención al cliente amable y personalizada" },
                    { texto: "Calidad del servicio" },
                    { texto: "Alimentos frescos y bien presentados" },
                    { texto: "Experiencia del cliente" },
                    { texto: "Higiene y presentación del personal" },
                    { texto: "Ofrecer eventos o promociones para eventos a futuro" }
                ],
                fuentesIngresos: [
                    { texto: "Ingresos por paquete" },
                    { texto: "Ingresos por eventos especiales" },
                    { texto: "Venta de productos de ferias escolares, eventos deportivos, etc" },
                    { texto: "Promociones por fecha de especiales" },
                    { texto: "Alianza o marca de alimentos saludables" },
                ],
                recursosClaves: [
                    {
                        texto: "Utensilios y herramientas para preparación de alimentos."
                    },
                    {
                        texto: "Menaje y elementos decorativos para eventos."
                    },
                    {
                        texto: "Ingredientes y suministros para el menú."
                    },
                    {
                        texto: "Personal para servir alimentos y bebidas en eventos."
                    },
                    {
                        texto: "Equipo para atención al cliente durante el evento."
                    },
                    {
                        texto: "Encargados de coordinar transporte y organización."
                    },
                    {
                        texto: "Diseño de opciones personalizadas para eventos."
                    },
                    {
                        texto: "Gestión de suministros de calidad."
                    },
                    {
                        texto: "Control de higiene y seguridad"
                    },
                    {
                        texto: "Estrategia y promociones de venta"
                    }
                ],
                actividadesClaves: [
                    {
                        texto: "Diseñar un menú variado y atractivo para eventos."
                    },
                    {
                        texto: "Coordinar al equipo de trabajo para la ejecución del evento."
                    },
                    {
                        texto: "Seleccionar proveedores confiables para ingredientes frescos."
                    },
                    {
                        texto: "Preparar alimentos con ingredientes de calidad."
                    },
                    {
                        texto: "Distribuir estratégicamente las estaciones de comida en el buffet."
                    },
                    {
                        texto: "Mantener los alimentos bien servidos, calientes o fríos según corresponda."
                    },
                    {
                        texto: "Decorar el espacio de manera atractiva y cómoda para los clientes."
                    }
                ],
                sociosClaves: [
                    {
                        texto: "Aliados estratégicos: Emprendimientos de terceros de Bachillerato para colaborar en eventos."
                    },
                    {
                        texto: "Proveedores de alimentos"
                    },
                    {
                        texto: "Personal de buffet"
                    },
                    {
                        texto: "Empresa logística"
                    }
                ],
                estructuraCostos: [
                    { texto: "Costos Fijos: Sueldo de personal, Renta de local Comercial, Insumos de Producción" },
                    { texto: "Costos Variables: Gastos de venta, Labores en publicidad y propaganda, Transporte para mobilización" },
                    { texto: "Costos Posibles: posibilidades internas, (carteles, menú, promociones.), Capacitaciones del personal" }
                ]
            }
        ]
    },
    {
        id: 2,
        curso: "3 A",
        nombreEmprendimiento: "RITMO ESTELAR",
        slogan: "Siente el ritmo de la música",
        logo: "/logos/3a.png",
        canva: [
            {
                segmentoMercado: [
                    { texto: "Estudiantes de 3er de Bachillerato de la U. E. 'Los Shyris'" },
                    { texto: "Coorporaciones Interesadas" },
                    { texto: "Intermediarios" },
                ],
                propuestaValor: [
                    { texto: "Ofrece una experiencia diferenciada en el ámbito de la danza, combinando géneros musicales distintos" },
                    { texto: "Experiencia en eventos corporativos: Bodas, fiestas, graduaciones; etc." },
                ],
                canales: [
                    { texto: "Publicidad en Redes Sociales y Física" },
                    { texto: "Recomendación de Clientes" },
                    { texto: "Participación dentro de eventos realizados" },
                ],
                relacionClientes: [
                    { texto: "Empatía con el cliente en sus necesidades." },
                    { texto: "Comunicación clara y constante con el cliente." },
                    { texto: "Programas financieros de lealtad para motivar a los clientes a asistir a eventos." }
                ],
                fuentesIngresos: [
                    { texto: "Graduaciones" },
                    { texto: "Fiestas" },
                    { texto: "Eventos Corporativos" },
                    { texto: "Desfiles" },
                    { texto: "Ferias" },
                    { texto: "Clases" },
                    { texto: "Talleres" },
                    { texto: "Muestra de emprendimientos." }
                ],
                recursosClaves: [
                    { texto: "Recursos Humanos: Todos los estudiantes del 3ro ‘A’." },
                    { texto: "Recursos Materiales: Vestimenta, equipos tecnológicos celulares, proyector." },
                    { texto: "Recursos Económicos: Cuota fija por el grupo." },
                    { texto: "Recursos Intelectuales: Docentes." },
                    { texto: "Habilidades: Movimiento motriz." }
                ],
                actividadesClaves: [
                    { texto: "Organización permanente de eventos." },
                    { texto: "Marketing y promoción." },
                    { texto: "Retroalimentación post-evento." }
                ],
                sociosClaves: [
                    { texto: "Coreógrafos." },
                    { texto: "Proveedores de vestimenta." },
                    { texto: "Técnicos de sonido e iluminación." },
                    { texto: "Transporte y logística." }
                ],
                estructuraCostos: [
                    { texto: "Costos Fijos: Sueldos fijos, Mantenimiento de equipos y Marketing básico" },
                    { texto: "Costos Variables: Vestuario, Transporte y Alimentación" },
                    { texto: "Gastos Operacionales: Comunicación, Material de oficina e Imprevistos" },
                    { texto: "Gastos de Venta: Publicidad digital, Fotografías o Videos, Comisiones a socios y Presentaciones gratuitas" },
                ]
            }
        ]
    },
    {
        id: 3,
        curso: "3 B",
        nombreEmprendimiento: "ELEGAM",
        slogan: "El arte de servir con elegancia",
        logo: "/logos/3b.png",
        canva: [
            {
                segmentoMercado: [
                    { texto: "Estudiantes de la jornada matutina en un rango de 15 a 18 años de la Unidad Educativa “Los Shyris”, específicamente para los Jóvenes de Terceros de Bachillerato para la organización de su Graduación" },
                    { texto: "Docentes de la misma Institución de la jornada matutina y vespertina para para la realización de cualquier evento formal" },
                ],
                propuestaValor: [
                    { texto: "Nuestra empresa ofrece servicios de menaje y cristalería elegantes, funcionales y de alta calidad, pensados para embellecer cualquier evento. Nos enfocamos en brindar una atención personalizada, asesoría cercana y una experiencia de asesoramiento ágil tanto presencial como digital. Todo esto con precios accesibles que permiten a nuestros clientes acceder a artículos refinados sin complicaciones." },
                ],
                canales: [
                    { texto: "Redes Sociales" },
                    { texto: "Utilización de nuestra página web ( WhatsApp)" },
                    { texto: "Recomendación de nuestros clientes" },
                    { texto: "Publicidad" },
                ],
                relacionClientes: [
                    { texto: "Personalización del evento" },
                    { texto: "Presentación de colorimetría y paleta de colores para los diversos eventos" },
                    { texto: "Atención cordial" },
                    { texto: "Buen servicio" },
                    { texto: "Buena organización, puntualidad" },
                    { texto: "Adaptación de las necesidades de los clientes" },
                ],
                fuentesIngresos: [
                    { texto: "La principal fuente de ingreso del emprendimiento será la prestación del servicio de menaje y cristaleria, es decir el alquiler de articulos para eventos sociales y corporativos, en nuestro caso especialmente con las temáticas de graduación, boda y corporativa." },
                    { texto: "Los clientes pagan una tarifa por el uso temporal de los elementos, la cual varía según la cantidad de piezas, el tipo de servicio, y la duración del evento." },
                ],
                recursosClaves: [
                    { texto: "Recursos financieros: Ingresos: El dinero recaudado por los estudiantes del 3ERO B para alquilar los materiales necesarios para llevar a cabo la exposición del emprendimiento" },
                    { texto: "Recurso humano: Ayuda con Asesores de alto conocimiento, experiencia y liderazgo en el ámbito de organización de eventos: " },
                    { texto: "Recursos materiales: Productos de menaje y cristalería carteles, pancartas, volantes, como material publicitario" },
                ],
                actividadesClaves: [
                    { texto: "Marketing y Ventas" },
                    { texto: "Atención personalizada" },
                    { texto: "Instrucción de etiqueta y protocolo" },
                    { texto: "Identificación de proveedores" },
                    { texto: "Alianzas con empresas de mensajería" },
                    { texto: "Logística de entrega" },
                    { texto: "Diseño y adaptación del servicio" },
                ],
                sociosClaves: [
                    { texto: "FESTONI EVENTOS:nos ayudarán con el montaje y retiro de la carpa, nos proporcionarán los manteles platos, copas, vasos, servilletas, servilleteros, manteles, 3 mesas, una cuadrada para la temática principal de Graduación y dos redondas mas para el resto de temáticas de boda y corporativa, así como también con la decoración necesaria para cada evento" },
                    { texto: "Eventos Cotocollao: Diseñador que aporto en el diseño de la presentación" },
                ],
                estructuraCostos: [
                    { texto: "Costos Variables: Decoraciones específicas solicitadas por el cliente, Materiales consumibles, Personal temporal para montaje y desmontaje según el servicio contratado." },
                    { texto: "Costos fijos: Alquiler de los recursos necesarios para los eventos como mesas, carpas, manteles, sillas, cubre mesas, decoración e general, Página web" },
                    { texto: "Gastos de Operación: Organización del espacio, fletes del vehículo que transportará los elementos, Decoraciones o artículos personalizados" },
                    { texto: "Gastos de Venta: Videos promocionales o fotos profesionales del montaje, Diseño del sitio con catálogo de servicios y formulario de contacto, Personal encargado de responder consultas, enviar cotizaciones y cerrar ventas, etc." },
                ]
            }
        ]
    },
    {
        id: 4,
        curso: "3 C",
        nombreEmprendimiento: "DELI SALT",
        slogan: "Sabor irresistible en cada bocadito",
        logo: "/logos/3c.png",
        canva: [
            {
                segmentoMercado: [
                    { texto: "Estudiantes de 12 a 19 años de la Unidad Educativa 'Los Shyris'" },
                    { texto: "Personal administrativo de la Unidad Educativa 'Los Shyris'" },
                    { texto: "Personas entre los 30 a 55 años de edad" },
                    { texto: "Personas que asisten a eventos, fiestas, celebraciones y reuniones" },
                ],
                propuestaValor: [
                    { texto: "En 'Deli Salt' transformamos lo cotidiano en un deleite. Ofrecemos una variedad de bocaditos salados elaborados artesanalmente con ingredientes frescos y de calidad, pensados para satisfacer los antojos con un sabor auténtico y original. Perfectos para compartir, regalar o disfrutar en cualquier momento del día, nuestros bocaditos combinan tradición, innovación y ese toque casero que los hace irresistibles" },
                ],
                canales: [
                    { texto: "Puntos de Venta propia" },
                    { texto: "Redes Sociales" },
                    { texto: "Plataformas de Delivery" },
                    { texto: "CoAlianzas Comerciales" },
                    { texto: "Ferias y Eventos" },
                ],
                relacionClientes: [
                    { texto: "Redes Sociales" },
                    { texto: "Correo Electrónico" },
                    { texto: "Publicidad en Línea" },
                    { texto: "Ferias y Eventos" },
                    { texto: "Degustaciones" },
                    { texto: "Tienda en Línea" },
                    { texto: "Venta en Tiendas" },
                ],
                fuentesIngresos: [
                    { texto: "Venta del Producto" },
                    { texto: "Suscripciones" },
                    { texto: "Pedidos Corporativos" },
                    { texto: "Eventos" },
                    { texto: "Catering" },
                    { texto: "Alianzas Comerciales" },
                    { texto: "Talleres" },
                    { texto: "Experiencias" },
                ],
                recursosClaves: [
                    { texto: "Recursos Financieros: Inversión inicial" },
                    { texto: "Recursos Intelectuales: Conocimiento para realizar el producto, Elaboración y Diseño de bocaditos" },
                    { texto: "Recursos Materiales" },
                    { texto: "Recursos Tecnológicos" },
                    { texto: "Recursos Humanos: Personal de producción y Habilidad" },
                ],
                actividadesClaves: [
                    { texto: "Planificación y control de producción." },
                    { texto: "Elaboración de bocaditos" },
                    { texto: "Control de calidad" },
                    { texto: "Envasado y empaque" },
                    { texto: "Selección de insumos para producir" },
                    { texto: "Venta y distribución" },
                    { texto: "Atención al cliente" },
                ],
                sociosClaves: [
                    { texto: "Inversores: Estidiantes del 3C" },
                    { texto: "Distribuidores de ingredientes" },
                    { texto: "Fabricantes de envases" },
                    { texto: "Proveedores de materiales necesarios" },
                    { texto: "Supermercados y tiendas de conveniencia" },
                    { texto: "Cafeterías, panaderías y restaurantes" },
                    { texto: "Alianzas estratégicas" },
                ],
                estructuraCostos: [
                    { texto: "Costos Fijos: Alquiler del local, Servicios básicos, Sueldos y Salarios, Publicidad fija, Seguro (opcional), Administración y Oficina, Depreciación de equipos" },
                    { texto: "Costos Variables: Masa de hojaldre, Sal, Diferentes rellenos, Empaque, Transporte" },
                ]
            }
        ]
    },
    {
        id: 5,
        curso: "3 D",
        nombreEmprendimiento: "ESCENCIA Y DISEÑO",
        slogan: "El arte de decorar y la pasión de celebrar",
        logo: "/logos/3d.jpg",
        canva: [
            {
                segmentoMercado: [
                    { texto: "Grupos Empresariales" },
                    { texto: "Cliente particulares (Que tengan eventos como bodas, cumpleaños. graduaciones, bautizos, entre otros.)" },
                    { texto: "Organizadores de eventos" },
                ],
                propuestaValor: [
                    { texto: "En base al olvido fugaz y carente de calidad en los eventos, Esencia y diseño, creamos, transformamos las experiencias y recuerdos inolvidables. Donde combinamos la pasión y el diseño personalizados, con estilos visualmente atractivos, dando lugar a ambientes unicos qué darán un realce en tú evento," },
                ],
                canales: [
                    { texto: "Directo: Brindando un servicio personalizado y con un contacto directo con el cliente." },
                    { texto: "Indirecto: Por medio de intermediarios como organizadores de eventos" },
                    { texto: "Digitales: Con páginas web que detallan nuestro servicio y se da conocer." },
                ],
                relacionClientes: [
                    { texto: "Mediante publicaciones digitales que promocione nuestro servicio." },
                    { texto: "Asesoria personalizada al cliente." },
                    { texto: "Programas de fidelización" },
                    { texto: "Comunicación clara y empatica, con un seguimiento continuo en todo el proceso" },
                ],
                fuentesIngresos: [
                    { texto: "Prestación del servicio" },
                    { texto: "Inversiones externas" },
                    { texto: "Métodos de pago (transferencias, efectivo, tarjeta)" },
                    { texto: "Patrocinio empresarial" },
                ],
                recursosClaves: [
                    { texto: "Personal capacitado de montaje, decoradores, atención al cliente y los colaboradores.Conocimientos de las personas de acuerdo a diseños creativo y decoraciones de eventos." },
                ],
                actividadesClaves: [
                    { texto: "Estrategia de marketing por medio de redes sociales como publicidad y desarrollar catálogos del servicio que vamos a ofrecer." },
                    { texto: "Realizar revisiones detallas antes de cada evento." },
                    { texto: "Crear propuestas para un servicio más personalizado acorde a el evento." },
                ],
                sociosClaves: [
                    { texto: "Alianzas con otros organizadores de eventos." },
                    { texto: "Proveedores de meteriales mobiliario como sillas, mesas, telas, floristería)" },
                    { texto: "Establecer relaciones con empresas de decoraciones de eventos y espacios fisicos como salones, restaurantes, hoteles y lugares al aire libre." },
                    { texto: "Agencias de transporte" },
                ],
                estructuraCostos: [
                    { texto: "Costo fijos: Servicio basicos, Renta del punto de venta, Publicidad, Licencia y permisos" },
                    { texto: "Costos variables:Provedores de materiales, Transporte, Renta de equipos, Personal adicional (animadores, fotógrafo)" },
                ]
            }
        ]
    },
    {
        id: 6,
        curso: "3 E",
        nombreEmprendimiento: "DULCE BOCADO",
        slogan: "Magia en cada mordisco",
        logo: "/logos/3e.jpg",
        canva: [
            {
                segmentoMercado: [
                    {
                        texto: "Chicos de entre 17 a 19 años que sean estudiantes de Tercero de bachillerato de la Unidad Educativa 'Los Shyris'"
                    },
                ],
                propuestaValor: [
                    {
                        texto: "Nuestro emprendimiento ofrece bocaditos deliciosos, saludables y personalizados, hechos con ingredientes frescos y de alta calidad, Nuestra misión es proporcionar una experiencia culinaria única y beneficiosa, con opciones personalizadas y un servicio de entrega rápido y eficiente."
                    },
                ],
                canales: [
                    {
                        texto: "Dulce Bocado utiliza redes sociales para promocionarse, WhatsApp y llamadas para atención personalizada y pedidos, y participa en ferias locales para captar nuevos clientes."
                    },
                ],
                relacionClientes: [
                    {
                        texto: "Dulce Bocado busca construir una relación cercana y personalizada con sus clientes mediante atención personalizada, interacción en redes sociales y eventos locales."
                    },
                    {
                        texto: ". También se enfoca en recopilar feedback, responder a comentarios y sugerencias, y ofrecer contenido atractivo para mantener el interés y lealtad de los clientes, lo que genera conexión, fidelidad y mejora la experiencia del cliente."
                    },
                ],
                fuentesIngresos: [
                    { texto: "Los ingresos provienen de la venta directa de bocaditos dulces, servicios de catering personalizados y pedidos por volumen para empresas y eventos." },
                    { texto: "Se generan ingresos adicionales a través de decoraciones temáticas y promociones especiales." }
                ],
                recursosClaves: [
                    {
                        texto: "Recursos Humanos: Ayudantes de cocina con conocimiento y experiencia."
                    },
                    {
                        texto: "Ingredientes necesarios que se van a usar para la preparación de los productos"
                    },
                    {
                        texto: "Equipamiento y utensillos a utilizar"
                    },
                    {
                        texto: "Material de empaque: Cajas pequeñas, bandejas o bolsas transparentes, etiquetas personalizadas, servilletas o envolturas decorativas."
                    },
                ],
                actividadesClaves: [
                    {
                        texto: "Pruebas de sabor y textura: se debe realizar pruebas de sabor para asegurarse que el producto este bien preparado."
                    },
                    {
                        texto: "Promoción del producto: promocionar el producto realizado interacción hacia el cliente, publicidad, folletos, etc."
                    },
                    {
                        texto: "Decoración y empaquetado: se debe decorar de manera creativa y empaquetar los bocados dulces de manera atractiva y segura para su distribución"
                    },
                ],
                sociosClaves: [
                    {
                        texto: "Identifica las colaboraciones estratégicas y las relaciones con otros socios o proveedores clave. Estos socios desempeñan un papel fundamental en el funcionamiento y éxito del modelo de negocio."
                    },
                ],
                estructuraCostos: [
                    {
                        texto: "Los costos principales de Dulce Bocado incluyen materias primas de calidad, envases atractivos, mano de obra artesanal, marketing digital y gastos operativos básicos."
                    },
                ]
            }
        ]
    },
    {
        id: 7,
        curso: "3 E",
        nombreEmprendimiento: "SONIDEO",
        slogan: "Ritmo y enfoque",
        logo: "/logos/3e.1.jpg",
        canva: [
            {
                segmentoMercado: [
                    { texto: "Estudiantes de los 3ros años de la Unidad Educativa 'Los Shyris' (A.V 6 de diciembre y cucardas) con un rango de edad entre los 16 y 18 años" },
                    { texto: "Docentes y autoridades educativas, quienes estarán involucrados en la planificación, supervisión y evaluación del desarrollo del proyecto" },
                    { texto: "Personal encargado del evento, incluyendo colaboradores y organizadores que apoyan en la logística y ejecución de las actividades" }
                ],
                propuestaValor: [
                    {
                        texto: "Ofrecemos servicios básicos de música, sonido y video para fiestas de graduación estudiantil a precios muy accesibles, asegurando un evento alegre y memorable, nos adaptamos a las necesidades y presupuestos de los estudiantes, ofreciendo calidad sin sacrificar la diversión. Nuestro equipo trabaja con responsabilidad y puntualidad para que cada evento sea especial e inolvidable."
                    },
                ],
                canales: [
                    {
                        texto: "Mediante publicidad física"
                    },
                    {
                        texto: "Mediante publicidad digital"
                    },
                    {
                        texto: "Recomendacion por los estudiantes y otras personas"
                    },
                ],
                relacionClientes: [
                    { texto: "Nos tomamos el tiempo para escuchar realmente qué necesita cada cliente y cuáles son sus dudas o preocupaciones." },
                    { texto: "Cada cliente recibe un trato especial, porque entendemos que no todos tienen el mismo nivel de conocimiento sobre la tecnología." },
                    { texto: "Estamos ahí para resolver cualquier duda que surja después, ofreciendo soporte amable y rápido, porque queremos que la experiencia sea única." },
                    { texto: "Brinda asistencia rápida y efectiva ante cualquier problema o duda que tengan sobre el equipo o servicio." },
                    { texto: "Respetamos las opiniones y sugerencias para mejorar continuamente y demostrar que nos importa la experiencia del cliente." }
                ]
                ,
                fuentesIngresos: [
                    { texto: "Renta de paquetes de evento completo (pantalla gigante, sonido, luces y DJ)." },
                    { texto: "Renta individual de servicios (solo pantalla o solo sonido, según necesidad)." },
                    { texto: "Personalización del evento (efectos especiales, luces, animaciones)." },
                    { texto: "Publicidad de negocios locales proyectada en la pantalla durante el evento." }
                ]
                ,
                recursosClaves: [
                    { texto: "Integrantes del equipo de trabajo" },
                    { texto: "Asesores de música, fotografía y video" },
                    { texto: "Cámara" },
                    { texto: "Laptop" },
                    { texto: "Programas" },
                    { texto: "Conexiones eléctricas" },
                    { texto: "Equipo de sonido" },
                    { texto: "Impresora" },
                    { texto: "Proyector de video" },
                    { texto: "Fondos fotográficos" },
                    { texto: "Aporte monetario por 3E" }
                ],
                actividadesClaves: [
                    { texto: "Diseño y planificación personalizada de servicios" },
                    { texto: "Producción y postproducción de audio, video y fotografía" },
                    { texto: "Gestión de talento y equipo técnico" },
                    { texto: "Adquisición y mantenimiento de equipos de alta calidad" },
                    { texto: "Participación en eventos, ferias o alianzas estratégicas." },
                    { texto: "Innovación y desarrollo de nuevas propuestas" }
                ],
                sociosClaves: [
                    { texto: "Proveedor de equipos técnicos" },
                    { texto: "Editor audiovisual" },
                    { texto: "DJ profesional" },
                    { texto: "Especialista en fotografía" },
                    { texto: "Proveedor de carpas" }
                ],
                estructuraCostos: [
                    { texto: "alquiler de carpas" },
                    { texto: "Salarios de empleados" },
                    { texto: "Publicidad" },
                    { texto: "Energía eléctrica usada en la producción" },
                    { texto: "Mano de obra directa" },
                    { texto: "Recursos para la instalación" }
                ]
            }
        ]
    },
    {
        id: 8,
        curso: "3 F",
        nombreEmprendimiento: "ÚLTIMA HUELLA",
        slogan: "Transformamos emociones en recuerdos",
        logo: "/logos/3f.png",
        canva: [
            {
                segmentoMercado: [
                    {
                        texto: "Norte de Quito - Ecuador."
                    },
                    {
                        texto: "Unidad Educativa Fiscal Los Shyris."
                    },
                    {
                        texto: "Estudiantes de Bachillerato."
                    },
                    {
                        texto: "Graduaciones"
                    }
                ],
                propuestaValor: [
                    {
                        texto: "En Última Huella transformamos emociones en recuerdos personalizados de graduación, hechas a mano en foamy de alta calidad."
                    },
                    {
                        texto: "Nos destacamos por diseños únicos, adaptados a las preferencias del cliente, con acabados detallados y duraderos."
                    },
                    {
                        texto: "Ofrecemos un recuerdo especial para estudiantes, docentes y familias de la Unidad Educativa 'Los Shyris' y el norte de Quito. Con Última Huella, cada graduación se convierte en un recuerdo inolvidable."
                    }
                ]
                ,
                canales: [
                    {
                        texto: "Canales de distribución físicos: Entrega directa en el colegio, locales (papelería o una tienda), y entrega a domicilio."
                    },
                    {
                        texto: "Canales de distribución digitales: Redes sociales (WhatsApp, Facebook, Instagram, TikTok) y tienda en línea."
                    }
                ],
                relacionClientes: [
                    {
                        texto: "Ofrecer productos personalizados según las preferencias del cliente."
                    },
                    {
                        texto: "Diseñar paquetes personalizados, especiales y promociones."
                    },
                    {
                        texto: "Realizar demostraciones en redes sociales con fotos y encuestas sobre el producto."
                    },
                    {
                        texto: "Padres de familia interesados en recuerdos de graduación."
                    }
                ],
                fuentesIngresos: [
                    { texto: "Venta Directa: Recuerdos en  tiendas o redes sociales y personalización por encargo." },
                ],
                recursosClaves: [
                    {
                        texto: "Estudiantes con habilidades en diseño gráfico, dibujo o redacción."
                    },
                    {
                        texto: "Encargados de ensamblar recuerdos, imprimir y armar empaques."
                    },
                    {
                        texto: "Supervisa y organiza las tareas del proyecto."
                    },
                    {
                        texto: "Pistolas de silicona, cortadoras y otros implementos."
                    },
                    {
                        texto: "Aportes propios, rifas, fondos escolares o apoyo de familiares/profesores."
                    },
                    {
                        texto: "Para gastos menores y reposiciones rápidas."
                    },
                    {
                        texto: "Canva para crear diseños personalizados."
                    },
                    {
                        texto: "Apoyo de docentes, padres de familia y autoridades del colegio."
                    },
                    {
                        texto: "Tiendas de manualidades para suministros."
                    },
                ],
                actividadesClaves: [
                    {
                        texto: "Crear ideas originales y creativas para recuerdos personalizados."
                    },
                    {
                        texto: "Supervisar la calidad de cada producto antes de la entrega."
                    },
                    {
                        texto: "Gestionar tiempos de entrega y suministro de materiales."
                    },
                    {
                        texto: "Organizar promociones para incentivar las ventas."
                    },
                    {
                        texto: "Tomar pedidos personalizados según las preferencias de los clientes."
                    },
                    {
                        texto: "Administrar el presupuesto del emprendimiento."
                    },
                    {
                        texto: "Registrar ingresos, egresos y ganancias."
                    }
                ],
                sociosClaves: [
                    {
                        texto: "Ubicación en Quito, Ecuador, sector norte, Unidad Educativa Los Shyris."
                    },
                    {
                        texto: "Estudiantes de 16 a 18 años en bachillerato, todos los géneros."
                    },
                    {
                        texto: "Nivel socioeconómico medio y medio-bajo, padres interesados en logros académicos."
                    },
                    {
                        texto: "Estudiantes y familias que valoran celebrar graduaciones y logros académicos."
                    },
                    {
                        texto: "Compra ocasional por reconocimientos simbólicos en época de graduaciones."
                    },
                ],
                estructuraCostos: [
                    {
                        texto: "Costos fijos: Gastos que no cambian, independientemente de si se está produciendo o no."
                    },
                    {
                        texto: "Costos variables: Gastos que cambian según el nivel de producción o ventas de la empresa."
                    }
                ]
            }
        ]
    },
]