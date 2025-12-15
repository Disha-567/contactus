import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/ui/button";
import { ChevronDown } from "lucide-react";

export const ContactDetails = (): JSX.Element => {
  return (
    <div className="bg-[#010102] w-full min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20 md:pt-[113px] pb-24">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-[540px] mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-inter font-normal text-white text-3xl md:text-[40px] mb-6 md:mb-8">
                Contact Us
              </h1>
              <div className="text-left">
                <h2 className="font-inter font-bold text-white text-xl md:text-[28px] mb-4 md:mb-6">
                  Hey there!
                </h2>
                <p className="font-inter font-normal text-white text-lg leading-[1.6]">
                  Questions on your protection plans – we are here to help!
                  Please fill out the form or if you would like to speak with
                  someone you can call +91-22-69620766
                </p>
              </div>
            </div>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-inter font-normal text-white text-sm mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-[#3a3a3a] border-0 rounded-md font-inter text-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c5fb]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-inter font-normal text-white text-sm mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email ID"
                  className="w-full px-4 py-3 bg-[#3a3a3a] border-0 rounded-md font-inter text-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c5fb]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-inter font-normal text-white text-sm mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Number"
                  className="w-full px-4 py-3 bg-[#3a3a3a] border-0 rounded-md font-inter text-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c5fb]"
                />
              </div>

              <div>
                <label
                  htmlFor="topic"
                  className="block font-inter font-normal text-white text-sm mb-2"
                >
                  Support Topic
                </label>
                <div className="relative">
                  <select
                    id="topic"
                    className="w-full px-4 py-3 bg-[#3a3a3a] border-0 rounded-md font-inter text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#00c5fb] appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="claim">File a Claim</option>
                    <option value="coverage">Coverage Information</option>
                    <option value="merchant">Merchant Support</option>
                    <option value="other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-inter font-normal text-white text-sm mb-2"
                >
                  How can we help you?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-[#3a3a3a] border-0 rounded-md font-inter text-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c5fb] resize-none"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full py-3 bg-transparent border-2 border-[#00c5fb] text-[#00c5fb] rounded-md font-inter font-semibold text-base hover:bg-[#00c5fb] hover:text-black transition-colors"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
