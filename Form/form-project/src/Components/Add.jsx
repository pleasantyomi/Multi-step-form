/* eslint-disable no-unused-vars */
import Yearly_add from "./Yearly_add";
import Monthly_add from "./Monthly_add";
import { useState } from "react";

const Add = () => {
    const [type, setType] = useState(0)

    const PageDisplay = () => {
        if (type == 0){
            return <Monthly_add/>;
        }
        else {
            return <Yearly_add/>;
        }
    }
   
    return ( 
        <div className="w-full">
            <div className="mb-7">
                <p className="text-cool-gray">Add-ons help enhance your gaming experience. </p>
            </div>

            <div>
                <PageDisplay/>
            </div>
        </div>
     );
}
 
export default Add;