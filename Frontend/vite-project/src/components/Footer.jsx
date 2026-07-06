import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface-dim dark:bg-surface-dim w-full bottom-0 mt-auto border-t border-outline-variant dark:border-outline-variant z-50">
      <div className="flex justify-between items-center px-container-padding py-stack-sm w-full font-body-sm text-body-sm">
        <div className="text-on-surface-variant dark:text-on-surface-variant">
          © 2024 SecureVault System. AES-256 Encrypted.
        </div>
        <div className="flex gap-gutter">
          <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary underline transition-opacity duration-150" href="#">Security Audit</a>
          <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary underline transition-opacity duration-150" href="#">API Docs</a>
          <a className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary underline transition-opacity duration-150" href="#">Changelog</a>
        </div>
        <div className="hidden md:block font-label-caps text-label-caps text-secondary dark:text-secondary">
          V.2.4.1
        </div>
      </div>
    </footer>
  );
}
