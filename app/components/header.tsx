import { Link } from "react-router";
import { useState, useEffect } from "react";

const MENU_ITEMS = [{ label: "/about", href: "/about" }];

type HeaderProps = {
  className?: string;
};

export function Header({ className = "" }: HeaderProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity based on scroll position (0 to 1 over first 100px)
  const opacity = Math.min(scrollY / 100, 1);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${opacity > 0 ? "backdrop-blur-sm" : ""} ${className}`}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 lg:px-8 py-6 lg:py-8">
        {/* Left side - Logo/Site name */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <a
            href="/"
            className="flex items-center space-x-2 text-mystic-text-primary font-heading font-semibold hover:text-mystic-accent transition-colors"
          >
            <div className="w-8 h-8 bg-mystic-accent rounded-full flex items-center justify-center">
              <img
                className="rounded-full w-8 h-8 object-cover"
                src="/profile.jpg"
              />
            </div>
            <span className="block">adibfirman.dev</span>
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-mystic-text-secondary hover:text-mystic-accent transition-colors font-body"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
