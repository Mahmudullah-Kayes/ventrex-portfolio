"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Testimonials", href: "/testimonials" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent py-5">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold gradient-text">Ventrex</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-sm transition-colors relative group ${
                    pathname === link.href
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.title}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </Link>
              </div>
            ))}
            <div>
              <Link href="/contact">
                <Button className="ml-2">Get in Touch</Button>
              </Link>
            </div>
          </nav>
          <div className="md:hidden -mr-3">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {mounted ? (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2 hover:scale-105 transition-transform duration-200">
              <span className="text-xl md:text-2xl font-bold gradient-text">Ventrex</span>
            </Link>
          </motion.div>
        ) : (
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold gradient-text">Ventrex</span>
            </Link>
          </div>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1">
          {mounted ? (
            <>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-md text-sm transition-colors relative group ${
                      pathname === link.href
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.title}
                    {pathname === link.href && (
                      <motion.span
                        layoutId="navbar-active-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
              >
                <Link href="/contact">
                  <Button className="ml-2">Get in Touch</Button>
                </Link>
              </motion.div>
            </>
          ) : (
            <>
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-md text-sm transition-colors relative group ${
                      pathname === link.href
                        ? "text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.title}
                    {pathname === link.href && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                    )}
                  </Link>
                </div>
              ))}
              <div>
                <Link href="/contact">
                  <Button className="ml-2">Get in Touch</Button>
                </Link>
              </div>
            </>
          )}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden -mr-3">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 transition-colors">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-80 bg-background/95 backdrop-blur-md border-l border-border/20">
            <div className="flex flex-col h-full">
              {/* Mobile menu header */}
              <div className="flex items-center justify-between py-4 border-b border-border/20">
                <span className="text-xl font-bold gradient-text">Ventrex</span>
              </div>
              
              {/* Navigation links */}
              <div className="flex-1 mt-8 space-y-2">
                {mounted ? (
                  navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-4 px-4 rounded-lg text-base font-medium transition-all duration-200 ${
                          pathname === link.href
                            ? "bg-primary/10 text-primary border-l-4 border-primary"
                            : "hover:bg-muted/50 hover:translate-x-1"
                        }`}
                      >
                        {link.title}
                      </Link>
                    </motion.div>
                  ))
                ) : (
                  navLinks.map((link) => (
                    <div key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-4 px-4 rounded-lg text-base font-medium transition-all duration-200 ${
                          pathname === link.href
                            ? "bg-primary/10 text-primary border-l-4 border-primary"
                            : "hover:bg-muted/50"
                        }`}
                      >
                        {link.title}
                      </Link>
                    </div>
                  ))
                )}
              </div>
              
              {/* Bottom CTA */}
              <div className="pt-6 pb-8 border-t border-border/20">
                {mounted ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full h-12 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                          Get in Touch
                        </Button>
                      </Link>
                    </motion.div>
                    
                    <motion.div 
                      className="mt-4 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <p className="text-sm text-muted-foreground">
                        Ready to grow your business?
                      </p>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <div>
                      <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                        <Button className="w-full h-12 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                          Get in Touch
                        </Button>
                      </Link>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <p className="text-sm text-muted-foreground">
                        Ready to grow your business?
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
