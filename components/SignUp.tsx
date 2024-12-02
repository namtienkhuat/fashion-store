import Image from "next/image";

export default function SignUp() {
    return (
        <div className="bg-primary rounded-[20px] mt-[171px] mx-[160px] pb-[43.5px]">
            <h3 className=" font-bold text-[24px] text-white text-center pt-[43.5px] px-[100px] pb-[54px]">
                Sign up now so your selected item are saved to your personal
                cart.
            </h3>
            <div className=" bg-white rounded-[20px] grid grid-cols-[2fr_1fr] gap-x-[12px] px-[22px] py-[27px] mx-[140px]">
                <input
                    type="text"
                    placeholder="Enter your Email"
                    className="border-solid border border-[#3734A9] rounded-[10px] py-[14px] px-[28px]"
                />
                <div className="flex bg-primary rounded-[10px] justify-center items-center">
                    <button className="font-bold text-[18px] text-white">
                        Sign up now
                    </button>
                    <Image
                        src="/vector.svg"
                        width={40}
                        height={34}
                        alt=""
                        className="pl-[8px] pr-[20.35px] "
                    />
                </div>
            </div>
        </div>
    );
}
