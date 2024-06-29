import { Helmet } from "react-helmet-async";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Dream Home | Contact Me </title>
            </Helmet>

        <div className="w-11/12 lg:max-w-6xl mx-auto my-5 space-y-3 md:space-y-5 lg:space-y-7">
            <h1 className="text-2xl lg:text-3xl font-arvo font-bold">Contact me</h1>
            <p className="font-sans font-medium text-base lg:text-lg text-gray-600">We hed love to hear from you! Whether you have questions, need more information, or want to schedule a tour of our community, our team is here to help. Please reach out to us using any of the methods below.</p>
            <div className="space-y-1 md:space-y-2 lg:space-y-3">
                <h1 className="text-lg lg:text-xl font-arvo font-bold">Phone</h1>
                <p className="font-sans font-medium text-base lg:text-lg text-gray-600">Call us at <span className="text-blue-600 underline">(+880) 1785754089</span> Our office hours are sunday to Friday, 9 AM to 6 PM.</p>
            </div>
            <div className="space-y-1 md:space-y-2 lg:space-y-3">
                <h1 className="text-lg lg:text-xl font-arvo font-bold">Email</h1>
                <p className="font-sans font-medium text-base lg:text-lg text-gray-600">Send us an email at <span className="text-blue-600 underline cursor-pointer">frmislul421@gmail.com</span> We aim to respond to all inquiries within 24 hours.</p>
            </div>
            <div className="space-y-1 md:space-y-2 lg:space-y-3">
            <h1 className="text-lg lg:text-xl font-arvo font-bold">Social Media</h1>
                <div className="flex items-center space-x-2 text-lg">
                    <FaFacebook className="text-blue-700"></FaFacebook>
                    <a className="text-blue-700 underline" href="https://www.facebook.com/profile.php?id=100077465942827">FR Mislul</a>
                </div>
                <div className="flex items-center space-x-2 text-lg">
                    <FaInstagram className="text-red-500"></FaInstagram>
                    <a className="text-blue-700 underline" href="https://www.instagram.com/frmislulalom/?igsh=MWEwa2JpMTY2c3h2NA%3D%3D">FR Mislul Alom</a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;