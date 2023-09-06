/* eslint-disable no-unused-vars */
import { useState } from "react";
import arcade from './assets/images/icon-arcade.svg'
import advanced from './assets/images/icon-advanced.svg'
import pro from './assets/images/icon-pro.svg'

const Monthly_plan = () => {
    const [plans, setPlans] = useState([
        {title: 'Arcade', price:'$9/mo', image: {arcade}, id: 1},
        {title: 'Advanced', price: '$12/mo', image: {advanced}, id: 2},
        {title: 'pro', price: '$15/mo', image: {pro}, id: 3},
    ])

    return (
        <div>
            <div className="flex gap-7 mb-10">
                {plans.map((plan) =>(
                <div key={plan.id} className="flex-shrink-0 flex-nowrap cursor-pointer">
                    <div className="border grid border-light-gray p-3  h-fit lg:w-32 flex-shrink-0 flex-nowrap rounded-md">
                        <img className="mb-7" src={arcade}/>
                        <p className="grid">
                            <span className="font-semibold text-lg text-marine-blue">{plan.title}</span>
                            <span className="font-semibold text-cool-gray">{plan.price}</span>
                        </p>
                    </div>
                </div>
                ))}
            </div>

        </div>
      );
}
 
export default Monthly_plan;