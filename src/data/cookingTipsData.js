// Culinary tips data - minimum 6 tips required
const MAX_TIPS = 10;

const COOKING_TIPS = [
  {
    id: '1',
    emoji: '🔪',
    title: 'Técnica de Corte en Juliana',
    tip: 'Para cortar en juliana perfecta, primero corta el vegetal en láminas delgadas y luego apílalas para cortarlas en tiras finas. Mantén los dedos curvados (técnica de garra) para protegerlos.',
    category: 'Técnica',
  },
  {
    id: '2',
    emoji: '🧂',
    title: 'Sazonar en Capas',
    tip: 'No agregues toda la sal al final. Sazona en cada etapa de la cocción: al sofreír, al agregar líquidos y al finalizar. Esto da profundidad de sabor que la sal al final no puede lograr.',
    category: 'Sazonado',
  },
  {
    id: '3',
    emoji: '🥩',
    title: 'Reposar las Carnes',
    tip: 'Después de cocinar carne, déjala reposar 5-10 minutos antes de cortarla. Esto permite que los jugos se redistribuyan y la carne quede más jugosa y tierna.',
    category: 'Cocción',
  },
  {
    id: '4',
    emoji: '🧄',
    title: 'Pelar Ajo Rápidamente',
    tip: 'Coloca el diente de ajo bajo la hoja plana del cuchillo y presiona con la palma de tu mano. La piel se desprenderá fácilmente en segundos.',
    category: 'Técnica',
  },
  {
    id: '5',
    emoji: '🥦',
    title: 'Conservar Verduras Frescas',
    tip: 'Guarda las hierbas frescas como flores: en un vaso con agua en la nevera, cubiertas con una bolsa plástica. Durarán hasta 2 semanas así.',
    category: 'Conservación',
  },
  {
    id: '6',
    emoji: '🍳',
    title: 'La Sartén Caliente',
    tip: 'Siempre precalienta la sartén antes de agregar aceite, y el aceite antes de agregar los alimentos. Una sartén caliente evita que los alimentos se peguen.',
    category: 'Técnica',
  },
  {
    id: '7',
    emoji: '🍋',
    title: 'El Poder del Ácido',
    tip: 'Un chorrito de limón o vinagre al final de una preparación puede despertar todos los sabores del plato. El ácido equilibra y realza los demás ingredientes.',
    category: 'Sazonado',
  },
  {
    id: '8',
    emoji: '🥚',
    title: 'Temperatura de los Huevos',
    tip: 'Para repostería, usa siempre huevos a temperatura ambiente. Los huevos fríos pueden cortar una masa y afectar la textura final del producto.',
    category: 'Repostería',
  },
  {
    id: '9',
    emoji: '🧅',
    title: 'Evitar el Llanto al Cortar Cebolla',
    tip: 'Enfría la cebolla 30 minutos en el congelador antes de cortarla. El frío reduce la evaporación de los compuestos que irritan los ojos.',
    category: 'Técnica',
  },
  {
    id: '10',
    emoji: '🫙',
    title: 'Conservar Hierbas Secas',
    tip: 'Las hierbas secas tienen su máximo sabor durante los primeros 6 meses. Guárdalas en frascos herméticos lejos de la luz y el calor.',
    category: 'Conservación',
  },
];

export { MAX_TIPS };
export default COOKING_TIPS;