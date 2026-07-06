import React from 'react';

export default function Sidebar() {
  return (
    <aside className="hidden md:flex bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant dark:border-outline-variant h-[calc(100vh-73px)] w-64 sticky top-[73px] flex-col py-stack-lg z-40 shrink-0">
      <div className="px-gutter mb-stack-lg">
        <div className="flex items-center gap-stack-sm mb-unit">
          <span className="font-headline-md text-headline-md text-primary dark:text-primary">Root Admin</span>
        </div>
        <div className="font-label-caps text-label-caps text-on-surface-variant">Precision Security</div>
      </div>
      <button className="mx-gutter mb-stack-lg bg-primary-container text-on-primary-fixed hover:bg-primary transition-colors font-code-lg text-code-lg py-stack-sm px-gutter rounded flex justify-center items-center gap-stack-sm">
        <span className="material-symbols-outlined text-sm">add</span> New Entry
      </button>
      <nav className="flex flex-col gap-unit flex-1 font-body-md text-body-md">
        <a className="bg-secondary-container dark:bg-secondary-container text-on-secondary-container dark:text-on-secondary-container rounded-none border-l-4 border-primary px-gutter py-stack-sm flex items-center gap-stack-sm cursor-pointer" href="#">
          <span className="material-symbols-outlined">inventory_2</span>
          All Items
        </a>
        <a className="text-on-surface-variant dark:text-on-surface-variant px-gutter py-stack-sm hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all flex items-center gap-stack-sm cursor-pointer" href="#">
          <span className="material-symbols-outlined">star</span>
          Favorites
        </a>
        <a className="text-on-surface-variant dark:text-on-surface-variant px-gutter py-stack-sm hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all flex items-center gap-stack-sm cursor-pointer" href="#">
          <span className="material-symbols-outlined">schedule</span>
          Recent
        </a>
        <a className="text-on-surface-variant dark:text-on-surface-variant px-gutter py-stack-sm hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all flex items-center gap-stack-sm cursor-pointer" href="#">
          <span className="material-symbols-outlined">delete</span>
          Trash
        </a>
      </nav>
      <div className="mt-auto pt-stack-md border-t border-outline-variant px-gutter font-body-md text-body-md">
        <a className="text-on-surface-variant dark:text-on-surface-variant py-stack-sm hover:bg-surface-container-highest dark:hover:bg-surface-container-highest transition-all flex items-center gap-stack-sm cursor-pointer -mx-gutter px-gutter" href="#">
          <span className="material-symbols-outlined">help</span>
          Help
        </a>
      </div>
    </aside>
  );
}
