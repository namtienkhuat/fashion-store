import Product from "@/components/Product";
import { useRouter } from "next/navigation";
import Pagination from "./Pagination";

export default function Filter({
    handleClick,
    male,
    handleMale,
    handleFemale,
    female,
    searchTerm,
    handleChange,
    handleFocus,
    focus,
    searchResults,
    handleStore,
    value,
    handleDecrease,
    handleIncrease,
    handleRender,
    setSearchResults,
}: any) {
    const router = useRouter();

    const handleUpdate = (item: any) => {
        const element = searchResults.find((b: any) => b.id == item.id);
        if (element) {
            let x = { ...element, total: item.total };
            setSearchResults(
                searchResults.map((a: any) => {
                    return a.id == element.id ? x : a;
                })
            );
        }
    };

    return (
        <>
            {" "}
            <div>
                <div className="grid grid-cols-[30%_35%_35%] items-center mx-auto">
                    <span className="text-primary font-[700] text-[24px]">
                        Filter
                    </span>

                    <div className="flex items-baseline">
                        <span className="text-primary font-[700] text-[24px] mr-[10px]">
                            Ankara styles
                        </span>
                        <span className="text-[#5B5B5B] font-[400] text-[14px]">
                            Male & Female
                        </span>
                    </div>
                    <div className="grid grid-cols-[1fr_auto] items-center justify-between">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={handleChange}
                            className="w-full p-4 outline-none text-primary "
                            placeholder="Search for the product you need..."
                        />
                        <button className="p-4 text-white bg-primary rounded-[5px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="mx-auto pt-[48px] grid grid-cols-[1fr_4fr] gap-[59px]">
                    <div className="">
                        <div className="flex flex-col">
                            <span
                                className="font-[700] text-[#00171F]"
                                onClick={handleFocus}
                            >
                                Gender
                            </span>
                            {
                                <div
                                    className={`pt-[12px] pb-[16px] ${
                                        focus === 1
                                            ? "text-red-900 font-bold"
                                            : ""
                                    } font-bold`}
                                >
                                    <div>
                                        <input
                                            type="checkbox"
                                            name="male"
                                            checked={male}
                                            onChange={handleMale}
                                        />
                                        <label
                                            htmlFor="male"
                                            className="pl-[10px]"
                                        >
                                            Male
                                        </label>
                                    </div>
                                    <div>
                                        <input
                                            type="checkbox"
                                            name="female"
                                            checked={female}
                                            onChange={handleFemale}
                                        />
                                        <label
                                            htmlFor="female"
                                            className="pl-[10px]"
                                        >
                                            Female
                                        </label>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="flex flex-col">
                            <span className="font-[700] text-[#00171F]">
                                Age group
                            </span>
                            <div className="pt-[12px] pb-[16px]">
                                <div>
                                    <input type="checkbox" name="adult" />
                                    <label
                                        htmlFor="adult"
                                        className="pl-[10px]"
                                    >
                                        Adult
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" name="children" />
                                    <label
                                        htmlFor="children"
                                        className="pl-[10px]"
                                    >
                                        Children
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="font-[700] text-[#00171F]">
                                Price
                            </span>
                            <div className="flex pt-[12px] pb-[16px]">
                                <div>
                                    <select name="min" id="min">
                                        <option value="min">Min</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="max" id="max">
                                        <option value="max">Max</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-[700] text-[#00171F]">
                                Size
                            </span>
                            <div className="pt-[12px] pb-[16px]">
                                <div>
                                    <input type="checkbox" name="small" />
                                    <label
                                        htmlFor="small"
                                        className="pl-[10px]"
                                    >
                                        Small
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" name="medium" />
                                    <label
                                        htmlFor="medium"
                                        className="pl-[10px]"
                                    >
                                        Medium
                                    </label>
                                </div>
                                <div>
                                    <input type="checkbox" name="large" />
                                    <label
                                        htmlFor="large"
                                        className="pl-[10px]"
                                    >
                                        Large
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-x-[17px] gap-y-[24px] grid-cols-4 ">
                        {searchResults.length > 0 &&
                            searchResults.map((item: any) => (
                                <Product
                                    key={item.id}
                                    item={item}
                                    handle={() => router.push("/detail")}
                                    onClick={handleClick}
                                    handleStore={handleStore}
                                    handleUpdate={(event: any) =>
                                        handleUpdate(event)
                                    }
                                ></Product>
                            ))}
                    </div>
                </div>
            </div>
            <Pagination
                value={value}
                onClick={handleRender}
                handleDecrease={handleDecrease}
                handleIncrease={handleIncrease}
            ></Pagination>
        </>
    );
}
