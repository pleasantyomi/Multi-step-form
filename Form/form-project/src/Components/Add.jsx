/* eslint-disable no-unused-vars */
import { useState } from "react";

const Add = () => {
    const [adds, setAdd] = useState([
        {title: 'Online service', subtitle: 'Access to multiplayer games', price: '+$1/mo', id: 1},
        {title: 'Larger storage', subtitle: 'Extra 1TB of cloud save', price: '+$2/mo', id: 2},
        {title: 'Customizable profile', subtitle: 'Custom theme on your profile', price: '+$2/mo', id: 3},
    ])
    return ( 
        <div className="w-full">
            <div className="mb-7">
                <p className="text-cool-gray">Add-ons help enhance your gaming experience. </p>
            </div>

            <div>
                {adds.map((add) =>(
                <div key={adds.id}>
                    <div className="flex justify-between py-3 px-5 border border-light-gray items-center rounded-md mb-4 gap-20 cursor-pointer">
                        <div className="flex items-center gap-4">
                           <div>
                             <input type="checkbox"/>
                           </div>

                           <div className="leading-none">
                              <h1 className="font-semibold text-marine-blue">{add.title}</h1>
                              <p className="text-sm text-cool-gray">{add.subtitle}</p>
                           </div>
                        </div>
                       

                       <div>
                         <p className="text-marine-blue">{add.price}</p>
                       </div>
                    </div>
                </div>
                ))}
               
            </div>

        
        </div>
     );
}
 
export default Add;