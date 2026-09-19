import React from "react";
import { Link } from "react-router-dom";

const images = {
  hero: "https://i.pinimg.com/1200x/8f/93/12/8f93122a7fadc85f1ec4d5bf589e7b0a.jpg",

  card:
    "https://i.pinimg.com/736x/83/59/ce/8359ce0b475852c5602e8a3fd1231421.jpg",

  gallery1:
    "https://i.pinimg.com/736x/94/00/ca/9400cac4860bb0a06c9f5891a4d3bff6.jpg",

  gallery2:
    "https://i.pinimg.com/736x/d6/38/c1/d638c1600539894d68e6d46d0898ac15.jpg",

  about:
    "https://i.pinimg.com/736x/1e/54/bf/1e54bf65e1ea1f439cee542041a19bac.jpg",

  extra:
    "https://i.pinimg.com/1200x/83/29/da/8329dac4d41bdc84d72609aa8b1a5a47.jpg",
};

function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#100607] text-white">

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <header className="relative z-50 h-[80px] bg-[#d7192f]">

        <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-6 md:px-10">

          {/* LEFT NAVIGATION */}
          <nav className="flex items-center gap-7 md:gap-12">

            <Link
              to="/"
              className="text-xs md:text-sm font-medium hover:text-black transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-xs md:text-sm font-medium hover:text-black transition"
            >
              About
            </Link>

            <Link
              to="/article"
              className="text-xs md:text-sm font-medium hover:text-black transition"
            >
              Article
            </Link>

          </nav>


          {/* CENTER HOME BUTTON */}

          <Link
            to="/"
            className="
              absolute
              left-1/2
              top-0
              -translate-x-1/2
              flex
              h-[105px]
              w-[105px]
              items-center
              justify-center
              rounded-b-[55px]
              bg-[#d7192f]
            "
          >

            <div
              className="
                flex
                h-[58px]
                w-[58px]
                items-center
                justify-center
                rounded-full
                bg-white/10
              "
            >
 
          </Link>


          {/* RIGHT SIDE */}

          <div className="flex items-center gap-6">

            <span className="hidden text-[10px] uppercase tracking-widest md:block">
              Created by Haram
            </span>

            <button
              className="text-2xl hover:scale-110 transition"
              aria-label="Menu"
            >
              ☷
            </button>

          </div>

        </div>

      </header>


      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section
        id="home"
        className="
          relative
          min-h-[680px]
          overflow-hidden
          bg-[#100607]
        "
      >

        {/* Background image */}

        <img
          src={images.hero}
          alt="Itachi Uchiha"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Dark overlay */}

        <div className="absolute inset-0 bg-black/65" />

        {/* Red atmospheric glow */}

        <div
          className="
            absolute
            -right-20
            top-20
            h-[500px]
            w-[500px]
            rounded-full
            bg-red-700/20
            blur-[120px]
          "
        />


        {/* Hero content */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[680px]
            max-w-[1400px]
            items-center
            px-6
            md:px-12
          "
        >

          <div className="max-w-[550px] pt-10">

            <p className="mb-5 text-sm text-white/80">
              Karakter Naruto
            </p>

            <h1
              className="
                text-5xl
                font-black
                tracking-tight
                text-[#e51d35]
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >
              Itachi Uchiha
            </h1>

            <p
              className="
                mt-7
                max-w-[500px]
                text-sm
                leading-7
                text-white/80
                md:text-base
              "
            >
              Itachi Uchiha is a fictional character in the Naruto manga and anime series. He is the older brother of Sasuke Uchiha and a former Anbu captain of Konohagakure from the Uchiha Clan.
            </p>

            <button
              className="
                mt-8
                flex
                items-center
                gap-4
                rounded-full
                bg-[#e51d35]
                px-6
                py-2.5
                text-sm
                font-medium
                transition
                hover:bg-[#ff3048]
                hover:shadow-[0_0_25px_rgba(215,25,47,0.5)]
              "
            >
              Learn More

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-xl
                  text-black
                "
              >
                ↗
              </span>

            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          CHARACTER INFORMATION CARDS
      ====================================================== */}

      <section className="relative bg-[#100607] px-6 py-12 md:px-10">

        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-5 md:grid-cols-3">


            {/* CARD 01 */}

            <div
              className="
                min-h-[230px]
                rounded-2xl
                border
                border-[#c91d32]
                bg-black/30
                p-7
                shadow-[0_0_30px_rgba(200,20,40,0.08)]
              "
            >

              <span className="text-2xl font-bold">
                01.
              </span>

              <h3 className="mt-10 text-lg font-bold uppercase">
                Orang Tua
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Fugaku Uchiha
                <br />
                Mikoto Uchiha
              </p>

            </div>


            {/* CENTER IMAGE */}

            <div
              className="
                relative
                h-[280px]
                overflow-hidden
                rounded-xl
                bg-[#d7192f]
              "
            >

              <span
                className="
                  absolute
                  left-5
                  top-4
                  z-20
                  text-2xl
                  font-bold
                "
              >
                02.
              </span>

              <img
                src={images.card}
                alt="Itachi"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />

              {/* Image overlay */}

              <div className="absolute inset-0 bg-red-900/10" />

            </div>


            {/* CARD 03 */}

            <div
              className="
                min-h-[230px]
                rounded-2xl
                border
                border-[#c91d32]
                bg-black/30
                p-7
              "
            >

              <span className="text-2xl font-bold">
                03.
              </span>

              <h3 className="mt-10 text-lg font-bold uppercase">
                Diperankan
                <br />
                Oleh :
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Hideo Ishikawa
                <br />
                Naruto Shippuden
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT ITACHI
      ====================================================== */}

      <section
        id="anime"
        className="
          relative
          overflow-hidden
          bg-[#120708]
          px-6
          py-20
          md:px-10
        "
      >

        {/* Background image */}

        <img
          src={images.about}
          alt=""
          className="
            absolute
            right-[-100px]
            top-0
            h-full
            w-[55%]
            object-cover
            opacity-20
            md:opacity-35
          "
        />

        {/* Dark gradient */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#120708]
            via-[#120708]/95
            to-transparent
          "
        />


        <div
          className="
            relative
            z-10
            mx-auto
            max-w-6xl
          "
        >

          <h2
            className="
              text-4xl
              font-black
              text-[#e51d35]
              md:text-5xl
            "
          >
            About Itachi
          </h2>


          {/* INFORMATION PILLS */}

          <div
            className="
              mt-8
              grid
              max-w-[600px]
              grid-cols-1
              gap-3
              sm:grid-cols-2
            "
          >

            <Info text="Tinggi: 175,2 cm - 178 cm" />

            <Info text="Jenis kelamin: Laki-laki" />

            <Info text="Klan: Klan Uchiha" />

            <Info text="Lulus akademi: 7 tahun" />

            <div
              className="
                rounded-full
                bg-[#e51d35]
                px-5
                py-3
                text-center
                text-xs
                sm:col-span-2
              "
            >
              No. reg: ninja 012110
            </div>

          </div>


          {/* SMALL GALLERY */}

          <div className="mt-9 flex gap-5">

            <div
              className="
                h-28
                w-28
                overflow-hidden
                rounded-xl
                border
                border-[#e51d35]
              "
            >

              <img
                src={images.gallery1}
                alt="Itachi"
                className="h-full w-full object-cover"
              />

            </div>


            <div
              className="
                h-28
                w-28
                overflow-hidden
                rounded-xl
                border
                border-[#e51d35]
              "
            >

              <img
                src={images.gallery2}
                alt="Itachi"
                className="h-full w-full object-cover"
              />

            </div>

          </div>


          {/* DESCRIPTION */}

          <p
            className="
              mt-8
              max-w-[560px]
              text-sm
              leading-7
              text-white/75
            "
          >
            Itachi Uchiha dari Naruto dapat diinterpretasikan
            sebagai tipe kepribadian INFJ. Hal ini berasal dari
            sifatnya yang tenang dan pendiam, serta rasa empati
            dan intuisi yang kuat.
          </p>


          <a
            href="https://wikipedia.org"
            target="_blank"
            rel="noreferrer"
            className="
              mt-7
              inline-block
              text-sm
              text-white/70
              underline
              hover:text-[#e51d35]
            "
          >
            [https://wikipedia.com]
          </a>

        </div>

      </section>


      {/* =====================================================
          EXTRA IMAGE / GALLERY
      ====================================================== */}

      <section
        id="wikipedia"
        className="bg-[#100607] px-6 py-16 md:px-10"
      >

        <div className="mx-auto max-w-6xl">

          <div className="mb-8 flex items-end justify-between">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#e51d35]">
                Gallery
              </p>

              <h2 className="mt-2 text-3xl font-black md:text-4xl">
                Uchiha Archive
              </h2>
            </div>

          </div>


          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

            {/* Image 1 */}

            <div className="group relative h-[350px] overflow-hidden rounded-2xl border border-[#e51d35]/40">

              <img
                src={images.extra}
                alt="Itachi"
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <p className="absolute bottom-5 left-5 font-bold">
                Itachi Uchiha
              </p>

            </div>


            {/* Image 2 */}

            <div className="group relative h-[350px] overflow-hidden rounded-2xl border border-[#e51d35]/40">

              <img
                src={images.gallery1}
                alt="Itachi"
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <p className="absolute bottom-5 left-5 font-bold">
                Sharingan
              </p>

            </div>


            {/* Image 3 */}

            <div className="group relative h-[350px] overflow-hidden rounded-2xl border border-[#e51d35]/40">

              <img
                src={images.about}
                alt="Itachi"
                className="
                  h-full
                  w-full
                  object-cover
                  transition
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <p className="absolute bottom-5 left-5 font-bold">
                Akatsuki
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="bg-[#d7192f] px-6 py-6 text-center">

        <p className="text-xs tracking-[0.2em] text-white/90">
          - Web Design Simple by Me, Pict Itachi by Pinterest -
        </p>

      </footer>

    </main>
  );
};


/* =========================================================
   INFORMATION PILL
========================================================= */

const Info = ({ text }) => {
  return (
    <div
      className="
        rounded-full
        border
        border-[#e51d35]
        px-5
        py-3
        text-center
        text-xs
        text-white/80
        transition
        hover:bg-[#e51d35]
      "
    >
      {text}
    </div>
  );
};

export default Home;