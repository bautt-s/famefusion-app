import { TfiClose } from 'react-icons/tfi'

const TermsModal: React.FC<{ setOpen: Function }> = (props) => {
    const { setOpen } = props

    return (
        <div className='w-screen h-screen fixed top-0 left-0 flex items-center justify-center z-[9998]'>
            <div className="w-full h-full bg-[#0000004f] absolute" onClick={() => setOpen(false)}></div>

            <div className="w-[800px] bg-white px-[30px] py-[40px] rounded-2xl z-[9999] ml-[30px] mr-[45px]">
                <div className="flex flex-row items-center">
                    <span className='outfit text-4xl font-[700]'>Terms and Conditions</span>
                    <TfiClose className='ml-auto text-2xl cursor-pointer' onClick={() => setOpen(false)} />
                </div>

                <div className='max-h-[400px] overflow-y-scroll thin-scroll mt-[35px] pr-[25px]'>
                    <p className='akatab text-justify'>
                        Welcome to FameFusion (&quot;we&quot;, &quot;us&quot;, or &quot;Website&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your use of our platform and services. By accessing or using our services, you agree to comply with these Terms. If you do not agree with these Terms, please do not use our services.

                        <br /><br />
                        <strong className='text-xl font-[700]'>User Eligibility</strong>
                        <br /><br />

                        You must be at least 18 years old to use our services. If you are under 18, you may use our services only with the involvement and consent of a parent or legal guardian.

                        <br /><br />
                        <strong className='text-xl font-[700]'>Account Creation</strong>
                        <br /><br />

                        To use certain features of our platform, you must create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                        You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account or any other breach of security.

                        <br /><br />
                        <strong className='text-xl font-[700]'>User Conduct</strong>
                        <br /><br />

                        You agree not to use our services for any unlawful, abusive, harassing, defamatory, obscene, or otherwise objectionable purpose.
                        You agree not to upload, post, transmit, or otherwise make available any content that infringes upon any rights, including intellectual property rights, of any third party.

                        <br /><br />
                        <strong className='text-xl font-[700]'>Intellectual Property</strong>
                        <br /><br />

                        The content on our website, including text, graphics, logos, images, videos, and software, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise use any content without our prior written consent.

                        <br /><br />
                        <strong className='text-xl font-[700]'>Payments and Transactions</strong>
                        <br /><br />
                        
                        If you engage in transactions on our platform, you agree to pay all fees associated with the services you purchase.
                        We use third-party payment processors to facilitate transactions. Your use of these processors is subject to their terms and conditions.
                        
                        <br /><br />
                        <strong className='text-xl font-[700]'>Limitation of Liability</strong>
                        <br /><br />
                        
                        We strive to provide accurate and reliable information, but we do not guarantee the accuracy, completeness, or reliability of any content on our platform. You use our services at your own risk.
                        We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
                        
                        <br /><br />
                        <strong className='text-xl font-[700]'>Termination</strong>
                        <br /><br />
                        We reserve the right to suspend or terminate your account and access to our services if you violate these Terms or engage in any conduct that we deem inappropriate.

                        <br /><br />
                        <strong className='text-xl font-[700]'>Contact Us</strong>
                        <br /><br />

                        If you have any questions or concerns about these Terms and Conditions, please contact us at famefusion@gmail.com.

                        By using our services, you agree to abide by these Terms and Conditions.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TermsModal