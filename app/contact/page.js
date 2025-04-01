export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-12 animate-slide-up">
            Get in touch with our strata management team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Team</h2>
            <div className="space-y-6">
              {/* Property Manager */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">PM</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Sarah Johnson</h3>
                  <p className="text-gray-600">Property Manager</p>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-500">📞 (02) 1234 5678</p>
                    <p className="text-sm text-gray-500">📧 sarah.j@strata.com</p>
                    <p className="text-sm text-gray-500">⏰ Mon-Fri, 9am-5pm</p>
                  </div>
                </div>
              </div>

              {/* Maintenance Coordinator */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">MC</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Michael Chen</h3>
                  <p className="text-gray-600">Maintenance Coordinator</p>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-500">📞 (02) 1234 5679</p>
                    <p className="text-sm text-gray-500">📧 michael.c@strata.com</p>
                    <p className="text-sm text-gray-500">⏰ Mon-Fri, 8am-6pm</p>
                  </div>
                </div>
              </div>

              {/* Accounts Manager */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">AM</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Emma Wilson</h3>
                  <p className="text-gray-600">Accounts Manager</p>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm text-gray-500">📞 (02) 1234 5680</p>
                    <p className="text-sm text-gray-500">📧 emma.w@strata.com</p>
                    <p className="text-sm text-gray-500">⏰ Mon-Fri, 9am-5pm</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 p-4 bg-red-50 rounded-lg">
                <h3 className="font-medium text-red-800">Emergency Contact</h3>
                <p className="text-sm text-red-600 mt-1">For urgent matters outside business hours</p>
                <p className="text-lg font-semibold text-red-700 mt-2">1800 123 456</p>
                <p className="text-sm text-red-600">24/7 Emergency Service</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option>General Inquiry</option>
                  <option>Maintenance Request</option>
                  <option>Financial Matter</option>
                  <option>Complaint</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Office Location */}
        <div className="mt-12 bg-white shadow-xl rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Office Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-gray-900">Head Office</h3>
              <p className="mt-2 text-gray-600">
                123 Strata Street<br />
                Sydney NSW 2000<br />
                Australia
              </p>
              <div className="mt-4">
                <h4 className="font-medium text-gray-900">Business Hours</h4>
                <p className="mt-1 text-gray-600">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday: 9:00 AM - 1:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Map placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 