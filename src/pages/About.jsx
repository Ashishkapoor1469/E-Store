import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* About Section */}
          <section className="text-center mb-12 sm:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 sm:mb-6">
              About ElectroShop
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              ElectroShop is your one-stop destination for cutting-edge electronics. Founded in 2023, we strive to bring the latest technology to your fingertips at unbeatable prices. Our mission is to empower customers with high-quality products and exceptional service.
            </p>
          </section>

          {/* Mission Statement */}
          <section className="bg-white shadow-lg rounded-xl p-6 sm:p-8 mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-4">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              To deliver innovative electronics that enhance your lifestyle, backed by a commitment to sustainability, customer satisfaction, and technological advancement.
            </p>
          </section>

          {/* Team Section */}
          <section className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 text-center mb-6 sm:mb-8">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  name: "Jane Doe",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                },
                {
                  name: "John Smith",
                  role: "Chief Technology Officer",
                  image: "https://images.unsplash.com/photo-1519085360753-afbdbdddf6ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                },
                {
                  name: "Emily Johnson",
                  role: "Head of Customer Support",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d877c828f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-40 sm:h-48 object-cover object-center"
                  />
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-semibold text-blue-800">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-4 sm:mb-6">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-4">
              Have questions? Reach out to us at{" "}
              <a
                href="mailto:support@electroshop.com"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                support@electroshop.com
              </a>{" "}
              or call us at{" "}
              <a
                href="tel:+911234567890"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                +91 123-456-7890
              </a>.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base"
            >
              Contact Us
            </a>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;