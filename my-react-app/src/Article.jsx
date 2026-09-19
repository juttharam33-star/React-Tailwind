import React from "react";

const images = {
  hero:
    "https://i.pinimg.com/736x/d9/08/80/d90880033ddf70319bae5cb41163720f.jpg",

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

const articles = [
  {
    number: "01",
    title: "A CHILD OF PAIN",
    text: "He witnessed war, violence and darkness at a very young age.",
    image: images.image3,
    icon: "✦",
  },
  {
    number: "02",
    title: "JOINED AKATSUKI",
    text: "He wasn't after power. He joined only to keep an eye on them... for the safety of the village.",
    image: images.image4,
    icon: "☁",
  },
  {
    number: "03",
    title: "THE ULTIMATE SACRIFICE",
    text: "He made the hardest choice of his life... to eliminate his own clan for the greater good and to prevent a civil war.",
    image: images.image5,
    icon: "◉",
  },
  {
    number: "04",
    title: "ALL FOR SASUKE",
    text: "Every cruel act, every harsh word, every goodbye was for Sasuke's survival and future.",
    image: images.image6,
    icon: "♥",
  },
  {
    number: "05",
    title: "A LEGEND FOREVER",
    text: "Even after death, the truth of his love and loyalty inspires millions.",
    image: images.image7,
    icon: "◉",
  },
];

const Article = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050304] text-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[700px] overflow-hidden border-b border-red-900/40">

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

        {/* Dark overlays */}

        <div className="absolute inset-0 bg-black/65" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black
            via-black/75
            to-black/20
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#050304]
            via-transparent
            to-black/20
          "
        />


        {/* Hero content */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[700px]
            max-w-7xl
            items-center
            px-6
            py-24
            md:px-12
          "
        >

          <div className="w-full max-w-5xl">

            {/* Small heading */}

            <div className="mb-5 flex items-center gap-4">

              <span className="h-px w-16 bg-[#b51227]" />

              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.45em]
                  text-[#d51d35]
                "
              >
                The Truth
              </p>

            </div>


            {/* Main title */}

            <h1
              className="
                font-serif
                text-6xl
                font-black
                uppercase
                leading-[0.85]
                tracking-tight
                text-white
                sm:text-7xl
                md:text-8xl
                lg:text-[9rem]
              "
            >
              The Truth
            </h1>

            <p
              className="
                mt-3
                font-serif
                text-2xl
                font-bold
                uppercase
                tracking-[0.15em]
                text-white
                sm:text-3xl
                md:text-5xl
              "
            >
              About
            </p>

            <h2
              className="
                mt-1
                font-serif
                text-6xl
                font-black
                uppercase
                leading-none
                text-[#c9172f]
                sm:text-7xl
                md:text-8xl
              "
            >
              Itachi
            </h2>


            {/* Uchiha */}

            <div className="mt-4 flex items-center gap-5">

              <span className="text-3xl text-[#c9172f]">
                ◉
              </span>

              <span className="font-serif text-3xl tracking-[0.25em] text-white">
                UCHIHA
              </span>

              <span className="text-3xl text-[#c9172f]">
                ◉
              </span>

            </div>


            {/* Subtitle */}

            <div className="mt-8 inline-block border-y border-[#8d1727] py-3">

              <p
                className="
                  font-serif
                  text-lg
                  italic
                  uppercase
                  tracking-[0.15em]
                  text-white
                  md:text-2xl
                "
              >
                Not a villain, but a silent hero.
              </p>

            </div>

          </div>

        </div>


        {/* Japanese side text */}

        <div
          className="
            absolute
            left-4
            top-1/2
            z-20
            hidden
            -translate-y-1/2
            md:block
          "
        >
          <p
            className="
              [writing-mode:vertical-rl]
              text-xl
              tracking-[0.35em]
              text-[#c9172f]
            "
          >
            うちはイタチ
          </p>
        </div>

      </section>


      {/* =====================================================
          ARTICLE CONTENT
      ====================================================== */}

      <section className="relative bg-[#060304] px-5 py-14 md:px-10 md:py-20">

        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_320px]">


          {/* =================================================
              LEFT ARTICLE CARDS
          ================================================= */}

          <div className="space-y-4">

            {articles.map((article) => (
              <ArticleCard
                key={article.number}
                {...article}
              />
            ))}

          </div>


          {/* =================================================
              RIGHT QUOTE PANEL
          ================================================= */}

          <aside
            className="
              relative
              min-h-[500px]
              overflow-hidden
              rounded-2xl
              border
              border-red-900/60
              bg-[#0b0506]
            "
          >

            {/* Background */}

            <img
              src={images.image7}
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


            {/* Quote */}

            <div
              className="
                relative
                z-10
                flex
                min-h-[500px]
                flex-col
                items-center
                justify-center
                px-8
                py-12
                text-center
              "
            >

              <div className="mb-5 text-6xl text-[#c9172f]">
                “
              </div>

              <p
                className="
                  font-serif
                  text-xl
                  uppercase
                  leading-9
                  tracking-wide
                  text-white/90
                "
              >
                Itachi didn't seek glory.
                <br />

                He chose

                <span className="block text-3xl font-bold text-[#c9172f]">
                  silence.
                </span>

                He bore hate,
                <br />

                so others could live
                <br />

                in peace.
              </p>


              <div className="mt-8 flex items-center gap-4">

                <span className="h-px w-12 bg-[#c9172f]" />

                <span className="text-xl text-[#c9172f]">
                  ◉
                </span>

                <span className="h-px w-12 bg-[#c9172f]" />

              </div>

            </div>

          </aside>

        </div>

      </section>


      {/* =====================================================
          FULL QUOTE
      ====================================================== */}

      <section className="px-5 pb-16 md:px-10">

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-2xl
            border
            border-white/50
            bg-[#0b0506]
          "
        >

          {/* Image */}

          <img
            src={images.itachi}
            alt=""
            className="
              absolute
              right-0
              top-0
              h-full
              w-[40%]
              object-cover
              opacity-40
            "
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0506] via-[#0b0506]/95 to-transparent" />


          <div className="relative z-10 px-8 py-12 md:px-16">

            <div className="text-6xl leading-none text-[#c9172f]">
              “
            </div>

            <p
              className="
                mt-2
                max-w-4xl
                font-serif
                text-sm
                uppercase
                leading-8
                tracking-[0.12em]
                text-white/85
                md:text-base
              "
            >
              People live their lives bound by what they
              accept as correct and true. That's how they become
              trapped by the very definitions of reality.
            </p>

            <p className="mt-6 max-w-4xl text-xs uppercase leading-7 tracking-[0.12em] text-white/60 md:text-sm">
              The truth behind Itachi's choices was hidden until the end.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
};

const ArticleCard = ({ number, title, text, image, icon }) => {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-red-900/50 bg-[#0b0506]">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25 transition duration-500 group-hover:scale-105 group-hover:opacity-35"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0506] via-[#0b0506]/95 to-transparent" />

      <div className="relative z-10 flex min-h-44 items-center gap-5 px-6 py-7 md:px-8">
        <span className="text-3xl font-bold text-[#c9172f]">{number}</span>

        <div className="h-14 w-px bg-red-900/70" />

        <div className="flex-1">
          <div className="mb-2 flex items-center gap-3">
            <span className="text-xl text-[#c9172f]">{icon}</span>
            <h3 className="font-serif text-xl font-bold uppercase tracking-wide text-white md:text-2xl">
              {title}
            </h3>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-white/65">{text}</p>
        </div>
      </div>
    </article>
  );
};

export default Article;