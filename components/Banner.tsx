import Image from "next/image";

export default function Banner({}) {
    return (
        <>
            {" "}
            <div className="m-auto bg-[url('/banner.jpg')] object-cover rounded-[20px] py-[34px] flex items-center gap-[300px]">
                <div className=" bg-white rounded-[30px] text-left flex flex-col p-[10px] ml-[120px] h-fit">
                    <span className="font-[400] text-[52px] text-primary ">
                        Trendy Styles..
                    </span>
                    <span className="font-[700] text-primary text-[36px] ">
                        Thousands styles More!
                    </span>
                    <p className="font-[400] text-[12px] leading-[18px]">
                        Having a pet means you have more joy, a new friend, a
                        happy person who will always be with you to have fun. We
                        have 200+ different pets that can meet your needs!
                    </p>
                    <div className="flex items-center gap-[30px] mt-[23px]">
                        <div className="flex items-center">
                            <Image
                                src="/play.svg"
                                alt=""
                                width={34}
                                height={34}
                            />
                            <span className="pl-[9px]">See How It Works</span>
                        </div>
                        <div className="flex bg-primary rounded-[10px] py-[10px] pl-[23px]">
                            <button className="text-[14px] text-white font-[700] ">
                                Shop collections
                            </button>
                            <Image
                                src="/vector.svg"
                                width={44.3}
                                height={37.9}
                                alt=""
                                className="pl-[8px] pr-[20.35px]"
                            />
                        </div>
                    </div>
                </div>
                <Image
                    src="/kid2.jpg"
                    alt=""
                    width={264.19}
                    height={400}
                    className="rounded-[200px] mr-[120px]"
                />
            </div>
            <div>
                <h3 className="font-[700] text-[48px] text-center py-[42px]">
                    Our featured store
                </h3>
            </div>
        </>
    );
}
