import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export const Header = (): JSX.Element => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-3 md:px-6 py-2.5 md:py-4 flex flex-wrap items-center justify-between gap-x-2">
        <Link to="/">
          <img
            className="h-7 md:h-8 w-auto max-w-full"
            alt="Protega logo"
            src="/protega-logo-new-.svg"
          />
        </Link>

        <nav className="flex flex-wrap items-center gap-2 md:gap-8 min-w-0">
          <button className="flex items-center gap-1 font-inter font-normal text-white text-sm md:text-base hover:text-[#00c5fb] transition-colors">
            For Merchants
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-1 font-inter font-normal text-white text-sm md:text-base hover:text-[#00c5fb] transition-colors">
            For Customers
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-1 font-inter font-normal text-white text-sm md:text-base hover:text-[#00c5fb] transition-colors">
            Company
            <ChevronDown className="w-4 h-4" />
          </button>
        </nav>

        <div className="flex flex-wrap items-center gap-2 md:gap-4 min-w-0">
          <Button
            variant="outline"
            className="px-3 py-1.5 md:px-6 md:py-2 rounded-[5px] border-[1.5px] border-white bg-transparent hover:bg-white hover:text-black text-white transition-all"
          >
            <span className="font-inter font-normal text-xs md:text-sm">
              File a Claims
            </span>
          </Button>

          <Button
            variant="outline"
            className="px-3 py-1.5 md:px-6 md:py-2 rounded-[5px] border-[1.5px] border-white bg-transparent hover:bg-white hover:text-black text-white transition-all"
          >
            <span className="font-inter font-normal text-xs md:text-sm">Schedule a Demo</span>
          </Button>
        </div>
      </div>
    </header>
  );
};
