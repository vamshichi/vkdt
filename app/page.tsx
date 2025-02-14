import Image from "next/image"
import Link from "next/link"
import {Factory, Cog, Cpu, Wrench, Zap, ArrowRight } from "lucide-react"
import AboutSection from "./about"
import img from '@/public/img/cad1.jpg'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Factory className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">Design Technix</span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#industries" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">

      <section className="relative bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold leading-snug">
            Smart Factory & Industry 4.0 Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Revolutionize your industrial processes with AI, ML, and Digital Twin Solutions.
          </p>
          {/* <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all hover:bg-blue-100 hover:scale-105">
            Explore Our Services
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button> */}
        </div>

        {/* Right Image */}
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={img} // Ensure `img` is correctly imported
            alt="Smart Factory Illustration"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
            priority // Faster loading
          />
        </div>
      </div>
    </section>

<AboutSection />
{/* 
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">About Design Technix</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  Design Technix is a pioneering startup in the field of Smart Factory and Industry 4.0 solutions. With
                  our team of expert engineers and cutting-edge technology, we're transforming industrial processes
                  across India and beyond.
                </p>
                <p className="text-lg text-gray-600">
                  Our comprehensive range of services spans from concept to commissioning, ensuring that your industrial
                  operations are at the forefront of technological innovation.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "30+", description: "Projects Completed" },
                  { title: "5+", description: "Expert Team Members" },
                  { title: "10+", description: "Industries Served" },
                  { title: "100%", description: "Client Satisfaction" },
                ].map((stat, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-2xl font-bold text-blue-600 mb-2">{stat.title}</h3>
                    <p className="text-gray-600">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}

<section id="services" className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 lg:px-12">
    
    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
      Our <span className="text-blue-600">Services</span>
    </h2>

    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <div className="flex items-center space-x-4 mb-6">
          <Wrench className="h-12 w-12 text-blue-600" />
          <h3 className="text-2xl font-bold text-gray-800">Engineering Services</h3>
        </div>
        <p className="text-gray-600 mb-6">
          Comprehensive engineering solutions for process plants and industries.
        </p>
        <button className="text-blue-600 font-semibold flex items-center group">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <div className="flex items-center space-x-4 mb-6">
          <Cog className="h-12 w-12 text-blue-600" />
          <h3 className="text-2xl font-bold text-gray-800">Turnkey Projects</h3>
        </div>
        <p className="text-gray-600 mb-6">
          End-to-end project management and execution for industrial solutions.
        </p>
        <button className="text-blue-600 font-semibold flex items-center group">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <div className="flex items-center space-x-4 mb-6">
          <Cpu className="h-12 w-12 text-blue-600" />
          <h3 className="text-2xl font-bold text-gray-800">AI-ML Solutions</h3>
        </div>
        <p className="text-gray-600 mb-6">
          Cutting-edge artificial intelligence and machine learning implementations.
        </p>
        <button className="text-blue-600 font-semibold flex items-center group">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <div className="flex items-center space-x-4 mb-6">
          <Zap className="h-12 w-12 text-blue-600" />
          <h3 className="text-2xl font-bold text-gray-800">Digital Twin</h3>
        </div>
        <p className="text-gray-600 mb-6">
          Advanced digital twin solutions for real-time monitoring and optimization.
        </p>
        <button className="text-blue-600 font-semibold flex items-center group">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
        <div className="flex items-center space-x-4 mb-6">
          <Factory className="h-12 w-12 text-blue-600" />
          <h3 className="text-2xl font-bold text-gray-800">As-Built Engineering</h3>
        </div>
        <p className="text-gray-600 mb-6">
          Detailed as-built documentation and reverse engineering services.
        </p>
        <button className="text-blue-600 font-semibold flex items-center group">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  </div>
</section>


<section id="industries" className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 lg:px-12">
    
    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
      Industries <span className="text-blue-600">We Serve</span>
    </h2>

    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
        <h3 className="text-center text-xl font-semibold text-gray-800">Mining & Metals</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
        <h3 className="text-center text-xl font-semibold text-gray-800">Refinery</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
        <h3 className="text-center text-xl font-semibold text-gray-800">Oil & Gas</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
        <h3 className="text-center text-xl font-semibold text-gray-800">Process Plants</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
        <h3 className="text-center text-xl font-semibold text-gray-800">Green Hydrogen</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
        <h3 className="text-center text-xl font-semibold text-gray-800">Electrical & Energy</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
        <h3 className="text-center text-xl font-semibold text-gray-800">Material Handling</h3>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
        <h3 className="text-center text-xl font-semibold text-gray-800">Renewable Energy</h3>
      </div>
    </div>
  </div>
</section>


<section id="contact" className="py-20 bg-gray-100">
  <div className="container mx-auto px-6 lg:px-12">
    
    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
      Get in <span className="text-blue-600">Touch</span>
    </h2>

    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
        <div className="space-y-5 text-gray-700">
          <p>
            <strong>Address:</strong> #17-1, Triveni Road, Yeshwanthpur, Bengaluru - India
          </p>
          <div>
            <p className="text-lg font-medium">Vasudeva - Director Operations</p>
            <p>📞 <a href="tel:+919980741922" className="text-blue-600 hover:underline">+91 9980741922</a></p>
            <p>✉️ <a href="mailto:vasu@vkdt.in" className="text-blue-600 hover:underline">vasu@vkdt.in</a></p>
          </div>
          <div>
            <p className="text-lg font-medium">Uday Kumar - Business Development Head</p>
            <p>📞 <a href="tel:+917339522633" className="text-blue-600 hover:underline">+91 7339522633</a></p>
            <p>✉️ <a href="mailto:uday@vkdt.in" className="text-blue-600 hover:underline">uday@vkdt.in</a></p>
          </div>
        </div>
      </div>

      
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-2 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-2 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Design Technix</h3>
            <p className="text-gray-400">Revolutionizing industries with Smart Factory and Industry 4.0 solutions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#industries" className="text-gray-400 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-gray-400 mb-4">Follow us on social media for the latest updates and insights.</p>
            <div className="flex space-x-4">{/* Add social media icons here */}</div>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-4 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Design Technix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

