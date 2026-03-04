const species = [
  {
    name: 'Doncella',
    latinName: 'Coris julis',
    description:
      'Pez pequeño y colorido (8–15 cm), muy común en aguas poco profundas y entre rocas.',
    rarity: 'común',
    area: [],
    season: ['primavera', 'verano'],
    habitat: 'rocas y praderas de algas',
    activity: 'diurno',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638722/bravablue/Species/Doncella_lnec09.jpg',
    curiousFact:
      'Los machos adultos tienen colores muy vivos y cambian de patrón según la edad.'
  },
  {
    name: 'Tordo/Vaqueta',
    latinName: 'Serranus scriba',
    description:
      'Pez pequeño de colores brillantes, pocos centímetros de largo, activo cerca del fondo.',
    rarity: 'común',
    area: [],
    season: ['primavera', 'otoño'],
    habitat: 'fondos rocosos',
    activity: 'diurno',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638730/bravablue/Species/Tordo_r8bi3c.jpg',
    curiousFact:
      'Es territorial y suele quedarse cerca del mismo sitio durante horas.'
  },
  {
    name: 'Castañuela',
    latinName: 'Chromis chromis',
    description:
      'Pequeño pez gris-azul oscuro (6–10 cm) que forma cardúmenes sobre rocas.',
    rarity: 'común',
    area: [],
    season: 'todo el año',
    habitat: 'rocas someras',
    activity: 'diurno',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638722/bravablue/Species/Castanuela_mgjasb.jpg',
    curiousFact: 'Suele acercarse a snorkelers curiosos sin miedo.'
  },
  {
    name: 'Escórpora',
    latinName: 'Scorpaena notata',
    description:
      'Pequeño pez escorpión (≈20 cm), camuflado entre rocas; espinas venenosas.',
    rarity: 'poco común',
    area: [],
    season: ['primavera', 'otoño'],
    habitat: 'rocas, grietas',
    activity: 'diurno',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638723/bravablue/Species/Esc%C3%B3rpora_t7vyo5.jpg',
    curiousFact:
      'Su veneno puede causar dolor intenso si se pisa o manipula sin cuidado.'
  },
  {
    name: 'Salema',
    latinName: 'Sarpa salpa',
    description:
      'Pez de tamaño medio (≈30–40 cm) con bandas doradas, se ve en bancos.',
    rarity: 'común',
    area: [],
    season: ['primavera', 'verano'],
    habitat: 'rocas, praderas de Posidonia',
    activity: 'diurno',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638727/bravablue/Species/Salema_jfj4x5.webp',
    curiousFact:
      'Antiguamente, al comerlo se decía que podía causar alucinaciones (“pez loco”).'
  },
  {
    name: 'Dorada',
    latinName: 'Sparus aurata',
    description:
      'Pez de tamaño medio (30–50 cm), plateado con línea dorada entre los ojos.',
    rarity: 'común',
    area: [],
    season: ['primavera', 'otoño'],
    habitat: 'rocas, zonas mixtas arena-roca',
    activity: 'diurno',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638722/bravablue/Species/dorada_j10ckx.webp',
    curiousFact: 'Muy apreciado en la gastronomía mediterránea por su carne.'
  },
  {
    name: 'Aguja',
    latinName: 'Belone belone',
    description:
      'Pez alargado y muy fino (30–60 cm), cuerpo plateado y mandíbulas largas en forma de pico. Nada cerca de la superficie y suele moverse en pequeños grupos.',
    rarity: 'común',
    area: [],
    season: ['primavera', 'verano'],
    habitat: 'superficie, aguas abiertas cerca de costa',
    activity: 'diurno',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638723/bravablue/Species/Aguja_edvuib.jpg',
    curiousFact:
      'Sus huesos pueden ser de color verde debido a un pigmento llamado biliverdina.'
  },
  {
    name: 'Pulpo mediterráneo',
    latinName: 'Octopus vulgaris',
    description:
      'Molusco con 8 brazos (≈30–60 cm de brazo a brazo) que cambia de color.',
    rarity: 'poco común',
    area: [],
    season: ['primavera', 'verano'],
    habitat: 'cuevas, grietas rocosas',
    activity: 'cualquier hora',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638726/bravablue/Species/pulpo_a4j74w.webp',
    curiousFact: 'Es uno de los animales más inteligentes del mar.'
  },
  {
    name: 'Estrella de mar',
    latinName: 'Echinaster sepositus',
    description:
      'Equinodermo de color rojo intenso con 5 brazos, suele medir 10–15 cm.',
    rarity: 'común',
    area: [],
    season: ['todo el año'],
    habitat: 'fondos rocosos, arena',
    activity: 'diurno',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638723/bravablue/Species/EstrellaDeMar_dquiq0.webp',
    curiousFact: 'Puede regenerar brazos si los pierde.'
  },
  {
    name: 'Raya común mediterránea',
    latinName: 'Raja spp.',
    description:
      'Pez cartilaginoso aplanado que se encuentra sobre fondos arenosos.',
    rarity: 'raro',
    area: [],
    season: ['primavera', 'verano'],
    habitat: 'arena, praderas marinas',
    activity: 'cualquier hora',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638727/bravablue/Species/RayaComun_opimvh.jpg',
    curiousFact:
      'Se puede confundir con fondo arenoso sin vida hasta que se mueve lentamente.'
  },
  {
    name: 'Pez luna',
    latinName: 'Mola mola',
    description:
      'Pez óseo de gran tamaño y forma redondeada, puede superar los 3 metros.',
    rarity: 'legendario',
    area: [],
    season: 'primavera',
    habitat: 'aguas abiertas, superficie',
    activity: 'diurno',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638724/bravablue/Species/PezLuna_v1lrs3.jpg',
    curiousFact: 'Es el pez óseo más pesado del mundo.'
  },
  {
    name: 'Sepia común',
    latinName: 'Sepia officinalis',
    description:
      'Cefalópodo de cuerpo ovalado (15–30 cm), con 8 brazos y 2 tentáculos retráctiles.',
    rarity: 'poco común',
    area: [],
    season: ['primavera', 'verano'],
    habitat: 'fondos arenosos, zonas mixtas arena-roca',
    activity: 'cualquier hora',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638731/bravablue/Species/Sepia_sp46xs.jpg',
    curiousFact:
      'Tiene una de las capacidades de camuflaje más avanzadas del reino animal.'
  }
]

module.exports = species
