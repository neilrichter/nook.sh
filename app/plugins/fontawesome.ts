import '@fortawesome/fontawesome/styles.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import fontawesome from '@fortawesome/fontawesome';
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faStar, faLink } from '@fortawesome/free-solid-svg-icons';

fontawesome.config = {
  ...fontawesome.config,
  autoAddCss: false,
};

library.add(
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
  faStar,
  faLink,
);

dom.watch();
