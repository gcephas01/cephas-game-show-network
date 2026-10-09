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
          <div>
            <p className="sectionKicker">CHOOSE YOUR GAME</p>
            <h2>Tonight&apos;s Lineup</h2>
          </div>

          <p className="sectionNote">
            Pick a show. Know your stuff. Try not to get Zonked.
          </p>
        </div>

        <div className="gameGrid">
          {games.map((game) => {
            const isLive = game.status === "LIVE";
            const isPlayable = isLive || game.status === "EARLY ACCESS";

            const cardContent = (
              <>
                <div className="cardTop">
                  <span className={`status ${isPlayable ? "live" : ""}`}>
                    {isPlayable && <span className="statusDot" />}
                    {game.status}
                  </span>

                  <span className="showNumber">{game.shortTitle}</span>
                </div>

                <div className="gameLogo">
                  {game.theme === "press" && (
                    <div className="pressLogo">
                      <span>PRESS</span>
                      <small>YOUR</small>
                      <strong>LUCK</strong>
                    </div>
                  )}

                  {game.theme === "feud" && (
                    <div className="feudLogo">
                      <span>FAMILY</span>
                      <strong>FEUD</strong>
                    </div>
                  )}

                  {game.theme === "deal" && (
                    <div className="dealLogo">
                      <small>LET&apos;S MAKE</small>
                      <strong>A DEAL</strong>
                      <div className="doors">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                      </div>
                    </div>
                  )}

                  {game.theme === "catch" && (
  <div className="catchLogo">
    <span>CATCH</span>
    <strong>21</strong>
  </div>
)}

{game.theme === "bomb" && (
  <div className="bombLogo">
    <div className="bombTimer">00:10</div>

    <div className="bombWires">
      <span className="wire red" />
      <span className="wire yellow" />
      <span className="wire blue cut" />
      <span className="wire green" />
    </div>

    <span className="bombWord">BOMB</span>
    <strong>SQUAD</strong>
  </div>
)}
  {game.theme === "lava" && (
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:3, width:"100%", height:"100%", minHeight:130, borderRadius:12, background:"radial-gradient(ellipse at 50% 100%, #a9350a 0%, #461b20 42%, #191627 85%)", overflow:"hidden", position:"relative"}}>
                      <span aria-hidden="true" style={{fontSize:38, lineHeight:1}}>🌋</span>
                      <span style={{color:"#fff4d8", fontSize:"clamp(18px, 2.3vw, 30px)", fontWeight:1000, lineHeight:1, textAlign:"center", letterSpacing:1, textShadow:"0 3px 0 #9d260c, 0 5px 12px #000"}}>THE FLOOR</span>
                      <span style={{color:"#ffb341", fontSize:"clamp(25px, 3.4vw, 44px)", fontWeight:1000, lineHeight:1, textAlign:"center", textShadow:"0 4px 0 #a92707, 0 7px 15px #000"}}>IS LAVA!</span>
                      <span style={{fontSize:11, color:"#ffe4a0", fontWeight:800, letterSpacing:3}}>ARCADE MODE</span>
                    </div>
                  )}
</div>

                <div className="cardBottom">
                  <p className="gameAccent">{game.accent}</p>
                  <p className="gameDescription">{game.tagline}</p>

                  <div className="playButton">
                    {isPlayable ? "PLAY NOW" : "COMING SOON"}
                    <span>{isPlayable ? "▶" : "◆"}</span>
                  </div>
                </div>
              </>
            );

            if (isPlayable) {
              return (
                <a
                  key={game.title}
                  href={game.href}
                  className={`gameCard ${game.theme}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <div
                key={game.title}
                className={`gameCard ${game.theme} unavailable`}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </section>

      <footer>
        <div className="footerLine" />
        <p>
          MCGSN <span>•</span> MR. CEPHAS&apos; GAME SHOW NETWORK
        </p>
        <small>KNOWLEDGE IS THE REAL GRAND PRIZE.</small>
      </footer>
    </main>
  );
}