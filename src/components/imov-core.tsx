import Link from "next/link";
import { CoreMotion } from "./core-motion";
import { OrbitalViewport } from "./orbital-viewport";

const orbits = [
  { kind: "products", radius: 245, angle: 28, flatten: .54 },
  { kind: "developers", radius: 195, angle: -7, flatten: .19 },
  { kind: "ai", radius: 267, angle: -9, flatten: .85 },
] as const;

function Orbit({ orbit, front }: { orbit: typeof orbits[number]; front: boolean }) {
  const { kind, radius, angle, flatten } = orbit;
  return <g className={`orbit-plane orbit-${kind} orbit-${front ? "foreground" : "background"}`} transform={`translate(400 ${kind === "developers" ? 416 : kind === "ai" ? 337 : 350}) rotate(${angle})`}>
    <g className="orbit-expansion">
      <g className="orbit-response">
      <g transform={`scale(1 ${flatten})`}>
        <g clipPath={kind === "ai" ? undefined : `url(#orbit-${front ? "front" : "back"})`}>
          <circle cy="4" r={radius} stroke="#050b16" strokeWidth={kind === "products" ? 11 : 5} />
          <circle r={radius} stroke="url(#orbit-band)" strokeWidth={kind === "products" ? 8 : 3} strokeDasharray={`${radius * 5.85} ${radius}`} />
          <circle r={radius + (kind === "products" ? 4 : 1.5)} stroke="url(#orbit-metal)" strokeWidth=".7" />
          <circle r={radius - (kind === "products" ? 4 : 1.5)} stroke="var(--orbit-color)" strokeOpacity=".25" strokeWidth=".7" />
          <circle r={radius - 3} stroke="#050c1c" strokeOpacity=".6" strokeWidth="1" />
          <g className="orbit-rotor">
            <path className="orbit-highlight" d={`M ${-radius} 0 A ${radius} ${radius} 0 0 1 0 ${-radius}`} stroke="var(--orbit-color)" strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            <g className="orbit-node" transform={`translate(${radius} 0)`}>
              <rect x="-10" y="-5" width="20" height="10" rx="5" fill="#253b56" />
              <path d="M-6 0H6" stroke="var(--orbit-color)" strokeWidth="3" />
            </g>
          </g>
        </g>
      </g>
      </g>
    </g>
  </g>;
}

export function ImovCore() {
  return <CoreMotion>
    <figure>
      <div className="core-scene">
        <svg className="core-environment" viewBox="0 0 800 700" fill="none" aria-hidden="true">
          <path d="M105 342C35 163 267 64 468 97" stroke="#8196c4" strokeOpacity=".1" strokeWidth="1" />
          <ellipse cx="425" cy="556" rx="221" ry="28" stroke="#8be4e8" strokeOpacity=".08" />
        </svg>
        <OrbitalViewport>
        <svg className="core-object" viewBox="0 0 800 700" fill="none" role="img" aria-labelledby="core-title" aria-describedby="core-description">
          <title id="core-title">IMOV Orbital Core — a connected ecosystem</title>
          <desc id="core-description">A central IMOV nucleus connects three orbital bands and three guide points: Digital Products, Developer Services, and Future AI. Concept artwork for an ecosystem in development.</desc>
          <defs>
            <clipPath id="orbit-back"><rect x="-350" y="-350" width="700" height="350" /></clipPath>
            <clipPath id="orbit-front"><rect x="-350" width="700" height="350" /></clipPath>
            <linearGradient id="orbit-band" x1="-270" y1="-270" x2="270" y2="270" gradientUnits="userSpaceOnUse"><stop stopColor="#a9b6d2" /><stop offset=".15" stopColor="#455474" /><stop offset=".36" stopColor="#18243c" /><stop offset=".51" stopColor="#7b8eaf" /><stop offset=".62" stopColor="#303e59" /><stop offset=".86" stopColor="#101b30" /><stop offset="1" stopColor="#6478a4" /></linearGradient>
            <linearGradient id="orbit-metal" x1="-292" y1="-292" x2="292" y2="292" gradientUnits="userSpaceOnUse"><stop stopColor="#e3edff" /><stop offset=".32" stopColor="#6b7da4" stopOpacity=".2" /><stop offset=".68" stopColor="#b5c1ff" /><stop offset="1" stopColor="#475b80" stopOpacity=".25" /></linearGradient>
            <radialGradient id="orbit-satellite" cx=".3" cy=".25"><stop stopColor="#efffff" /><stop offset=".3" stopColor="#8be4e8" /><stop offset="1" stopColor="#384d99" /></radialGradient>
            <radialGradient id="orbital-shell" cx=".25" cy=".15" r=".9"><stop stopColor="#778eae" /><stop offset=".25" stopColor="#32435f" /><stop offset=".65" stopColor="#101b30" /><stop offset="1" stopColor="#050b17" /></radialGradient>
            <radialGradient id="orbital-lens" cx=".3" cy=".2" r=".9"><stop stopColor="#5267b4" /><stop offset=".45" stopColor="#1b2d57" /><stop offset="1" stopColor="#0b1327" /></radialGradient>
            <radialGradient id="orbital-halo"><stop stopColor="#8be4e8" stopOpacity=".14" /><stop offset=".4" stopColor="#6478ff" stopOpacity=".12" /><stop offset="1" stopColor="#6478ff" stopOpacity="0" /></radialGradient>
            <linearGradient id="orbital-edge" x1="330" y1="280" x2="470" y2="425" gradientUnits="userSpaceOnUse"><stop stopColor="#ccdcff" /><stop offset=".36" stopColor="#5e78b2" /><stop offset=".68" stopColor="#8be4e8" /><stop offset="1" stopColor="#6478ff" stopOpacity=".25" /></linearGradient>
            <linearGradient id="orbital-trail" x1="400" y1="430" x2="400" y2="740" gradientUnits="userSpaceOnUse"><stop stopColor="#8be4e8" stopOpacity="0" /><stop offset=".4" stopColor="#8be4e8" stopOpacity=".6" /><stop offset="1" stopColor="#6478ff" stopOpacity="0" /></linearGradient>
          </defs>
          <g className="orbit-arrival">
            <path className="orbital-trail" d="M400 430v310" stroke="url(#orbital-trail)" strokeWidth="1" />
            <circle className="orbital-aura" cx="400" cy="350" r="180" fill="url(#orbital-halo)" />
            {orbits.map(orbit => <Orbit key={orbit.kind} orbit={orbit} front={false} />)}
            <g className="core-nucleus">
              <g transform="translate(400 350) rotate(10)">
                <path d="M0-151 72-82 104 0 61 84 0 151-72 82-104 0-64-84Z" fill="#111f39" stroke="#476b8d" />
                <path d="M0-151 72-82 10-12Z" fill="#7196bd" />
                <path d="M72-82 104 0 10-12Z" fill="#253d64" />
                <path d="M104 0 61 84 10-12Z" fill="#344e8a" />
                <path d="M61 84 0 151 10-12Z" fill="#182b51" />
                <path d="M0 151-72 82 10-12Z" fill="#283f75" />
                <path d="M-72 82-104 0 10-12Z" fill="#5879bd" />
                <path d="M-104 0-64-84 10-12Z" fill="#334f7b" />
                <path d="M-64-84 0-151 10-12Z" fill="#91bdcd" fillOpacity=".65" />
                <path d="M0-151 10-12 0 151M-104 0 10-12 104 0" stroke="#8be4e8" strokeOpacity=".25" />
                <text y="76" textAnchor="middle" className="orbital-wordmark" style={{ fontSize: 17 }} fill="#eef5ff">imov<tspan fill="#8be4e8">.</tspan></text>
              </g>
            </g>
            {orbits.filter(orbit => orbit.kind !== "ai").map(orbit => <Orbit key={orbit.kind} orbit={orbit} front />)}
          </g>
        </svg>
        </OrbitalViewport>
        <div className="orbital-labels" aria-label="Orbital ecosystem directions">
          <Link className="orbital-label orbital-label-products" data-domain="products" href="/explore#digital-products"><span>Digital Products <span aria-hidden="true">↗︎</span></span><span className="orbital-description">Templates &amp; source code · Planned</span></Link>
          <Link className="orbital-label orbital-label-developers" data-domain="developers" href="/explore#development-services"><span>Developer Services <span aria-hidden="true">↗︎</span></span><span className="orbital-description">Development support · Planned</span></Link>
          <Link className="orbital-label orbital-label-ai" data-domain="ai" href="/explore#ai-building"><span>Future AI <span aria-hidden="true">↗︎</span></span><span className="orbital-description">Assisted creation · Future vision</span></Link>
        </div>
      </div>
      <figcaption><span className="core-name">IMOV Orbital Core</span><span>Concept artwork · A connected ecosystem</span></figcaption>
    </figure>
  </CoreMotion>;
}
