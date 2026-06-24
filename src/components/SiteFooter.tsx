import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logoIcon from "@/assets/komushana-icon.png.asset.json";


export function SiteFooter() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <img
              src={logoIcon.url}
              alt="Komushana Consultancy logo"
              width={40}
              height={40}
              className="h-9 w-9 rounded-md bg-primary-foreground/10 object-contain p-0.5"
            />
            <span className="font-serif text-lg font-bold">Komushana Consultancy</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
            We build the operational foundations organisations need to run
            professionally, grow sustainably, and deliver results — for NGOs,
            CBOs, startups and SMEs across Uganda.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-primary-foreground/75">
            <li><Link to="/" className="hover:text-primary-foreground">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary-foreground">Services</Link></li>
            <li><Link to="/about" className="hover:text-primary-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> Kampala, Uganda</li>
            <li className="flex items-start gap-2.5"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> hello@komushana.co.ug</li>
            <li className="flex items-start gap-2.5"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> +256 700 000 000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-primary-foreground/55">
          © {new Date().getFullYear()} Komushana Consultancy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
