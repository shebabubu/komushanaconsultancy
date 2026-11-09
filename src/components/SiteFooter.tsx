import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import logoIcon from "@/assets/komushana-icon.png.asset.json";
import { CONTACT, WHATSAPP_URL } from "@/data/contact";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-8 border-b border-primary-foreground/10 py-16 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-xl text-balance text-3xl leading-tight text-primary-foreground md:text-[42px]">
            Ready to put structure behind your growth?
          </h2>
          <Link to="/contact" className="btn-gold self-start md:self-auto">
            Book a consultation <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-10 py-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={logoIcon.url}
                alt="Komushana Consultancy logo"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full bg-primary-foreground object-contain p-0.5"
              />
              <span className="font-serif text-lg font-bold">Komushana Consultancy</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Organisational development and systems consultancy for NGOs, CBOs,
              startups and SMEs in Uganda.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="footer-heading">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
              <li><Link to="/" className="hover:text-primary-foreground">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary-foreground">Services</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="footer-heading">Get in touch</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
              <li>{CONTACT.location}</li>
              <li><a href={`mailto:${CONTACT.email}`} className="hover:text-primary-foreground">{CONTACT.email}</a></li>
              <li><a href={CONTACT.phoneHref} className="hover:text-primary-foreground">{CONTACT.phoneDisplay}</a></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">WhatsApp</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="footer-heading">Legal</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
              <li><Link to="/privacy" className="hover:text-primary-foreground">Privacy policy</Link></li>
              <li><Link to="/cookies" className="hover:text-primary-foreground">Cookie policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary-foreground">Terms & disclaimer</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-primary-foreground/55 md:flex-row md:justify-between lg:px-10">
          <span>© {new Date().getFullYear()} Komushana Consultancy. All rights reserved.</span>
          <span>Komushana Consultancy is a consultancy, not a law firm, and does not provide legal representation.</span>
        </div>
      </div>
    </footer>
  );
}
