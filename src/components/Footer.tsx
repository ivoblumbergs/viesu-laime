import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground folk-pattern-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Saites</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-secondary transition-colors">
                  Sākums
                </Link>
              </li>
              <li>
                <Link to="/galerija" className="text-sm hover:text-secondary transition-colors">
                  Galerija
                </Link>
              </li>
              <li>
                <Link to="/istabas" className="text-sm hover:text-secondary transition-colors">
                  Istabas un cenas
                </Link>
              </li>
              <li>
                <Link to="/aktivitates" className="text-sm hover:text-secondary transition-colors">
                  Aktivitātes
                </Link>
              </li>
              <li>
                <Link to="/kontakti" className="text-sm hover:text-secondary transition-colors">
                  Kontakti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontakti</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <Phone size={16} />
                <a href="tel:+37120123456" className="hover:text-secondary transition-colors">
                  +371 20 123 456
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail size={16} />
                <a href="mailto:info@mezamaja.lv" className="hover:text-secondary transition-colors">
                  info@mezamaja.lv
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <MapPin size={16} className="mt-0.5" />
                <span>
                  Meža iela 1<br />
                  LV-1234 Sigulda<br />
                  Latvija
                </span>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Par mums</h3>
            <p className="text-sm mb-4 leading-relaxed">
              Meža Māja ir jūsu mājīgais stūrītis Latvijas skaistajā dabā. 
              Piedāvājam autentisku lauku pieredzi ar visām mūsdienu ērtībām.
            </p>
            <p className="text-xs text-secondary">
              Izveidots ar ❤️ Latvijā
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Meža Māja. Visas tiesības aizsargātas.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
