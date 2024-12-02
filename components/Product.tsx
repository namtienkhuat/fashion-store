import Image from "next/image";
import { useState } from "react";

export default function Product({
    item,
    handle,
    onClick,
    handleStore,
    handleUpdate,
}: any) {
    //  lam chuc nang them san pham
    const handleAddProduct = (event: any) => {
        event.stopPropagation();
        onClick(item);
        handleStore(item);
    };

    const handleUpdateTotal = (event: any) => {
        event.stopPropagation();
    };

    const handleT = () => {
        console.log({ ...item, total: item.total + 1 });
        handleUpdate({ ...item, total: item.total + 1 });
    };
    const handleG = () => {
        handleUpdate({ ...item, total: item.total - 1 });
    };

    return (
        <div className="px-[8px] pt-[8px] h-fit" key={item.id} onClick={handle}>
            <Image
                src={item.image}
                alt=""
                width={264}
                height={264}
                className="rounded-[10px]"
            />
            <div className="pt-[8px] px-[8px] pb-[16px] flex items-center gap-1">
                <div className="flex flex-col gap-y-[8px] overflow-hidden w-[calc(100%_-_47px)]">
                    <h3 className="font-[700] text-[15px] text-[#00171F] text-ellipsis overflow-hidden whitespace-nowrap">
                        {item.title}
                    </h3>
                    <div className="flex">
                        <span className="italic font-[400] text-[10px] text-[#667479]">
                            Gene:
                        </span>
                        <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
                            {item.gene}
                        </span>
                        <Image
                            src="/cham.svg"
                            alt=""
                            width={18}
                            height={18}
                            className="p-[7px]"
                        />
                        <span className="italic font-[400] text-[10px] text-[#667479]">
                            Age:
                        </span>
                        <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
                            {item.age}
                        </span>
                    </div>
                    <div className="font-[700] text-[12px] text-[#00171F] flex justify-between items-center">
                        <h3>{item.price}</h3>
                        <div
                            className="flex items-center"
                            onClick={handleUpdateTotal}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 hover:bg-[#3734A9] hover:text-white"
                                onClick={handleT}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                            {/* thay updateTotal = item.total */}
                            <h3>store: {item.total}</h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 hover:bg-[#3734A9] hover:text-white"
                                onClick={handleG}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 12h14"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div
                    className="p-[10px] bg-[#3734A9] rounded-[20px] h-fit"
                    onClick={handleAddProduct}
                >
                    <Image
                        src="/xe.svg"
                        alt=""
                        width={27}
                        height={27}
                        className="min-w-[27px]"
                    ></Image>
                </div>
            </div>
            <h3>Tong so tien: {item.total * item.price}</h3>
        </div>
    );
}
