import { useState, useEffect } from 'react'

function Slideshow() {
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80',
      caption: 'Real-time infrastructure monitoring',
    },
    {
      image: 'https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?auto=format&fit=crop&w=1600&q=80',
      caption: 'Automated threat analysis at scale',
    },
    {
      image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=1600&q=80',
      caption: 'Protecting connections across every cloud',
    },
    {
      image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1600&q=80',
      caption: 'Locking down access, one credential at a time',
    },
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl h-72 md:h-96">
      {slides.map((slide, i) => (
        <div
          key={slide.caption}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.caption} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-white text-lg font-semibold">{slide.caption}</p>
          </div>
        </div>
      ))}

      <button
        onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white w-10 h-10 rounded-full flex items-center justify-center transition"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition ${i === current ? 'bg-white' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Slideshow