import { MessageCircle } from "lucide-react";

export default function Website() {
  const offerings = [
  {
    title: "Private 1:1 Classes",
    description:
      "Personalised hatha yoga sessions designed around your body, goals, and energy. Available at your home or mine, with focused guidance to build strength, improve mobility, and move with intention. Private classes can be tailored to your goals and needs.",
    price: "65 CHF / hour",
  },
  {
    title: "Group Classes",
    description:
      "Strong, intentional group classes that balance challenge with awareness. Expect structured flows, breath-led movement, and a supportive, energising atmosphere.",
    price: "Enquire for details",
  },
];
  const brandWords = ["Connected", "Strong", "Intentional"];

  const classBenefits = [
    "Build strength with awareness",
    "Reconnect with your body",
    "Rediscover joy in movement",
    "Move with intention and confidence",
  ];

  return (
    <div className="min-h-screen bg-[#f3efec] text-black">
      <header className="sticky top-0 z-30 border-b border-[#d1a04a]/20 bg-[#f3efec]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-lg font-semibold tracking-[0.18em] text-[#d1a04a]">
            OPHELIA YOGA
          </a>

          <nav className="hidden items-center gap-6 text-sm tracking-[0.14em] text-black/70 md:flex">
            <a href="#about">ABOUT</a>
            <a href="#classes">CLASSES</a>
            <a href="#testimonials">TESTIMONIALS</a>
            <a href="#contact">ENQUIRE</a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-[#d1a04a] px-4 py-2 text-xs tracking-[0.18em] text-[#d1a04a] hover:bg-[#d1a04a] hover:text-white"
          >
            BOOK NOW
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-sm tracking-[0.3em] text-[#d1a04a]">OPHELIA PROCTER · RYT 200</p>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl">
            Ophelia Yoga — Hatha yoga for strength, connection and intention.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-black/75">
            Hatha yoga classes designed to help you build strength, reconnect with your body, and rediscover the joy in movement through intentional practice.
          </p>

          <div className="mt-8 flex gap-3">
            <a href="#contact" className="rounded-full bg-black px-6 py-3 text-white text-sm tracking-[0.16em]">
              ENQUIRE NOW
            </a>
            <a href="#classes" className="rounded-full border px-6 py-3 text-sm tracking-[0.16em]">
              VIEW CLASSES
            </a>
          </div>
        </section>

        <section id="about" className="border-y py-20">
          <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-serif text-4xl">About</h2>
              <p className="mt-6 text-black/75 leading-8">
                My classes are designed for people who want to feel stronger, reconnect with their bodies, and move with greater awareness. I create a supportive space for steady challenge, intentional flow, and joyful movement.
              </p>
            </div>

            <div>
              <h3 className="text-sm tracking-[0.22em] text-[#d1a04a]">CORE VALUES</h3>
              <div className="mt-4 flex gap-3 flex-wrap">
                {brandWords.map((word) => (
                  <span key={word} className="border px-4 py-2 rounded-full text-sm">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="hatha" className="py-20 bg-white/40">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="font-serif text-4xl">What is Hatha Yoga?</h2>
            <p className="mt-6 text-lg leading-8 text-black/75">
              Hatha yoga is a traditional and balanced style of yoga that focuses on steady, intentional movement combined with conscious breath. It allows you to slow down, build strength, and develop a deeper awareness of your body.
            </p>
            <p className="mt-4 text-black/70 leading-8">
              In my classes, hatha yoga becomes a space where you can explore both challenge and ease — moving with control, listening to your body, and finding a sense of connection in every posture.
            </p>
          </div>
        </section>

        <section id="classes" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-serif text-4xl">Classes</h2>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {offerings.map((item) => (
                <div key={item.title} className="border rounded-2xl p-6">
                  <h3 className="font-serif text-xl">{item.title}</h3>
                  <p className="mt-4 text-black/75">{item.description}</p>
                  {item.price && (
                    <p className="mt-4 text-[#d1a04a] font-medium">{item.price}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="border-y py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-serif text-4xl">Testimonials</h2>

            <div className="mt-10 border rounded-2xl p-8">
              <p className="text-lg italic">
                “I love my weekly yoga classes with Ophelia at university. They are calming, yet also compliment my weekly fitness routine and help me to recover faster between sessions. My favourite classes are definitely the ones outdoors!”
              </p>
              <p className="mt-4 text-sm tracking-[0.12em]">— Charlotte Harrison</p>
            </div>
          </div>
        </section>

        <section id="summer" className="border-y py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-serif text-4xl">Group Classes in Villars-sur-Ollon</h2>
            <p className="mt-6 text-lg text-black/75">
              Group classes coming to Villars-sur-Ollon this summer.
            </p>
            <p className="mt-3 text-black/70">
              Sign up below to join the mailing list and be the first to hear updates.
            </p>

            <div className="mt-8 max-w-md mx-auto">
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-full border px-5 py-3 text-sm focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="rounded-full bg-[#d1a04a] px-6 py-3 text-white text-sm tracking-[0.16em] hover:opacity-90"
                >
                  <form
  action="https://formspree.io/f/xojpolqz"
  method="POST"
  className="flex flex-col sm:flex-row gap-3 mt-4"
>
  <input
    type="email"
    name="email"
    placeholder="Enter your email"
    required
    className="px-4 py-3 rounded-full text-black w-full"
  />

  <button
    type="submit"
    className="bg-[#d1a04a] px-6 py-3 rounded-full text-white"
  >
    Join Mailing List
  </button>
</form>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="mx-auto max-w-5xl px-6 border rounded-3xl p-10 bg-black text-white">
            <h2 className="font-serif text-4xl">Enquire</h2>
            <p className="mt-4 text-white/70">
              Book a private class or ask about group sessions. Private classes are available at your home or mine.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <div>
                <p className="text-[#d1a04a] text-sm">EMAIL</p>
                <p className="mt-2">opheliamaeprocter@gmail.com</p>
              </div>
              <div>
                <p className="text-[#d1a04a] text-sm">WHATSAPP</p>
                <p className="mt-2">+41 79 672 98 90</p>
              </div>
              <div>
                <p className="text-[#d1a04a] text-sm">PRIVATE CLASS</p>
                <p className="mt-2">65 CHF / hour</p>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex gap-3">
              <a

  href="https://mail.google.com/mail/?view=cm&fs=1&to=opheliamaeprocter@gmail.com&su=Yoga%20Enquiry"
  target="_blank"
  rel="noreferrer"
>
  EMAIL OPHELIA
</a>
              <a href="https://wa.me/41796729890" target="_blank" className="border border-white/30 px-6 py-3 rounded-full text-white">
                WHATSAPP
              </a>
            </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="https://wa.me/41796729890?text=Hi%20Ophelia%2C%20I%20would%20like%20to%20enquire%20about..."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
