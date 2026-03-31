const species = [
  {
    name: 'Castañuela',
    latinName: 'Chromis chromis',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638722/bravablue/Species/Castanuela_mgjasb.jpg',
    category: 'pez',
    description:
      'Pequeño pez gris-azul oscuro (6–10 cm) que forma cardúmenes sobre rocas.',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'rocas someras',
    activity: 'diurno',
    curiousFact: 'Suele acercarse a snorkelers curiosos sin miedo.'
  },
  {
    name: 'Dorada',
    latinName: 'Sparus aurata',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638722/bravablue/Species/dorada_j10ckx.webp',
    category: 'pez',
    description:
      'Pez de tamaño medio (30–50 cm), plateado con línea dorada entre los ojos.',
    rarity: 'común',
    season: ['primavera', 'otoño'],
    habitat: 'rocas y zonas mixtas arena-roca',
    activity: 'diurno',
    curiousFact: 'Muy apreciado en la gastronomía mediterránea por su carne.'
  },
  {
    name: 'Aguja',
    latinName: 'Belone belone',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638723/bravablue/Species/Aguja_edvuib.jpg',
    category: 'pez',
    description:
      'Pez alargado y muy fino (30–60 cm), cuerpo plateado y mandíbulas largas en forma de pico. Nada cerca de la superficie y suele moverse en pequeños grupos.',
    rarity: 'común',
    season: ['primavera', 'verano'],
    habitat: 'superficie, aguas abiertas cerca de costa',
    activity: 'diurno',
    curiousFact:
      'Sus huesos pueden ser de color verde debido a un pigmento llamado biliverdina. Cuando salta fuera del agua puede recordar a un “mini pez espada”, de ahí la confusión.'
  },
  {
    name: 'Pulpo mediterráneo',
    latinName: 'Octopus vulgaris',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638726/bravablue/Species/pulpo_a4j74w.webp',
    category: 'molusco',
    description:
      'Molusco con 8 brazos (≈30–60 cm de brazo a brazo) que cambia de color. Suelen decorar la entrada de su madriguera con piedras, conchas o restos de cangrejos. Si ves un montoncito de detritos frente a un hueco en la roca, probablemente haya un pulpo dentro.',
    rarity: 'poco común',
    season: ['primavera', 'verano'],
    habitat: 'cuevas y grietas rocosas',
    activity: 'cualquier hora',
    curiousFact:
      'Es uno de los animales más inteligentes del mar y puede resolver pequeños problemas.'
  },
  {
    name: 'Estrella de mar',
    latinName: 'Echinaster sepositus',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638723/bravablue/Species/EstrellaDeMar_dquiq0.webp',
    category: 'equinodermo',
    description:
      'Equinodermo de color rojo intenso con 5 brazos, suele medir 10–15 cm.',
    rarity: 'común',

    season: ['todo el año'],
    habitat: 'fondos rocosos y arena',
    activity: 'diurno',
    curiousFact: 'Puede regenerar brazos si los pierde.'
  },
  {
    name: 'Raya común',
    latinName: 'Dasyatis pastinaca',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638727/bravablue/Species/RayaComun_opimvh.jpg',
    category: 'pez',
    description:
      'Pez cartilaginoso aplanado que se encuentra sobre fondos arenosos.',
    rarity: 'raro',

    season: ['primavera', 'verano'],
    habitat: 'arena, praderas marinas',
    activity: 'cualquier hora',
    curiousFact:
      'Se puede confundir con “fondo arenoso sin vida” hasta que se mueve lentamente.'
  },
  {
    name: 'Pez luna',
    latinName: 'Mola mola',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638724/bravablue/Species/PezLuna_v1lrs3.jpg',
    category: 'pez',
    description:
      'Pez óseo de gran tamaño y forma redondeada, puede superar los 3 metros y pesar más de 1.000 kg. Cuerpo muy alto y comprimido lateralmente, con aletas dorsal y anal grandes.',
    rarity: 'legendario',
    season: ['primavera'],
    habitat:
      'aguas abiertas (zona pelágica), ocasionalmente cerca de superficie',
    activity: 'diurno',
    curiousFact:
      'Es el pez óseo más pesado del mundo. A veces se acerca a la superficie para que aves marinas le retiren parásitos.'
  },
  {
    name: 'Sepia',
    latinName: 'Sepia officinalis',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638731/bravablue/Species/Sepia_sp46xs.jpg',
    category: 'molusco',
    description:
      'Cefalópodo de cuerpo ovalado (15–30 cm), con 8 brazos y 2 tentáculos retráctiles. Capaz de cambiar de color y textura en segundos.',
    rarity: 'poco común',

    season: ['primavera', 'verano'],
    habitat: 'fondos arenosos y zonas mixtas arena-roca',
    activity: 'cualquier hora',
    curiousFact:
      'Tiene una de las capacidades de camuflaje más avanzadas del reino animal y utiliza tinta para escapar de depredadores.'
  },
  {
    name: 'Lisa',
    latinName: 'Chelon labrosus',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638722/bravablue/Species/Castanuela_mgjasb.jpg',
    category: 'pez',
    description: 'Alargado, gris plateado. Labio superior grueso.',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'superficie y rocas',
    activity: 'diurno',
    curiousFact:
      'Puede alimentarse filtrando materia orgánica del fondo, no solo presas vivas.'
  },
  {
    name: 'Herrera',
    latinName: 'Lithognathus mormyrus',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774893655/bravablue/Species/Herrera_lsaxvg.jpg',
    category: 'pez',
    description: 'Pez plateado elegante, hasta 30 cm, activo y desconfiado.',
    rarity: 'común',
    season: ['verano'],
    habitat: 'fondos de arena',
    activity: 'diurno',
    curiousFact:
      'Usa su hocico para escarbar en la arena buscando pequeños invertebrados.'
  },
  {
    name: 'Sargo',
    latinName: 'Diplodus sargus',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774893690/bravablue/Species/Diplodus_sargus_01_b3sxls.jpg',
    category: 'pez',
    description: 'Robusto y astuto, hasta 45 cm, mandíbulas fuertes y curioso.',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'rocas y rompientes',
    activity: 'diurno',
    curiousFact:
      'Puede actuar como “pez limpiador”, retirando parásitos de otros peces.'
  },
  {
    name: 'Raspallón',
    latinName: 'Diplodus annularis',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774893728/bravablue/Species/Diplodus_annularis_tk6euk.jpg',
    category: 'pez',
    description: 'Pequeño y brillante, hasta 20 cm, inquieto y rápido.',
    rarity: 'común',
    season: ['primavera', 'verano'],
    habitat: 'fondos arenosos y mixtos poco profundos',
    activity: 'diurno',
    curiousFact:
      'Los juveniles forman grandes bancos en aguas muy poco profundas.'
  },
  {
    name: 'Mojarra',
    latinName: 'Diplodus vulgaris',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774951093/bravablue/Species/Mojarra_eqo9m2.jpg',
    category: 'pez',
    description: 'Alargado y fino, hasta 25 cm, ágil y escurridizo.',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'rocas y arena',
    activity: 'diurno',
    curiousFact:
      'Presenta dos bandas negras muy características para identificación rápida.'
  },
  {
    name: 'Oblada',
    latinName: 'Oblada melanura',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774951151/bravablue/Species/Oblada__Oblada_melanura_czp3jn.jpg',
    category: 'pez',
    description: 'Oscura con ojo marcado, hasta 35 cm, veloz y gregaria.',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'media agua, cerca de la superficie',
    activity: 'diurno',
    curiousFact:
      'Es muy abundante y activa durante todo el año en zonas costeras.'
  },
  {
    name: 'Fredi',
    latinName: 'Thalassoma pavo',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774951514/bravablue/Species/fredi_yq06wk.jpg',
    category: 'pez',
    description: 'Pequeño rojizo, hasta 15 cm, discreto y muy territorial.',
    rarity: 'común',
    season: ['verano'],
    habitat: 'rocas con algas',
    activity: 'diurno',
    curiousFact: 'Cambia de color y patrón según edad y sexo.'
  },
  {
    name: 'Julia',
    latinName: 'Coris julis',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638722/bravablue/Species/Doncella_lnec09.jpg',
    category: 'pez',
    description: 'Pez pequeño y colorido, hasta 25 cm, cambiante y llamativa.',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'rocas y arena, praderas de algas',
    activity: 'diurno',
    curiousFact: 'Es hermafrodita: puede cambiar de hembra a macho.'
  },
  {
    name: 'Serrano',
    latinName: 'Serranus cabrilla',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774951578/bravablue/Species/SerranusCabrilla_uxnejn.jpg',
    category: 'pez',
    description: 'Listado marrón, hasta 30 cm, voraz y de carácter.',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'rocas, praderas de Posidonia',
    activity: 'diurno',
    curiousFact:
      'Es hermafrodita simultáneo: puede producir óvulos y esperma a la vez.'
  },
  {
    name: 'Mero',
    latinName: 'Epinephelus marginatus',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774951651/bravablue/Species/EpinephelusMarginatus_xlmco4.jpg',
    category: 'pez',
    description: 'Imponente gigante, hasta 150 cm, fuerte y majestuoso.',
    rarity: 'raro',
    season: ['verano'],
    habitat: 'cuevas y rocas grandes',
    activity: 'diurno',
    curiousFact: 'Nace hembra y se transforma en macho al crecer.'
  },
  {
    name: 'Rascacio',
    latinName: 'Scorpaena notata',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638723/bravablue/Species/Esc%C3%B3rpora_t7vyo5.jpg',
    category: 'pez',
    description: 'Espinoso y venenoso, hasta 30 cm, experto en camuflaje.',
    rarity: 'poco común',
    season: ['primavera', 'otoño'],
    habitat: 'pegado a rocas',
    activity: 'cualquier hora',
    curiousFact: 'Tiene espinas venenosas para defensa contra depredadores. '
  },
  {
    name: 'Cabrilla',
    latinName: 'Serranus scriba',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774951709/bravablue/Species/Serranus_scriba_d1uw1l.jpg',
    category: 'pez',
    description:
      'Pez pequeño de colores brillantes, hasta 35 cm, curiosa y resistente.',
    rarity: 'común',
    season: ['primavera', 'otoño'],
    habitat: 'fondos rocosos',
    activity: 'diurno',
    curiousFact:
      'Es territorial y suele quedarse cerca del mismo sitio durante horas.'
  },
  {
    name: 'Pejerrey',
    latinName: 'Atherina boyeri',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774952407/bravablue/Species/AtherinaBoyeri_jpinaz.jpg',
    category: 'pez',
    description: 'Delgado plateado, hasta 20 cm, rápido y nervioso.',
    rarity: 'común',

    season: ['primavera', 'verano'],
    habitat: 'aguas superficiales, lagunas costeras y puertos',
    activity: 'diurno',
    curiousFact:
      'Nada en grandes bancos sincronizados para evitar depredadores.'
  },
  {
    name: 'Lubina',
    latinName: 'Dicentrarchus labrax',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774952457/bravablue/Species/Dicentrarchus-labrax_mhg9uc.jpg',
    category: 'pez',
    description: 'Depredador plateado, hasta 100 cm, potente y sigiloso.',
    rarity: 'raro',

    season: ['otoño', 'invierno'],
    habitat: 'costas, estuarios y aguas salobres',
    activity: 'cualquier hora',
    curiousFact: 'Puede entrar en estuarios y aguas salobres con facilidad.'
  },
  {
    name: 'Salmonete de roca',
    latinName: 'Mullus surmuletus',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774952511/bravablue/Species/MullusSurmuletus_a5bsms.jpg',
    category: 'pez',
    description: 'Rojizo barbudo, hasta 40 cm, activo y distintivo.',
    rarity: 'común',

    season: ['verano', 'otoño'],
    habitat: 'fondos de arena y roca',
    activity: 'diurno',
    curiousFact:
      'Usa sus “barbillas” para detectar presas enterradas en el fondo.'
  },
  {
    name: 'Boga',
    latinName: 'Boops boops',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774952554/bravablue/Species/BoopsBoops_xvdsne.jpg',
    category: 'pez',
    description: 'Plateada incansable, hasta 40 cm, sociable y resistente.',
    rarity: 'común',

    season: ['primavera'],
    habitat: 'aguas abiertas y zonas costeras',
    activity: 'cualquier hora',
    curiousFact:
      'Tiene ojos grandes adaptados a actividad en condiciones de poca luz'
  },
  {
    name: 'Dormilón',
    latinName: 'Aidablennius sphynx',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774952599/bravablue/Species/AidablenniusSphynx_tdlnwo.jpg',
    category: 'pez',
    description: 'Pequeño discreto, hasta 15 cm, tranquilo y observador.',
    rarity: 'poco común',

    season: ['primavera', 'verano'],
    habitat: 'rocas muy soleadas a nivel de superficie',
    activity: 'diurno',
    curiousFact: 'Permanece inmóvil largos periodos, perfectamente camuflado.'
  },
  {
    name: 'Babosa astada',
    latinName: 'Parablennius pilicornis',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774953324/bravablue/Species/ParablenniusPilicornis_n3pkqc.jpg',
    category: 'pez',
    description: 'Llamativa con “cuernos”, hasta 10 cm, muy vistosa.',
    rarity: 'poco común',

    season: ['primavera', 'verano'],
    habitat: 'grietas y fondos de roca o arena',
    activity: 'diurno',
    curiousFact:
      'Sus “cuernos” (rinóforos) detectan sustancias químicas en el agua.'
  },
  {
    name: 'Babosa de bandas',
    latinName: 'Parablennius zvonimiri',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774953399/bravablue/Species/ParablenniusZvonimiri_tbqvht.jpg',
    category: 'pez',
    description: 'Rayada colorida, hasta 12 cm, delicada y llamativa.',
    rarity: 'común',

    season: ['primavera', 'verano'],
    habitat: 'grandes rocas con algas',
    activity: 'diurno',
    curiousFact: 'Sus colores vivos advierten a depredadores de su toxicidad.'
  },
  {
    name: 'Babosa morruda',
    latinName: 'Lipophrys trigloides',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774953434/bravablue/Species/LipophrysTrigloides_xyectn.jpg',
    category: 'pez',
    description: 'Robusta y rugosa, hasta 15 cm, bien camuflada.',
    rarity: 'común',

    season: ['primavera', 'verano'],
    habitat: 'agujeros en rocas justo donde rompe la ola',
    activity: 'diurno',
    curiousFact: 'Puede almacenar toxinas de las esponjas que consume.'
  },
  {
    name: 'Salema',
    latinName: 'Sarpa salpa',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772638727/bravablue/Species/Salema_jfj4x5.webp',
    category: 'pez',
    description: 'Rayas doradas, hasta 50 cm, tranquila y muy característica.',
    rarity: 'común',

    season: ['primavera', 'verano'],
    habitat: 'rocas, praderas de Posidonia',
    activity: 'diurno',
    curiousFact:
      'Antiguamente, al comerlo se decía que podía causar alucinaciones (“pez loco”).'
  },
  {
    name: 'Salvariego',
    latinName: 'Echiichthys vipera',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774953510/bravablue/Species/EchiichthysVipera_bzxmga.jpg',
    category: 'pez',
    description: 'Cuidado: tiene espinas venenosas en la espalda',
    rarity: 'raro',
    season: ['verano'],
    habitat: 'enterrado en la arena en playas poco profundas',
    activity: 'nocturno',
    curiousFact:
      'Tiene espinas dorsales venenosas capaces de causar dolor intenso.'
  },
  {
    name: 'Chupadedos',
    latinName: 'Lepadogaster lepadogaster',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774953573/bravablue/Species/LepadogasterLepadogaster_qhgglp.jpg',
    category: 'pez',
    description:
      'Pez pequeño y curioso (10–15 cm), movimientos rápidos y comportamiento nervioso',
    rarity: 'común',

    season: ['todo el año'],
    habitat: 'vive bajo las piedras, en zonas rocosas poco profundas',
    activity: 'diurno',
    curiousFact:
      'Permanece inmóvil esperando presas, confiando en su camuflaje.'
  },
  {
    name: 'Planchita',
    latinName: 'Symphodus roissali',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774953630/bravablue/Species/SymphodusRoissali_ff2l4c.jpg',
    category: 'pez',
    description: 'Pez pequeño y plano (8–12 cm), cuerpo comprimido y discreto',
    rarity: 'común',

    season: ['primavera', 'verano'],
    habitat: 'fondos rocosos con algas',
    activity: 'diurno',
    curiousFact: 'Los machos construyen nidos con algas'
  },
  {
    name: 'Peto',
    latinName: 'Symphodus tinca',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774953696/bravablue/Species/SymphodusTinca_ehmhje.jpg',
    category: 'pez',
    description:
      'Pez mediterráneo colorido, labrido, con labios gruesos. Macho territorial. Es carnivoro y de tamaño mediano',
    rarity: 'común',

    season: ['verano'],
    habitat: 'rocas y praderas de algas',
    activity: 'diurno',
    curiousFact:
      'Es uno de los peces más rápidos del Mediterráneo. Puede producir sonidos mediante movimientos internos'
  },
  {
    name: 'Podas',
    latinName: 'Bothus podas',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774953696/bravablue/Species/SymphodusTinca_ehmhje.jpg',
    category: 'pez',
    description:
      'Pez mediano plateado (15–25 cm), con bandas oscuras bien visibles',
    rarity: 'común',

    season: ['todo el año'],
    habitat: 'fondos arenosos',
    activity: 'diurno',
    curiousFact: 'Cambia de color para camuflarse perfectamente'
  },
  {
    name: 'Tordo de roca',
    latinName: 'Symphodus ocellatus',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774953785/bravablue/Species/SymphodusOcellatus_nztz8o.jpg',
    category: 'pez',
    description:
      'Pez colorido (20–35 cm), robusto, labios gruesos característicos',
    rarity: 'común',

    season: ['primavera', 'verano'],
    habitat: 'zonas rocosas con vegetación',
    activity: 'diurno',
    curiousFact: 'Presenta manchas oceladas muy visibles'
  },
  {
    name: 'Tomate de mar',
    latinName: 'Actinia Equina',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774959794/bravablue/Species/Actinia-equina_vd6i4g.jpg',
    category: 'cnidario',
    description:
      'Al tocarlo se contrae, y provoca una reacción urticante similar a la de una medusa debido a sus tentáculos con células venenosas.',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'rocas en zona intermareal',
    activity: 'cualquier hora',
    curiousFact: 'Puede sobrevivir fuera del agua durante la bajamar'
  },
  {
    name: 'Ortiga de mar',
    latinName: 'Anemonia viridis',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774959865/bravablue/Species/AnemoniaViridis_p4nepb.jpg',
    category: 'cnidario',
    description:
      'De unos 10-30cm, tiene tentáculos urticantes, aspecto gelatinoso, venenosa',
    rarity: 'común',

    season: ['todo el año'],
    habitat: 'rocas iluminadas',
    activity: 'cualquier hora',
    curiousFact: 'Sus tentáculos contienen células urticantes'
  },
  {
    name: 'Aiptasia amarilla',
    latinName: 'Aiptasia amarilla',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774959923/bravablue/Species/AiptasiaAmarilla_hfsvd8.jpg',
    category: 'cnidario',
    description: 'Pequeña anémona (2–5 cm), color amarillo intenso y urticante',
    rarity: 'poco común',
    season: ['todo el año'],
    habitat: 'grietas y superficies duras',
    activity: 'cualquier hora',
    curiousFact: 'Se reproduce fácilmente por división'
  },
  {
    name: 'Aguamala',
    latinName: 'Rhizostama pulmo',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774960007/bravablue/Species/RhizostamaPulmo_ausxsq.jpg',
    category: 'cnidario',
    description:
      'Medusa grande (20–40 cm), gelatinosa, picadura molesta y venenosa',
    rarity: 'común',
    season: ['verano'],
    habitat: 'aguas abiertas',
    activity: 'cualquier hora',
    curiousFact: 'Es una de las medusas más grandes del Mediterráneo'
  },
  {
    name: 'Velero',
    latinName: 'Velella velella',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774960224/bravablue/Species/Velelles-plancton_r0qp5c.png',
    category: 'cnidario',
    description: 'Colonia flotante azul, vela gelatinosa, deriva por el viento',
    rarity: 'común',
    season: ['primavera'],
    habitat: 'superficie marina',
    activity: 'cualquier hora',
    curiousFact: 'Flota gracias a una estructura en forma de vela'
  },
  {
    name: 'Aguacuajada',
    latinName: 'Catylorhiza tuberculata',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774960278/bravablue/Species/CatylorhizaTuberculata_v2rhno.webp',
    category: 'cnidario',
    description: 'Medusa transparente (10–25 cm), gelatinosa, poco peligrosa',
    rarity: 'común',
    season: ['verano'],
    habitat: 'aguas abiertas',
    activity: 'cualquier hora',
    curiousFact: 'Su picadura es muy leve para humanos'
  },
  {
    name: 'Acalefo Luminiscente',
    latinName: 'Pelagia noctiluca',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774960421/bravablue/Species/PelagiaNoctiluca_twuebl.jpg',
    category: 'cnidario',
    description: 'Medusa brillante (15–30 cm), luminiscente, picadura venenosa',
    rarity: 'común',
    season: ['verano'],
    habitat: 'aguas abiertas',
    activity: 'cualquier hora',
    curiousFact: 'Produce bioluminiscencia en la oscuridad'
  },
  {
    name: 'Gran bellota de mar',
    latinName: 'Perforatus perforatus',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774960500/bravablue/Species/PerforatusPerforatus_dfltpz.jpg',
    category: 'crustáceo',
    description: 'Crustáceo fijo (3–6 cm), caparazón duro adherido a rocas',
    rarity: 'común',
    season: ['verano'],
    habitat: 'rocas expuestas',
    activity: 'cualquier hora',
    curiousFact: 'Se fija permanentemente al sustrato'
  },
  {
    name: 'Pulga de mar',
    latinName: 'Talitrus saltator',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774960539/bravablue/Species/TalitrusSaltator_ep3qdi.jpg',
    category: 'crustáceo',
    description: 'Pequeño crustáceo (1–3 cm), saltador y muy activo',
    rarity: 'común',
    season: ['verano'],
    habitat: 'arena de playa',
    activity: 'nocturno',
    curiousFact: 'Se desplaza dando saltos para evitar depredadores'
  },
  {
    name: 'Bellota de mar de rompiente',
    latinName: 'Chthamalus stellatus',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774960586/bravablue/Species/ChthamalusStellatus_fmcz0p.jpg',
    category: 'crustáceo',
    description: 'Crustáceo adherido (2–4 cm), resiste fuerte oleaje',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'rocas en zona de oleaje',
    activity: 'cualquier hora',
    curiousFact: 'Tolera cambios extremos de temperatura y salinidad'
  },
  {
    name: 'Quisquilla',
    latinName: 'Palaemon elegans',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774960622/bravablue/Species/PalaemonElegans_krvqou.jpg',
    category: 'crustáceo',
    description:
      'Crustáceo alargado (10–20 cm), rápido, con patas delanteras fuertes',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'zonas rocosas y praderas',
    activity: 'nocturno',
    curiousFact: 'Presenta líneas y bandas translúcidas características'
  },
  {
    name: 'Piada',
    latinName: 'Clibanarius erythropus',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774960690/bravablue/Species/ClibanariusErythropus_vjzv11.jpg',
    category: 'crustáceo',
    description: 'Cangrejo plateado (10–18 cm), cuerpo alto y compacto.',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'fondos rocosos con algas',
    activity: 'diurno',
    curiousFact: 'Utiliza conchas vacías para proteger su abdomen'
  },
  {
    name: 'Cangrejo paella',
    latinName: 'Portumnus latipes',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774960768/bravablue/Species/PortumnusLatipes_pm4mnm.webp',
    category: 'crustáceo',
    description: 'Cangrejo pequeño (5–8 cm), caparazón claro y patas finas',
    rarity: 'poco común',
    season: ['verano'],
    habitat: 'fondos arenosos',
    activity: 'nocturno',
    curiousFact: 'Tiene patas adaptadas para nadar'
  },
  {
    name: 'Cangrejo moruno',
    latinName: 'Eriphia verrucosa',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774960841/bravablue/Species/EriphiaVerrucosa_wmovw7.jpg',
    category: 'crustáceo',
    description: 'Cangrejo oscuro (4–7 cm), muy ágil, pinzas pequeñas',
    rarity: 'común',

    season: ['todo el año'],
    habitat: 'rocas',
    activity: 'nocturno',
    curiousFact: 'Posee pinzas muy fuertes'
  },
  {
    name: 'Mulata',
    latinName: 'Pachygrapsus marmoratus',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774960919/bravablue/Species/Mulata_fy4hfl.jpg',
    category: 'crustáceo',
    description:
      'Pez costero colorido, con labios carnosos, habita fondos rocosos mediterráneos, hermafrodita.',
    rarity: 'común',

    season: ['todo el año'],
    habitat: 'rocas costeras',
    activity: 'diurno',
    curiousFact: 'Se mueve rápidamente fuera del agua'
  },
  {
    name: 'Cámbara',
    latinName: 'Maja crispata',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774961036/bravablue/Species/MajaCrispata_hzkrf1.jpg',
    category: 'crustáceo',
    description:
      'Crustáceo grande (15–25 cm), color rojizo intenso, cuerpo alargado',
    rarity: 'poco común',

    season: ['primavera'],
    habitat: 'fondos rocosos',
    activity: 'diurno',
    curiousFact: 'Se camufla cubriéndose con algas'
  },
  {
    name: 'Almeja de perro',
    latinName: 'Scrobicularia plana',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774961098/bravablue/Species/ScrobiculariaPlana_ncutxt.jpg',
    category: 'molusco',
    description: 'Bivalvo mediano (3–5 cm), concha gruesa y resistente',
    rarity: 'común',

    season: ['todo el año'],
    habitat: 'fondos fangosos',
    activity: 'cualquier hora',
    curiousFact: 'Vive enterrada dejando solo sifones visibles'
  },
  {
    name: 'Almeja fina',
    latinName: 'Venerupis decussata',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774961302/bravablue/Species/AlmejaFina_zwrt0c.jpg',
    category: 'molusco',
    description: 'Bivalvo (4–6 cm), concha lisa, muy apreciada',
    rarity: 'poco común',

    season: ['todo el año'],
    habitat: 'arena limpia',
    activity: 'cualquier hora',
    curiousFact:
      'Puede enterrarse rápidamente gracias a su potente pie muscular'
  },
  {
    name: 'Berberecho verrugoso',
    latinName: 'Acanthocardia tuberculata',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774961375/bravablue/Species/Acanthocardia_tuberculata_t9pb5q.jpg',
    category: 'molusco',
    description: 'Bivalvo pequeño (3–5 cm), concha rugosa y marcada',
    rarity: 'común',

    season: ['todo el año'],
    habitat: 'fondos arenosos',
    activity: 'cualquier hora',
    curiousFact: 'Su concha presenta protuberancias marcadas'
  },
  {
    name: 'Berberecho',
    latinName: 'Cerastoderma glaucum',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774961446/bravablue/Species/CerastodermaGlacum_nsbcok.jpg',
    category: 'molusco',
    description: 'Bivalvo pequeño (2–4 cm), concha estriada y forma redondeada',
    rarity: 'común',

    season: ['todo el año'],
    habitat: 'fondos blandos',
    activity: 'cualquier hora',
    curiousFact: 'Puede tolerar aguas con baja salinidad'
  },
  {
    name: 'Navaja recta',
    latinName: 'Ensis minor',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774961509/bravablue/Species/EnsisMinor_fbtfyq.webp',
    category: 'molusco',
    description: 'Bivalvo alargado (10–20 cm), concha estrecha y frágil',
    rarity: 'raro',
    season: ['primavera'],
    habitat: 'arena',
    activity: 'cualquier hora',
    curiousFact: 'Se entierra rápidamente en vertical'
  },
  {
    name: 'Mejillón',
    latinName: 'Mytilus galloprovincialis',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774961570/bravablue/Species/MytilusGalloprovincialis_qrsxim.jpg',
    category: 'molusco',
    description: 'Molusco bivalvo (5–10 cm), concha oscura y alargada',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'rocas',
    activity: 'cualquier hora',
    curiousFact: 'Se fija mediante filamentos llamados biso'
  },
  {
    name: 'Lapa cónica',
    latinName: 'Patella rustica',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774961619/bravablue/Species/PatellaRustica_a7ibuv.jpg',
    category: 'molusco',
    description: 'Molusco (3–6 cm), concha alta, gran adherencia',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'rocas expuestas',
    activity: 'diurno',
    curiousFact: 'Regresa al mismo punto tras alimentarse'
  },
  {
    name: 'Lapa',
    latinName: 'Patella coerulea',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774961685/bravablue/Species/Patella-caerulea_jbny32.jpg',
    category: 'molusco',
    description: 'Molusco pequeño (2–5 cm), concha baja, fuertemente adherido',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'rocas',
    activity: 'diurno',
    curiousFact: 'Su concha presenta tonos azulados'
  },
  {
    name: 'Bígaro negro',
    latinName: 'Melarhaphe neritoides',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774961823/bravablue/Species/MelarhapheNeritoides_y1kyx4.jpg',
    category: 'molusco',
    description: 'Caracol marino (2–4 cm), concha espiral oscura',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'rocas altas del litoral',
    activity: 'cualquier hora',
    curiousFact: 'Soporta largos periodos fuera del agua'
  },
  {
    name: 'Estrella de capitán ',
    latinName: 'Asterina gibbosa',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774961899/bravablue/Species/AsterinaGibbosa_dgcles.jpg',
    category: 'equinodermo',
    description: 'Estrella grande (20–40 cm), brazos gruesos y robustos',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'rocas y algas',
    activity: 'nocturno',
    curiousFact: 'Puede reproducirse por fragmentación'
  },
  {
    name: 'Ofiura lisa',
    latinName: 'Ophioderma longicauda',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774962018/bravablue/Species/OphiodermaLongicauda_ncnrvh.webp',
    category: 'equinodermo',
    description: 'Equinodermo (10–20 cm), brazos finos y flexibles',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'rocas y grietas',
    activity: 'nocturno',
    curiousFact: 'Se desplaza usando brazos muy flexibles'
  },
  {
    name: 'Erizo de mar común',
    latinName: 'Paracentrotus lividus',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774962137/bravablue/Species/ParacentrotusLividus_jshgnm.jpg',
    category: 'equinodermo',
    description: 'Equinodermo (5–8 cm), espinas cortas, color variable',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'rocas',
    activity: 'cualquier hora',
    curiousFact: 'Se alimenta principalmente de algas'
  },
  {
    name: 'Erizo negro',
    latinName: 'Arbacia lixula',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774962205/bravablue/Species/ArbaciaLixula_sukjmb.jpg',
    category: 'equinodermo',
    description: 'Equinodermo (6–10 cm), espinas largas y oscuras',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'rocas',
    activity: 'cualquier hora',
    curiousFact: 'Prefiere zonas más expuestas al oleaje'
  },
  {
    name: 'Pepino de mar pardo',
    latinName: 'Holothuria tubulosa',
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1774962270/bravablue/Species/HolothuriaTubulosa_qjyhja.jpg',
    category: 'equinodermo',
    description: 'Equinodermo (10–30 cm), cuerpo blando, alargado y rugoso',
    rarity: 'común',
    season: ['todo el año'],
    habitat: 'fondos arenosos',
    activity: 'nocturno',
    curiousFact: 'Expulsa parte de sus órganos como defensa'
  }
]

module.exports = species
