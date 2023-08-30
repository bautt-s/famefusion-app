import { TfiClose } from 'react-icons/tfi'

const PrivacyModal: React.FC<{ setOpen: Function }> = (props) => {
    const { setOpen } = props

    return (
        <div className='w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-[9998]'>
            <div className="w-full h-full bg-[#0000004f] absolute" onClick={() => setOpen(false)}></div>

            <div className="w-[800px] bg-white px-[30px] py-[40px] rounded-2xl z-[9999] ml-[30px] mr-[45px]">
                <div className="flex flex-row items-center">
                    <span className='outfit text-4xl font-[700]'>Privacy Policy</span>
                    <TfiClose className='ml-auto text-2xl cursor-pointer' onClick={() => setOpen(false)} />
                </div>

                <div className='max-h-[400px] overflow-y-scroll thin-scroll mt-[35px] pr-[25px]'>
                    <p className='akatab text-justify'>
                        Welcome to FameFusion (&quot;we&quot;, &quot;us&quot;, or &quot;Website&quot;), a platform that connects celebrities with fans and businesses. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website or use our services. By accessing or using our services, you consent to the practices described in this Privacy Policy.
                        <br /><br />
                        <strong className='text-xl font-[600]'>Information We Collect</strong>
                        <br /><br />
                        We may collect the following types of information from users:

                        Personal Information: When you create an account, we may collect your name, email address, username, password, and other contact information.
                        Profile Information: You may provide additional information to create a profile, such as profile pictures, biographical details, social media links, and other personal details.
                        Payment Information: If you engage in transactions on our platform, we collect payment information, such as credit card or payment account information.
                        Communication Data: We may collect information from your communications with us, including emails, chats, and customer support inquiries.
                        Usage Data: We collect information about how you interact with our website, such as your IP address, device type, browser information, pages viewed, and referring/exit pages.
                        Cookies and Tracking Technologies: We use cookies and similar tracking technologies to collect usage information and improve our services.

                        <br /><br />
                        <strong className='text-xl font-[600]'>How We Use Your Information</strong>
                        <br /><br />
                        We use your personal information for various purposes, including:

                        Providing and maintaining our services.
                        Processing transactions and payments.
                        Personalizing user experience and improving our website.
                        Communicating with you about our services, updates, and promotional offers.
                        Responding to your inquiries and providing customer support.
                        Sending administrative and transaction-related emails.
                        Analyzing usage data to enhance and optimize our services.
                        Ensuring compliance with legal obligations.


                        <br /><br />
                        <strong className='text-xl font-[600]'>How We Share Your Information</strong>
                        <br /><br />
                        We may share your information with third parties in the following circumstances:
                        Celebrities and Businesses: If you're a fan, your public profile information may be visible to celebrities and businesses on our platform. If you're a celebrity or business, your public profile information may be visible to fans.
                        Service Providers: We may share your information with third-party service providers who assist us in operating our website, processing payments, analyzing data, and more.
                        Legal Compliance: We may disclose your information to comply with legal obligations, respond to governmental requests, or protect our rights, privacy, safety, or property.
                        Business Transfers: If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
                        
                        <br /><br />
                        <strong className='text-xl font-[600]'>Your Choices</strong>
                        <br /><br />
                        You can control how your personal information is used and shared:
                        
                        Account Settings: You can review and update your account information in your profile settings.
                        Communication Preferences: You can choose to opt out of marketing communications from us.
                        Cookies: You can manage your cookie preferences through your browser settings.
                        
                        <br /><br />
                        <strong className='text-xl font-[600]'>Data Security</strong>
                        <br /><br />
                        We prioritize the security of your information and implement reasonable security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.

                        <br /><br />
                        <strong className='text-xl font-[600]'>Changes to This Privacy Policy</strong>
                        <br /><br />
                        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                        
                        <br /><br />
                        <strong className='text-xl font-[600]'>Contact Us</strong>
                        <br /><br />
                        If you have any questions or concerns about this Privacy Policy, please contact us at famefusion@gmail.com.
                        By using our services, you agree to the terms outlined in this Privacy Policy.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PrivacyModal