import { Link, NavLink } from "react-router";
import { useState, useEffect, useRef } from "react";

const MENU_ITEMS = [{ label: "/about", href: "/about" }];

type HeaderProps = {
  className?: string;
};

export function Header({ className = "" }: HeaderProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const previousScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction =
        currentScrollY > previousScrollYRef.current ? "down" : "up";
      setScrollDirection(direction);
      setScrollY(currentScrollY);
      previousScrollYRef.current = currentScrollY;
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate opacity based on scroll position (0 to 1 over first 100px)
  const opacity = Math.min(scrollY / 100, 1);

  const isVisible = !(isMobile && scrollDirection === "down" && scrollY > 50);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${opacity > 0 ? "backdrop-blur-sm" : ""} ${isVisible ? "" : "transform -translate-y-full opacity-0"} ${className}`}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 lg:px-8 py-6 lg:py-8">
        {/* Left side - Logo/Site name */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <NavLink
            to="/"
            viewTransition
            className="flex items-center space-x-2 text-mystic-text-primary font-heading font-semibold hover:text-mystic-accent transition-colors"
          >
            <div className="w-8 h-8 bg-mystic-accent rounded-full flex items-center justify-center">
              <img
                className="rounded-full w-8 h-8 object-cover"
                src="/profile.jpg"
              />
            </div>
            <span className="block">adibfirman.dev</span>
          </NavLink>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              viewTransition
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
