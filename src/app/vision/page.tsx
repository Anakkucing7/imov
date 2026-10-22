import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = { title: "Our vision", description: "IMOV's proposed path from discovery to creator services and, eventually, AI-assisted building. Aspirations subject to validation." };

export default function Vision() {
  return <div className="marketing-page">
    <SiteHeader current="vision" />
    <main id="main" className="frame vision-main">
      <div className="vision-heading"><h1>From an idea<br />to a real project.</h1><p>We&apos;re building toward a more connected way to discover software, work with developers, and eventually create with AI assistance.</p></div>
      <div className="present-state"><span className="status">Where we are today</span><p>IMOV is in early development. This site introduces the direction and lets you explore planned categories. Marketplace transactions, provider workflows, and AI tools are not available.</p></div>
      <section className="roadmap" aria-labelledby="roadmap-title"><div className="roadmap-heading"><h2 id="roadmap-title">One direction.<br />Built in stages.</h2><p>A proposed sequence, not a launch schedule. Each stage depends on research, genuine supply, and operational readiness.</p></div>
        <article id="discovery"><span className="status">Planned foundation</span><h3>Start with discovery.</h3><p>Make digital products easier to understand and evaluate. Validate buyers&apos; needs, technical product information, and licensing before enabling commerce.</p></article>
        <article id="creators"><span className="status">Planned next direction</span><h3>Connect with builders.</h3><p>Develop service discovery and creator workflows around real projects. Provider standards, contracting, and dispute handling need a deliberate foundation.</p></article>
        <article id="assistance"><span className="status status-vision">Future vision</span><h3>Build with assistance.</h3><p>Explore AI-assisted creation once the discovery and service foundations are useful. Research will shape which capabilities are practical and worth building.</p></article>
      </section>
      <div className="vision-close"><h2>Explore the idea.<br />See what&apos;s next.</h2><Link className="button" href="/explore">Explore IMOV <span aria-hidden="true">↗</span></Link></div>
    </main>
    <SiteFooter />
  </div>;
}
