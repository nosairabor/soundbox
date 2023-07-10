import CustomInput from "./Forms/CustomInput";
import CustomSelect from "./Forms/CustomSelect";
import { FormSchema } from "./Forms/FormSchema";
import {Formik, Form, FormikProps} from "formik"

const Developers = () => {
    interface formValues  {
        firstName: string,
        lastName: string,
        phoneNumber:string,
        email:string,
        state:string,
        quantity:string,
        country: string
    }
    interface Option {
        label: string,
        value: string,
    }
    const quantityOptions:Option[] = [
        {value:"", label:"Select"},
        {value:"1", label:"1"},
        {value:"2", label:"2"},
    ]
    const stateOptions:Option[] = [
        {value:"", label:"Select"},
        {value:"Lagos", label:"Lagos"},
        {value:"Abuja", label:"Abuja"},
        {value:"Kano", label:"Kano"}
    ]
    const countryOptions:Option[] =[
        {value:"", label:"🇳🇬"},
        {value:"Nigeria", label:"🇳🇬 Nigeria"},
        {value:"Cote d'Ivoire", label: "🇨🇮 Cote d'Ivoire"}
    ]
    const initialValues = {
        firstName: "",
        lastName: "",
        phoneNumber:"",
        email:"",
        state:"",
        quantity:"",
        country:""
    }
    return (
        <div className="circular-font">
            <div className="flex flex-col items-center h-[474px] bg-[#F4F6F8] relative">
                <h1 className=" header-gradient2 font-bold text-center
                 xl:text-[60px] text-[32px] mt-[95px] z-[1]">Get your Soundbox</h1>
                <p className="z-[1] mt-[17px] font-[450] text-[20px] text-center">
                    Take your business to the next level. Request 
                    for a soundbox<br className="hidden xl:block"/> device today.
                </p>
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
            

            <div className="w-[368px] md:w-full flex flex-col mx-auto md:flex-row -translate-y-[120px] justify-center mb-[-120px]">
                <div className="">
                    <img
                        src={require("../pictures/sls-1.png")}
                        className="rounded-t-lg md:rounded-l-lg 
                        xl:rounded-l-[18.2px] w-full max-w-[368px] h-[250px]
                        xl:h-full h-full"
                        alt=""
                    />
                </div>
                <div className="bg-white shadow-xl w-[368px] h-[930px] xl:w-[738px] xl:h-[605px]">
                    <div className="ml-[33px] md:ml-[50px] mt-[30px]">
                        <h2 className="text-[20px] xl:flex xl:justify-start xl:items-start font-bold">Tell us about yourself briefly.</h2>
                        <p className="[text-16px] flex xl:items-start font-[450] mt-[10px]">Kindly provide your information below</p>
                    </div>
                    <div className="mb-[70px] flex flex-col items-center xl:mx-[54px]">
                        
                        
                        <Formik
                            initialValues={initialValues}
                            validationSchema={FormSchema}
                            onSubmit={()=>{}}
                            
                        >
                            {(props: FormikProps<formValues>)=>(
                                <Form className="">
                                    <div className="flex flex-col xl:flex-row gap-x-[30px] mt-[40px]">
                                        <div className="flex flex-col">
                                            <label htmlFor="lastName">First Name</label>
                                            <CustomInput
                                                label=""
                                                placeholder="First Name"
                                                name="firstName"
                                                inputClassName="mt-2 border-grey border px-3 rounded-lg w-[300px] py-[12px]"
                                            />
                                        </div>
                                        <div className="mt-2 xl:mt-0 flex flex-col">
                                            <label htmlFor="lastName">Last Name</label>
                                            <CustomInput
                                                label=""
                                                placeholder="Last Name"
                                                name="lastName"
                                                inputClassName="mt-2 border-grey border px-3 rounded-lg w-[300px] py-[12px]"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="mt-[20px] flex flex-col xl:flex-row gap-x-[30px]">
                                        <div className="flex flex-col">
                                            <label htmlFor="lastName">Phone Number</label>
                                            <div className="flex gap-x-3">
                                                
                                                <CustomSelect
                                                    label=""
                                                    name="country"
                                                    options={countryOptions}
                                                    inputClassName="border rounded-lg border-grey w-[50px] h-[48px] mt-[9px]"
                                                />

                                                <CustomInput
                                                    label=""
                                                    placeholder="+234 0 XXX XXXXXX"
                                                    name="phone Number"
                                                    inputClassName="mt-2 border-grey border px-3 rounded-lg w-[240px] py-[12px]"
                                                />
                                            </div>
                                        </div>
                                        <div className="mt-2 xl:mt-0">
                                            <label htmlFor="lastName">Email Address</label>
                                            <CustomInput
                                                label=""
                                                name="email"
                                                placeholder="Email"
                                                inputClassName="mt-2 border-grey border px-3 rounded-lg w-[300px] py-[12px]"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-[20px] flex flex-col xl:flex-row gap-x-[30px]">
                                        <div className="flex flex-col">
                                            <label htmlFor="lastName">Quantity</label>
                                            <CustomSelect
                                                label=""
                                                options={quantityOptions}
                                                name="quantity"
                                                inputClassName="mt-2 border-grey border px-3 rounded-lg w-[300px] py-[12px]"
                                            />
                                        </div>
                                        <div className="mt-2 xl:mt-0 flex flex-col">
                                            <label htmlFor="lastName">State</label>
                                            <CustomSelect
                                                label=""
                                                options={stateOptions}
                                                name="state"
                                                inputClassName="mt-2 border-grey border px-3 rounded-lg w-[300px] py-[12px]"
                                            />
                                        </div>
                                        <button 
                                            type="submit"
                                            className="xl:hidden bg-blue border border-blue py-[15px]
                                            px-[122px] rounded-lg text-white mt-5 "
                                        >
                                            Submit
                                        </button>

                                    </div>
                                    

                                </Form>
                            )}

                        </Formik>
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Developers;