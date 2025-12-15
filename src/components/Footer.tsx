import { Link } from "react-router-dom";

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-[#0a0f1a] border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="font-inter font-normal text-white text-sm">
            Power By
          </span>
          <span className="font-inter font-bold text-white text-sm tracking-wider">
            PROT≡GA
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-4 md:gap-8">
          <Link
            to="/privacy"
            className="font-inter font-normal text-white text-sm hover:text-[#00c5fb] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="font-inter font-normal text-white text-sm hover:text-[#00c5fb] transition-colors"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};
