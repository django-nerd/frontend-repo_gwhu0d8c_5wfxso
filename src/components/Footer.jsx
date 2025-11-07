import React from 'react';
import { Twitter, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#0b0b0f] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-white">FlareSaaS</h3>
            <p className="mt-2 max-w-sm text-sm text-white/70">
              The orange‑themed platform to build, launch, and scale modern products.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-4">
            <div>
              <h4 className="text-sm font-semibold text-white">Product</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><a className="hover:text-white" href="#features">Features</a></li>
                <li><a className="hover:text-white" href="#pricing">Pricing</a></li>
                <li><a className="hover:text-white" href="#home">Updates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><a className="hover:text-white" href="#home">About</a></li>
                <li><a className="hover:text-white" href="#home">Careers</a></li>
                <li><a className="hover:text-white" href="#home">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Resources</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><a className="hover:text-white" href="#home">Docs</a></li>
                <li><a className="hover:text-white" href="#home">Guides</a></li>
                <li><a className="hover:text-white" href="#home">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Legal</h4>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li><a className="hover:text-white" href="#home">Privacy</a></li>
                <li><a className="hover:text-white" href="#home">Terms</a></li>
                <li><a className="hover:text-white" href="#home">Security</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} FlareSaaS, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#home" className="hover:text-white" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
            <a href="#home" className="hover:text-white" aria-label="GitHub"><Github className="h-4 w-4" /></a>
            <a href="#home" className="hover:text-white" aria-label="Email"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
