import React from "react";

function Footer() {
  return (
    <div className="flex justify-between text-base font-medium">
      <a href="/terms" className="cursor-pointer">
        Terms & Conditions
      </a>
      <a href="/support" className="cursor-pointer">
        Support
      </a>
      <a href="/customer-care" className="cursor-pointer">
        Customer Care
      </a>
    </div>
  );
}

export default Footer;
