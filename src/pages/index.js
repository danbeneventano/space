import { planets } from '@/lib/planets'
import Particles from 'react-tsparticles'
import { MoveDirection, OutMode, ShapeType } from 'tsparticles'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

const answers = {
  hottest: 'Venus',
  coldest: 'Neptune',
  biggest: 'Jupiter',
  mostmoons: 'Saturn',
  red: 'Mars',
  shortestyear: 'Mercury',
  rotatesside: 'Uranus',
  water: 'Earth'
}

export default function Home() {
  const { register, handleSubmit, watch, errors } = useForm()
  const [data, setData] = useState(null)
  const onSubmit = d => setData(d)

  return (
    <div className="relative">
      <Particles
        style={{ zIndex: -1 }}
        className="absolute inset-0"
        id="tsparticles"
        options={{
          background: {
            color: {
              value: 'transparent'
            }
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: '#A1A1AA'
            },
            lineLinked: {
              enable: false
            },
            move: {
              bounce: false,
              direction: MoveDirection.none,
              enable: true,
              outMode: OutMode.out,
              random: true,
              speed: 0.3,
              straight: false
            },
            opacity: {
              anim: {
                enable: true,
                minimumValue: 0,
                speed: 1,
                sync: false
              },
              random: true,
              value: 1
            },
            shape: {
              type: ShapeType.circle
            },
            size: {
              random: true,
              value: 3
            }
          },
          detectRetina: true
        }}
      />

      <div className="container mx-auto px-3 2xl:px-48 pt-12 pb-24 relative z-10">
        <div className="font-semibold text-4xl text-center pb-12">
          Explore the Solar System!
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {planets.map((planet, index) => (
            <React.Fragment key={planet.name}>
              <div className="flex">
                <img
                  src={planet.imageUrl}
                  className="m-auto rounded-xl object-cover object-center"
                  width={480}
                  height={360}
                  alt={planet.name}
                />
              </div>
              <div className="bg-gray-900 bg-opacity-75 shadow rounded-xl p-6">
                <div className="font-semibold text-2xl mb-1">
                  {index > 0 ? `${index}. ` : ''}
                  {planet.name}
                </div>
                <div className="text-gray-200">{planet.description}</div>
                <div className="space-y-1">
                  <div className="text-lg text-blue-500 font-semibold mt-6">
                    Quick Facts!
                  </div>
                  {planet.moons >= 0 && (
                    <div className="text-gray-200">Moons: {planet.moons}</div>
                  )}
                  {planet.day && (
                    <div className="text-gray-200">
                      Length of Day: {planet.day}
                    </div>
                  )}
                  {planet.year && (
                    <div className="text-gray-200">
                      Length of Year: {planet.year}
                    </div>
                  )}
                  {planet.distance && (
                    <div className="text-gray-200">
                      Distance from Sun: {planet.distance} AU
                    </div>
                  )}
                  <div className="text-gray-200">Type: {planet.type}</div>
                  <div className="text-gray-200">
                    Temperature: {planet.temp}
                  </div>
                  <div className="text-gray-200">
                    Radius: {planet.radius} Miles
                  </div>
                  {planet.sizeMultiplier !== 1 && (
                    <div className="text-gray-200">
                      Size compared to Earth: {planet.sizeMultiplier}x
                    </div>
                  )}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        <div className="text-blue-500 text-center text-lg mt-12">
          Did you know?{' '}
          <span className="text-gray-200">
            There are 5 dwarf planets in our solar system: Ceres, Pluto,
            Makemake, Haumea and Eris.
          </span>
        </div>

        <div className="font-semibold text-2xl text-center pb-12 mt-12">
          Quiz time!
        </div>

        <form
          className="space-y-6 text-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <PlanetSelect
            id="hottest"
            label="Which planet is the hottest?"
            register={register}
            data={data}
          />

          <PlanetSelect
            id="coldest"
            label="Which planet is the coldest?"
            register={register}
            data={data}
          />

          <PlanetSelect
            id="biggest"
            label="Which planet is the biggest?"
            register={register}
            data={data}
          />

          <PlanetSelect
            id="mostmoons"
            label="Which planet has the most moons?"
            register={register}
            data={data}
          />

          <PlanetSelect
            id="red"
            label="Which planet is known as the Red Planet?"
            register={register}
            data={data}
          />

          <PlanetSelect
            id="rotatesside"
            label="Which planet rotates on its side?"
            register={register}
            data={data}
          />

          <PlanetSelect
            id="shortestyear"
            label="Which planet has the shortest year?"
            register={register}
            data={data}
          />

          <PlanetSelect
            id="water"
            label="Which planet has large amounts of liquid water on its surface?"
            register={register}
            data={data}
          />

          <button
            type="submit"
            className="px-6 h-12 bg-blue-600 text-white rounded-full focus:outline-none"
          >
            Check Answers
          </button>
        </form>

        <div className="font-semibold text-2xl text-center mt-24 mb-1">
          Learn More!
        </div>

        <div className="text-gray-200 text-center mb-3">
          This website uses data from the following sources:
        </div>
        <div className="text-gray-200 text-center mb-1">
          NASA Solar System Exploration (
          <a
            className="text-blue-500 hover:underline"
            href="https://solarsystem.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://solarsystem.nasa.gov/
          </a>
          )
        </div>

        <div className="text-gray-200 text-center">
          NASA Space Place (
          <a
            className="text-blue-500 hover:underline"
            href="https://spaceplace.nasa.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://spaceplace.nasa.gov/
          </a>
          )
        </div>
      </div>
    </div>
  )
}

function PlanetSelect({ id, label, register, data }) {
  return (
    <div>
      <label
        htmlFor={id}
        className={`mr-6 ${
          data && data[id] !== 'none'
            ? data[id] === answers[id]
              ? 'text-green-500'
              : 'text-red-500'
            : ''
        }`}
      >
        {data && data[id] !== 'none'
          ? data[id] === answers[id]
            ? 'Correct! '
            : 'Incorrect! '
          : ''}
        {label}
      </label>
      <select
        ref={register}
        name={id}
        id={id}
        className="h-12 w-64 bg-gray-800 rounded-full px-6 focus:ring-blue-500"
        defaultValue="none"
      >
        <option value="none" disabled hidden>
          Select a planet
        </option>
        <option value="Mercury">Mercury</option>
        <option value="Venus">Venus</option>
        <option value="Earth">Earth</option>
        <option value="Mars">Mars</option>
        <option value="Jupiter">Jupiter</option>
        <option value="Saturn">Saturn</option>
        <option value="Uranus">Uranus</option>
        <option value="Neptune">Neptune</option>
      </select>
    </div>
  )
}
