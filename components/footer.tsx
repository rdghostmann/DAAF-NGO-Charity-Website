import Link from "next/link";
import { Heart, Mail } from "lucide-react";
import { RiFacebookFill, RiTwitterFill, RiInstagramFill, RiTiktokFill, RiWhatsappFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

export function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/happy-people.jpg')`, // Replace with your image path
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-90" />

      {/* Footer Content */}
      <div className="relative container mx-auto px-4 py-12 md:px-6 text-white">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Diocese of Asaba Agape Foundation</h3>
            <p className="text-sm text-white/80">
              A humanitarian and sustainable development organization rooted in the Diocese of Asaba, Anglican Communion
              in Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <div className="flex items-center space-x-10 text-sm">
              <div className="flex flex-col space-y-2">
                <Link href="/" className="text-white/80 hover:text-white">Home</Link>
                <Link href="/about" className="text-white/80 hover:text-white">About Us</Link>
                <Link href="/about" className="text-white/80 hover:text-white">Our Objectives</Link>
                <Link href="/events" className="text-white/80 hover:text-white">Activities</Link>
              </div>
              <div className="flex flex-col space-y-2">
                <Link href="/contact" className="text-white/80 hover:text-white">Contact</Link>
                <Link href="/blog" className="text-white/80 hover:text-white">Blog</Link>
                <Link href="/donate" className="text-white/80 hover:text-white">Donate</Link>
                <Link href="/volunteer" className="text-white/80 hover:text-white">Volunteer</Link>
              </div>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#activities" className="text-white/80 hover:text-white">Elderly Care Ministry</Link></li>
              <li><Link href="#activities" className="text-white/80 hover:text-white">Correctional Center & Hospital Ministries</Link></li>
              <li><Link href="#activities" className="text-white/80 hover:text-white">St. Barnabas Orphanage Home</Link></li>
              <li><Link href="#activities" className="text-white/80 hover:text-white">Food Security Program - Ewulu Integrated Farm</Link></li>
              <li><Link href="#activities" className="text-white/80 hover:text-white">Hospitality and Prison Visitation</Link></li>
              <li><Link href="#activities" className="text-white/80 hover:text-white">Balm of Gilead Hospital</Link></li>
            </ul>
          </div>

          {/* Contact + Socials */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <address className="not-italic text-sm text-white/80 space-y-2">
              <div className="flex items-start gap-2">
                <FaLocationDot className="mt-1 h-5 w-5 text-primary" />
                <div>
                  Bishopscourt, 60 Dennis Osadebay Way,<br />
                  P.O. Box 216, Asaba, Delta State, Nigeria
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:DaafDoA@gmail.com" className="hover:text-white underline underline-offset-2 transition">
                  DaafDoA@gmail.com
                </a>
              </div>
              {/* Social Icons */}
              <div className="flex gap-3 pt-4 justify-start">
                <Link href="https://www.facebook.com/share/164APfWfmk/" target="_blank" aria-label="Facebook">
                  <span className="flex items-center justify-center rounded-full border bg-blue-100 h-9 w-9 hover:bg-blue-600 transition">
                    <RiFacebookFill className="h-5 w-5 text-blue-600 hover:text-white transition" />
                  </span>
                </Link>
                <Link href="https://x.com/AsabaDaaf?t=91aA_4YpcOXcae_o0xq62g&s=09" target="_blank" aria-label="Twitter">
                  <span className="flex items-center justify-center rounded-full border bg-sky-100 h-9 w-9 hover:bg-sky-500 transition">
                    <RiTwitterFill className="h-5 w-5 text-sky-400 hover:text-white transition" />
                  </span>
                </Link>

                <Link href="https://www.instagram.com/daaf_ngo?igsh=MW1nNndlZjE5czE3MA==" target="_blank" aria-label="Instagram">
                  <span className="flex items-center justify-center rounded-full border bg-pink-100 h-9 w-9 hover:bg-pink-500 transition">
                    <RiInstagramFill className="h-5 w-5 text-pink-500 hover:text-white transition" />
                  </span>
                </Link>

                <Link href="tiktok.com/@diocese_of_asaba_" target="_blank" aria-label="TikTok">
                  <span className="flex items-center justify-center rounded-full border bg-gray-200 h-9 w-9 hover:bg-black transition">
                    <RiTiktokFill className="h-5 w-5 text-black hover:text-white transition" />
                  </span>
                </Link>

                <Link href="https://wa.me/234XXXXXXXXXX" target="_blank" aria-label="WhatsApp">
                  <span className="flex items-center justify-center rounded-full border bg-green-100 h-9 w-9 hover:bg-green-500 transition">
                    <RiWhatsappFill className="h-5 w-5 text-green-500 hover:text-white transition" />
                  </span>
                </Link>

              </div>

            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Diocese of Asaba Agape Foundation. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center text-sm text-white/80">
            Made with <Heart className="mx-1 h-4 w-4 text-primary" /> for those in need
          </p>
        </div>
        
      </div>
    </footer>
  );
}
