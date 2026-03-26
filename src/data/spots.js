const spots = [
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772621140/bravablue/Spot/CovaDeLaSal_bkqqnz.png',
    name: 'Cova de la Sal',
    difficulty: 'avanzado',
    description:
      'Situada en la costa de Torroella de Montgrí, entre Cala Montgó y la Punta Milá. Solo se puede acceder por mar, pero vale la pena alquilar un kayak o ir en barca, ya que cuenta con una pequeña caleta de guijarros ideal para hacer snorkel. Se trata de un lugar muy frecuente de exploración para los submarinistas noveles, ya que es un lugar fácil donde se suelen realizar bautizos de mar.'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620563/bravablue/Spot/CalaIllaRoja_vdxg6p.jpg',
    name: 'Cala Illa Roja',
    difficulty: 'intermedio',
    description:
      'Playa nudista tranquila, ubicada bajo un acantilado que la divide en dos donde únicamente se puede acceder paseando por el camino de ronda que une Pals y Begur. Este entorno de pinos y rocas rojizas, la convierte en una playa idílica con aguas removidas y rocas donde podréis disfrutar de su fondo. Destacar que a media tarde ya no da el sol.'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772621140/bravablue/Spot/IllaMateua_ft9i81.jpg',
    name: 'Illa Mateua',
    difficulty: 'intermedio',
    description:
      'Al fondo de las aguas de esta cala podéis ver el famoso barco hundido Constantin. Es un lugar ideal para practicar submarinismo y sentirse como unos auténticos exploradores. También es uno de los puntos de partida de una de las Vías Braves que tiene la Escala, caminos marítimos donde poder practicar la natación en mar abierto.'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772621140/bravablue/Spot/LesCambresDenPoc_eymmxd.jpg',
    name: "Les Cambres d'en Poc",
    difficulty: 'intermedio',
    description:
      'Pequeña playa de piedras. Acceso por el camí de Ronda, ideal para practicar snorkeling.'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620559/bravablue/Spot/CalaBramant_cumoiq.jpg',
    name: 'Cala Bramant',
    difficulty: 'principiante',
    description:
      'A dos kilómetros al norte de la población de Llançà. Es un espacio natural precioso, formado principalmente por arena y piedras, y rodeado por unas pequeñas paredes rocosas con forma circular. Dispone de un buen acceso a pie y en coche, y es ideal para practicar el submarinismo y explorar el entorno marino. Sin duda, es un lugar perfecto para disfrutar con tranquilidad de un día al aire libre.'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620564/bravablue/Spot/CalaDelVigata_e2eey2.jpg',
    name: 'Cala del Vigatà',
    difficulty: 'intermedio',
    description:
      'Pequeña cala de piedras, y la llegada es a partir de unas escaleras bastante empinadas.'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620559/bravablue/Spot/CalaBanys_rhyyvz.jpg',
    name: 'Cala Banys',
    difficulty: 'principiante',
    description:
      'Cala rocosa y escarpada que no dispone de arena, especialmente recomendada para pescar o hacer snorkel. El entorno es precioso y exótico y podrás llegar a ella fácilmente, andando desde la playa de Lloret por el camino de ronda o en coche por el castillo de Sant Joan.'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620607/bravablue/Spot/CalaSaBoadella_emdjck.jpg',
    name: 'Cala Sa Boadella',
    difficulty: 'principiante',
    description:
      'Una cala virgen de Lloret de Mar, equipada de duchar y bar. Situada en un enclave privilegiado, accesible a través de un pinar entre los Jardines de Santa Clotilde y la playa de Santa Cristina. El fondo marino es poco profundo en los primeros metros, y lleno de rocas, grutas y cuevas naturales a medida que nos adentramos en el agua. '
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620559/bravablue/Spot/CalaDeLesRoquesPlanes_mavoz9.jpg',
    name: 'Cala de Les Roques Planes',
    difficulty: 'principiante',
    description:
      'Situada entre Playa de Aro y la Playa Torre Valentina de Calonge, destaca por las redondeadas formas de sus rocas. También se conoce como la Cala de las Rocas Blancas, ya que destaca el color blanquecino de sus rocas en comparación a las de los alrededores. Su fondo azul turquesa sobre las rocas blancas es ideal para practicar snorkel.'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772621140/bravablue/Spot/IllesMedes_pqgxmt.jpg',
    name: 'Illes Medes',
    difficulty: 'avanzado',
    description:
      'Sólo se puede acceder a ellas en barca y son actualmente una de las reservas de flora y fauna marina más importantes del Mediterráneo occidental. Una muy buena opción si no tenéis transporte marino es acercarse con una de las numerosas empresas que ofrecen un recorrido guiado. Ponte las gafas y déjate llevar por este universo acuático.'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620558/bravablue/Spot/CalaAiguafreda_ggreqt.jpg',
    name: 'Cala Aiguafreda',
    difficulty: 'principiante',
    description:
      'A tan sólo diez minutos de Begur, esta pequeña cala dispone de duchas, muelle para embarcaciones, y bar. Tiene parking de pago. '
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620559/bravablue/Spot/CalaDelSenyorRamon_kqmqox.jpg',
    name: 'Cala del Senyor Ramon',
    difficulty: 'principiante',
    description:
      'Tiene un fondo marino arenoso espectacular y un agua de colores turquesas. Situada entre Tossa de Mar y St. Feliu de Guíxols. El parking es de pago. Para acceder hay que caminar justo después de haber dejado el vehículo.'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620558/bravablue/Spot/CalaDeGuillola_xs4fag.jpg',
    name: 'Cala de Guillola',
    difficulty: 'principiante',
    description:
      "Se encuentra a seis kilómetros de Cadaqués, justo al lado de la Punta d'en Codera. Para llegar, deberemos seguir la carreterea entre Cadaqués y el faro del Cap de Creus. Formada principalmente por guijarros y arena gruesa, es un buen espacio para fondear y practicar deportes náuticos."
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620565/bravablue/Spot/CalaRostella_xuw7uu.jpg',
    name: 'Cala Rostella',
    difficulty: 'principiante',
    description:
      'Pequeña cala situada a unos 10km de Roses. Una playa virgen con una abundante vida animal y vegetal.Para acceder tendremos que dejar el coche y bajar por un sendero pedregoso que tiene un desnivel de unos 90 metros'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620564/bravablue/Spot/CalaJoncols_pg6vty.jpg',
    name: 'Cala Jòncols',
    difficulty: 'principiante',
    description:
      'De superficie rocosa y fuerte desnivel, es un buen espacio para poder disfrutar de una jornada de snorkel o submarinismo. Además, cuenta con un gran número de servicios tales como zona de bar y restaurante, alquiler de hamacas y embarcaciones y zona de parking. También dispone de una plataforma acuática para los niños.'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620564/bravablue/Spot/CalaFredosa_eqfvrc.jpg',
    name: 'Cala Fredosa',
    difficulty: 'principiante',
    description:
      'Nos ofrece un paisaje natural espectacular. La combinación del color del agua con las formaciones rocosas de sus alrededores es fascinante. Cuenta con espectaculares vistas y es buena para fondear y practicar deportes náuticos. Hay parking para el coche y bares, ya que está muy cerca del faro de Cap de Creus.'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620564/bravablue/Spot/CalaJugadora_fqajok.jpg',
    name: 'Cala Jugadora',
    difficulty: 'principiante',
    description:
      'Espacio de 15 metros de longitud que permite gozar de mucha tranquilidad.  Queda protegida de la tramuntana y sus aguas suelen ser tranquilas y transparentes. Suele ser frecuentada por parejas y senderistas. Se permite el nudismo.'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772621139/bravablue/Spot/CalaTavallera_uhvh4t.jpg',
    name: 'Cala Tavallera',
    difficulty: 'avanzado',
    description:
      'Cala donde idealmente se llega por mar. También es posible acceder haciendo una caminata de unas 2 horas saliendo de Port de la Selva siguiendo en GR-11. Muy buena para contemplar la salida del sol. '
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620564/bravablue/Spot/CalaPola_phiduj.jpg',
    name: 'Cala Pola',
    difficulty: 'principiante',
    description:
      'Pequeña playa, de aguas cristalinas, a poca distancia de Tossa de Mar. Está inmersa en un encantador paisaje natural con rocas y pinos. Desde la playa salen excursiones en barco para admirar los fondos marinos cercanos de las calas y las cuevas.'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620564/bravablue/Spot/CalaEstreta_hlgq7g.jpg',
    name: 'Cala Estreta',
    difficulty: 'principiante',
    description:
      'Pequeña cala rodeada por pinos y acantilados, a ocho kilometros de Palamós. Para llegar, se puede dejar el coche en el aparcamiento de la playa de Castell y hacer el último tramo a pie. Ofrece servicio de socorrismo, aunque sólo los fines de semana de julio y agosto. '
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772620558/bravablue/Spot/CalaBona_kyuteg.jpg',
    name: 'Cala Bona',
    difficulty: 'intermedio',
    description:
      'Una cala rodeada de peces y en un entorno virgen y salvaje inundado por el aroma de pino. Situada en el tramo que va de Tossa de Mar a Sant Feliu de Guíxols. Para acceder podéis llegar caminando unos 30 minutos desde Tossa de Mar, por el Camí de Ronda.'
  },
  {
    image:
      'https://res.cloudinary.com/dr2vohk2z/image/upload/v1772621753/bravablue/Spot/CalaForadada_higeqq.jpg',
    name: 'Cala Foradada',
    difficulty: 'avanzado',
    description:
      'Una playa situada en un acantilado. La mejor manera de llegar es via mar. Hay una cueva donde practicar snorkel, y un túnel natural que se ha generado por una de sus rocas y que ha sido muy frecuentado por embarcaciones particulares desde calas y playas cercanas.'
  }
]

module.exports = spots
