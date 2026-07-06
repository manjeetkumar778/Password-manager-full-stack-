import React from 'react';

export default function Header() {
  return (
    <header className="bg-surface dark:bg-surface w-full top-0 sticky border-b border-outline-variant dark:border-outline-variant z-50">
      <div className="flex justify-between items-center px-container-padding py-stack-md w-full max-w-full">
        <div className="flex items-center gap-stack-lg">
          <span className="font-display-lg text-display-lg text-primary dark:text-primary tracking-tighter cursor-pointer active:opacity-80">
            SecureVault
          </span>
          <nav className="hidden md:flex gap-gutter">
            <a className="font-code-lg text-code-lg text-primary dark:text-primary border-b-2 border-primary pb-1 hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#">
              Passwords
            </a>
            <a className="font-code-lg text-code-lg text-on-surface-variant dark:text-on-surface-variant pb-1 hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#">
              Vaults
            </a>
            <a className="font-code-lg text-code-lg text-on-surface-variant dark:text-on-surface-variant pb-1 hover:text-primary dark:hover:text-primary transition-colors duration-200" href="#">
              Settings
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-stack-md">
          <button aria-label="security" className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-80">
            <span className="material-symbols-outlined">security</span>
          </button>
          <button aria-label="sync" className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-80">
            <span className="material-symbols-outlined">sync</span>
          </button>
          <button aria-label="logout" className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-80">
            <span className="material-symbols-outlined">logout</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant ml-stack-sm cursor-pointer">
           <img alt="Administrator profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
          </div>
        </div>
      </div>
    </header>
  );
}
