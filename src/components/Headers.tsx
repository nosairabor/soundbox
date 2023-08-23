interface Props{
    title:string;
    
    children?:React.ReactNode
}


const Headers:React.FC<Props> = ({title,children}) => {
    return (
        <div className="circular-font">
            <div className="flex flex-col items-center h-[274px] bg-[#F4F6F8] relative">
                <h1 className=" header-gradient2 font-bold text-center
                 xl:text-[60px] text-[32px] mt-[95px] z-[1]">{title}</h1>
                {children}
            </div>
            <div className="hidden xl:block absolute top-[81px] right-[20px] z-0">
                <img src={require("../pictures/pricing1.png")}
                alt="" />
            </div>
            <div className="hidden xl:block absolute right-[1px] top-[119px] z-0">
                <img src={require("../pictures/pricing2.png")}
                alt="" />
            </div>
            <div className="xl:hidden absolute right-[1px] top-[58px] z-0" >
                <img src={require("../pictures/vectormobile1.png")}
                alt="" />
            </div>
            <div className=" xl:hidden absolute right-[1px] top-[119px] z-0">
                <img src={require("../pictures/vectormobile2.png")}
                alt="" />
            </div>
        </div>
    );
}
 
export default Headers;