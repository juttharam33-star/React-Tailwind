import React from "react";

const images = {
  // Main poster / hero
  main:
    "https://i.pinimg.com/736x/d9/08/80/d90880033ddf70319bae5cb41163720f.jpg",

  // Large Itachi
  itachi:
    "https://i.pinimg.com/1200x/38/e7/ff/38e7ffd336110b098fded3523f74ac6a.jpg",

  image3:
    "https://i.pinimg.com/736x/26/61/18/2661184e535e5548cb522058d813bb6c.jpg",

  image4:
    "https://i.pinimg.com/736x/ca/94/1f/ca941f5ac131c06a6323d2b422870e49.jpg",

  image5:
    "https://i.pinimg.com/736x/a7/8a/67/a78a6710f699500c5f582224071d8717.jpg",

  image6:
    "https://i.pinimg.com/736x/b4/df/33/b4df339bb6f5b84fb7afb6a190407c71.jpg",

  image7:
    "https://i.pinimg.com/736x/6f/9a/84/6f9a848d42bd9a82f3a7ab4b85309a8e.jpg",
};

const About = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050304] text-white">

      {/* =====================================================
          GLOBAL BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-0">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(170,0,20,0.18),transparent_35%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(120,0,10,0.15),transparent_35%)]" />

      </div>


      {/* =====================================================
          ABOUT HERO
      ====================================================== */}

      <section className="relative min-h-screen overflow-hidden">

        {/* Background */}

        <img
          src={images.main}
          alt="Itachi Uchiha"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center
            opacity-45
          "
        />

        {/* Dark overlays */}

        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#050304]" />


        {/* Hero content */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-screen
            max-w-7xl
            items-center
            px-6
            py-24
            md:px-12
          "
        >

          <div className="max-w-3xl">

            {/* Small Japanese text */}

            <p
              className="
                mb-4
                text-xs
                tracking-[0.5em]
                text-[#c9142b]
                uppercase
              "
            >
              うちはイタチ
            </p>


            {/* Main title */}

            <h1
              className="
                text-6xl
                font-black
                uppercase
                leading-[0.82]
                tracking-[-0.05em]
                text-white
                sm:text-7xl
                md:text-8xl
                lg:text-[9rem]
              "
            >
              Itachi
              <br />

              <span className="text-[#c9142b]">
                Uchiha
              </span>
            </h1>


            {/* Red divider */}

            <div className="mt-8 flex items-center gap-4">

              <span className="h-px w-20 bg-[#c9142b]" />

              <span className="text-xl text-[#c9142b]">
                ◉
              </span>

              <span className="h-px w-20 bg-[#c9142b]" />

            </div>


            {/* Intro */}

            <p
              className="
                mt-8
                max-w-2xl
                text-sm
                leading-8
                text-white/70
                md:text-base
              "
            >
              Itachi Uchiha was a shinobi of Konohagakure
              from the Uchiha clan. Known for his extraordinary
              abilities, calm personality, and complicated
              history, he remains one of the most memorable
              characters in the Naruto universe.
            </p>


            {/* Button */}

            <a
              href="#story"
              className="
                mt-8
                inline-flex
                items-center
                gap-4
                rounded-full
                border
                border-[#c9142b]
                bg-[#c9142b]
                px-7
                py-3
                text-sm
                font-semibold
                uppercase
                tracking-wider
                transition
                duration-300
                hover:bg-transparent
              "
            >
              Discover His Story

              <span className="text-lg">
                ↓
              </span>
            </a>

          </div>

        </div>


        {/* Vertical text */}

        <div
          className="
            absolute
            right-5
            top-1/2
            hidden
            -translate-y-1/2
            md:block
          "
        >
          <p
            className="
              [writing-mode:vertical-rl]
              text-xs
              tracking-[0.5em]
              text-[#c9142b]
            "
          >
            UCHIHA ITACHI
          </p>
        </div>

      </section>


      {/* =====================================================
          STORY SECTION
      ====================================================== */}

      <section
        id="story"
        className="
          relative
          overflow-hidden
          bg-[#070405]
          px-6
          py-24
          md:px-12
        "
      >

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">


          {/* Image */}

          <div className="relative">

            {/* Red glow */}

            <div
              className="
                absolute
                -inset-8
                rounded-full
                bg-red-700/10
                blur-3xl
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-[#8e1020]
                bg-black
              "
            >

              <img
                src={images.itachi}
                alt="Itachi Uchiha"
                className="
                  h-[550px]
                  w-full
                  object-cover
                  object-center
                  transition
                  duration-700
                  hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

            </div>

          </div>


          {/* Text */}

          <div>

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.4em]
                text-[#c9142b]
              "
            >
              The Story
            </p>

            <h2
              className="
                mt-4
                text-4xl
                font-black
                uppercase
                md:text-6xl
              "
            >
              A Life
              <br />
              <span className="text-[#c9142b]">
                Of Sacrifice
              </span>
            </h2>


            <div className="mt-8 h-px w-24 bg-[#c9142b]" />


            <p className="mt-8 text-sm leading-8 text-white/65 md:text-base">
              Itachi's life was defined by difficult choices.
              From a young age, he demonstrated remarkable
              intelligence and became one of the youngest
              shinobi to rise through the ranks.
            </p>

            <p className="mt-5 text-sm leading-8 text-white/65 md:text-base">
              His relationship with his younger brother Sasuke,
              his connection to the Uchiha clan, and his role
              within Konoha shaped a story built around loyalty,
              responsibility, and sacrifice.
            </p>


            {/* Quote */}

            <div
              className="
                mt-10
                border-l-2
                border-[#c9142b]
                pl-6
              "
            >

              <p
                className="
                  font-serif
                  text-xl
                  italic
                  leading-8
                  text-white/90
                  md:text-2xl
                "
              >
                "People live their lives bound by what they
                accept as correct and true."
              </p>

              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#c9142b]">
                — Itachi Uchiha
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CHARACTER SECTION
      ====================================================== */}

      <section className="relative bg-[#050304] px-6 py-24 md:px-12">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}

          <div className="mb-14">

            <p className="text-xs uppercase tracking-[0.4em] text-[#c9142b]">
              The Shinobi
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
              Behind The
              <span className="text-[#c9142b]">
                {" "}
                Mask
              </span>
            </h2>

          </div>


          {/* Images */}

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">


            {/* Image 1 */}

            <CharacterCard
              image={images.image3}
              title="The Sharingan"
              text="The legendary eyes of the Uchiha clan."
            />


            {/* Image 2 */}

            <CharacterCard
              image={images.image4}
              title="Akatsuki"
              text="A shinobi who walked among the shadows."
            />


            {/* Image 3 */}

            <CharacterCard
              image={images.image5}
              title="The Shinobi"
              text="Calm, precise, and extraordinarily powerful."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          QUOTE SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-black px-6 py-28">

        {/* Background */}

        <img
          src={images.image6}
          alt=""
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            opacity-25
          "
        />

        <div className="absolute inset-0 bg-black/70" />


        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <div className="text-5xl text-[#c9142b]">
            “
          </div>

          <blockquote
            className="
              mt-4
              font-serif
              text-3xl
              italic
              leading-relaxed
              text-white
              md:text-5xl
            "
          >
            Those who forgive themselves,
            and are able to accept their true nature,
            they are the strong ones.
          </blockquote>

          <div className="mx-auto mt-8 flex items-center justify-center gap-4">

            <span className="h-px w-16 bg-[#c9142b]" />

            <span className="text-[#c9142b]">
              ◉
            </span>

            <span className="h-px w-16 bg-[#c9142b]" />

          </div>

          <p className="mt-5 text-xs uppercase tracking-[0.4em] text-white/50">
            Itachi Uchiha
          </p>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ====================================================== */}

      <section className="bg-[#070405] px-6 py-24 md:px-12">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12">

            <p className="text-xs uppercase tracking-[0.4em] text-[#c9142b]">
              Memories
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-6xl">
              The Uchiha
              <span className="text-[#c9142b]">
                {" "}
                Archive
              </span>
            </h2>

          </div>


          {/* Masonry-like grid */}

          <div
            className="
              grid
              grid-cols-2
              gap-4
              md:grid-cols-4
            "
          >

            {/* Large */}

            <div
              className="
                group
                relative
                col-span-2
                row-span-2
                h-[500px]
                overflow-hidden
                rounded-xl
              "
            >

              <img
                src={images.image7}
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">

                <p className="text-xs uppercase tracking-[0.3em] text-[#c9142b]">
                  Uchiha
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  Itachi
                </h3>

              </div>

            </div>


            {/* Small 1 */}

            <GalleryImage image={images.image3} />


            {/* Small 2 */}

            <GalleryImage image={images.image4} />


            {/* Small 3 */}

            <GalleryImage image={images.image5} />


            {/* Small 4 */}

            <GalleryImage image={images.image6} />

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL SECTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#090405] px-6 py-28">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(150,0,20,0.2),transparent_55%)]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <p className="text-xs uppercase tracking-[0.5em] text-[#c9142b]">
            In The Darkness
          </p>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              uppercase
              leading-tight
              md:text-7xl
            "
          >
            I Chose The Path
            <br />

            <span className="text-[#c9142b]">
              Of Sacrifice
            </span>
          </h2>

          <div className="mx-auto mt-10 h-px w-32 bg-[#c9142b]" />

          <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-white/50">
            A shinobi who carried the burden of an entire
            clan upon his shoulders, choosing peace over
            recognition.
          </p>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer
        className="
          border-t
          border-red-900/40
          bg-[#050304]
          px-6
          py-8
          text-center
        "
      >

        <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
          Uchiha Itachi • Shinobi of Konoha
        </p>

        <p className="mt-3 text-xs text-[#c9142b]">
          うちは イタチ
        </p>

      </footer>

    </main>
  );
};


/* =========================================================
   CHARACTER CARD
========================================================= */

const CharacterCard = ({ image, title, text }) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-xl
        border
        border-red-900/50
        bg-[#0b0506]
      "
    >

      <div className="h-[420px] overflow-hidden">

        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
            transition
            duration-700
            group-hover:scale-105
          "
        />

      </div>

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          bg-gradient-to-t
          from-black
          via-black/80
          to-transparent
          px-6
          pb-6
          pt-20
        "
      >

        <p className="text-xs uppercase tracking-[0.3em] text-[#c9142b]">
          Uchiha
        </p>

        <h3 className="mt-2 text-xl font-bold">
          {title}
        </h3>

        <p className="mt-2 text-xs leading-5 text-white/60">
          {text}
        </p>

      </div>

    </div>
  );
};


/* =========================================================
   GALLERY IMAGE
========================================================= */

const GalleryImage = ({ image }) => {
  return (
    <div
      className="
        group
        h-[240px]
        overflow-hidden
        rounded-xl
        border
        border-red-900/30
        bg-black
      "
    >

      <img
        src={image}
        alt="Itachi Uchiha"
        className="
          h-full
          w-full
          object-cover
          transition
          duration-700
          group-hover:scale-110
        "
      />

    </div>
  );
};

export default About;