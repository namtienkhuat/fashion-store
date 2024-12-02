export default function Navbar() {
    return (
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
            <a href="#!" className="no-underline">
                Product Detail
            </a>
        </div>
    );
}
