import React from 'react';
import PricingPlan1 from './pricingPlan1';
import PricingPlan2 from './pricingPlan2';
import PricingPlan3 from './pricingPlan3';

export default () => {
  return (
    <div className="pricing-grid">
      <PricingPlan1 />
      <PricingPlan2 />
      <PricingPlan3 />
    </div>
  );
};
