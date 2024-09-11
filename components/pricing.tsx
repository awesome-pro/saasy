import React from 'react'
import PricingCard from './pricing-card'

function Pricing() {
  return (
    <section className='w-full '>
         <span className='text-center w-full mb-10'>
            <h1 className='heading'>
            A Very Simple Pricing
            </h1>
        </span>
        <div className='flex flex-col md:flex-row gap-2'>
       
       {planFeatures.map((plan, i) => (
           <PricingCard key={i} {...plan} />
        ))}
      </div>
    </section>
  )
}

export default Pricing

const planFeatures =  [
  {
    title: "Free",
    price: "$0",
    features: [
      "5 Reads per day",
      "1 Post per day",
      "No Direct Messages",
      "No Email Support",
      "No Analytics",
      "Ads"
    ],
    color: "gray"
  },
  {
    title: "Premium",
    price: "$19",
    features: [
      "Unlimited Reads",
      "Unlimited Posts",
      "Direct Messages",
      "24 hours Email Support",
      "Advanced Analytics",
      "No Ads"
    ],
    color: "blue"
  },
  {
    title: "Enterprise",
    price: "$49",
    features: [
      "Unlimited Reads",
      "Unlimited Posts",
      "Direct Messages",
      "24 hours Email Support",
      "Advanced Analytics",
      "No Ads",
      "Hire and Get Hired",
      "Custom Branding",
      "Promotion Tools"
    ],
    color: "red"
  }
]