import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getServiceBySlug } from '../../data/servicesData'
import { 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  Users, 
  Target,
  BarChart,
  Shield,
  FileText,
  Calculator,
  Briefcase
} from 'lucide-react'

const ServiceDetail = () => {
  const { serviceSlug } = useParams()
  const service = getServiceBySlug(serviceSlug)

  if (!service) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <Link to="/services" className="text-primary-600 hover:text-primary-700">
          ← Back to Services
        </Link>
      </div>
    )
  }

  const icons = {
    FileText: <FileText className="w-8 h-8" />,
    Calculator: <Calculator className="w-8 h-8" />,
    Briefcase: <Briefcase className="w-8 h-8" />,
    BarChart: <BarChart className="w-8 h-8" />,
    Users: <Users className="w-8 h-8" />,
    Shield: <Shield className="w-8 h-8" />
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <Link 
            to="/services" 
            className="inline-flex items-center text-primary-200 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                {icons[service.icon] || <FileText className="w-5 h-5" />}
                <span className="font-medium">{service.subtitle}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-primary-100 max-w-3xl">{service.detailedDescription}</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-md">
              <h3 className="text-xl font-bold mb-4">Quick Contact</h3>
              <p className="mb-6">Get expert consultation for {service.title.toLowerCase()}</p>
              <Link to="/contact" className="btn-white w-full text-center">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Key Features */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary-600" />
                  Key Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              {service.benefits && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <BarChart className="w-6 h-6 text-primary-600" />
                    Benefits
                  </h2>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Process */}
              {service.process && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-primary-600" />
                    Our Process
                  </h2>
                  <div className="space-y-4">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold">
                            {idx + 1}
                          </div>
                          {idx < service.process.length - 1 && (
                            <div className="w-0.5 h-full bg-primary-200 mt-2"></div>
                          )}
                        </div>
                        <div className="pb-6">
                          <h4 className="font-semibold text-gray-900 mb-2">{step}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="space-y-8">
              {/* Team Info */}
              <div className="bg-primary-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary-600" />
                  Our Team
                </h3>
                <p className="text-gray-700">{service.team}</p>
              </div>

              {/* Industries Served */}
              {service.industries && (
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Industries Served</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.industries.map((industry, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-700"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Case Study */}
              {service.caseStudy && (
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                    <Shield className="w-5 h-5" />
                    Case Study
                  </h3>
                  <p className="text-primary-100">{service.caseStudy}</p>
                </div>
              )}

              {/* CTA Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Started</h3>
                <p className="text-gray-600 mb-6">
                  Ready to implement {service.title.toLowerCase()} for your business?
                </p>
                <Link to="/contact" className="btn-primary w-full text-center block">
                  Schedule Consultation
                </Link>
                <p className="text-sm text-gray-500 text-center mt-4">
                  Response within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetail