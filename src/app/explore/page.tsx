import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = { title: "Explore", description: "Explore IMOV's planned digital products and development services, and the future vision for AI-assisted building." };

export default function Explore() {
  return <div className="product-page">
    <SiteHeader light current="explore" />
    <main id="main" className="frame explore-main">
      <div className="gateway-heading"><h1>Your next project<br />starts here.</h1><div><p>Explore the directions we&apos;re building into the IMOV ecosystem.</p><p className="gateway-disclosure">IMOV is in early development. These are planned directions, not live products or services.</p></div></div>
      <nav className="category-nav" aria-label="Explore categories"><a href="#digital-products">Digital products <span aria-hidden="true">↓</span></a><a href="#development-services">Development services <span aria-hidden="true">↓</span></a><a href="#ai-building">AI-assisted building <span aria-hidden="true">↓</span></a></nav>
      <section className="category-detail" id="digital-products" aria-labelledby="products-title">
        <div><span className="status">In development</span><h2 id="products-title">A stronger<br />starting point.</h2><p>Digital products</p></div>
        <div className="category-content"><p>Discover templates, source code, starter kits, and components with clear technical information and licensing. A foundation you can understand before you build on it.</p><div className="example-block"><h3>Illustrative use-cases</h3><ul><li>A starter kit for a founder&apos;s first web app</li><li>A reusable component for a developer&apos;s workflow</li><li>A template to give a small business its first website</li></ul></div><p className="availability">No catalog or downloads are available yet.</p><Link className="text-link" href="/vision#discovery">See the discovery direction <span aria-hidden="true">↗</span></Link></div>
      </section>
      <section className="category-detail" id="development-services" aria-labelledby="services-title">
        <div><span className="status">In development</span><h2 id="services-title">The right people.<br />A shared direction.</h2><p>Development services</p></div>
        <div className="category-content"><p>Find development support suited to the project you have in mind. The planned experience connects product discovery with help adapting, integrating, or building software.</p><div className="example-block"><h3>Illustrative use-cases</h3><ul><li>Adapt a template to a business&apos;s needs</li><li>Connect an existing app to another tool</li><li>Scope a custom build with a developer</li></ul></div><p className="availability">Provider discovery and service bookings are not available yet.</p><Link className="text-link" href="/vision#creators">See the creator direction <span aria-hidden="true">↗</span></Link></div>
      </section>
      <section className="category-detail" id="ai-building" aria-labelledby="ai-title">
        <div><span className="status status-vision">Future vision</span><h2 id="ai-title">More possibility.<br />With assistance.</h2><p>AI-assisted building</p></div>
        <div className="category-content"><p>Our longer-term vision is to help people move from an idea toward working software with AI assistance. The approach and capabilities still need research and validation.</p><div className="example-block"><h3>Illustrative use-cases</h3><ul><li>Turn an initial idea into a clearer project brief</li><li>Understand how a codebase might be adapted</li><li>Explore an assisted software-building workflow</li></ul></div><p className="availability">No AI assistant or builder is released in this preview.</p><Link className="text-link" href="/vision#assistance">Read the AI vision <span aria-hidden="true">↗</span></Link></div>
      </section>
      <aside className="gateway-close"><h2>See the bigger picture.</h2><Link className="button" href="/vision">Our vision <span aria-hidden="true">↗</span></Link></aside>
    </main>
    <SiteFooter light />
  </div>;
}
