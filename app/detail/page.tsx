"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const data = [
    { id: 1, image: "/card1.jpg", appear: 0 },
    { id: 2, image: "/detail/card_detail1.jpg", appear: 0 },
    { id: 3, image: "/detail/card_detail2.jpg", appear: 0 },
    { id: 4, image: "/detail/card_detail3.jpg", appear: 0 },
];

export default function Detail({ data3 }: any) {
    const [value, setValue] = useState("/card1.jpg");
    const [style, setStyle] = useState("");
    const [change, setChange] = useState(0);
    const [result, setResult] = useState("");
    const handleChange = () => {
        setChange(change + 1);
        console.log(change);
    };
    useEffect(() => {
        if (change === 1) setResult("San pham da duoc them!");
        if (change === 2) setResult("San pham da duoc them truoc do!");
    }, [change]);

    const handleUpdate = (item: any) => {
        setValue(item.image);
        setStyle(
            "rounded-[10px] border-[1px] border-solid border-[#3734A9] object-cover h-full"
        );
        handleClick(item);
    };

    const [count, setCount] = useState(data);

    const handleClick = (item: any) => {
        const element = count.find((b: any) => b.id == item.id); // tìm xem trong mảng quantity có phần tử nào chứa id trùng với id của item hay ko nếu có thì trả ra phần tử đó trong mảng quantity
        if (!element) {
            // nếu element chưa có
            let x = { ...item, appear: 1 }; // tạo ra phần tử mới chứa các key: value của item, đồng thời thêm field appear
            setCount(count.concat(x)); // thêm phần tử mới x vào mảng quantity
        }
        if (element) {
            // nếu element có
            let x = { ...element, appear: ++element.appear }; // tạo ra phần tử mưới chứa các key: vlue của item, đồng thời tăng giá trị của appear lên một đơn vị(do lúc này đã có element thì appear cũng được thêm vào)

            setCount(
                count.map((a: any) => {
                    return a.id == element.id ? x : a; // dùng map để duyệt qua từng phần tử của quantity nếu phần tử đó có id trùng với id của element thì thay thế phần tử đó của quantity bằng phần tử x, còn ko thì thay bằng appear
                })
            );
        }
    };
    return (
        <main className="px-[120px]">
            <div className="px-[40.75px] py-[26.5px] flex items-center justify-between mx-auto">
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

                            <span className="font-[500] text-primary text-[18px] pl-[21px] pr-[29px]">
                                Search
                            </span>
                        </div>
                        <div className="flex items-center">
                            <div className="p-[10px]">
                                {" "}
                                <Image
                                    src="/card.svg"
                                    alt=""
                                    width={28}
                                    height={27}
                                />
                            </div>

                            <span className="font-[500] text-primary text-[18px] pl-[21px]">
                                Card
                            </span>
                        </div>
                    </div>
                    <button className="px-[34px] py-[12px] bg-primary font-[600] text-[18px] text-white rounded-[20px]">
                        Get started
                    </button>
                </div>
            </div>
            <div className="flex items-center font-[700] text-[20px] gap-x-[6px] py-[40px] px-[20px] mt-[53px]">
                <a href="#!" className="no-underline text-primary">
                    Home
                </a>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11 9L14 12L11 15"
                        stroke="#3734A9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <a href="#!" className="no-underline text-primary">
                    Featured Store
                </a>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11 9L14 12L11 15"
                        stroke="#3734A9"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <a href="#!" className="no-underline text-primary">
                    Product Detail
                </a>
            </div>

            <div className="flex items-center justify-evenly ">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-primary "
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                </svg>
                <div className="pt-[16px] pr-[8px] pl-[28px] mb-[39px]">
                    <div className="grid grid-cols-4 pt-[51px] mx-auto mt-[52px]">
                        {count.length > 0 &&
                            count.map((item, index) => (
                                <div key={index} className="flex items-center">
                                    <Image
                                        src={item.image}
                                        alt=""
                                        width={28}
                                        height={27}
                                    ></Image>
                                    <h3>So lan xuat hien: {item.appear}</h3>
                                </div>
                            ))}
                    </div>
                    <Image
                        src={value}
                        alt=""
                        width={660}
                        height={660}
                        className="rounded-[10px]"
                    />
                    <div className="my-[30px] flex flex-col gap-y-[8px]">
                        <h3 className="font-[700] text-[20px] text-[#00171F]">
                            A - shaped gown
                        </h3>
                        <div className="flex">
                            <span className="italic font-[400] text-[10px] text-[#667479]">
                                Gene:
                            </span>
                            <span className="pl-[8px] pr-[4px] text-[10px] font-[700] text-[#667479]">
                                Female
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
                                Ranges
                            </span>
                        </div>
                        <h3 className="font-[700] text-[16px] text-[#00171F]">
                            N8.900.000
                        </h3>
                    </div>
                    <div className="flex justify-between ">
                        {data.length > 0 &&
                            data.map((item, id) => (
                                <div key={id}>
                                    <Image
                                        src={item.image}
                                        alt=""
                                        width={126}
                                        height={186}
                                        className={
                                            item.image == value
                                                ? style
                                                : "rounded-[10px] object-cover h-full"
                                        }
                                        onClick={() => {
                                            handleUpdate(item);
                                        }}
                                    ></Image>
                                </div>
                            ))}
                    </div>
                    <div className="flex justify-between pt-[50px]">
                        {data.length > 0 &&
                            data.map((item, id) => (
                                <h1
                                    key={id}
                                    onClick={() => {
                                        handleUpdate(`${item.image}`);
                                    }}
                                >
                                    {item.id}
                                </h1>
                            ))}
                    </div>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                </svg>
            </div>
            <div className="pt-[51px] mx-auto mt-[45px]">
                <div className="w-[302px] h-[96px] flex flex-col">
                    <span className="text-[#99A2A5] font-[400] text-[14px]">
                        Store Number: 56hp90
                    </span>
                    <span className="text-[#00171F] font-bold text-[24px]">
                        A -shaped gown
                    </span>
                    <span className="text-[#3734A9] font-bold text-[20px] pt-[8px]">
                        N8,900.00
                    </span>
                </div>
                <div className="flex gap-[18px] mt-[18px]">
                    <button className="w-[142px] h-[44px] py-[28px] pt-[10px] pb-[14px] rounded-[57px] font-bold bg-primary text-[#FDFDFD]">
                        Contact us
                    </button>
                    <div className="flex items-center pr-[28px] pl-[24px]  pt-[10px] pb-[14px] w-[268px] h-[44px] border-2 border-solid border-[#3734A9] rounded-[57px] justify-evenly">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-primary"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                            />
                        </svg>

                        <button className="font-bold text-primary">
                            Chat with Store owner
                        </button>
                    </div>
                </div>
                <div className="mt-[18px] flex gap-x-[401px]">
                    <div className="grid grid-cols-[43%_auto] gap-y-[16px]">
                        <span className="italic text-[#383939] text-[14px] font-[300] pt-[8px]">
                            Store Number
                        </span>
                        <span className="text-[#383939] text-[14px] font-[400] pt-[8px]">
                            56hp90
                        </span>

                        <span className="italic text-[#383939] text-[14px] font-[300]">
                            Gender
                        </span>
                        <span className="text-[#383939] text-[14px] font-[400]">
                            Female
                        </span>

                        <span className="italic text-[#383939] text-[14px] font-[300]">
                            Age
                        </span>
                        <span className="text-[#383939] text-[14px] font-[400]">
                            Ranges
                        </span>

                        <span className="italic text-[#383939] text-[14px] font-[300]">
                            Size
                        </span>
                        <span className="text-[#383939] text-[14px] font-[400]">
                            Medium adult
                        </span>

                        <span className="italic text-[#383939] text-[14px] font-[300]">
                            Color
                        </span>
                        <span className="text-[#383939] text-[14px] font-[400]">
                            Brown and yellow
                        </span>

                        <span className="italic text-[#383939] text-[14px] font-[300]">
                            Measurment request
                        </span>
                        <div className="flex items-start justify-between">
                            <span className="text-[#383939] text-[14px] font-[400]">
                                Yes
                            </span>
                            <div className="flex items-center justify-center">
                                <button className="font-[600] text-[14px] text-primary underline">
                                    Request for measurment
                                </button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-[15.26px] h-[10.71px] text-primary"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                                    />
                                </svg>
                            </div>
                        </div>

                        <span className="italic text-[#383939] text-[14px] font-[300]">
                            Location
                        </span>
                        <span className="text-[#383939] text-[14px] font-[400]">
                            Nation wide
                        </span>

                        <span className="italic text-[#383939] text-[14px] font-[300]">
                            Published Date
                        </span>
                        <span className="text-[#383939] text-[14px] font-[400]">
                            16/11/2022
                        </span>

                        <span className="italic text-[#383939] text-[14px] font-[300] pb-[8px]">
                            Additional Information
                        </span>
                        <span className="text-[#383939] text-[14px] font-[400] pb-[8px]">
                            Lorem ipsum dolor sit amet consectetur. Auctor
                            enimsemper egestas felis metus volutpat cursus
                            tortor. Sit.
                        </span>
                    </div>

                    <div className="py-[61px] px-[48px]">
                        <h3 className="font-[800] text-[22px] text-center">
                            Leave a complain or review
                        </h3>
                        <p className="font-[400] text-[16px] text-center leading-[28.46px]">
                            Lorem ipsum dolor sit amet consectetur. Quam libero
                            viverra faucibus condimentum.
                        </p>
                    </div>
                </div>
                <div className="flex mt-[32px] gap-x-[54px]">
                    <button
                        className="py-[19px] px-[89px] text-white bg-primary font-bold text-[18px] rounded-[10px]"
                        onClick={handleChange}
                    >
                        Add to cart
                    </button>
                    <button className=" py-[19px] px-[89px] text-primary bg-white border border-solid border-[#3734A9] font-bold text-[18px] rounded-[10px]">
                        Pay immediately
                    </button>
                </div>
                {result != "" && <h1>{result}</h1>}
            </div>
            <div className="bg-primary rounded-[20px] mt-[239px] mx-[160px] pb-[43.5px]">
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
            <div className="mx-auto border-solid border-t-[1.5px] border-[#3734A9] pt-[76px] px-[90px] mt-[124px] mb-[80px]">
                <div className="grid grid-cols-[1fr_1fr_1fr]">
                    <div className="">
                        <Image
                            src="/logo2.svg"
                            alt=""
                            width={231}
                            height={45}
                        />
                        <p className="font-[400] text-[18px] text-[#7F848D] pt-[30px] pb-[24px]">
                            FashionForAll. Vestibulum non est nisl. Donec eget
                            sodales nisl. Donec ut velit erat.
                        </p>
                        <span className="font-[400] text-[18px]">
                            © 2022 All rights reserved.
                        </span>
                    </div>
                    <div className=" col-start-3 grid grid-cols-2 grid-rows-5 w-[391px] h-[228px]">
                        <span className="font-[400] text-[#7F848D]">
                            Explore
                        </span>
                        <span className="font-[400] text-[#7F848D]">
                            Privacy policy
                        </span>
                        <span className="font-[400] text-[#7F848D]">
                            Product
                        </span>
                        <span className="font-[400] text-[#7F848D]">Legal</span>
                        <span className="font-[400] text-[#7F848D]">
                            Sell your product
                        </span>
                        <span className="font-[400] text-[#7F848D]">
                            Terms of service
                        </span>
                        <span className="font-[400] text-[#7F848D]">
                            Pricing
                        </span>
                        <span className="font-[400] text-[#7F848D]">
                            Help center
                        </span>
                        <span className="font-[400] text-[#7F848D]">
                            Reviews
                        </span>
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
        </main>
    );
}
