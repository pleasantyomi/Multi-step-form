/* eslint-disable no-unused-vars */
import { useState } from "react";

const Finish = () => {
const [items, setItems] = useState([
    {title: 'Online service', price: '+1$/mo', id: 1},
    {title: 'Local storage', price: '+2$/mo', id: 2},
])

    return (  
        <div>
            <div className="mb-7">
               <p className="text-cool-gray">Double-check everything looks OK before confirming</p>
            </div>

            <div className="w-full h-fit p-5 bg-magnolia rounded-md">
                <div className="flex items-center justify-between">
                    <div className="leading-tight">
                       <h1 className="font-semibold text-marine-blue text-lg">Arcade (Monthly)</h1>
                       <button className="text-cool-gray text-sm underline">Change</button>
                    </div>

                    <div>
                        <span className="font-semibold text-marine-blue text-lg">$9/mo</span>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-light-gray my-5"></div>

                <div>
                    <div>
                        {items.map((item)=>(
                            <div key={item.id} className="flex justify-between text-sm text-cool-gray mb-3">
                                <div>
                                    <span>{item.title}</span>
                                </div>

                                <div>
                                    <span className="text-marine-blue">{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center text-cool-gray mt-3">
                <div>
                    <span>Total (per month)</span>
                </div>

                <div>
                    <span className="font-bold text-xl text-purplish-blue">+$12/mo</span>
                </div>
            </div>

        </div>
    );
}
 
export default Finish;