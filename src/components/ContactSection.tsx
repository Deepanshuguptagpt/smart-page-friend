const ContactSection = () => {
  return (
    <section className="contact py-16 px-6 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="contact-form bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Request a demo</h2>
          <p className="mb-6">Tell us about your use case — we'll propose an automation plan.</p>
          <form id="demoForm" noValidate>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Full name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Company email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Company</label>
              <input
                type="text"
                name="company"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-4 mb-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" type="submit">
                Send request
              </button>
              <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300" type="reset">
                Reset
              </button>
            </div>
            <p className="text-sm text-gray-600">By submitting, you agree to be contacted about your request.</p>
          </form>
        </div>

        <div className="contact-info">
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="mb-2">Sales & Partnerships</p>
          <p className="mb-2">
            <a href="mailto:sales@neuranext.ai" className="text-blue-600 hover:underline">
              sales@neuranext.ai
            </a>
          </p>
          <p className="mb-4">Phone: +91 90000 00000</p>

          <h4 className="text-lg font-semibold mb-2">Office</h4>
          <p className="mb-4">Indore, India</p>

          <div className="social flex gap-4">
            <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
            <a href="#" className="text-blue-600 hover:underline">Twitter</a>
            <a href="#" className="text-blue-600 hover:underline">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;