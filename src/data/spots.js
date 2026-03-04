const spots = [
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772621140/bravablue/Spot/CovaDeLaSal_bkqqnz.png',
    name: 'Cova de la Sal',
    area: [],
    difficulty: 'avanzado',
    description:
      'La Cueva de la Sal está situada en la costa de Torroella de Montgrí...'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620563/bravablue/Spot/CalaIllaRoja_vdxg6p.jpg',
    name: 'Cala Illa Roja',
    area: [],
    difficulty: 'intermedio',
    description:
      'La Isla Roja es una playa nudista tranquila, ubicada bajo un acantilado...'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772621140/bravablue/Spot/IllaMateua_ft9i81.jpg',
    name: 'Illa Mateua',
    area: [],
    difficulty: 'intermedio',
    description:
      "Al fondo de las aguas de esta cala de l'Escala podéis ver el famoso barco hundido Constantin..."
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772621140/bravablue/Spot/LesCambresDenPoc_eymmxd.jpg',
    name: "Les Cambres d'en Poc",
    area: [],
    difficulty: 'intermedio',
    description:
      'Pequeña playa de piedras. Acceso por el camí de Ronda, ideal para practicar snorkeling.'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620559/bravablue/Spot/CalaBramant_cumoiq.jpg',
    name: 'Cala Bramant',
    area: [],
    difficulty: 'principiante',
    description: 'A dos kilómetros al norte de la población de Llançà...'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620564/bravablue/Spot/CalaDelVigata_e2eey2.jpg',
    name: 'Cala del Vigatà',
    area: [],
    difficulty: 'intermedio',
    description:
      'Pequeña cala de piedras, y la llegada es a partir de unas escaleras bastante empinadas.'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620559/bravablue/Spot/CalaBanys_rhyyvz.jpg',
    name: 'Cala Banys',
    area: [],
    difficulty: 'principiante',
    description: 'Cala rocosa y escarpada que no dispone de arena...'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620607/bravablue/Spot/CalaSaBoadella_emdjck.jpg',
    name: 'Cala Sa Boadella',
    area: [],
    difficulty: 'principiante',
    description:
      'Una cala virgen de Lloret de Mar, equipada con duchas y bar...'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620559/bravablue/Spot/CalaDeLesRoquesPlanes_mavoz9.jpg',
    name: 'Cala de Les Roques Planes',
    area: [],
    difficulty: 'principiante',
    description: 'Esta cala destaca por las redondeadas formas de sus rocas...'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772621140/bravablue/Spot/IllesMedes_pqgxmt.jpg',
    name: 'Illes Medes',
    area: [],
    difficulty: 'avanzado',
    description:
      'Sólo se puede acceder en barca y es una de las reservas marinas más importantes...'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620558/bravablue/Spot/CalaAiguafreda_ggreqt.jpg',
    name: 'Cala Aiguafreda',
    area: [],
    difficulty: 'principiante',
    description:
      'A tan sólo diez minutos de Begur, esta pequeña cala dispone de duchas...'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620559/bravablue/Spot/CalaDelSenyorRamon_kqmqox.jpg',
    name: 'Cala del Senyor Ramon',
    area: [],
    difficulty: 'principiante',
    description: 'Tiene un fondo marino arenoso espectacular y agua turquesa...'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620558/bravablue/Spot/CalaDeGuillola_xs4fag.jpg',
    name: 'Cala de Guillola',
    area: [],
    difficulty: 'principiante',
    description: 'Se encuentra a seis kilómetros de Cadaqués...'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620565/bravablue/Spot/CalaRostella_xuw7uu.jpg',
    name: 'Cala Rostella',
    area: [],
    difficulty: 'principiante',
    description: 'Pequeña cala situada a unos 10km de Roses...'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620564/bravablue/Spot/CalaJoncols_pg6vty.jpg',
    name: 'Cala Jòncols',
    area: [],
    difficulty: 'principiante',
    description: 'De superficie rocosa y fuerte desnivel...'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620564/bravablue/Spot/CalaFredosa_eqfvrc.jpg',
    name: 'Cala Fredosa',
    area: [],
    difficulty: 'principiante',
    description: 'Nos ofrece un paisaje natural espectacular...'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620564/bravablue/Spot/CalaJugadora_fqajok.jpg',
    name: 'Cala Jugadora',
    area: [],
    difficulty: 'principiante',
    description:
      'Espacio de 15 metros de longitud que permite gozar de mucha tranquilidad...'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772621139/bravablue/Spot/CalaTavallera_uhvh4t.jpg',
    name: 'Cala Tavallera',
    area: [],
    difficulty: 'avanzado',
    description:
      'Idealmente se llega por mar, o caminando unas 2 horas desde Port de la Selva...'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620564/bravablue/Spot/CalaPola_phiduj.jpg',
    name: 'Cala Pola',
    area: [],
    difficulty: 'principiante',
    description: 'Pequeña playa de aguas cristalinas cerca de Tossa de Mar...'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620564/bravablue/Spot/CalaEstreta_hlgq7g.jpg',
    name: 'Cala Estreta',
    area: [],
    difficulty: 'principiante',
    description: 'Pequeña cala rodeada por pinos y acantilados...'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620558/bravablue/Spot/CalaBona_kyuteg.jpg',
    name: 'Cala Bona',
    area: [],
    difficulty: 'intermedio',
    description: 'Una cala rodeada de peces en un entorno virgen y salvaje...'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772621753/bravablue/Spot/CalaForadada_higeqq.jpg',
    name: 'Cala Foradada',
    area: [],
    difficulty: 'avanzado',
    description: 'Una playa situada en un acantilado, mejor acceso vía mar...'
  }
]

module.exports = spots
