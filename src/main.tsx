import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContactUs } from "./screens/ContactUs";
import { ContactDetails } from "./screens/ContactDetails";
import { CustomerCare } from "./screens/CustomerCare";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactUs />} />
        <Route path="/contact-details" element={<ContactDetails />} />
        <Route path="/customer-care" element={<CustomerCare />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
