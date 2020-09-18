import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="Footer">
    <span>
      Created by:{' '}
      <a
        className="Footer-link"
        href="https://twitter.com/sniperrabiul"
        target="_blank"
        rel="noopener noreferrer"
      >
       Md Rabiul
      </a>
    </span>
    <span> | </span>
    <span>
      <a
        className="Footer-link"
        href="https://github.com/freelancerrabiul/markdown-previewer"
        target="_blank"
        rel="noopener noreferrer"
      >
        Repo Link
      </a>
    </span>
  </footer>
);

export default Footer;