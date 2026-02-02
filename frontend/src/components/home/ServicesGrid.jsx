// src/components/home/ServicesGrid.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, Calculator, Briefcase, BarChart, Users, Shield, ArrowRight } from 'lucide-react'

const ServicesGrid = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Audit & Assurance',
      description: 'Comprehensive audit services including statutory, internal, and tax audits with detailed compliance reporting.',
      features: ['Statutory Audit', 'Internal Audit', 'Tax Audit', 'IFRS Compliance'],
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Taxation Services',
      description: 'End-to-end tax planning, compliance, and advisory for individuals and corporates across jurisdictions.',
      features: ['Direct Tax', 'GST Compliance', 'Transfer Pricing', 'International Tax'],
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Business Consulting',
      description: 'Strategic advisory for M&A, valuations, due diligence, and corporate restructuring.',
      features: ['M&A Advisory', 'Business Valuation', 'Due Diligence', 'Deal Structuring'],
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Accounting Services',
      description: 'Bookkeeping, financial reporting, payroll processing, and management information systems.',
      features: ['Bookkeeping', 'Financial Reporting', 'Payroll', 'MIS Setup'],
      gradient: 'from-orange-500 to-orange-600',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Corporate Compliance',
      description: 'Secretarial services, ROC filings, GST compliance, and regulatory advisory.',
      features: ['ROC Filings', 'GST Compliance', 'Company Law', 'FEMA Advisory'],
      gradient: 'from-red-500 to-red-600',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Risk Advisory',
      description: 'Internal controls, fraud prevention, ESG compliance, and risk management frameworks.',
      features: ['Internal Controls', 'Fraud Prevention', 'ESG Compliance', 'Risk Management'],
      gradient: 'from-cyan-500 to-cyan-600',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">OUR SERVICES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-secondary-600">
            Comprehensive financial and business solutions tailored to meet your specific needs
            with expertise drawn from decades of experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden card-hover"
            >
              {/* Icon Header */}
              <div className={`bg-gradient-to-r ${service.gradient} p-6`}>
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-secondary-500">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to={`/services/${service.title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group/link"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link to="/services" className="btn-primary inline-flex items-center gap-2">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid