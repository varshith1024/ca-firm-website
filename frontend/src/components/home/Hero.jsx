// src/components/home/Hero.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Users, Award, TrendingUp } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
      
      <div className="relative container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted by 1000+ Clients</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Professional{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
                Chartered Accountancy
              </span>{' '}
              Services
            </h1>
            
            <p className="text-xl text-secondary-600 mb-8 max-w-2xl">
              Comprehensive audit, tax, and advisory solutions for businesses of all sizes. 
              We deliver excellence with four decades of expertise in financial consulting.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { icon: <Users className="w-5 h-5" />, value: '600+', label: 'Professionals' },
                { icon: <Award className="w-5 h-5" />, value: '2+', label: 'Years Experience' },
                { icon: <TrendingUp className="w-5 h-5" />, value: '20+', label: 'Industries Served' },
              ].map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-primary-600">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-secondary-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
          
          {/* Right Side - Image/Graphics */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    '2+ Years of Excellence',
                    'Certified Chartered Accountants',
                    '360° Business Solutions',
                    'Technology-Driven Approach',
                    'Dedicated Client Success Teams',
                    'Global Compliance Expertise'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-100 rounded-full blur-xl opacity-50" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-100 rounded-full blur-xl opacity-30" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero