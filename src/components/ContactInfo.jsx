import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-green-100/40 w-full md:w-1/3   p-8 shadow-md   flex flex-col justify-center">
      <h3 className="text-2xl font-bold text-green-800 mb-6">
        Get in Touch
      </h3>

      <div className="space-y-5 text-green-900 text-sm">
        <div className="flex items-start gap-4">
          <Phone className="mt-1 text-green-700" />
          <div>
            <p className="font-medium">Phone</p>
            <a
              href="tel:+41799397986"
              className="hover:underline block"
            >
              +41 79 939 79 86
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="mt-1 text-green-700" />
          <div>
            <p className="font-medium">Email</p>
            <a
              href="mailto:info@gruenraumhasler.ch"
              className="hover:underline block"
            >
              info@gruenraumhasler.ch
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <MapPin className="mt-1 text-green-700" />
          <div>
            <p className="font-medium">Address</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Zürcherstrasse+304,+8645+Jona"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline block"
            >
              Zürcherstrasse 304<br />
              8645 Jona
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
