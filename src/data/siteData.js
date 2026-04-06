export const siteData = {
  business: {
    name: "La Federal",
    subtitle: "Sanducheria Artesanal",
    city: "Cucuta",
    country: "Colombia",
    slogan: "Desde el sabor artesanal",
    address: "Cll 6 # 9E-28, Colsag",
    fullAddress: ["Calle 6 # 9E-28, Colsag", "Cucuta, Colombia"],
    schedule: "Todos los dias - 4:30 pm - 10:30 pm",
    phoneRaw: "3024159686",
    phoneDisplay: "302 415 9686",
    social: {
      tiktok: "@lafederal.co"
    }
  },
  navigation: [
    { to: "/", label: "Inicio" },
    { to: "/menu", label: "Menu" },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/contacto", label: "Contacto" }
  ],
  home: {
    hero: {
      eyebrow: "Cucuta, Colombia - Desde el sabor artesanal",
      titleTop: "LA",
      titleAccent: "FEDERAL",
      subtitle: "Sanducheria Artesanal",
      info: "Olvidate de lo de siempre  En La Federal cocinamos para los que saben que el secreto esta en la calidad y en los detalles  Un parche con estilo, ingredientes de verdad y el sazon que te mereces  Porque un sanduche asi de melo no se encuentra en cualquier esquina; se disfruta aqui, con nosotros 🥪",
      primaryCta: { label: "Ver Menu Completo", to: "/menu" },
      secondaryCta: { label: "Contactanos", to: "/contacto" }
    },
    highlights: [
      { icon: "Pan", label: "Pan Artesanal", sub: "Hecho cada dia" },
      { icon: "Fresh", label: "Ingredientes Frescos", sub: "Seleccionados con cuidado" },
      { icon: "Time", label: "Abierto Diario", sub: "4:30 pm - 10:30 pm" },
      { icon: "Pin", label: "Cucuta", sub: "Colsag, Cll 6 # 9E-28" }
    ]
  },
  about: {
    tag: "Nuestra historia",
    title: "Sabor que",
    titleAccent: "se queda",
    body: "En La Federal creemos que un buen sanduche es un acto de amor: pan artesanal, ingredientes frescos y salsas de autor preparadas cada dia en Cucuta.",
    stats: [
      { value: "14+", label: "Sanduches artesanales" },
      { value: "7", label: "Dias a la semana" },
      { value: "501", label: "Seguidores fieles" },
      { value: "Infinito", label: "Sabor garantizado" }
    ],
    quote: "Cada sanduche cuenta una historia. La nuestra es de pan caliente, salsas propias y mucho amor por Cucuta.",
    cite: "La Federal Sanducheria"
  },
  contact: {
    tag: "Encuentranos",
    title: "Visitanos",
    titleAccent: "hoy",
    cards: [
      {
        title: "Ubicacion",
        value: "Cll 6 # 9E-28, Colsag, Cucuta",
        buttonLabel: "Como llegar",
        buttonUrl: "https://www.google.com/maps/place/La+Federal+Sanducher%C3%ADa/@7.892872,-72.4912177,17z"
      },
      {
        title: "WhatsApp",
        value: "+57 302 415 9686",
        buttonLabel: "Enviar mensaje",
        buttonUrl: "https://wa.me/573024159686"
      },
      {
        title: "TikTok",
        value: "@lafederal.co",
        buttonLabel: "Seguir",
        buttonUrl: "https://www.tiktok.com/@lafederal.co"
      }
    ],
    serviceTypes: [
      { title: "A domicilio", desc: "Entrega gratuita." },
      { title: "Para llevar", desc: "Pide y recoge en el local." },
      { title: "En el local", desc: "Atencion en mesa segun disponibilidad." }
    ],
    map: {
      title: "Encuentra nuestra ubicacion",
      embedUrl: "https://www.google.com/maps?q=7.892872,-72.4912177&z=17&output=embed"
    },
    weeklyHours: [
      { dayKey: "tuesday", dayLabel: "Martes", open: "16:00", close: "22:00", display: "4:00 p. m. - 10:00 p. m." },
      { dayKey: "wednesday", dayLabel: "Miercoles", open: "16:00", close: "22:00", display: "4:00 p. m. - 10:00 p. m." },
      { dayKey: "thursday", dayLabel: "Jueves", open: "16:00", close: "22:00", display: "4:00 p. m. - 10:00 p. m." },
      { dayKey: "friday", dayLabel: "Viernes", open: "16:00", close: "22:30", display: "4:00 p. m. - 10:30 p. m." },
      { dayKey: "saturday", dayLabel: "Sabado", open: "16:00", close: "22:30", display: "4:00 p. m. - 10:30 p. m." },
      { dayKey: "sunday", dayLabel: "Domingo", open: "16:00", close: "22:00", display: "4:00 p. m. - 10:00 p. m." },
      { dayKey: "monday", dayLabel: "Lunes", open: "16:00", close: "22:00", display: "4:00 p. m. - 10:00 p. m." }
    ],
    orderBox: {
      title: "Listo para pedir?",
      body: "Contactanos directamente por WhatsApp o visitanos en Colsag.",
      buttonLabel: "Llamar ahora"
    }
  },
  menu: {
    headerTag: "La Federal Sanducheria - Cucuta",
    headerTitle: "Nuestro",
    headerAccent: "Menu",
    headerSubtitle: "Pan artesanal - Ingredientes frescos - Salsas de autor",
    categories: [
      {
        id: "artesanales",
        label: "Artesanales",
        title: "Sanduches Artesanales",
        tag: "7 opciones",
        items: [
          {
            name: "Bondiola",
            price: "$26.000",
            desc: "Bondiola de cerdo, tomate fresco, cebolla caramelizada, mayo de ajos ahumados y queso fundido en pan artesanal."
          },
          {
            name: "Birria",
            price: "$31.000",
            desc: "Birria de res, cebolla, cilantro y quesos fundidos en pan artesanal."
          },
          {
            name: "Lomo Argentino",
            price: "$35.000",
            desc: "Lomo fino de res, mayo de chimichurri, chorizo argentino troceado y cebolla morada en pan artesanal."
          },
          {
            name: "Lomo Federal",
            price: "$35.000",
            desc: "Lomo fino de res, salsa de la casa, queso fundido, cebolla caramelizada y puerro crocante en pan artesanal."
          },
          {
            name: "Pollo & Pina",
            price: "$27.000",
            desc: "Pollo al horno, jamon de pierna ahumado, mayo de ajos ahumados, queso fundido y bastones de pina dorada en pan artesanal."
          },
          {
            name: "Pollo Toscana",
            price: "$26.000",
            desc: "Pollo al horno, mayo de chipotle, albahaca fresca, tomate, cebolla morada y queso fundido."
          },
          {
            name: "Cochinita Pibil",
            price: "$30.000",
            desc: "Cerdo desmechado al estilo mexicano, mayo de jalapenos, cebolla morada y quesos fundidos en pan artesanal."
          }
        ]
      },
      {
        id: "club",
        label: "Club Sanduches",
        title: "Club Sanduches",
        tag: "3 opciones",
        items: [
          {
            name: "Club Caprese",
            price: "$20.000",
            desc: "Tres pisos de pan brioche, mezcla de quesos fundidos, rodajas de tomate, hojas de albahaca fresca, reduccion de balsamico y salsas de la casa."
          },
          {
            name: "Club Quesos y Cebolla",
            price: "$20.000",
            desc: "Tres pisos de pan brioche, mezcla de quesos fundidos, cebolla caramelizada y salsas de la casa."
          },
          {
            name: "Club Jamon y Quesos",
            price: "$20.000",
            desc: "Tres pisos de pan brioche, mezcla de quesos fundidos y jamon de pierna ahumado."
          }
        ]
      },
      {
        id: "kids",
        label: "Federal Kids",
        title: "Federal Kids",
        tag: "1 opcion",
        items: [
          {
            name: "Federal Kids",
            price: "$27.000",
            desc: "Milanesa de pollo, tocineta con miel y queso cheddar fundido en pan brioche de hamburguesa, acompanado de papitas rusticas."
          }
        ]
      },
      {
        id: "papas",
        label: "Para Acompanar",
        title: "Para Acompanar",
        tag: "3 opciones",
        items: [
          {
            name: "Papas Rusticas Pequenas",
            price: "$7.000",
            desc: "Porcion de 120 gr de papas rusticas."
          },
          {
            name: "Papas Rusticas Grandes",
            price: "$13.000",
            desc: "Porcion de 250 gr de papas rusticas."
          },
          {
            name: "Papas Federal",
            price: "$21.000",
            desc: "Cama de papas rusticas (250 gr), coronadas con salsa de la casa, mayo de ajos ahumados y tocineta crocante."
          }
        ]
      },
      {
        id: "adiciones",
        label: "Adiciones",
        title: "Adiciones",
        tag: "9 opciones",
        additions: [
          { name: "Papas Rusticas Pequenas (120 gr)", price: "$5.000" },
          { name: "Chorizo Troceado", price: "$5.500" },
          { name: "Jamon de Pierna Ahumado", price: "$3.000" },
          { name: "Tocineta Crocante", price: "$4.500" },
          { name: "Bastones de Pina Dorada", price: "$3.000" },
          { name: "Jalapenos", price: "$2.000" },
          { name: "Queso Mozzarella Fundido", price: "$3.000" },
          { name: "Queso Cheddar Fundido", price: "$3.000" },
          { name: "Queso Suizo Fundido", price: "$5.000" }
        ]
      },
      {
        id: "bebidas",
        label: "Bebidas",
        title: "Bebidas",
        tag: "13 opciones",
        items: [
          {
            name: "Agua",
            price: "$6.000",
            desc: "Bebida basica individual."
          },
          {
            name: "Coca Cola",
            price: "$6.000",
            desc: "Bebida basica individual."
          },
          {
            name: "Quatro",
            price: "$6.000",
            desc: "Bebida basica individual."
          },
          {
            name: "Manzana",
            price: "$6.000",
            desc: "Bebida basica individual."
          },
          {
            name: "Colombiana",
            price: "$6.000",
            desc: "Bebida basica individual."
          },
          {
            name: "Agua Brisa Manzana",
            price: "$6.000",
            desc: "Bebida basica individual."
          },
          {
            name: "Ginger",
            price: "$6.000",
            desc: "Bebida basica individual."
          },
          {
            name: "Soda",
            price: "$6.000",
            desc: "Bebida basica individual."
          },
          {
            name: "Hatsu",
            price: "$10.000",
            desc: "Linea Hatsu disponible."
          },
          {
            name: "Sodas Artesanales",
            price: "$15.000",
            desc: "Frutos Rojos, Frutos Amarillos."
          },
          {
            name: "Agua de Jamaica",
            price: "$9.000",
            desc: "Agua refrescante."
          },
          {
            name: "Limonada de Panela",
            price: "$8.000",
            desc: "Agua refrescante."
          },
          {
            name: "Tinto de Verano",
            price: "$25.000",
            desc: "Opcion de la casa."
          }
        ]
      },
      {
        id: "cervezas",
        label: "Cervezas",
        title: "Cervezas",
        tag: "4 opciones",
        items: [
          {
            name: "Stella Artois",
            price: "$9.500",
            desc: "Cerveza importada."
          },
          {
            name: "Corona",
            price: "$9.500",
            desc: "Cerveza importada."
          },
          {
            name: "Club Colombia",
            price: "$7.500",
            desc: "Cerveza nacional."
          },
          {
            name: "Aguila Light",
            price: "$7.500",
            desc: "Cerveza nacional."
          }
        ]
      }
    ]
  }
};
