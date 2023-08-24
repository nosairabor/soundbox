const HowItWorks = () => {
    return (
        <div className="">
            <section className="  flex flex-col 
                px-5 xl:px-0 md:px-8 md:w-full mt-[100px] "
            >
                <div className="self-center space-y-[80px]">
                    <h1 className="text-[40px] font-[700] ">How it works</h1>
                    <div className="flex    
                        md:flex-row  flex-col space-y-[30px]
                        md:space-y-0 xl:space-y-0 xl:space-x-[50px]"
                    >
                        <div className=" width-full max-w-[368px]">
                            <div className="">
                                <img
                                    src={require("../pictures/scan.png")}
                                    className="text-blue"
                                />
                            </div>
                            <h1 className="text-[26px] font-[700] mt-[30px]">Step 1</h1>
                            <div className="text-secondary text-[18px] width-full max-w-[360px] whitespace-normal  
                                xl:text-[20px] font-[450] mt-[29px]">
                                Customers makes a transfer of the required 
                                amount to the merchant's account
                                displayed on the soundbox.
                            </div>
                        </div>
                        <div className="md:ml-[30px] xl:ml-0">
                            <div className="">
                            <img
                                src={require("../pictures/bell-checked.png")}
                                className="text-blue"
                            />
                            </div>
                            <h1 className="text-[26px] font-[700] mt-[30px]">Step 2</h1>
                            <div className="text-secondary text-[18px] whitespace-normal width-full max-w-[360px] 
                                xl:text-[20px] font-[450] mt-[29px]">
                            Sound box audibly notifies merchant and
                            
                            customer of payment confirmation and
                            amount.
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                            <img
                                src={require("../pictures/check-marks.png")}
                                className="text-blue"
                            />
                            </div>
                            <h1 className="text-[26px] font-[700] mt-[30px]">Step 3</h1>
                            <div className="text-secondary text-[18px] width-full max-w-[360px] 
                             xl:text-[20px] whitespace-normal font-[450] mt-[29px]">
                                Merchant can confirm that account has
                                been credited.
                        </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
 
export default HowItWorks;