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
  tagline: "...",
  status: "LIVE",
  href: "https://gcephas01.github.io/cephas-lets-make-a-deal/",
  theme: "deal",
  accent: "WHAT'S BEHIND THE DOOR?",
},
  {
    title: "CATCH 21",
    shortTitle: "21",
    tagline: "Answer. Draw. Build your hands. Don't bust.",
    status: "COMING SOON",
    href: "",
    theme: "catch",
    accent: "HIT 21.",
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

            const cardContent = (
              <>
                <div className="cardTop">
                  <span className={`status ${isLive ? "live" : ""}`}>
                    {isLive && <span className="statusDot" />}
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
                </div>

                <div className="cardBottom">
                  <p className="gameAccent">{game.accent}</p>
                  <p className="gameDescription">{game.tagline}</p>

                  <div className="playButton">
                    {isLive ? "PLAY NOW" : "COMING SOON"}
                    <span>{isLive ? "▶" : "◆"}</span>
                  </div>
                </div>
              </>
            );

            if (isLive) {
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