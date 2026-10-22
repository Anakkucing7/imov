import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ImovCore } from "@/components/imov-core";
import "./hero.css";

export default function Home() {
  return <div className="marketing-page home-page">
    <SiteHeader />
    <main id="main">
      <div className="hero-experience">
      <section className="frame hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">Build what&apos;s<br />next.</h1>
          <p className="hero-description">Discover digital products, connect with developers, and bring your next idea to life.</p>
          <div className="hero-actions"><Link className="button" href="/explore">Explore IMOV <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/vision">Our vision <span aria-hidden="true">↗</span></Link></div>
          <p className="development-note"><span aria-hidden="true" />An ecosystem in development. Start with the vision.</p>
        </div>
        <ImovCore />
        <a className="hero-scroll" href="#ecosystem-title">Products, people, possibility <span aria-hidden="true">↓</span></a>
      </section>
      <section className="ecosystem-section" aria-labelledby="ecosystem-title">
        <div className="frame">
          <div className="section-intro"><h2 id="ecosystem-title">Less searching.<br />More building.</h2><p>We&apos;re building a connected path from digital products to development support, with AI-assisted creation as a longer-term vision.</p></div>
          <div className="direction-links">
            <Link href="/explore#digital-products"><span className="status">In development</span><h3>Digital products <span aria-hidden="true">↗</span></h3><p>Find a starting point for your next project.</p></Link>
            <Link href="/explore#development-services"><span className="status">In development</span><h3>Development services <span aria-hidden="true">↗</span></h3><p>Connect an idea with the people who can build it.</p></Link>
            <Link href="/explore#ai-building"><span className="status status-vision">Future vision</span><h3>AI-assisted building <span aria-hidden="true">↗</span></h3><p>Explore where assisted creation could take us.</p></Link>
          </div>
        </div>
      </section>
      </div>
    </main>
    <SiteFooter />
  </div>;
}
