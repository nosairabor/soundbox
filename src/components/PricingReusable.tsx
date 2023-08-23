interface Props {
    title: string;
    imageUrl: string;
    upfrontPayment: string;
    monthlyPayment1: string;
    convenienceFee1: string;

    initiatePayment1: string;
    monthlyPayment2: string;
    convenienceFee2:string;

    initiatePayment2:string;
    monthlyPayment3:string;
    convenienceFee3:string;

    children?: React.ReactNode
  }

const PricingReusable:React.FC<Props> = ({
    title,
    imageUrl,
    upfrontPayment,
    monthlyPayment1,
    convenienceFee1,
    initiatePayment1,
    monthlyPayment2,
    convenienceFee2,
    initiatePayment2,
    monthlyPayment3,
    convenienceFee3,
    children,
}) => {

    return (
      <div className="w-full max-w-[338px]  xl:max-w-[517px] mt-[50px] mb-10 xl:mb-0 md:mt-0 
      md:border bg-white rounded-[10px] md:border-grey p-0 xl:p-0 md:p-2 md:mb-0"
      >
        
        <div className="flex flex-col items-center justify-center">
          {children}
          <div className="mt-[30px]">
            <img src={imageUrl} alt=""/>
          </div>
          <h2 className="text-[24px] font-[500] text-center">
            {title}
          </h2>
          <button className="mt-[20px] py-[15px] px-[122px] xl:px-[188px] text-blue border rounded-[5px] border-blue">
            Buy Now
          </button>
        </div>
        <p className="ml-[12px] xl:ml-[30px] mt-[20px] text-[20px] font-medium">Deluxe Package</p>
        <div className="flex flex-col rounded-[10px] justify-between mt-[10px] mx-auto w-[318px] xl:w-[457px]
         bg-[#F4F6F8] h-[188px] font-[450]">
          <div className="flex justify-between border-b border-grey p-4">
            <p className="text-secondary font-[450]">Upfront Payment</p>
            <p>{upfrontPayment}</p>
          </div>
          <div className="flex justify-between border-b border-grey p-3">
            <p className="text-secondary font-[450]">Monthly Payment</p>
            <p>{monthlyPayment1}</p>
          </div>
          <div className="flex justify-between p-3">
            <p className="text-secondary font-[450]">Convenience Fee<br/>(Per transaction)</p>
            <p className="pt-2">{convenienceFee1}</p>
          </div>
        </div>
        <p className="ml-[12px] xl:ml-[30px] mt-[20px] text-[20px] font-medium">Executive Package</p>
        <div className="flex flex-col rounded-[10px] justify-between mt-[10px] mx-auto w-[318px]
        xl:w-[457px] bg-[#F4F6F8] h-[188px] font-[450]">
          <div className="flex justify-between border-b border-grey p-4">
            <p className="text-secondary font-[450]">Initiate Payment</p>
            <p>{initiatePayment1}</p>
          </div>
          <div className="flex justify-between border-b border-grey p-3">
            <p className="text-secondary font-[450]">Monthly Payment(12 months)</p>
            <p>{monthlyPayment2}</p>
          </div>
          <div className="flex justify-between p-3">
            <p className="text-secondary font-[450]">Convenience Fee<br/>(Per transaction)</p>
            <p className="pt-2">{convenienceFee2}</p>
          </div>
        </div>
        <p className="ml-[12px] xl:ml-[30px] mt-[20px] text-[20px] font-medium">Deluxe Package</p>
        <div className="mb-[30px] flex flex-col rounded-[10px] justify-between mt-[10px] 
          mx-auto w-[318px] xl:w-[457px] bg-[#F4F6F8] h-[188px] font-[450]">
          <div className="flex justify-between border-b border-grey p-4">
            <p className="text-secondary font-[450]">Initiate Payment</p>
            <p>{initiatePayment2}</p>
          </div>
          <div className="flex justify-between border-b border-grey p-3">
            <p className="text-secondary font-[450]">Monthly Payment</p>
            <p>{monthlyPayment3}</p>
          </div>
          <div className="flex justify-between p-3">
            <p className="text-secondary font-[450]">Convenience Fee<br/>(Per transaction)</p>
            <p className="pt-2">{convenienceFee3}</p>
          </div>
        </div>
      </div>
    );
}
 
export default PricingReusable;