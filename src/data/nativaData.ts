import { Product, ServiceExperience } from '../types';

export const NATIVA_PRODUCTS: Product[] = [
  {
    id: 'te-vital',
    name: 'Té Vital',
    tagline: 'Una mezcla natural para comenzar el día con energía y bienestar',
    description: 'Mezcla natural de hierbas aromáticas cuidadosamente seleccionadas para despertar el cuerpo con vitalidad sostenida sin generar ansiedad.',
    longDescription: 'Nuestra fórmula insignia equilibra té verde andino de altura, hierbabuena fresca silvestre, cedrón orgánico y un toque energizante de jengibre y cáscara de naranja dulce. Cada hebra se seca a la sombra de manera artesanal preservando intactos sus aceites esenciales.',
    category: 'infusion',
    priceCOP: 28000,
    priceUSD: 7.5,
    weight: '100g (aprox. 35 tazas)',
    highlighted: true,
    badgeText: 'Producto Estrella',
    accentColor: '#285943',
    benefits: [
      'Energía natural constante sin caídas bruscas',
      'Propiedades digestivas y antioxidantes activas',
      'Sin aromatizantes sintéticos ni azúcares añadidos',
      'Cosecha silvestre de pequeños campesinos andinos'
    ],
    ingredients: ['Té verde de altura', 'Hierbabuena silvestre', 'Cedrón orgánico', 'Jengibre', 'Cáscara de naranja dulce'],
    preparation: {
      time: '4 - 5 minutos',
      temperature: '85°C (antes de hervir)',
      serving: '1 cucharadita (2.5g) por taza de 250ml'
    }
  },
  {
    id: 'granola-nativa',
    name: 'Granola Nativa',
    tagline: 'Granola artesanal horneada con frutos secos y miel pura',
    description: 'Granola artesanal con frutos secos crujientes, avena integral en grano entero, semillas andinas y endulzada exclusivamente con miel de montaña.',
    longDescription: 'Elaborada artesanalmente en pequeños lotes semanales para garantizar máxima frescura. Tostada a baja temperatura con aceite de coco prensado en frío, nueces del nogal, almendras fileteadas, arándanos silvestres y semillas de calabaza y chía.',
    category: 'alimento',
    priceCOP: 34000,
    priceUSD: 9.0,
    weight: '350g',
    accentColor: '#C97852',
    badgeText: 'Receta Tradicional',
    benefits: [
      'Rica en fibra soluble y grasas monoinsaturadas cardiosaludables',
      'Endulzada únicamente con miel pura de abejas sin refinar',
      'Sin aceites de palma ni conservantes químicos',
      'Ideal con yogur griego, frutas frescas o kéfir'
    ],
    ingredients: ['Avena integral en hojuela gruesa', 'Almendras', 'Nueces', 'Miel pura de abejas', 'Arándanos', 'Semillas de chía y girasol', 'Aceite de coco'],
    preparation: {
      time: 'Listo para consumir',
      temperature: 'Ambiente o frío',
      serving: '35g - 40g (3 cucharadas colmadas)'
    }
  },
  {
    id: 'miel-de-montana',
    name: 'Miel de Montaña',
    tagline: 'Miel natural de producción local de bosque andino',
    description: 'Miel natural de producción local y cosecha sostenible, recolectada en apiarios familiares a más de 2.200 metros sobre el nivel del mar.',
    longDescription: 'Miel cruda 100% pura y sin pasteurizar proveniente de la floración silvestre de los bosques andinos colombianos. Al no calentarse en exceso ni ultrafiltrarse, conserva todo su polen nativo, enzimas digestivas y micronutrientes intactos.',
    category: 'miel',
    priceCOP: 32000,
    priceUSD: 8.5,
    weight: '300g (Frasco de vidrio reutilizable)',
    accentColor: '#C97852',
    badgeText: 'Cosecha Limitada',
    benefits: [
      'Miel cruda multifloral sin pasteurización',
      'Refuerzo natural para las defensas y sistema inmune',
      'Apicultura ética que protege la biodiversidad de colmenas',
      'Textura densa y aromática con notas de flor de guayabo silvestre'
    ],
    ingredients: ['100% miel pura de abejas andinas sin filtrar ni pasteurizar'],
    preparation: {
      time: 'Consumo directo',
      temperature: 'No calentar a más de 40°C para preservar enzimas',
      serving: '1 cucharadita en ayunas o con tus infusiones favoritas'
    }
  },
  {
    id: 'infusion-relax',
    name: 'Infusión Relax',
    tagline: 'Mezcla de plantas aromáticas para una relajación profunda',
    description: 'Mezcla de plantas aromáticas para relajación y descanso nocturno, diseñada para aliviar tensiones y propiciar un sueño verdaderamente reparador.',
    longDescription: 'Sinergia botánica creada a partir de flores de manzanilla entera recolectada a mano, hojas de toronjil (melisa), pasiflora silvestre y capullos de lavanda andina. Su aroma sutil y reconfortante apaga el estrés acumulado durante la jornada.',
    category: 'infusion',
    priceCOP: 28000,
    priceUSD: 7.5,
    weight: '90g (aprox. 30 tazas)',
    accentColor: '#6F9E73',
    badgeText: 'Serenidad Nocturna',
    benefits: [
      'Favorece la relajación del sistema nervioso y muscular',
      '100% libre de teína y cafeína (ideal antes de acostarse)',
      'Flores enteras seleccionadas a mano sin polvillo',
      'Aroma floral balsámico suave y reconfortante'
    ],
    ingredients: ['Manzanilla de flor entera', 'Toronjil (Melisa)', 'Pasiflora', 'Lavanda andina', 'Menta piperita'],
    preparation: {
      time: '6 - 8 minutos (tapada)',
      temperature: '90°C',
      serving: '1 cucharadita (2g) 30 minutos antes de dormir'
    }
  }
];

export const NATIVA_SERVICES: ServiceExperience[] = [
  {
    id: 'cata-botanica',
    number: '01',
    title: 'Cata Sensorial & Taller de Mezclas Medicinales',
    shortDescription: 'Descubre las notas aromáticas y el arte de crear tus propias sinergias botánicas.',
    description: 'Aprende junto a nuestras botánicas maestras a identificar hierbas nativas por su aroma, textura y beneficios adaptógenos. Cada asistente elaborará su propia mezcla personalizada en frasco de boticario.',
    duration: '60 minutos',
    includedInLaunch: true,
    instructor: 'Valentina Restrepo · Herbolaria & Terapeuta Floral',
    highlights: ['Degustación de 4 cosechas raras', 'Kit de preparación para llevar a casa', 'Certificado de participación']
  },
  {
    id: 'asesoria-holistica',
    number: '02',
    title: 'Diagnóstico & Rutinas de Bienestar Personalizadas',
    shortDescription: 'Diseña un ritual diario adaptado a tus horarios, niveles de estrés y energía.',
    description: 'Consultoría personalizada en la que analizamos tu ritmo circadiano y te entregamos un plan de hábitos naturales con infusiones, alimentación limpia y tiempos de pausa activa.',
    duration: '30 minutos',
    includedInLaunch: true,
    instructor: 'Dr. Camilo Echeverri · Especialista en Nutrición Integrativa',
    highlights: ['Plan de hidratación botánica', 'Guía PDF descargable', 'Seguimiento por WhatsApp']
  },
  {
    id: 'canasta-artesanal',
    number: '03',
    title: 'Membresía Canasta de Temporada Nativa',
    shortDescription: 'Recibe en tu hogar cada mes cosechas frescas, miel de estación y lotes experimentales.',
    description: 'Forma parte de la comunidad exclusiva de NATIVA. Accede a cosechas de edición limitada que no salen al público general, recetas de autor y descuentos preferenciales en toda la línea.',
    duration: 'Suscripción mensual flexible',
    includedInLaunch: false,
    instructor: 'Colectivo Agroecológico NATIVA',
    highlights: ['Envíos prioritarios sin costo', 'Acceso a lanzamientos privados', 'Cancela o pausa cuando desees']
  }
];

export const BRAND_VALUES = [
  {
    key: 'natural',
    title: '100% Natural',
    subtitle: 'Pureza de origen',
    description: 'Sin conservantes, pesticidas sintéticos, saborizantes artificiales ni químicos que alteren el equilibrio de tu organismo.',
    icon: 'leaf'
  },
  {
    key: 'artesanal',
    title: 'Elaboración Artesanal',
    subtitle: 'El valor de lo hecho con las manos',
    description: 'Cosechamos y procesamos en pequeños lotes respetando los tiempos de secado y curado tradicional de cada planta.',
    icon: 'sparkles'
  },
  {
    key: 'saludable',
    title: 'Saludable & Consciente',
    subtitle: 'Bienestar real para tu día',
    description: 'Fórmulas botánicas fundamentadas en saberes ancestrales y verificadas para energizar, calmar y nutrir tu cuerpo.',
    icon: 'heart'
  },
  {
    key: 'local',
    title: 'Producción Local',
    subtitle: 'Comercio justo andino',
    description: 'Compramos directamente a familias campesinas y apicultores de Cundinamarca y Boyacá pagando un precio digno y equitativo.',
    icon: 'map-pin'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'Cambiar el café de la mañana por el Té Vital de Nativa transformó por completo mis niveles de energía. No tengo palpitaciones ni pesadez, solo una claridad mental asombrosa durante todo el día.',
    author: 'Camila Montoya',
    role: 'Arquitecta & Practicante de Yoga',
    city: 'Bogotá, Colombia',
    productTested: 'Té Vital',
    rating: 5
  },
  {
    quote: 'La Granola Nativa es la mejor que he probado en Colombia. Se siente de inmediato la calidad de la miel pura y la abundancia de frutos secos reales, nada de avena sobrecargada de azúcar.',
    author: 'Felipe Sandoval',
    role: 'Corredor de montaña & Diseñador',
    city: 'Medellín, Colombia',
    productTested: 'Granola Nativa',
    rating: 5
  },
  {
    quote: 'La Infusión Relax es ahora el ritual sagrado de mis noches. Su aroma a flores frescas de manzanilla y lavanda me ayuda a desconectar el ruido de la oficina y dormir profundo.',
    author: 'Lucía Benavides',
    role: 'Consultora de Sostenibilidad',
    city: 'Villa de Leyva, Colombia',
    productTested: 'Infusión Relax',
    rating: 5
  }
];

export const EVENT_DETAILS = {
  title: 'Evento de Lanzamiento Oficial: NATIVA 2026',
  date: 'Sábado 14 de Noviembre, 2026',
  time: '10:00 AM - 1:00 PM (GMT-5)',
  location: 'Casa Boutique Botánica Quinta Camacho, Cra 10 #70-24, Bogotá',
  virtualLinkText: 'Transmisión simultánea en HD con sala interactiva de preguntas',
  spotsTotal: 80,
  spotsLeft: 14,
  perks: [
    'Degustación en vivo de las 4 creaciones botánicas',
    'Kit de bienvenida Nativa con muestra de Té Vital & Miel',
    'Taller exclusivo de maceración e infusiones medicinales',
    '20% de descuento especial en compras durante el evento'
  ]
};
