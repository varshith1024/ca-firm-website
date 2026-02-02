// src/components/layout/Header.jsx
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown, ChevronRight } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setOpenDropdown(null)
  }, [location])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isMenuOpen])

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Audit & Assurance', path: '/services/audit-assurance' },
        { name: 'Taxation Services', path: '/services/taxation-services' },
        { name: 'Business Consulting', path: '/services/business-consulting' },
        { name: 'Accounting Services', path: '/services/accounting-services' },
        { name: 'Corporate Compliance', path: '/services/corporate-compliance' },
        { name: 'Risk Advisory', path: '/services/risk-advisory' },
      ]
    },
    { 
      name: 'Industries', 
      path: '/industries',
      dropdown: [
        { name: 'Manufacturing', path: '/industries/manufacturing' },
        { name: 'IT & Technology', path: '/industries/it' },
        { name: 'Healthcare', path: '/industries/healthcare' },
        { name: 'Real Estate', path: '/industries/real-estate' },
        { name: 'Banking & Finance', path: '/industries/banking' },
        { name: 'Retail & E-commerce', path: '/industries/retail' },
      ]
    },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const toggleDropdown = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName)
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CA</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">CA Firm Name</h1>
                <p className="text-sm text-secondary-600">Chartered Accountants</p>
              </div>
            </Link>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <>
                      <button className="nav-link flex items-center gap-1">
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 border">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="block px-4 py-3 hover:bg-primary-50 text-gray-700 hover:text-primary-600 transition text-sm"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`nav-link ${location.pathname === item.path ? 'text-primary-600 font-semibold' : ''}`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <button className="btn-primary">
                Book Consultation
              </button>
            </nav>

            {/* Mobile: Contact & Hamburger Menu */}
            <div className="flex items-center gap-4 lg:hidden">
              {/* Phone icon visible on mobile */}
              <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-700">
                <Phone className="w-5 h-5" />
                <span className="hidden sm:inline text-sm">Call</span>
              </a>
              
              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
            isMenuOpen
              ? 'opacity-100 visible'
              : 'opacity-0 invisible delay-300'
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-50' : 'opacity-0'
            }`}
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className={`absolute top-0 right-0 h-full w-full max-w-xs bg-white shadow-xl transform transition-transform duration-300 ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Menu Header */}
            <div className="p-4 border-b">
              <div className="flex items-center justify-between mb-4">
                <Link 
                  to="/" 
                  className="flex items-center gap-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">CA</span>
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-gray-900">CA Firm Name</h1>
                    <p className="text-xs text-secondary-600">Chartered Accountants</p>
                  </div>
                </Link>
              </div>
              
              {/* Quick Contact Info */}
              <div className="bg-gray-50 rounded-lg p-3">
                <a 
                  href="tel:+919876543210" 
                  className="flex items-center gap-2 text-gray-700 hover:text-primary-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+91 98765 43210</span>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="overflow-y-auto h-[calc(100vh-180px)]">
              <nav className="p-4">
                {navItems.map((item) => (
                  <div key={item.name} className="mb-1">
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className={`flex items-center justify-between w-full p-3 rounded-lg text-left ${
                            location.pathname.startsWith(item.path)
                              ? 'bg-primary-50 text-primary-700'
                              : 'text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronRight 
                            className={`w-4 h-4 transition-transform duration-200 ${
                              openDropdown === item.name ? 'rotate-90' : ''
                            }`}
                          />
                        </button>
                        
                        {/* Dropdown Items */}
                        <div 
                          className={`overflow-hidden transition-all duration-300 ${
                            openDropdown === item.name ? 'max-h-96' : 'max-h-0'
                          }`}
                        >
                          <div className="pl-4 py-1 space-y-1">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                className="block py-2.5 px-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block p-3 rounded-lg font-medium ${
                          location.pathname === item.path
                            ? 'bg-primary-50 text-primary-700'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Additional Mobile Links */}
              <div className="p-4 border-t">
                <div className="space-y-2">
                  <a 
                    href="#" 
                    className="block p-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Careers
                  </a>
                  <a 
                    href="#" 
                    className="block p-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </a>
                  <a 
                    href="#" 
                    className="block p-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Client Portal
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile CTA Button */}
            <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-4">
              <button 
                className="btn-primary w-full"
                onClick={() => {
                  setIsMenuOpen(false)
                  // You can add navigation to contact page here
                }}
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Add responsive CSS styles */}
      <style jsx>{`
        /* Ensure mobile menu doesn't cause horizontal scroll */
        @media (max-width: 1024px) {
          body.menu-open {
            overflow: hidden;
          }
        }
        
        /* Smooth transitions */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Touch-friendly tap targets */
        @media (max-width: 768px) {
          button, a {
            min-height: 44px;
            min-width: 44px;
          }
        }
      `}</style>
    </>
  )
}

export default Header