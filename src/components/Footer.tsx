import React from 'react';
import { Computer } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="flex items-center justify-center text-white/60 text-sm">
            Made with
            <Computer size={16} className="mx-2 text-red-400 fill-current" />
            by Michael Jordan Boudi
          </p>
          <p className="text-white/40 text-xs mt-2">
            © 2025 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;