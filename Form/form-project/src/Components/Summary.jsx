import icon from './assets/images/icon-thank-you.svg'

const Summary = () => {
    return ( 
        <div>
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 align-middle w-full">
                <div className="mb-3">
                    <img className="ml-auto mr-auto h-16 w-auto" src={icon}/>
                </div>
                <div className="text-center">
                    <h1 className="font-bold text-3xl text-gray-800 mb-1">Thank you!</h1>
                    <p className="text-gray-400">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, feel Free to email us at support@loremgaming.com.</p>
                </div>
            </div>
            
        </div>
     );
}
 
export default Summary;