import React from "react";
import PlanCard from "./PlanCard";

const Plans = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "$19",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
      ],
      buttonText: "Choose Plan",
    },
    {
      title: "Standard Plan",
      price: "$49",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
      buttonText: "Choose Plan",
    },
    {
      title: "Premium Plan",
      price: "$99",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6",
      ],
      buttonText: "Choose Plan",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Choose Your Plan
        </h2>
        <p className="text-gray-600 mt-4">
          Select the plan that suits you best
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            buttonText={plan.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default Plans;
