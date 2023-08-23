import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

interface PropTypes {
  isOpen: boolean[];
  activeLink: number | null;
  handleLinkClick: (index: number) => void;
}

const Accordion: React.FC<PropTypes> = ({
  isOpen,
  activeLink,
  handleLinkClick,
}) => {
  return (
    <div className="mt-[50px] px-3 xl:px-4 mx-auto max-w-[767px]  p-2 xl:p-0 w-full md:max-w-[1230px] cursor-pointer">
      <div
        className={`flex justify-between text-[20px] xl:text-[24px] border-grey 
          border-t py-[30px] ${activeLink === 0 ? "text-blue" : ""}`}
        onClick={() => handleLinkClick(0)}
      >
        <p className="">What is a soundbox?</p>
        <div className={`${activeLink === 0 ? "text-blue" : ""}`}>
          {isOpen[0] ? <BsChevronUp /> : <BsChevronDown />}
        </div>
      </div>
      <div className="">
        {isOpen[0] ? (
          <div className="accordion-transition">
            <p className="text-secondary text-[18px] xl:text-[20px] font-[400] pb-4">
              Lörem ipsum sor exossade eurohår, i spen. Var semiskop jag ägärat
              etreliga labelt.
              <br />
              Ijäsk prereda semipod, att prenegt.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className={`flex justify-between text-[20px] xl:text-[24px] border-grey 
                border-t py-[30px] ${activeLink === 1 ? "text-blue" : ""}`}
        onClick={() => handleLinkClick(1)}
      >
        <p className="">How can i get one for my business?</p>
        <div className={`${activeLink === 1 ? "text-blue" : ""}`}>
          {isOpen[1] ? <BsChevronUp /> : <BsChevronDown />}
        </div>
      </div>
      <div className="">
        {isOpen[1] ? (
          <div className="accordion-transition">
            <p className="text-secondary text-[18px] xl:text-[20px] font-[400] pb-4">
              Lörem ipsum sor exossade eurohår, i spen. Var semiskop jag ägärat
              etreliga labelt.
              <br />
              Ijäsk prereda semipod, att prenegt.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className={`flex justify-between text-[20px] xl:text-[24px] border-grey 
                border-t py-[30px] ${activeLink === 2 ? "text-blue" : ""}`}
        onClick={() => handleLinkClick(2)}
      >
        <p className="">How secure is Yep!?</p>
        <div className={`${activeLink === 2 ? "text-blue" : ""}`}>
          {isOpen[2] ? <BsChevronUp /> : <BsChevronDown />}
        </div>
      </div>
      <div className="">
        {isOpen[2] ? (
          <div className="accordion-transition">
            <p className="text-secondary text-[18px] xl:text-[20px] font-[400] pb-4">
              Lörem ipsum sor exossade eurohår, i spen. Var semiskop jag ägärat
              etreliga labelt.
              <br />
              Ijäsk prereda semipod, att prenegt.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className={`flex justify-between text-[20px] xl:text-[24px] border-grey 
                border-t py-[30px] ${activeLink === 3 ? "text-blue" : ""}`}
        onClick={() => handleLinkClick(3)}
      >
        <p className="">What is a soundbox?</p>
        <div className={`${activeLink === 3 ? "text-blue" : ""}`}>
          {isOpen[3] ? <BsChevronUp /> : <BsChevronDown />}
        </div>
      </div>
      <div className="">
        {isOpen[3] ? (
          <div className="accordion-transition">
            <p className="text-secondary text-[18px] xl:text-[20px] font-[400] pb-4">
              Lörem ipsum sor exossade eurohår, i spen. Var semiskop jag ägärat
              etreliga labelt.
              <br />
              Ijäsk prereda semipod, att prenegt.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className={`flex justify-between text-[20px] xl:text-[24px] border-grey 
                border-t py-[20px] xl:py-[30px] ${activeLink === 4 ? "text-blue" : ""}`}
        onClick={() => handleLinkClick(4)}
      >
        <p className="">How can I open an account with Yep!?</p>
        <div className={`${activeLink === 4 ? "text-blue" : ""}`}>
          {isOpen[4] ? <BsChevronUp /> : <BsChevronDown />}
        </div>
      </div>
      <div className="">
        {isOpen[4] ? (
          <div className="accordion-transition">
            <p className="text-secondary text-[18px] xl:text-[20px] font-[400] pb-4">
              Lörem ipsum sor exossade eurohår, i spen. Var semiskop jag ägärat
              etreliga labelt.
              <br />
              Ijäsk prereda semipod, att prenegt.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className={`flex justify-between text-[20px] xl:text-[24px] border-grey 
                border-t py-[30px] ${activeLink === 5 ? "text-blue" : ""}`}
        onClick={() => handleLinkClick(5)}
      >
        <p className="">Are there any fees associated with Yep!?</p>
        <div className={`${activeLink === 5 ? "text-blue" : ""}`}>
          {isOpen[5] ? <BsChevronUp /> : <BsChevronDown />}
        </div>
      </div>
      <div className="">
        {isOpen[5] ? (
          <div className="accordion-transition">
            <p className="text-secondary text-[18px] xl:text-[20px] font-[400] pb-4">
              Lörem ipsum sor exossade eurohår, i spen. Var semiskop jag ägärat
              etreliga labelt.
              <br />
              Ijäsk prereda semipod, att prenegt.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className={`flex justify-between text-[20px] xl:text-[24px] border-grey 
                border-t border-b py-[30px] ${
                  activeLink === 6 ? "text-blue border-b-0" : ""
                }`}
        onClick={() => handleLinkClick(6)}
      >
        <p className="">How do I track my payments?</p>
        <div className={`${activeLink === 6 ? "text-blue" : ""}`}>
          {isOpen[6] ? <BsChevronUp /> : <BsChevronDown />}
        </div>
      </div>
      <div className="">
        {isOpen[6] ? (
          <div className="accordion-transition">
            <p
              className="text-[18px] xl:text-[20px] font-[400] pb-4 border-grey 
              text-secondary border-b"
            >
              Lörem ipsum sor exossade eurohår, i spen. Var semiskop jag ägärat
              etreliga labelt.
              <br />
              Ijäsk prereda semipod, att prenegt.
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Accordion;
