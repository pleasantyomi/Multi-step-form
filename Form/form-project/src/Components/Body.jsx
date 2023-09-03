/* eslint-disable no-unused-vars */
import { useState } from "react";
import Info from './Info'
import Plan from './Plan'
import Add from './Add'
import Finish from './Finish'
// import Summary from './Summary'

const Body = () => {
    const[Page, setPage] = useState(0);

    const nextPage = () => {
        setPage (Page + 1);
    };

    const prevPage = () => {
        setPage (Page - 1);
    };

    // const Pages = () => {
    //     setPage (Page === PageTtiles);
    // };

    const PageTtiles = ["Personal Info", "Select your plans", "Pick add-ons", "Finishing up"];

    const PageDisplay = () => {
        if (Page === 0) {
            return <Info/>;
        }
        else if (Page === 1) {
            return <Plan/>;
        }
        else if (Page === 2) {
            return <Add/>;
        }  
        else if (Page === 3) {
            return <Finish/>
        }
        // else {
        //     return <Summary/>;
        // }
    };

    const[list, setList] = useState([
        {number: '1', title: 'STEP 1', subtitle: 'YOUR INFO', id: 1},
        {number: '2', title: 'STEP 2', subtitle: 'SELECT PLAN', id: 2},
        {number: '3', title: 'STEP 3', subtitle: 'ADD-ONS', id: 3},
        {number: '4', title: 'STEP 4', subtitle: 'SUMMARY', id: 4},
    ]);


    return ( 
        <div className="relative h-screen bg-light-gray font-primary">
            <div className="lg:absolute lg:top-[50%] lg:-translate-y-1/2 lg:left-[50%] lg:-translate-x-1/2 lg:bg-white lg:flex lg:w-8/12 h-[80vh] lg:rounded-xl  lg:shadow-sm lg:p-3">
                <div  className=" lg:bg-desktopbg bg-mobilebg flex-shrink-0 flex-nowrap lg:w-4/12 w-full h-full bg-contain   bg-no-repeat lg:pl-5 lg:mr-6 lg:pt-10">
                    <div className="lg:block flex justify-center gap-5 lg:pt-0 pt-10">
                       {list.map((lists) => (
                       <div key={lists.id}>
                            <ul>
                                <li className="flex items-center lg:mb-5">
                                    <div className="relative bg-transparent border border-white w-9 h-9 rounded-full mr-3">
                                     <p className="absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 text-white">{lists.number}</p>
                                    </div>
                                    <div className="hidden lg:grid text-white">
                                       <span className="text-xs font-thin text-light-gray">{lists.title}</span>
                                       <span className="font-semibold">{lists.subtitle}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:block lg:relative lg:ml-6 lg:h-full lg:w-6/12">
                    <div className="text-left font-bold text-3xl text-marine-blue mt-14">{PageTtiles[Page]}</div>

                    <div>{PageDisplay()}</div>

                    <div className="flex justify-between items-center">
                       <button onClick={prevPage} disabled={Page == 0} className="absolute bottom-0 mb-5 font-semibold text-cool-gray">{Page === 0 ? "" : "Go Back"}</button>
                       <button onClick={nextPage} disabled={Page === PageTtiles.length - 1} className="absolute bottom-0 right-0 mb-5 bg-marine-blue font-semibold text-white px-4 py-2 rounded-md">{Page === PageTtiles.length - 1 ? "Confirm" : "Next Step"}</button>
                    </div>
               </div>

               <div className="lg:hidden w-11/12 ml-auto mr-auto">
                    <div className="h-[10vh]">
                        <div className="absolute top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 bg-white rounded-md w-11/12 h-fit px-5 pb-10">
                            <div className="text-left font-bold text-3xl text-marine-blue mt-14">{PageTtiles[Page]}</div>
                            <div>{PageDisplay()}</div>
                        </div>
                    </div>
                   
                    <div className="flex justify-between items-center">
                       <button onClick={prevPage} disabled={Page == 0} className="font-semibold text-cool-gray">{Page === 0 ? "" : "Go Back"}</button>
                       <button onClick={nextPage} disabled={Page === PageTtiles.length - 1} className=" bg-marine-blue font-semibold text-white px-4 py-2 rounded-md">{Page === PageTtiles.length - 1 ? "Confirm" : "Next Step"}</button>
                    </div>
                </div>

            </div>
        </div>

     );
}
 
export default Body;