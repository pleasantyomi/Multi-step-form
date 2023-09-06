/* eslint-disable no-unused-vars */
import Monthly_plan from './Monthly_plan';
import Yearly_plan from './Yearly_plan';
import { useState } from 'react';

const Plan = () => {
    const[type, setType] = useState(0)

    const PageDisplay = () =>{
        if (type == 0) {
            return <Monthly_plan/>;
        }
        else {
            return <Yearly_plan/>;
        }
    }

    const monthly = () =>{
        setType(type == 0);
    };

    const yearly = () =>{
        setType(type + 1);
    };

    return ( 
        <div>
             <div className="mb-7">
                <p className="text-cool-gray">You have the option of monthly or yearly billing.</p>
            </div>

            <div>
                <PageDisplay/>
                <div  className="bg-magnolia w-full h-10 rounded-md">
                    <div className="flex justify-center">
                        <div>
                           <button disabled={type == 0} onClick={monthly}>Monthly</button>
                        </div>

                        <div>
                            <button onClick={yearly}>Yearly</button>
                        </div>
                    </div>
                </div>  

            </div>
        </div>
     );
}
 
export default Plan;