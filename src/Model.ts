export type StringPair = [string, string]

export type Planet = {
  img: string
  name: string
  desc: string
  data: StringPair[]
}

export const planets: Planet[] = [
  {
    name: 'mercury',
    img: 'assets/images/mercury.jpg',
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
    img: 'assets/images/venus.jpg',
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
    img: 'assets/images/earth.jpg',
    desc: `Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large volumes of water can be found throughout the Solar System, only Earth sustains liquid surface water. About 71% of Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes, and rivers.`,
    data: [
      ['Age', '4.543 billion years'],
      ['Distance from Sun', '149.6 million km'],
      ['Radius', '6,371 km'],
      ['Mass', '5.972 × 10^24 kg'],
    ],
  },
  {
    name: 'mars',
    img: 'assets/images/mars.jpg',
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
    img: 'assets/images/jupiter.jpg',
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
    img: 'assets/images/saturn.jpg',
    desc: `Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It has only one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.`,
    data: [
      ['Age', '4.503 billion years'],
      ['Distance from Sun', '1.434 billion km'],
      ['Radius', '58,232 km'],
      ['Mass', '5.683 × 10^26 kg (95.16 M⊕)'],
    ],
  },
  {
    name: 'uranus',
    img: 'assets/images/uranus.jpg',
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
    img: 'assets/images/neptune.jpg',
    desc: `Neptune is the eighth planet from the Sun and the farthest known solar planet. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus.`,
    data: [
      ['Distance from Sun', '4.495 billion km'],
      ['Radius', '24,622 km'],
      ['Mass', '1.024 × 10^26 kg (17.15 M⊕)'],
      ['Orbital period', '165 years'],
    ],
  },
]

export const getColors = (planet: string | undefined): string => {
  const defaultClr = '--clr-primary-400'

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

    case 'neptun':
    case 'venus':
      return '--clr-primary-400'

    case 'earth':
      return '--clr-primary-500'

    default:
      return defaultClr
  }
}
