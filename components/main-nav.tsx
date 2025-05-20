"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Logo from "@/public/DAAF_Logo-1.png"

export function MainNav() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm dark:bg-gray-950/95" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex h-24 gap-x-5 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="relative p-0.5 border-2 border-blue-500 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full">
              <Image src={Logo} alt="DAAF Logo | Touching lives.." width="588" height="587" className="w-full object-cover object-center" priority/>
              {/* <img src="/DAAF_Logo-1.png" alt="DAAF Logo | Touching lives.." width="588" height="587" className="w-full object-cover object-center" /> */}
            </div>
            {/* <span className="text-2xl font-bold text-primary">DAAF</span>
            <span className="hidden text-xl font-medium text-muted-foreground md:inline-block">| Touching Lives</span> */}
          </motion.div>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {["Home", "About", "Causes", "Events", "Volunteer", "Blog", "Donate", "Contact"].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button asChild className="hidden md:inline-flex">
              <Link href="#donate">Donate Now</Link>
            </Button>
          </motion.div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 py-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                  <span className="text-xl font-bold text-primary">DAAF</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {["Home", "About", "Causes", "Events", "Volunteer", "Blog", "Donate", "Contact"].map((item) => (
                    <Link
                      key={item}
                      href={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-sm font-medium transition-colors hover:text-primary"
                    >
                      {item}
                    </Link>
                  ))}
                </nav>
                <Button asChild>
                  <Link href="#donate">Donate Now</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
