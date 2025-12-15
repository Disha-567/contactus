import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const CustomerCare = (): JSX.Element => {
  return (
    <div className="bg-[#010203] w-full min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-[113px] pb-24">
        <div className="max-w-[1440px] mx-auto px-6 py-24">
          <div className="max-w-[700px] mx-auto">
            <div className="mb-12">
              <h1 className="font-inter font-normal text-white text-[40px] mb-8">
                Contact Us
              </h1>
              <div>
                <h2 className="font-inter font-bold text-white text-[28px] mb-6">
                  Hey there!
                </h2>
                <p className="font-inter font-normal text-white text-lg leading-[1.6] mb-12">
                  Questions on your protection plans – we are here to help!
                  Please fill out the form or if you would like to speak with
                  someone you can call +91-22-69620766
                </p>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="font-inter font-bold text-white text-[24px] mb-6">
                  Address
                </h3>
                <p className="font-inter font-normal text-white text-lg mb-8">
                  EmbedMike India Private Limited
                </p>

                <div className="mb-8">
                  <h4 className="font-inter font-semibold text-white text-xl mb-3">
                    Registered Office:
                  </h4>
                  <p className="font-inter font-normal text-white text-lg leading-[1.6]">
                    Unit 30, Virwani Industrial Estate,
                    <br />
                    Goregaon East, Mumbai 400063
                  </p>
                </div>

                <div>
                  <h4 className="font-inter font-semibold text-white text-xl mb-3">
                    Corporate Office:
                  </h4>
                  <p className="font-inter font-normal text-white text-lg leading-[1.6]">
                    96, Bora Bazaar,
                    <br />
                    Fort, Mumbai 400001
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
