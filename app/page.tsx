const games = [
  {
    title: "PRESS YOUR LUCK",
    shortTitle: "PYL",
    tagline: "Big points. Big risks. Watch out for the Whammy.",
    status: "LIVE",
    href: "https://gcephas01.github.io/cephas-whammy-board/",
    theme: "press",
    accent: "NO WHAMMIES!",
  },
{
  title: "FAMILY FEUD",
  shortTitle: "FF",
  tagline: "We asked the class. The top answers are on the board.",
  status: "LIVE",
  href: "https://gcephas01.github.io/cephas-family-feud/",
  theme: "feud",
  accent: "SURVEY SAYS...",
},
{
  title: "LET'S MAKE A DEAL",
  shortTitle: "LMAD",
  tagline: "Make the deal, Don't get zonked",
  status: "LIVE",
  href: "https://gcephas01.github.io/cephas-lets-make-a-deal/",
  theme: "deal",
  accent: "WHAT'S BEHIND THE DOOR?",
},
  {
    title: "CATCH 21",
    shortTitle: "21",
    tagline: "Answer. Draw. Build your hands. Don't bust.",
    status: "LIVE",
    href: "https://gcephas01.github.io/cephas-catch-21/",
    theme: "catch",
    accent: "HIT 21.",
  },
{
  title: "BOMB SQUAD",
  shortTitle: "BS",
  tagline: "Answer fast. Cut carefully. Save everybody.",
  status: "LIVE",
  href: "https://gcephas01.github.io/cephas-bomb-squad/",
  theme: "bomb",
  accent: "CUT THE RIGHT WIRE.",
},

  {
    title: "THE FLOOR IS LAVA",
    shortTitle: "LAVA",
    tagline: "Run. Jump. Survive. Arcade mode is here!",
    status: "EARLY ACCESS",
    href: "https://gcephas01.github.io/cephas-floor-is-lava/",
    theme: "lava",
    accent: "DON’T TOUCH THE FLOOR!",
  },
  {
    title: "WAR OF KINGDOMS",
    shortTitle: "WOK",
    tagline: "Conquer the Crownlands. Forge alliances. Decide the fate of kingdoms.",
    status: "EARLY ACCESS",
    href: "https://gcephas01.github.io/cephas-war-of-kingdoms/",
    theme: "kingdoms",
    accent: "RULE THE CROWNLANDS.",
  },
];

export default function Home() {
  return (
    <main className="network">
      <div className="studioGlow studioGlowOne" />
      <div className="studioGlow studioGlowTwo" />

      <header className="networkHeader">
        <div className="networkBug">
          <span>MC</span>
          <strong>GSN</strong>
        </div>

        <div className="headerCopy">
          <p className="eyebrow">MR. CEPHAS&apos;</p>
          <h1>
            GAME SHOW
            <span>NETWORK</span>
          </h1>
          <p className="networkTagline">Review just got interesting.</p>
        </div>

        <div className="onAir">
          <span className="onAirDot" />
          ON AIR
        </div>
      </header>

      <section className="gameSection">
        <div className="sectionHeading">