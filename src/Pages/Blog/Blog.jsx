import { Helmet } from "react-helmet-async";

const Blog = () => {
    return (
        <div className="w-11/12 lg:max-w-6xl mx-auto my-5">
            <Helmet>
                <title>Dream Home | Blog </title>
            </Helmet>

            <h1 className="text-2xl lg:text-3xl font-arvo font-bold">Abut us Residential house and home</h1>
            <div className="space-y-4 lg:space-y-7 mt-4 lg:mt-8">
                <div className="space-y-2 lg:space-y-4">
                    <h1 className="text-xl lg:text-2xl font-arvo font-bold">Transforming Your House into a Dream Home: Top Residential Renovation Tips</h1>
                    <p className="font-mono font-medium text-base lg:text-lg text-gray-600">Owning a home is a significant achievement, but turning it into your dream sanctuary requires thoughtful planning and execution. Whether you’re looking to enhance your living space for personal comfort or increase your propertys value, here are some top renovation tips to guide you.</p>
                </div>
                <div className="space-y-2 lg:space-y-4">
                    <h1 className="text-xl lg:text-2xl font-arvo font-bold">1. Plan with Purpose</h1>
                    <p className="font-mono font-medium text-base lg:text-lg text-gray-600">Before diving into renovations, its crucial to have a clear vision. Identify your primary goals: Are you aiming for aesthetic improvements, increased functionality, or energy efficiency? Establish a budget and timeline to keep the project on track and avoid unexpected expenses. Consulting with a professional architect or interior designer can provide valuable insights and help refine your vision.</p>
                </div>
                <div>
                    <div className="space-y-2 lg:space-y-4">
                        <h1 className="text-xl lg:text-2xl font-arvo font-bold">2. Focus on Key Areas</h1>
                        <p className="font-mono font-medium text-base lg:text-lg text-gray-600">Certain areas of the home offer the most significant return on investment and can dramatically improve your living experience.</p>
                    </div>
                    <div className="space-y-1 lg:space-y-3 ml-5 md:ml-8 lg:ml-10 mt-4">
                        <div className="space-y-1 lg:space-y-2">
                            <h1 className="text-lg lg:text-xl font-arvo font-bold">Kitchen</h1>
                            <p className="font-mono font-medium text-base lg:text-lg text-gray-600">The kitchen is often considered the heart of the home. Upgrading to modern appliances, installing new countertops, and improving storage solutions can make a world of difference. Consider open shelving for a contemporary look, and invest in durable, easy-to-clean materials.</p>
                        </div>
                        <div className="space-y-1 lg:space-y-2">
                            <h1 className="text-lg lg:text-xl font-arvo font-bold">Bathrooms</h1>
                            <p className="font-mono font-medium text-base lg:text-lg text-gray-600">Bathrooms are another critical area. Simple upgrades like new fixtures, fresh paint, and updated tiles can create a spa-like atmosphere. For a more extensive renovation, consider adding a double vanity, enhancing lighting, or installing a walk-in shower.</p>
                        </div>
                        <div className="space-y-1 lg:space-y-2">
                            <h1 className="text-lg lg:text-xl font-arvo font-bold">Living Spaces</h1>
                            <p className="font-mono font-medium text-base lg:text-lg text-gray-600">Living rooms and bedrooms should be comfortable and inviting. Focus on improving natural light, selecting cohesive color schemes, and incorporating versatile furniture that maximizes space. Built-in storage can help keep these areas clutter-free.</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-2 lg:space-y-4">
                    <h1 className="text-xl lg:text-2xl font-arvo font-bold">3. Energy Efficiency</h1>
                    <p className="font-mono font-medium text-base lg:text-lg text-gray-600">Investing in energy-efficient upgrades not only reduces your carbon footprint but also lowers utility bills. Consider installing double-pane windows, upgrading insulation, and opting for energy-efficient appliances. Solar panels are another excellent investment, offering long-term savings and potential tax incentives.</p>
                </div>
                <div className="space-y-2 lg:space-y-4">
                    <h1 className="text-xl lg:text-2xl font-arvo font-bold">Conclusion</h1>
                    <p className="font-mono font-medium text-base lg:text-lg text-gray-600">Transforming your house into your dream home is an exciting journey. By focusing on key areas, prioritizing energy efficiency, embracing smart technology, and adding personal touches, you can create a space that is both functional and reflective of your style. With careful planning and the right team, your renovation project can turn your vision into reality, enhancing your living experience and increasing the value of your home.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;