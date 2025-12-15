import { Link } from "react-router-dom";

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-[#000000] border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-inter font-normal text-white text-sm">
            Power By
          </span>
          <div className="flex items-center gap-2">
  <img
      src="/protega-logo-new-.svg"
      alt="Protega logo"
      className="h-[32px] w-auto"
  />
</div>

        </div>

        <div className="flex items-center gap-8">
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
