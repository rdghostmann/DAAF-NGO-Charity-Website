import Link from "next/link"
import { Heart, Mail, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Diocese of Asaba Agape Foundation</h3>
            <p className="text-sm text-muted-foreground">
              A humanitarian and sustainable development organization rooted in the Diocese of Asaba, Anglican Communion
              in Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">Our Objectives</Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-foreground">Activities</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link>
              </li>
              <li>
                <Link href="/donate" className="text-muted-foreground hover:text-foreground">Donate</Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-muted-foreground hover:text-foreground">Volunteer</Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#activities" className="text-muted-foreground hover:text-foreground">Elderly Care Ministry</Link>
              </li>
              <li>
                <Link href="#activities" className="text-muted-foreground hover:text-foreground">Correctional Center & Hospital Ministries</Link>
              </li>
              <li>
                <Link href="#activities" className="text-muted-foreground hover:text-foreground">St. Barnabas Orphanage Home</Link>
              </li>
              <li>
                <Link href="#activities" className="text-muted-foreground hover:text-foreground">Food Security Program - Ewulu Integrated Farm</Link>
              </li>
              <li>
                <Link href="#activities" className="text-muted-foreground hover:text-foreground">Hospitality and Prison Visitation</Link>
              </li>
              <li>
                <Link href="#activities" className="text-muted-foreground hover:text-foreground">Balm of Gilead Hospital</Link>
              </li>
            </ul>
          </div>

          {/* Contact + Socials */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2">
              <p>Bishopscourt, 60 Dennis Osadebay Way,</p>
              <p>P.O. Box 216, Asaba, Delta State, Nigeria</p>
              <p>Phone: </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red-300" />
                <a href="mailto:DaafDoA@gmail.com" className="hover:text-foreground">DaafDoA@gmail.com</a>
              </p>

              {/* Inline Social Icons */}
              <div className="flex gap-4 pt-4">
                
                <Link href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 text-blue-300  hover:text-blue-600" />
                </Link>
                <Link href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" >
                  <Instagram className="h-5 w-5 text-violet-300 hover:text-pink-500" />
                </Link>
              </div>
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Diocese of Asaba Agape Foundation. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center text-sm text-muted-foreground">
            Made with <Heart className="mx-1 h-4 w-4 text-primary" /> for those in need
          </p>
        </div>
      </div>
    </footer>
  )
}
