"use client";

import React from "react";
import Link from "next/link";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-black via-(--dark-bg) to-(--red) text-white pt-12 pb-8 px-6 overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col h-full min-h-[60vh] justify-between">
        {/* --- Top Utility Bar --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[12px] md:text-xs 2xl:text-sm font-[Helvetica] uppercase tracking-widest opacity-80">
          <p>500 Terry Francine Street, SF, CA 94158</p>
          <p>info@callories.com</p>
          <p>123-456-7890</p>
        </div>

        {/* --- Central Brand Name --- */}
        <div className="flex justify-center pt-20">
          <h2 className="text-[25vw] leading-[0.8] font-[Formula] select-none text-white w-full text-center">
            CALLORIES
          </h2>
        </div>

        {/* --- Bottom Action Bar --- */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 border-t border-white/10 pt-10">
          {/* Legal Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-[12px] uppercase font-bold tracking-wider">
            <Link href="/terms" className="hover:opacity-60 transition-opacity">
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="hover:opacity-60 transition-opacity"
            >
              Privacy Policy
            </Link>
            <Link
              href="/refund"
              className="hover:opacity-60 transition-opacity"
            >
              Refund Policy
            </Link>
            <Link
              href="/accessibility"
              className="hover:opacity-60 transition-opacity"
            >
              Accessibility Statement
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-xl">
            <Link href="#" className="hover:scale-110 transition-transform">
              <FaYoutube />
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:scale-110 transition-transform">
              <FaFacebookF />
            </Link>
          </div>

          {/* Copyright Section */}
          <div className="text-[12px] uppercase tracking-widest text-center lg:text-right">
            <p>
              © 2026 by CALLORIES. Powered and secured by{" "}
              <span className="underline cursor-pointer">Dev</span>
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Grainy Overlay (Optional, for that premium feel) */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
    </footer>
  );
}
