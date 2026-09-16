import { MapPin, Phone } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';
import './topbar.css';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <p className="topbar__tag">Pure Jewellery &nbsp;|&nbsp; Trusted Since 1998</p>
        <div className="topbar__right">
          <span className="topbar__item">
            <MapPin size={14} strokeWidth={1.6} /> Visit Our Store
          </span>
          <span className="topbar__item">
            <Phone size={14} strokeWidth={1.6} /> +91 77963 74853
          </span>
          <span className="topbar__socials">
            <a href="#" aria-label="Instagram"><InstagramIcon size={15} /></a>
            <a href="#" aria-label="Facebook"><FacebookIcon size={15} /></a>
            <a href="#" aria-label="YouTube"><YoutubeIcon size={15} /></a>
          </span>
        </div>
      </div>
    </div>
  );
}
