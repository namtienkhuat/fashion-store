import Image from "next/image";

export default function Footer() {
    return (
        <div className="mx-auto border-solid border-t-[1.5px] border-[#3734A9] pt-[76px] px-[90px] mt-[124px] mb-[80px]">
            <div className="grid grid-cols-[1fr_1fr_1fr]">
                <div className="">
                    <Image src="/logo2.svg" alt="" width={231} height={45} />
                    <p className="font-[400] text-[18px] text-[#7F848D] pt-[30px] pb-[24px]">
                        FashionForAll. Vestibulum non est nisl. Donec eget
                        sodales nisl. Donec ut velit erat.
                    </p>
                    <span className="font-[400] text-[18px]">
                        © 2022 All rights reserved.
                    </span>
                </div>
                <div className=" col-start-3 grid grid-cols-2 grid-rows-5 w-[391px] h-[228px]">
                    <span className="font-[400] text-[#7F848D]">Explore</span>
                    <span className="font-[400] text-[#7F848D]">
                        Privacy policy
                    </span>
                    <span className="font-[400] text-[#7F848D]">Product</span>
                    <span className="font-[400] text-[#7F848D]">Legal</span>
                    <span className="font-[400] text-[#7F848D]">
                        Sell your product
                    </span>
                    <span className="font-[400] text-[#7F848D]">
                        Terms of service
                    </span>
                    <span className="font-[400] text-[#7F848D]">Pricing</span>
                    <span className="font-[400] text-[#7F848D]">
                        Help center
                    </span>
                    <span className="font-[400] text-[#7F848D]">Reviews</span>
                    <div>
                        <span className="font-bold">Social Media</span>
                        <div className="flex justify-between">
                            <Image
                                src="ig.svg"
                                alt=""
                                width={44}
                                height={44}
                            ></Image>
                            <Image
                                src="face.svg"
                                alt=""
                                width={44}
                                height={44}
                            ></Image>
                            <Image
                                src="yt.svg"
                                alt=""
                                width={44}
                                height={44}
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
