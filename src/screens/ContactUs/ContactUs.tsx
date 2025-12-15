import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

const contactCards = [
  {
    title: "File a claim",
    description:
      "Need to file an Protega claim or check the status of an existing claim?",
    linkText: "File a claims",
    link: "/file-claim",
  },
  {
    title: "Customer Care",
    description: "Need more information about you Protega Coverage?",
    linkText: "Contact Customer Care",
    link: "/customer-care",
  },
  {
    title: "Merchant Support",
    description:
      "Get Protega help when you need it to fuel your success with protega",
    linkText: "Contact Merchant Support",
    link: "/merchant-support",
  },
  {
    title: "Merchant Support",
    description:
      "Get Protega help when you need it to fuel your success with protega",
    linkText: "Contact Merchant Support",
    link: "/merchant-support",
  },
];

export const ContactUs = (): JSX.Element => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-20 md:pt-[80px]">
        {/* ================= HERO SECTION ================= */}
        <section
          className="relative w-full min-h-[360px] md:min-h-[520px] overflow-hidden"
          style={{
            background: `
              radial-gradient(
                55% 60% at 72% 45%,
                rgba(0, 165, 200, 0.45) 0%,
                rgba(10, 15, 26, 0.9) 55%,
                #000000 100%
              )
            `,
          }}
        >
          <div className="flex absolute top-[90px] md:top-[130px] right-0 md:right-[4%] flex-col gap-6 md:gap-12 z-10">
            <div className="w-[280px] md:w-[500px] h-[50px] md:h-[57px] bg-[#03758b]" />
            <div className="w-[280px] md:w-[500px] h-[50px] md:h-[57px] bg-[#111111]" />
            <div className="w-[280px] md:w-[500px] h-[50px] md:h-[57px] bg-[#111111]" />

          </div>

          <div className="relative z-20 max-w-[1440px] mx-auto h-full px-6 flex items-center justify-center">
            <div className="text-center translate-y-[120px] md:translate-y-[140px]">
              <p className="text-white text-base md:text-lg mb-4">Contact us</p>
              <h1 className="text-white font-bold leading-tight" style={{ fontSize: "clamp(2.5rem, 10vw, 90px)" }}>
                Let&apos;s talk.
              </h1>
            </div>
          </div>
        </section>

        {/* ================= CONTACT CARDS ================= */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[1000px] mx-auto mb-8">
            {contactCards.map((card, index) => (
              <Link key={index} to={card.link}>
                <Card className="bg-[#151515] hover:bg-[#1f1f1f] transition rounded-lg border-0 h-full">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="text-[#00c5fb] text-xl font-bold mb-3">
                      {card.title}
                    </h3>
                    <p className="text-[#b8b8b8] text-sm mb-6">
                      {card.description}
                    </p>
                    <div className="flex items-center gap-2 text-[#00c5fb]">
                      <span className="text-sm">{card.linkText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Contact Details */}
          <Link to="/contact-details">
            <Card className="bg-[#151515] hover:bg-[#1f1f1f] transition rounded-lg border-0 max-w-[1000px] mx-auto">
              <CardContent className="p-6 md:p-8 flex items-center justify-between">
                <h3 className="text-[#00c5fb] text-xl font-bold">
                  Contact Details
                </h3>
                <div className="flex items-center gap-2 text-[#00c5fb]">
                  <span className="text-sm">Contact us</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </section>

        {/* ================= ABOUT SECTION ================= */}
        <section className="max-w-[1440px] mx-auto px-4 md:px-6 pb-24">
          <div className="relative h-[300px] md:h-[400px] max-w-[900px] mx-auto rounded-lg overflow-hidden">
            <img
              src="/frame-190.png"
              alt="About Protega"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative h-full flex flex-col justify-center pl-6 md:pl-[80px]">
              <span className="text-xs uppercase tracking-widest text-black mb-2">
                ABOUT US
              </span>
              <h2 className="text-black text-2xl md:text-4xl font-bold mb-6 md:mb-12">
                We protect what
                <br />
                people love.
              </h2>

              <Button className="bg-[#00c5fb] hover:bg-[#00b0e0] text-black w-full sm:w-[220px]">
                Learn More About Protega
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
