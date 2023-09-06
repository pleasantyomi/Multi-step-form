/* eslint-disable no-unused-vars */
import { useState } from "react";
import arcade from './assets/images/icon-arcade.svg'
import advanced from './assets/images/icon-advanced.svg'
import pro from './assets/images/icon-pro.svg'

const Yearly_plan = () => {
    const [plans, setPlans] = useState([
        {title: 'Arcade', price:'$90/yr', image: {arcade}, sub: '2 months free', id: 1},
        {title: 'Advanced', price: '$120/yr', image: {advanced}, sub: '2 months free', id: 2},
        {title: 'pro', price: '$150/yr', image: {pro}, sub: '2 months free', id: 3},
    ])

    return (
        <div>
            <div className="flex gap-7 mb-10">
                {plans.map((plan) =>(
                <div key={plan.id} className="flex-shrink-0 flex-nowrap cursor-pointer">
                    <div className="border grid border-light-gray p-3  h-fit w-32  rounded-md">
                        <img className="mb-7" src={arcade}/>
                        <p className="grid">
                            <span className="font-semibold text-lg text-marine-blue">{plan.title}</span>
                            <span className="text-cool-gray font-semibold">{plan.price}</span>
                            <span className="text-marine-blue text-sm">{plan.sub}</span>
                        </p>
                    </div>
                </div>
                ))}
            </div>

        </div>
      );
}
 
export default Yearly_plan;