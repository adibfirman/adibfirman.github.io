import { Link } from "react-router";

const MENU_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Talks", href: "/talks" },
];

interface HeaderProps {
  siteName?: string;
  showBlog?: boolean;
  className?: string;
}

export default function Header({
  siteName = "adibfirman.dev",
  className = "",
}: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-mystic-bg/80 backdrop-blur-md border-b border-mystic-dark/50 ${className}`}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 md:px-8 py-8">
        {/* Left side - Logo/Site name */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link
            to="/"
            className="flex items-center space-x-2 text-mystic-text-primary font-heading font-semibold hover:text-mystic-accent transition-colors"
          >
            <div className="w-8 h-8 bg-mystic-accent rounded-full flex items-center justify-center">
              <img
                className="rounded-full w-8 h-8 object-cover"
                src="./profile.JPG"
              />
            </div>
            <span className="block">{siteName}</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-mystic-text-secondary hover:text-mystic-text-primary transition-colors font-body"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-mystic-text-secondary hover:text-mystic-text-primary transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
