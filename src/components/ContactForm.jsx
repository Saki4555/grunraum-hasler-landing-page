

import fromBg from '../assets/contact-images/form-bg-1.webp';

const ContactForm = () => {
  const backgroundStyle = {
    backgroundImage: `url(${fromBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
  
      style={backgroundStyle}
      className="px-4 sm:px-7  lg:px-10 text-white w-full md:w-2/3 py-10 relative z-20"
    >
      <div className="absolute inset-0 bg-black/5 -z-10 md:backdrop-blur-[2px]"></div>
      <div className="max-w-3xl mx-auto text-white z-20">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-2">
          Let's Bring Life to Your Garden
        </h2>
        <p className="text-xl mb-8">With Heart and Hand for Your Greenery</p>

        <form className="space-y-4">
          {/* Row 1: Name + Email */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200 ease-in-out"
              required
            />
            <input
              type="email"
              placeholder="E-mail*"
              className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200 ease-in-out"
              required
            />
          </div>

          {/* Row 2: Phone No */}
          <input
            type="tel"
            placeholder="Phone No*"
            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200 ease-in-out"
            required
          />

          {/* Message Box */}
          <textarea
            rows="4"
            placeholder="Message*"
            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-200 ease-in-out"
            required
          />

          {/* Button */}
            <button type='button' className="px-5 backdrop-blur-lg cursor-pointer py-2.5 relative rounded group overflow-hidden font-medium bg-gradient-to-r from-lime-500/80 via-lime-700 to-lime-500/80  text-white inline-block">
            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-lime-500 group-hover:h-full opacity-90"></span>
            <span className="relative group-hover:text-white"> Send  Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
