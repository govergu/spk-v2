"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  Phone,
  Mail,
  Building2,
  Sparkles,
  Wrench,
  ChevronDown,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      {
        name: "Commercial Cleaning",
        href: "/services/commercial",
        description: "Contract-based office cleaning with dedicated teams",
        icon: Building2,
      },
      {
        name: "Specialized Sanitation",
        href: "/services/specialized",
        description: "Gym and healthcare cleaning with specialized teams",
        icon: Sparkles,
      },
      {
        name: "Maintenance Services",
        href: "/services/maintenance",
        description: "Comprehensive exterior maintenance contracts",
        icon: Wrench,
      },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

// Custom Desktop Dropdown Component
function DesktopDropdown({
  item,
  pathname,
}: {
  item: (typeof navigation)[0] & { children?: any[] };
  pathname: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cn(
          "px-4 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary",
          pathname === item.href ? "text-primary" : "text-spk-dark"
        )}
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <button
        className={cn(
          "flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-md transition-colors hover:text-primary",
          pathname.startsWith(item.href) ? "text-primary" : "text-spk-dark"
        )}
      >
        <span>{item.name}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen ? "rotate-180" : ""
          )}
        />
      </button>

      {/* Dropdown Menu */}
      <div
        className={cn(
          "absolute top-full left-0 mt-1 w-[400px] bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 transition-all duration-200",
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        )}
      >
        <div className="px-4 py-2">
          {item.children.map((child) => (
            <Link
              key={child.name}
              href={child.href}
              className={cn(
                "flex items-start space-x-3 p-3 rounded-md transition-colors hover:bg-gray-50",
                pathname === child.href
                  ? "bg-primary/5 text-primary"
                  : "text-spk-dark"
              )}
            >
              <child.icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <div className="font-medium text-sm">{child.name}</div>
                <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {child.description}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Mobile Menu Component
function MobileMenu({
  isOpen,
  setIsOpen,
  pathname,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  pathname: string;
}) {
  const [expandedItem, setExpandedItem] = React.useState<string | null>(null);

  const toggleExpanded = (itemName: string) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[280px] sm:w-[350px] p-0 overflow-y-auto"
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-bold text-white">SPK</span>
            </div>
            <span className="font-serif text-lg font-bold text-spk-dark">
              {COMPANY_INFO.name}
            </span>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <nav className="px-6 py-4">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() => toggleExpanded(item.name)}
                      className={cn(
                        "flex items-center justify-between w-full px-3 py-3 text-left text-base font-medium rounded-md transition-colors",
                        "hover:bg-primary/10 hover:text-primary",
                        pathname.startsWith(item.href)
                          ? "text-primary bg-primary/10"
                          : "text-spk-dark"
                      )}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          expandedItem === item.name ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    {expandedItem === item.name && (
                      <ul className="mt-1 ml-4 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className={cn(
                                "flex items-start space-x-3 px-3 py-2 text-sm rounded-md transition-colors",
                                "hover:bg-primary/10 hover:text-primary",
                                pathname === child.href
                                  ? "text-primary bg-primary/10"
                                  : "text-gray-600"
                              )}
                            >
                              <child.icon className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="font-medium">{child.name}</div>
                                <div className="text-xs text-muted-foreground mt-0.5">
                                  {child.description}
                                </div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-3 py-3 text-base font-medium rounded-md transition-colors",
                      "hover:bg-primary/10 hover:text-primary",
                      pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-spk-dark"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Contact Info */}
        <div className="mt-8 px-6 py-4 border-t bg-gray-50/50">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-sm text-spk-dark">
              <Phone className="h-4 w-4" />
              <span>{COMPANY_INFO.phone}</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-spk-dark">
              <Mail className="h-4 w-4" />
              <span>{COMPANY_INFO.email}</span>
            </div>
            <Button asChild className="w-full bg-accent hover:bg-accent/90">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-bold text-white">SPK</span>
            </div>
            <span className="font-serif text-xl font-bold text-spk-dark">
              {COMPANY_INFO.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <DesktopDropdown
                key={item.name}
                item={item}
                pathname={pathname}
              />
            ))}
          </nav>

          {/* Desktop Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
            <div className="flex items-center space-x-2 text-sm text-spk-dark">
              <Phone className="h-4 w-4" />
              <span>{COMPANY_INFO.phone}</span>
            </div>
            <Button asChild className="bg-accent hover:bg-accent/90">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            pathname={pathname}
          />
        </div>
      </div>
    </header>
  );
}
