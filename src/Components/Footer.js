import React from 'react';

function Footer() {
  return (
    <div className="flex justify-between mt-6 text-sm">
      <a href="/terms" style={{ color: 'var(--text-secondary)' }}>
        Terms & Conditions
      </a>
      <a href="/support" style={{ color: 'var(--text-secondary)' }}>
        Support
      </a>
      <a href="/customer-care" style={{ color: 'var(--text-secondary)' }}>
        Customer Care
      </a>
    </div>
  );
}

export default Footer;