import React from 'react';
cat > components/ui/index.ts << 'EOF'
import React from 'react';

// Create actual React components instead of null placeholders
export const NavigationMenu = ({ children }: { children: React.ReactNode }) => (
  <nav className="relative">{children}</nav>
);

export const NavigationMenuList = ({ children }: { children: React.ReactNode }) => (
  <ul className="flex space-x-4">{children}</ul>
);

export const NavigationMenuItem = ({ children }: { children: React.ReactNode }) => (
  <li className="relative">{children}</li>
);

export const NavigationMenuTrigger = ({ children }: { children: React.ReactNode }) => (
  <button className="px-4 py-2 hover:bg-gray-100 rounded-md font-medium">
    {children}
  </button>
);

export const NavigationMenuContent = ({ children }: { children: React.ReactNode }) => (
  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200">
    {children}
  </div>
);
