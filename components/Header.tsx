import Image from "next/image";
import { useState } from "react";

export default function Header({
    increase,
    handleRemove,
    quantity,
    handleMinus,
    handlePlus,
    handleInvoice,
    invoice,
}: any) {
    const [hidden, setHidden] = useState(0);
    const [hidden2, setHidden2] = useState(0);
    const handleHidden1 = () => {
        setHidden(hidden + 1);
    };
    const handleHidden2 = () => {
        setHidden2(hidden2 + 1);
    };
    return (
        <div className="px-[40.75px] py-[26.5px] flex items-center justify-between mx-auto relative">
            <Image src="/logo1.svg" alt="" width={231} height={45} />

            <div className="flex justify-between text-[#00000080] font-[600] gap-x-[59px]">
                <a href="#!" className="text-primary ">
                    Home
                </a>
                <a href="#!">Products</a>
                <a href="#!">Contact</a>
            </div>
            <div className="flex justify-between gap-x-[29px]">
                <div className="flex items-center w-[254.5px]">
                    <div className="flex items-center">
                        <div className="p-[10px]">
                            {" "}
                            <Image
                                src="/search.svg"
                                alt=""
                                width={28}
                                height={27}
                            />
                        </div>

                        <span
                            className="font-[500] text-primary text-[18px] pl-[21px] pr-[29px]"
                            onClick={handleRemove}
                        >
                            Search
                        </span>
                    </div>
                    <div className="flex items-center">
                        <div>
                            <div
                                className="p-[10px] relative"
                                onClick={handleHidden1}
                            >
                                <Image
                                    src="/card.svg"
                                    alt=""
                                    width={28}
                                    height={27}
                                />
                                {increase > 0 ? (
                                    <span className="add font-bold px-[2px] absolute top-0 right-0 text-[12px] rounded-[8px] text-primary bg-white border-[3px] border-solid border-[#3734A9]">
                                        {increase}
                                    </span>
                                ) : undefined}
                            </div>
                            <div className="gap-y-[10px] grid border-solid border-[1px] border-[#3734A9] absolute bg-white top-[80px]">
                                {quantity.length > 0 &&
                                    hidden % 2 == 1 &&
                                    quantity.map((item: any, id: any) => (
                                        <div
                                            key={id}
                                            className="hover:bg-[#3734A9] hover:text-white grid items-center grid-cols-[auto_1fr_auto] gap-[10px] p-[10px] text-primary font-medium"
                                        >
                                            <Image
                                                src={item.image}
                                                alt=""
                                                width={28}
                                                height={27}
                                            ></Image>
                                            <h3 className="overflow-hidden text-ellipsis whitespace-nowrap">
                                                {item.title}
                                            </h3>
                                            <div className="flex gap-x-[5px]">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                    onClick={() =>
                                                        handlePlus(item)
                                                    }
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 4.5v15m7.5-7.5h-15"
                                                    />
                                                </svg>
                                                <span>Total: {item.total}</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="w-6 h-6"
                                                    onClick={() => {
                                                        handleMinus(item);
                                                    }}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M5 12h14"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="relative" onClick={handleHidden2}>
                            <div>
                                <span
                                    className="font-[500] text-primary text-[18px] pl-[21px]"
                                    onClick={handleInvoice}
                                >
                                    Card
                                </span>
                                {hidden2 % 2 == 1 ? (
                                    <h3 className="absolute top-[40px] bg-[#3734A9] text-white min-w-[250px] p-[10px] rounded-[5px]">
                                        Tong hoa don la: {invoice}
                                    </h3>
                                ) : undefined}
                            </div>
                        </div>
                    </div>
                </div>
                <button className="px-[34px] py-[12px] bg-primary font-[600] text-[18px] text-white rounded-[20px]">
                    Get started
                </button>
            </div>
        </div>
    );
}
