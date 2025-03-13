'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const servicesRef = useRef<HTMLLIElement>(null);
  const solutionsRef = useRef<HTMLLIElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setIsSolutionsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Active Link Class
  const getActiveClass = (path: string) =>
    pathname === path ? "text-[#DB1139] font-semibold" : "text-black hover:text-[#DB1139]";

  return (
    <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-900">
          <Image src="/images/cospire-logo.png" alt="cospire-logo" width={100} height={22} />
        </Link>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-900" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-[18px]">
          <li><Link href="/" className={getActiveClass("/")}>Home</Link></li>
          <li><Link href="/about" className={getActiveClass("/about")}>About Us</Link></li>

          {/* Services Dropdown */}
          <li className="relative" ref={servicesRef}>
            <button 
              className={`flex items-center ${getActiveClass("/services")}`}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services <ChevronDown size={18} className="ml-1" />
            </button>

            {isServicesOpen && (
              <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg">
                <li><Link href="/services/customization" className="block px-4 py-2 text-black hover:bg-[#FAE7E9] hover:text-black rounded-md">Salesforce Customization</Link></li>
                <li><Link href="/services/implementation" className="block px-4 py-2 text-black hover:bg-[#FAE7E9] hover:text-black rounded-md">Salesforce Implementation</Link></li>
                <li><Link href="/services/managed-package" className="block px-4 py-2 text-black hover:bg-[#FAE7E9] hover:text-black rounded-md">Managed Package Development</Link></li>
              </ul>
            )}
          </li>

          {/* Solutions Dropdown */}
          <li className="relative" ref={solutionsRef}>
            <button 
              className={`flex items-center ${getActiveClass("/solutions")}`}
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
            >
              Solutions <ChevronDown size={18} className="ml-1" />
            </button>

            {isSolutionsOpen && (
              <ul className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg">
                <li><Link href="/solutions/industry" className="block px-4 py-2 text-black hover:bg-[#FAE7E9] hover:text-black rounded-md">Industry Solutions</Link></li>
                <li><Link href="/solutions/business" className="block px-4 py-2 text-black hover:bg-[#FAE7E9] hover:text-black rounded-md">Business Solutions</Link></li>
                <li><Link href="/solutions/enterprise" className="block px-4 py-2 text-black hover:bg-[#FAE7E9] hover:text-black rounded-md">Enterprise Solutions</Link></li>
              </ul>
            )}
          </li>

          <li><Link href="/contact" className={getActiveClass("/contact")}>Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><Link href="/" className={getActiveClass("/")} onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/about" className={getActiveClass("/about")} onClick={() => setIsOpen(false)}>About Us</Link></li>

            {/* Mobile Services Dropdown */}
            <li className="w-full text-center">
              <button 
                className={`flex justify-center items-center w-full ${getActiveClass("/services")}`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services <ChevronDown size={18} className="ml-1" />
              </button>
              {isServicesOpen && (
                <ul className="bg-[#FAE7E9] py-2 rounded-md mt-2 p-2">
                  <li><Link href="/services/customization" className="block px-4 py-2 text-black hover:text-#DB1139 rounded-md">Salesforce Customization</Link></li>
                  <li><Link href="/services/implementation" className="block px-4 py-2 text-black hover:text-#DB1139 rounded-md">Salesforce Implementation</Link></li>
                  <li><Link href="/services/managed-package" className="block px-4 py-2 text-black hover:text-#DB1139 rounded-md">Managed Package Development</Link></li>
                </ul>
              )}
            </li>

            {/* Mobile Solutions Dropdown */}
            <li className="w-full text-center">
              <button 
                className={`flex justify-center items-center w-full ${getActiveClass("/solutions")}`}
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              >
                Solutions <ChevronDown size={18} className="ml-1" />
              </button>
              {isSolutionsOpen && (
                <ul className="bg-[#FAE7E9] py-2 rounded-md mt-2 p-2">
                  <li><Link href="/solutions/industry" className="block px-4 py-2 text-black hover:text-#DB1139 rounded-md">Industry Solutions</Link></li>
                  <li><Link href="/solutions/business" className="block px-4 py-2 text-black hover:text-#DB1139 rounded-md">Business Solutions</Link></li>
                  <li><Link href="/solutions/enterprise" className="block px-4 py-2 text-black hover:text-#DB1139 rounded-md">Enterprise Solutions</Link></li>
                </ul>
              )}
            </li>

            <li><Link href="/contact" className={getActiveClass("/contact")} onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
