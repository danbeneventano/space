export const planets = [
  {
    name: 'Sun',
    description: 'The Sun is a star and is by far the largest object in our solar system, comprising of 99.8% the total mass in the system. The Sun releases enormous amounts of energy, and is responsible for all life on Earth. The Sun is in the center of our solar system, and all the planets orbit around it.',
    imageUrl: 'https://solarsystem.nasa.gov/system/stellar_items/list_view_images/1_sun_480x320.jpg',
    sizeMultiplier: 109.2,
    radius: '432,168.6',
    type: 'Yellow dwarf star',
    temp: '10,000°F (surface), 27,000,000°F (core)'
  },
  {
    name: 'Mercury',
    description: 'Mercury is the smallest planet in the solar system, and the closest to the sun.',
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/18_mercury_new.png',
    moons: 0,
    sizeMultiplier: .38,
    radius: '1,516.0',
    type: 'Rocky planet',
    distance: 0.4,
    temp: '800°F (daytime), -290°F (nighttime)',
    day: '176 Earth days',
    year: '88 Earth days'
  },
  {
    name: 'Venus',
    description: "Venus is the hottest planet in the solar system, due to a thick, toxic atmosphere that traps heat in the air. Venus is slightly smaller than Earth, and is sometimes called Earth's sister planet.",
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/27_venus_jg.png',
    moons: 0,
    sizeMultiplier: .91,
    radius: '3,760.0',
    type: 'Rocky planet',
    distance: 0.7,
    temp: '880°F',
    day: '243 Earth days',
    year: '225 Earth days'
  },
  {
    name: 'Earth',
    description: "Earth is our home planet, and is the only known planet that is home to living organisms. Earth is also the only planet in our solar system with large amounts of liquid water on the surface.",
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/17_earth.png',
    moons: 1,
    sizeMultiplier: 1,
    radius: '3,959.0',
    type: 'Rocky planet',
    distance: 1.0,
    temp: '61°F',
    day: '24 hours',
    year: '365 days'
  },
  {
    name: 'Mars',
    description: 'Mars, also known as the "Red Planet," is dusty and cold. Mars has two moons - Phobos and Deimos.',
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/19_mars.png',
    moons: 2,
    sizeMultiplier: .53,
    radius: '2,106.0',
    type: 'Rocky planet',
    distance: 1.5,
    temp: '-20°F',
    day: '24.6 hours',
    year: '687 Earth days'
  },
  {
    name: 'Jupiter',
    description: `Jupiter is a gas giant, and the largest planet in our solar system. 
    Jupiter's mass is over twice the mass of every other planet in our solar system combined! Jupiter also has at least 79 moons!
    Jupiter is home to the Great Red Spot, a giant storm that has existed for at least 360 years.`,
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/16_jupiter_new.png',
    moons: 79,
    sizeMultiplier: 11.0,
    radius: '43,440.7',
    type: 'Gas giant',
    distance: 5.1,
    temp: '-162°F',
    day: '10 hours',
    year: '12 Earth years'
  },
  {
    name: 'Saturn',
    description: "Saturn is another gas giant that has a magnificent set of rings, made up of billions of chunks of ice and rock.",
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/28_saturn.png',
    moons: 82,
    sizeMultiplier: 9.1,
    radius: '36,183.7',
    type: 'Gas giant',
    distance: 9.5,
    temp: '-218°F',
    day: '11 hours',
    year: '29 Earth years'
  },
  {
    name: 'Uranus',
    description: `Uranus is an "ice giant," containing large amounts of flowing icy material below its atmosphere. Uranus is the only planet that rotates on its side.`,
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/29_uranus.png',
    moons: 27,
    sizeMultiplier: 4.0,
    radius: '15,759.2',
    type: 'Ice giant',
    distance: 19.8,
    temp: '-320°F',
    day: '17 hours 14 minutes',
    year: '84 Earth years'
  },
  {
    name: 'Neptune',
    description: `Neptune is the furthest planet from the sun, making it extremely cold. Like Uranus, Neptune is an ice giant because most of its mass is composed of flowing icy material below its atmosphere. 
    Neptune's beautiful blue color is caused by large amounts of methane in its atmosphere.`,
    imageUrl: 'https://solarsystem.nasa.gov/system/feature_items/images/30_neptune.png',
    moons: 14,
    sizeMultiplier: 3.9,
    radius: '15,299.4',
    type: 'Ice giant',
    distance: 30,
    temp: '-331°F',
    day: '16 hours',
    year: '165 Earth years'
  },
]
