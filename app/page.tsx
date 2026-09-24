import {
  ArrowRight,
  BatteryCharging,
  ChevronRight,
  CircleDot,
  LocateFixed,
  MapPinned,
  Navigation,
  Route,
  Search,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: MapPinned,
    title: "All chargers. One compass.",
    text: "Bring charging networks and independent stations together in one EV-first discovery experience.",
  },
  {
    icon: Route,
    title: "Route with confidence.",
    text: "Plan journeys around charging stops instead of discovering a charger only when the battery is low.",
  },
  {
    icon: BatteryCharging,
    title: "Built around real EVs.",
    text: "Vehicle-aware range, battery state and charging behaviour are part of the product vision.",
  },
  {
    icon: Zap,
    title: "Live charging intelligence.",
    text: "A future-ready foundation for availability, connector type, charging speed and station data.",
  },
];

function Charger({ className = "" }: { className?: string }) {
  return (
    <div className={`charger ${className}`} aria-hidden="true">
      <div className="charger-glow" />
      <div className="charger-body">
        <div className="charger-screen">
          <div className="screen-dot" />
          <div className="screen-line screen-line-a" />
          <div className="screen-line screen-line-b" />
        </div>
        <div className="charger-port">
          <div className="port-core" />
        </div>
        <div className="charger-logo">EV</div>
      </div>
      <div className="charger-cable">
        <span className="cable-head" />
      </div>
    </div>
  );
}

function ElectricCar() {
  return (
    <div className="car-scene" aria-label="Animated EV charging illustration">
      <div className="energy-orbit orbit-a" />
      <div className="energy-orbit orbit-b" />
      <div className="charging-burst burst-1">+</div>
      <div className="charging-burst burst-2">✦</div>
      <div className="charging-burst burst-3">+</div>

      <Charger className="hero-charger" />

      <div className="car-wrap">
        <div className="car-shadow" />
        <div className="ev-car">
          <div className="car-roof" />
          <div className="car-window window-front" />
          <div className="car-window window-back" />
          <div className="car-body-line" />
          <div className="car-light" />
          <div className="car-wheel wheel-front"><span /></div>
          <div className="car-wheel wheel-back"><span /></div>
          <div className="charging-port" />
        </div>
        <div className="charging-beam">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="charge-hud">
        <div className="hud-top">
          <span>DC FAST CHARGE</span>
          <span className="hud-live"><i /> LIVE</span>
        </div>
        <div className="hud-value">78<span>%</span></div>
        <div className="hud-bar"><i /></div>
        <div className="hud-bottom">
          <span>+ 42.6 kWh</span>
          <span>156 kW</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#02070d] text-white">
      <div className="site-noise" />

      <nav className="nav-wrap">
        <div className="nav-inner">
          <a href="#" className="brand" aria-label="EVCOMPASS home">
            <span className="brand-mark"><Zap size={18} fill="currentColor" /></span>
            <span>EV<span>COMPASS</span></span>
          </a>

          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#vision">Vision</a>
            <a href="#network">Network</a>
          </div>

          <a href="#notify" className="nav-cta">
            Get notified <ArrowRight size={15} />
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse-dot" />
            INDIA'S SUPER EV APP - YOUR GUIDE TO ELECTRIC MOBILITY
          </div>

          <h1>
            Drive With Data.
            <br />
            <span>Not Opinions. </span>
          </h1>

          <p>
            India's EV intelligence platform. 
            Every kilometer planned. Every decision informed. Every journey optimized.
          </p>

          <div className="hero-actions">
            <a className="primary-btn" href="#notify">
              <Search size={18} />
              Explore EV charging
              <ArrowRight size={17} />
            </a>
            <a className="secondary-btn" href="#features">
              See what&apos;s coming
              <ChevronRight size={17} />
            </a>
          </div>

          <div className="hero-stats">
            <div><strong>01</strong><span>EV-first<br />platform</span></div>
            <div><strong>∞</strong><span>Charging<br />network vision</span></div>
            <div><strong>24/7</strong><span>Journey<br />intelligence</span></div>
          </div>
        </div>

        <ElectricCar />
      </section>

      <section className="ticker" aria-label="EVCOMPASS highlights">
        <div className="ticker-track">
          {["EV ROUTE PLANNING", "ALL CHARGERS IN 1 PLACE", "EV CAR COMPARISION", "EV ACCESSORIES", "EV NETWORKING", "EV SAVINGS CALCULATORS",
            "EV GOVT POLICIES", "HOME CHARGER LISTING"].map((item, i) => (
            <span key={i}><CircleDot size={10} /> {item}</span>
          ))}
        </div>
      </section>

      <section id="features" className="section features-section">
        <div className="section-heading">
          <div>
            <div className="section-kicker">THE COMPASS</div>
            <h2>Everything an EV journey<br /><span>should feel like.</span></h2>
          </div>
          <p>
            EVCOMPASS is being designed around the complete journey — from
            finding the right charger to reaching your destination with less
            guesswork.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article className="feature-card" key={feature.title}>
                <div className="feature-number">0{index + 1}</div>
                <div className="feature-icon"><Icon size={22} /></div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
                <div className="card-arrow"><ArrowRight size={16} /></div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="vision" className="section vision-section">
        <div className="vision-card">
          <div className="vision-map">
            <div className="map-grid" />
            <div className="route-line route-one" />
            <div className="route-line route-two" />
            <div className="map-pin pin-a"><LocateFixed size={17} /></div>
            <div className="map-pin pin-b"><Zap size={15} fill="currentColor" /></div>
            <div className="map-pin pin-c"><BatteryCharging size={16} /></div>
            <div className="map-label label-a">JAIPUR</div>
            <div className="map-label label-b">DC 180 kW</div>
            <div className="map-label label-c">DESTINATION</div>
          </div>

          <div className="vision-copy">
            <div className="section-kicker">THE FUTURE OF THE TRIP</div>
            <h2>Your route.<br /><span>Your battery.</span><br />Your compass.</h2>
            <p>
              The long-term vision is a vehicle-aware EV platform that
              understands range, battery percentage, charging speed and the
              charging network along your route.
            </p>
            <div className="mini-list">
              <div><Navigation size={16} /> Start → destination routing</div>
              <div><BatteryCharging size={16} /> Battery-aware charging stops</div>
              <div><MapPinned size={16} /> Charger discovery on the route</div>
            </div>
          </div>
        </div>
      </section>

      <section id="network" className="network-strip">
        <div className="section-kicker">ONE PLACE TO START</div>
        <h2>India&apos;s EV charging landscape,<br /><span>connected by one compass.</span></h2>
        <p>
          Network data, charger details and live availability can come together
          here as EVCOMPASS grows.
        </p>
        <div className="network-pills">
          {["DC Fast Charging", "AC Charging", "CCS2", "Route Planning", "Live Status"].map(x =>
            <span key={x}>{x}</span>
          )}
        </div>
      </section>

      <section id="notify" className="cta-section">
        <div className="cta-glow" />
        <div className="cta-icon"><Zap size={26} fill="currentColor" /></div>
        <div className="section-kicker">COMING SOON</div>
        <h2>The electric road<br /><span>starts here.</span></h2>
        <p>EVCOMPASS.IN is being built. The charger map is getting ready.</p>
        <a className="primary-btn" href="mailto:hello@evcompass.in">
          Stay in the loop <ArrowRight size={17} />
        </a>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <div className="brand">
            <span className="brand-mark"><Zap size={17} fill="currentColor" /></span>
            <span>EV<span>COMPASS</span></span>
          </div>
          <p>India&apos;s EV charging compass.</p>
        </div>
        <div className="footer-right">
          <span>© 2026 EVCOMPASS.IN</span>
          <span>Built for electric journeys.</span>
        </div>
      </footer>
    </main>
  );
}
