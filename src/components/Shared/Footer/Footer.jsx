import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-[#232323]">
            <form className="text-center pt-6">
                <h6 className="text-2xl font-medium text-white mt-6 mb-3">Newsletter</h6>
                <fieldset className="">
                    <div className="join">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item md:w-[600px] dark:bg-white dark:text-[#333333]" />
                        <button className="btn bg-[#637307] text-white border-none join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
            <footer className="footer sm:footer-horizontal container mx-auto text-neutral-content p-10">
                <nav>
                    <h6 className="footer-title">About</h6>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Privacy  Policy</a>
                    <a className="link link-hover">Terms & Condition</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <a className="link link-hover">Dhaka-1209, Bangladesh</a>
                    <a className="link link-hover">Email: realstate@gmail.com</a>
                    <a className="link link-hover">Phone: +8801323456789</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">Terms & Condition</a>
                    <a className="link link-hover">Retail Purchase</a>
                    <a className="link link-hover">FAQ</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Follow Us</h6>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Instagram</a>
                    <a className="link link-hover">Youtube</a>
                </nav>
            </footer>
            <p className="text-white text-center pb-4">Copyright © 2025 by <Link to='https://github.com/cerumiaktar' className="font-bold">Rumi Akter</Link>. All rights reserved.</p>
        </div>
    );
};

export default Footer;