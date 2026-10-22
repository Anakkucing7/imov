import Link from "next/link";

export function SiteFooter({ light = false }: { light?: boolean }) {
  return (
    <footer className={`site-footer ${light ? "footer-light" : ""}`}>
      <div className="frame footer-inner">
        <div><Link className="wordmark" href="/" aria-label="IMOV home">imov<span aria-hidden="true">.</span></Link><p>Products, people, possibility.</p></div>
        <nav aria-label="Footer navigation"><Link href="/explore">Explore</Link><Link href="/vision">Our vision</Link></nav>
        <p className="footer-note">In early development.<br />© {new Date().getFullYear()} IMOV</p>
      </div>
    </footer>
  );
}
