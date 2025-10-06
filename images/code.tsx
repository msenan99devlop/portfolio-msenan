import { useState } from "react";
import { Mail, User, Calendar, MapPin, ArrowRight, Download } from "lucide-react";

const ProfileWebsite = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full bg-white p-1 shadow-2xl">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/678068c8-2eb1-4948-b5d5-509c60783658.png" 
                alt="Professional headshot of a smiling person with a modern background" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Alex Johnson</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-4">Frontend Developer & UI Designer</p>
              <p className="text-blue-100 max-w-2xl">
                Creating beautiful, functional web experiences with modern technologies and user-centered design principles.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex overflow-x-auto gap-6 py-4">
            {[
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "contact", label: "Contact" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* About Section */}
        {activeTab === "about" && (
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About Me</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    I'm a passionate frontend developer with 5+ years of experience creating 
                    responsive, accessible web applications. I specialize in React, TypeScript, 
                    and modern CSS frameworks while maintaining a strong focus on user experience 
                    and performance optimization.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    When I'm not coding, you can find me exploring new hiking trails, reading 
                    science fiction novels, or experimenting with photography. I believe in 
                    continuous learning and staying updated with the latest web technologies.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">28 years old</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Available for freelance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">alex.johnson@email.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Experience</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Senior Frontend Developer</h4>
                  <p className="text-blue-600 mb-2">TechCorp Inc. • 2021 - Present</p>
                  <p className="text-gray-700">
                    Lead frontend development for enterprise SaaS products, mentoring junior 
                    developers and implementing modern React patterns.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Frontend Developer</h4>
                  <p className="text-blue-600 mb-2">StartUp Solutions • 2019 - 2021</p>
                  <p className="text-gray-700">
                    Built responsive web applications using React and Vue.js, collaborating 
                    closely with design teams to create pixel-perfect interfaces.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeTab === "skills" && (
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Technical Skills</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Frontend Technologies</h3>
                  <div className="space-y-4">
                    {[
                      { skill: "React", level: 95 },
                      { skill: "TypeScript", level: 90 },
                      { skill: "JavaScript", level: 92 },
                      { skill: "HTML/CSS", level: 88 },
                      { skill: "Tailwind CSS", level: 85 }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700">{item.skill}</span>
                          <span className="text-gray-600">{item.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${item.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Tools & Others</h3>
                  <div className="space-y-4">
                    {[
                      { skill: "Git", level: 87 },
                      { skill: "Webpack", level: 78 },
                      { skill: "Figma", level: 82 },
                      { skill: "Node.js", level: 75 },
                      { skill: "AWS", level: 70 }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-1">
                          <span className="text-gray-700">{item.skill}</span>
                          <span className="text-gray-600">{item.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${item.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Certifications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">React Developer Certification</h4>
                  <p className="text-blue-700 text-sm">Meta • 2023</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">AWS Cloud Practitioner</h4>
                  <p className="text-blue-700 text-sm">Amazon Web Services • 2022</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeTab === "projects" && (
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dff94558-391b-4f33-ad00-7518cd9ae628.png" 
                    alt="E-commerce dashboard interface showing analytics charts and product statistics" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">E-Commerce Dashboard</h3>
                    <p className="text-gray-600 mb-4">
                      A comprehensive admin dashboard for online stores with real-time analytics.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">TypeScript</span>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Chart.js</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                      View Project <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/53e2f4d0-c7b8-4996-b686-ed7f105e1ae4.png" 
                    alt="Task management application interface with colorful cards and progress tracking" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Task Management App</h3>
                    <p className="text-gray-600 mb-4">
                      Collaborative project management tool with drag-and-drop functionality.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Vue.js</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Firebase</span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Tailwind</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                      View Project <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/036040d6-2d0e-4a91-86f2-e595b97b962b.png" 
                    alt="Weather application showing forecast data with clean modern interface design" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Weather Forecast App</h3>
                    <p className="text-gray-600 mb-4">
                      Real-time weather application with location-based forecasts and alerts.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">React</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">OpenWeather API</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Framer Motion</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                      View Project <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3b33133c-dfc4-4fe5-8bda-919b887ea5df.png" 
                    alt="Social media platform interface with user profiles and content feed" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Social Media Platform</h3>
                    <p className="text-gray-600 mb-4">
                      Community-driven social network with real-time messaging and content sharing.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Next.js</span>
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">MongoDB</span>
                      <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Socket.io</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                      View Project <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeTab === "contact" && (
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">alex.johnson@email.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">San Francisco, California</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">in</span>
                      </div>
                      <span className="text-gray-700">linkedin.com/in/alexjohnson</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">G</span>
                      </div>
                      <span className="text-gray-700">github.com/alexjohnson</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Send a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="How can I help you?"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Download Resume</h3>
                  <p className="text-gray-600">Get a PDF version of my resume and portfolio</p>
                </div>
                <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Alex Johnson. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfileWebsite;