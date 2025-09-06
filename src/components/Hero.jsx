import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

export default function Hero() {
  useGSAP(() => {
    gsap.to('#slogan', {
      ease: 'power1.inOut',
      opacity: 0.85,
      delay: 0.2,
      animationDuration: 3,
      y: 0,
    })

    gsap.to('#subtext', {
      ease: 'power1.inOut',
      opacity: 0.85,
      delay: 0.4,
      animationDuration: 3,
    })
  })

  return (
    <div className="flex items-center justify-center w-dvw h-dvh">
      <div className="w-[98%] h-[99%] sm:w-[97%] sm:h-[95%] bg-[url(/hero.png)] bg-center bg-cover rounded-4xl flex flex-col">
        <div className="h-full flex justify-center items-center">
          <main className="flex flex-col justify-center items-center text-center w-3/4 p-4 rounded-4xl">
            <h1
              className="text-[#ffffffce] text-6xl sm:text-8xl font-extrabold text-shadow-xl translate-y-30 opacity-0"
              id="slogan"
            >
              We Make Your Home Smarter, Effortless, Better.
            </h1>
            <p
              id="subtext"
              className="acrylic text-white text-lg font-semibold mt-8 text-shadow-2xl opacity-0 px-4 py-2 rounded-2xl shadow-xl"
            >
              We handle all your smart home needs from lighting to security, control everything with a tap.
            </p>
            <button className="styled-btn text-xl my-6 px-6">Book Now</button>
          </main>
        </div>
      </div>
    </div>
  )
}
