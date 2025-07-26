import { jsx } from 'react/jsx-runtime';

cat > components / ui / index.ts << 'EOF';
// Create actual React components instead of null placeholders
const NavigationMenu = ({ children }) => (jsx("nav", { className: "relative", children: children }));
const NavigationMenuList = ({ children }) => (jsx("ul", { className: "flex space-x-4", children: children }));
const NavigationMenuItem = ({ children }) => (jsx("li", { className: "relative", children: children }));
const NavigationMenuTrigger = ({ children }) => (jsx("button", { className: "px-4 py-2 hover:bg-gray-100 rounded-md font-medium", children: children }));
const NavigationMenuContent = ({ children }) => (jsx("div", { className: "absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200", children: children }));

export { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger };
//# sourceMappingURL=index.esm.js.map
