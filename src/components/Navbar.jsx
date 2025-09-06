import {gsap} from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useRef} from 'react'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar() {
  const navRef = useRef()
  const bookBtnRef = useRef()

  useGSAP(() => {
    const nav = navRef.current
    const btn = bookBtnRef.current

    ScrollTrigger.create({
      trigger: document.body,
      start: 'top -50',
      onEnter: () => {
        nav.classList.add('acrylic', 'shadow-xl')
        btn.classList.remove('hidden')
      },
      onLeaveBack: () => {
        nav.classList.remove('acrylic', 'shadow-xl')
        btn.classList.add('hidden')
      },
    })
  })

  return (
    <nav className="fixed top-0 w-full z-100">
      <div ref={navRef} className="flex justify-between items-center mx-8 mt-4 p-4 rounded-3xl">
        <div className="flex justify-between items-center">
          <img src="DOMANI-LOGO.webp" alt="DOMANI" className="size-10" />
          <span className="text-white text-3xl font-bold">OMANI</span>
        </div>
        <button ref={bookBtnRef} className="styled-btn hidden">
          Book Now
        </button>
      </div>
    </nav>
  )
}
