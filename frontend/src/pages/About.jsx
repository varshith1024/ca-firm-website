import React from 'react';
import { Users, Award, Clock, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Firm</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            With decades of experience, we provide comprehensive financial and business advisory services to clients across industries.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, value: "600+", label: "Professionals" },
              { icon: <Award className="w-8 h-8" />, value: "40+", label: "Years Experience" },
              { icon: <Clock className="w-8 h-8" />, value: "24/7", label: "Client Support" },
              { icon: <Globe className="w-8 h-8" />, value: "50+", label: "Industries Served" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                To deliver exceptional value through innovative financial solutions, building lasting partnerships with our clients based on trust, integrity, and professional excellence.
              </p>
              <p className="text-gray-700">
                We strive to be the preferred advisor for businesses seeking growth, compliance, and strategic direction in an increasingly complex regulatory environment.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-700">
                To be recognized as India's most trusted and innovative chartered accountancy firm, setting benchmarks in professional excellence and client service while contributing to the growth of the nation's economy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// This is the default export that React Router needs
export default About;