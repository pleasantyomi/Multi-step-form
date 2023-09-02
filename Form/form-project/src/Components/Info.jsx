/* eslint-disable no-unused-vars */
import { useState } from "react";

const Info = () => {
    const[forms, setforms] = useState([
        {title: 'Name', placeholder: 'e.g. Stephen King', type: 'string', id: 1},
        {title: 'Email Address', placeholder: 'e.g. stephenking@lorem.com', type: 'email', id: 1},
        {title: 'Phone Number', placeholder: 'e.g.+1 234 567 890', type:'tel', id: 1},
    ])

    return (  
        <div className="">
            <div className="mb-7">
                <p className="text-cool-gray">Please provide your name, email address, and phone number. </p>
            </div>

            <div className="mb-5">
                {forms.map((form) => (
                    <div key={form.id} className="mb-5">
                      <label className="text-marine-blue text-sm font-semibold">{form.title}</label>
                      <input type={form.type} placeholder={form.placeholder} required className="block w-full outline outline-[1px] outline-cool-gray rounded-md pl-2 h-10"/>
                    </div>
                ))}
            </div>

          


            
        </div>
    );
}
 
export default Info;