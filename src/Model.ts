export type StringPair = [string, string]

export type Planet = {
  img: string
  name: string
  nameTranslate: string
  desc: string
  data: StringPair[]
}

export const getPlanets = (lang: string | undefined): Planet[] => {
  if (lang === 'bs') {
    return planetsBS
  } else {
    return planets
  }
}

const planets: Planet[] = [
  {
    name: 'sun',
    nameTranslate: 'sun',
    img: '/assets/images/sun.jpg',
    desc: `The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as light, ultraviolet, and infrared radiation. It is the most important source of energy for life on Earth.`,
    data: [
      ['Distance to Earth', '149.6 million km'],
      ['Radius', '696,340 km'],
      ['Surface temperature', '5504.85 °C'],
      ['Age', '4.603 billion years'],
    ],
  },
  {
    name: 'mercury',
    nameTranslate: 'mercury',
    img: '/assets/images/mercury.jpg',
    desc: `Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.`,
    data: [
      ['Distance from Sun', '58 million km'],
      ['Radius', '2,439.7 km'],
      ['Mass', '3.285 × 10^23 kg (0.055 M⊕)'],
      ['Surface area', '74.8 million km²'],
    ],
  },
  {
    name: 'venus',
    nameTranslate: 'venus',
    img: '/assets/images/venus.jpg',
    desc: `Venus is the second planet from the Sun and is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be visible to the naked eye in broad daylight.`,
    data: [
      ['Distance from Sun', '108.2 million km'],
      ['Radius', '6,051.8 km'],
      ['Mass', '4.867 × 10^24 kg (0.815 M⊕)'],
      ['Length of day', '116d 18h 0m'],
    ],
  },
  {
    name: 'earth',
    nameTranslate: 'earth',
    img: '/assets/images/earth.jpg',
    desc: `Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large volumes of water can be found throughout the Solar System, only Earth sustains liquid surface water. About 71% of Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes, and rivers.`,
    data: [
      ['Distance from Sun', '149.6 million km'],
      ['Radius', '6,371 km'],
      ['Mass', '5.972 × 10^24 kg'],
      ['Age', '4.543 billion years'],
    ],
  },
  {
    name: 'mars',
    nameTranslate: 'mars',
    img: '/assets/images/mars.jpg',
    desc: `Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In the English language, Mars is named for the Roman god of war.`,
    data: [
      ['Distance from Sun', '227.9 million km'],
      ['Radius', '3,389.5 km'],
      ['Mass', '6.39 × 10^23 kg (0.107 M⊕)'],
      ['Surface area', '144.8 million km²'],
    ],
  },
  {
    name: 'jupiter',
    nameTranslate: 'jupiter',
    img: '/assets/images/jupiter.jpg',
    desc: `Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun.`,
    data: [
      ['Distance from Sun', '778.5 million km'],
      ['Radius', '69,911 km'],
      ['Mass', '1.898 × 10^27 kg (317.8 M⊕)'],
      ['Orbital period', '12 years'],
    ],
  },
  {
    name: 'saturn',
    nameTranslate: 'saturn',
    img: '/assets/images/saturn.jpg',
    desc: `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It has only one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.`,
    data: [
      ['Distance from Sun', '1.434 billion km'],
      ['Radius', '58,232 km'],
      ['Mass', '5.683 × 10^26 kg (95.16 M⊕)'],
      ['Age', '4.503 billion years'],
    ],
  },
  {
    name: 'uranus',
    nameTranslate: 'uranus',
    img: '/assets/images/uranus.jpg',
    desc: `Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares, grandfather of Zeus and father of Cronus. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.`,
    data: [
      ['Distance from Sun', '2.871 billion km'],
      ['Radius', '25,362 km'],
      ['Mass', '8.681 × 10^25 kg (14.54 M⊕)'],
      ['Orbital period', '84 years'],
    ],
  },
  {
    name: 'neptune',
    nameTranslate: 'neptune',
    img: '/assets/images/neptune.jpg',
    desc: `Neptune is the eighth planet from the Sun and the farthest known solar planet. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus.`,
    data: [
      ['Distance from Sun', '4.495 billion km'],
      ['Radius', '24,622 km'],
      ['Mass', '1.024 × 10^26 kg (17.15 M⊕)'],
      ['Orbital period', '165 years'],
    ],
  },
]

const planetsBS: Planet[] = [
  {
    name: 'sun',
    nameTranslate: 'Sunce',
    img: '/assets/images/sun.jpg',
    desc: `The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core, radiating the energy mainly as light, ultraviolet, and infrared radiation. It is the most important source of energy for life on Earth.`,
    data: [
      ['Distance to Earth', '149.6 million km'],
      ['Radius', '696,340 km'],
      ['Surface temperature', '5504.85 °C'],
      ['Age', '4.603 billion years'],
    ],
  },
  {
    name: 'mercury',
    nameTranslate: 'Merkur',
    img: '/assets/images/mercury.jpg',
    desc: `Merkur je najmanji planet u Sunčevom sistemu i najbliži Suncu. Njegova orbita oko Sunca traje 87,97 zemaljskih dana, što je najkraće od svih Sunčevih planeta.`,
    data: [
      ['Udaljenost od Sunca', '58 million km'],
      ['Radijus', '2,439.7 km'],
      ['Masa', '3.285 × 10^23 kg (0.055 M⊕)'],
      ['Površina', '74.8 million km²'],
    ],
  },
  {
    name: 'venus',
    nameTranslate: 'Venera',
    img: '/assets/images/venus.jpg',
    desc: `Venera je drugi planet od Sunca, a ime je dobila po rimskoj božici ljubavi i ljepote. Kao najsjajniji prirodni objekt na Zemljinom noćnom nebu nakon Mjeseca, Venera može bacati sjene i može biti vidljiva golim okom usred bijela dana.`,
    data: [
      ['Udaljenost od Sunca', '108.2 million km'],
      ['Radijus', '6,051.8 km'],
      ['Masa', '4.867 × 10^24 kg (0.815 M⊕)'],
      ['Trajanje dana', '116d 18h 0m'],
    ],
  },
  {
    name: 'earth',
    nameTranslate: 'Zemlja',
    img: '/assets/images/earth.jpg',
    desc: `Zemlja je treći planet od Sunca i jedini astronomski objekt za koji se zna da sadrži život. Dok se velike količine vode mogu naći u cijelom Sunčevom sustavu, samo Zemlja održava tekuću površinsku vodu. Otprilike 71% Zemljine površine sastoji se od oceana, što je mnogo u odnosu na Zemljin polarni led, jezera i rijeke.`,
    data: [
      ['Udaljenost od Sunca', '149.6 million km'],
      ['Radijus', '6,371 km'],
      ['Masa', '5.972 × 10^24 kg'],
      ['Starost', '4.543 billion years'],
    ],
  },
  {
    name: 'mars',
    nameTranslate: 'Mars',
    img: '/assets/images/mars.jpg',
    desc: `Mars je četvrti planet od Sunca i drugi najmanji planet u Sunčevom sistemu, a veći je samo od Merkura. U engleskom jeziku, Mars je dobio ime po rimskom bogu rata.`,
    data: [
      ['Udaljenost od Sunca', '227.9 million km'],
      ['Radijus', '3,389.5 km'],
      ['Masa', '6.39 × 10^23 kg (0.107 M⊕)'],
      ['Površina', '144.8 million km²'],
    ],
  },
  {
    name: 'jupiter',
    nameTranslate: 'Jupiter',
    img: '/assets/images/jupiter.jpg',
    desc: `Jupiter je peti planet od Sunca i najveći u Sunčevom sistemu. To je plinoviti div čija je masa dva i pol puta veća od svih ostalih planeta u Sunčevom sistemu zajedno, ali nešto manja od jedne hiljade mase Sunca.`,
    data: [
      ['Udaljenost od Sunca', '778.5 million km'],
      ['Radijus', '69,911 km'],
      ['Masa', '1.898 × 10^27 kg (317.8 M⊕)'],
      ['Orbitalni period', '12 years'],
    ],
  },
  {
    name: 'saturn',
    nameTranslate: 'Saturn',
    img: '/assets/images/saturn.jpg',
    desc: `Saturn je šesti planet od Sunca i drugi po veličini u Sunčevom sistemu, nakon Jupitera. To je plinoviti div s prosječnim radijusom koji je oko devet i pol puta veći od Zemljinog. Ima samo jednu osminu prosječne gustoće Zemlje; međutim, sa svojim većim volumenom, Saturn je preko 95 puta masivniji.`,
    data: [
      ['Udaljenost od Sunca', '1.434 billion km'],
      ['Radijus', '58,232 km'],
      ['Masa', '5.683 × 10^26 kg (95.16 M⊕)'],
      ['Starost', '4.503 billion years'],
    ],
  },
  {
    name: 'uranus',
    nameTranslate: 'Uran',
    img: '/assets/images/uranus.jpg',
    desc: `Uran je sedmi planet od Sunca. Njegovo ime je od grčkog boga neba, Urana, koji je, prema grčkoj mitologiji, bio Aresov pradjed, Zeusov djed i Kronov otac. Ima treći najveći planetarni radijus i četvrtu najveću planetarnu masu u Sunčevom sistemu.`,
    data: [
      ['Udaljenost od Sunca', '2.871 billion km'],
      ['Radijus', '25,362 km'],
      ['Masa', '8.681 × 10^25 kg (14.54 M⊕)'],
      ['Orbitalni period', '84 years'],
    ],
  },
  {
    name: 'neptune',
    nameTranslate: 'Neptun',
    img: '/assets/images/neptune.jpg',
    desc: `Neptun je osmi planet od Sunca i najudaljeniji poznati solarni planet. U Sunčevom sistemu, to je četvrti najveći planet po promjeru, treći najmasovniji planet i najgušći divovski planet. Ima 17 puta veću masu od Zemlje i nešto masivniji od svog gotovo blizanca Urana.`,
    data: [
      ['Udaljenost od Sunca', '4.495 billion km'],
      ['Radijus', '24,622 km'],
      ['Masa', '1.024 × 10^26 kg (17.15 M⊕)'],
      ['Orbitalni period', '165 years'],
    ],
  },
]

export const getColors = (planet: string | undefined): string => {
  const defaultClr = '--clr-primary-100'

  if (!planet) return defaultClr

  switch (planet) {
    case 'mars':
      return '--clr-primary-100'

    case 'mercury':
    case 'jupiter':
    case 'saturn':
      return '--clr-primary-200'

    case 'uranus':
      return '--clr-primary-300'

    case 'neptune':
    case 'venus':
      return '--clr-primary-400'

    case 'earth':
      return '--clr-primary-500'

    default:
      return defaultClr
  }
}
