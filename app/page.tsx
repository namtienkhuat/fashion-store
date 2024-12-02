"use client";
import Banner from "@/components/Banner";
import Filter from "@/components/Filter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SignUp from "@/components/SignUp";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const data = [
    {
        id: 1,
        image: "/card1.jpg",
        title: "Blouse and belted skirt",
        gene: "Female",
        age: "Ranges",
        price: 900000,
        total: 5,
    },
    {
        id: 2,
        image: "/card2.jpg",
        title: "Pink ankara mixed gown",
        gene: "Female",
        age: "0 - 11",
        price: 900000,
        total: 4,
    },
    {
        id: 3,
        image: "/card3.jpg",
        title: "A - shaped gown",
        gene: "Female",
        age: "Ranges",
        price: 1000000,
        total: 3,
    },
    {
        id: 4,
        image: "/card4.jpg",
        title: "Blouse and belted skirt",
        gene: "Female",
        age: "Ranges",
        price: 2000000,
        total: 2,
    },
    {
        id: 5,
        image: "/card5.jpg",
        title: "Ankara suit",
        gene: "Male",
        age: "Ranges",
        price: 1700000,
        total: 3,
    },
    {
        id: 6,
        image: "/card6.jpg",
        title: "Brown ball gown",
        gene: "Female",
        age: "0 - 11",
        price: 1300000,
        total: 4,
    },
    {
        id: 7,
        image: "/card7.jpg",
        title: "Male suit",
        gene: "Male",
        age: "Ranges",
        price: 1800000,
        total: 5,
    },
    {
        id: 8,
        image: "/card8.jpg",
        title: "Flared gown",
        gene: "Female",
        age: "Ranges",
        price: 2250000,
        total: 6,
    },
];

const data2 = [
    {
        id: 1,
        image: "/detail/card_detail1.jpg",
        title: "Blouse and belted skirt",
        gene: "Female",
        age: "Ranges",
        price: 1800000,
        total: 5,
    },
    {
        id: 2,
        image: "/detail/card_detail2.jpg",
        title: "Pink ankara mixed gown",
        gene: "Female",
        age: "0 - 11",
        price: 1300000,
        total: 4,
    },
    {
        id: 3,
        image: "/detail/card_detail3.jpg",
        title: "A - shaped gown",
        gene: "Female",
        age: "Ranges",
        price: 1700000,
        total: 3,
    },
    {
        id: 4,
        image: "/detail/card_detail4.jpg",
        title: "Blouse and belted skirt",
        gene: "Female",
        age: "Ranges",
        price: 1000000,

        total: 2,
    },
    {
        id: 5,
        image: "/detail/card_detail5.jpg",
        title: "Ankara suit",
        gene: "Male",
        age: "Ranges",
        price: 2000000,
        total: 3,
    },
    {
        id: 6,
        image: "/detail/card_detail6.jpg",
        title: "Brown ball gown",
        gene: "Female",
        age: "0 - 11",
        price: 900000,
        total: 4,
    },
    {
        id: 7,
        image: "/detail/card_detail7.jpg",
        title: "Male suit",
        gene: "Male",
        age: "Ranges",
        price: 900000,
        total: 5,
    },
    {
        id: 8,
        image: "/detail/card_detail8.jpg",
        title: "Flared gown",
        gene: "Female",
        age: "Ranges",
        price: 2250000,
        total: 6,
    },
];

export default function Home() {
    const [increase, setIncrease] = useState(0);
    const [quantity, setQuantity] = useState<any>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(data);
    const [invoice, setInvoice] = useState(0);
    const [male, setMale] = useState(false);
    const [female, setFemale] = useState(false);

    const [text, setText] = useState("");
    const [focus, setFocus] = useState(0);
    const [value, setValue] = useState(0);

    const handleClick = (item: any) => {
        setIncrease(increase + 1);

        const element = quantity.find((b: any) => b.id == item.id); // tìm xem trong mảng quantity có phần tử nào chứa id trùng với id của item hay ko nếu có thì trả ra phần tử đó trong mảng quantity
        if (!element) {
            // nếu element chưa có
            let x = { ...item, total: 1 }; // tạo ra phần tử mới chứa các key: value của item, đồng thời thêm field total
            setQuantity(quantity.concat(x)); // thêm phần tử mới x vào mảng quantity
        }
        if (element) {
            // nếu element có
            let x = { ...element, total: ++element.total }; // tạo ra phần tử mưới chứa các key: vlue của item, đồng thời tăng giá trị của total lên một đơn vị(do lúc này đã có element thì total cũng được thêm vào)
            setQuantity(
                quantity.map((a: any) => {
                    return a.id == element.id ? x : a; // dùng map để duyệt qua từng phần tử của quantity nếu phần tử đó có id trùng với id của element thì thay thế phần tử đó của quantity bằng phần tử x, còn ko thì thay bằng total
                })
            );
        }
    };

    const handleP = (item: any) => {
        const element = searchResults.find((b: any) => b.id == item.id);
        if (element) {
            let x = {
                ...element,
                total: ++element.total,
            };
            setSearchResults(
                searchResults.map((a: any) => {
                    return a.id == element.id ? x : a;
                })
            );
        }
    };
    const handleM = (item: any) => {
        const element = searchResults.find((b: any) => b.id == item.id);
        if (element) {
            let x = {
                ...element,
                total: --element.total,
            };
            setSearchResults(
                searchResults.map((a: any) => {
                    return a.id == element.id ? x : a;
                })
            );
        }
    };
    const handlePlus = (item: any) => {
        const element = quantity.find((b: any) => b.id == item.id);
        if (element) {
            let x = {
                ...element,
                total: ++element.total,
            };
            setQuantity(
                quantity.map((a: any) => {
                    return a.id == element.id ? x : a;
                })
            );
        }
        handleM(item);
    };
    const handleMinus = (item: any) => {
        const element = quantity.find((b: any) => b.id == item.id);
        if (element) {
            let x = {
                ...element,
                total: --element.total,
            };
            setQuantity(
                quantity.map((a: any) => {
                    return a.id == element.id ? x : a;
                })
            );
        }
        handleP(item);
    };

    useEffect(() => {
        let x = 0;
        quantity.map((item: any) => {
            x += item.total;
        });
        setIncrease(x);
    }, [quantity]);

    const handleRemove = () => {
        setQuantity([]);
        setIncrease(0);
    };

    // mo sang trang chi tiet san pham

    const handleStore = (item: any) => {
        const element = searchResults.find((b: any) => b.id == item.id);
        if (element) {
            let x = {
                ...element,
                total: --element.total,
            };
            setSearchResults(
                searchResults.map((a: any) => {
                    return a.id == element.id ? x : a;
                })
            );
        }
    };

    // Tinh hoa don
    useEffect(() => {
        let x = 0;
        quantity.map((item: any) => {
            x += item.price * item.total;
        });
        setInvoice(x);
    }, [quantity]);

    // Search theo yeu cau

    const handleChange = (event: any) => {
        setSearchTerm(event.target.value);
    };
    const handleMale = (event: any) => {
        setMale(event.target.checked);
    };
    const handleFemale = (event: any) => {
        setFemale(event.target.checked);
    };
    const handleFocus = () => {
        setFocus(focus + 1);
    };

    const handleRender = (number: number) => {
        setValue(number);
        number % 2 == 1 ? setSearchResults(data) : setSearchResults(data2);
    };

    const handleDecrease = () => {
        setValue(value - 1);
    };
    const handleIncrease = () => {
        setValue(value + 1);
    };
    useEffect(() => {
        value % 2 == 1 ? setSearchResults(data) : setSearchResults(data2);
    }, [value]);

    useEffect(() => {
        setSearchResults(
            data.filter((item, index) => item.title.includes(searchTerm))
        );
    }, [searchTerm]);
    useEffect(() => {
        setSearchResults(
            data.filter((item, index) => {
                return (
                    (!male && !female
                        ? true
                        : (male && item.gene === "Male") ||
                          (female && item.gene === "Female")) &&
                    item.title.includes(searchTerm)
                );
            })
        );
    }, [male, female, searchTerm]);
    useEffect(() => {
        if (focus == 0) setText("");
        if (focus != 0) setText("text-red-900 font-bold");
    }, [focus]);

    return (
        <main className="mx-[120px]">
            <Header
                setIncrease={setIncrease}
                increase={increase}
                setQuantity={setQuantity}
                quantity={quantity}
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                handleMinus={handleMinus}
                handlePlus={handlePlus}
                data={data}
                handleRemove={handleRemove}
                invoice={invoice}
            ></Header>
            <Navbar></Navbar>
            <Banner></Banner>
            <Filter
                handleClick={handleClick}
                quantity={quantity}
                male={male}
                female={female}
                searchTerm={searchTerm}
                handleChange={handleChange}
                handleFocus={handleFocus}
                focus={focus}
                value={value}
                handleDecrease={handleDecrease}
                handleIncrease={handleIncrease}
                handleMale={handleMale}
                handleFemale={handleFemale}
                data={data}
                searchResults={searchResults}
                handleStore={handleStore}
                handleRender={handleRender}
                setSearchResults={setSearchResults}
            ></Filter>
            <SignUp></SignUp>
            <Footer></Footer>
        </main>
    );
}
