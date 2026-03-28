import twitter from "../assets/twitter.svg";
import facebook from "../assets/socialmedia SVG/facebook.svg";
import instagram from "../assets/socialmedia SVG/instagram.svg";
import youtube from "../assets/socialmedia SVG/youtube.svg";
import whatsapp from "../assets/socialmedia SVG/whatsapp.svg";

const Footer = () => {
  return (
    <section className="bg-[#4C4D4C]">
      <div className="max-w-[1140px] mx-auto p-5 text-[18px] text-center text-white font-raleway">
        {/* <div className="mb-12"> */}
        {/* <h3 className="text-[20px] tab:text-[24px] mb-4">
						Subscribe to our Newsletter
					</h3>
					<form
						action=""
						className="flex flex-col gap-4 tab:flex-row tab:gap-6"
					>
						<input
							type="text"
							placeholder="Name"
							className="bg-transparent flex-grow-[1] border-b text-[14px] tab:text-lg font-medium border-b-white py-[6px] px-[16px]"
						/>
						<input
							type="email"
							placeholder="Enter Your Email"
							className="bg-transparent border-b flex-grow-[2] text-[14px] tab:text-lg font-medium border-b-white py-[6px] px-[16px]"
						/>
						<button
							type="submit"
							className="bg-pgreen text-[14px] tab:text-lg font-semibold rounded-md py-[20px] px-[50px]"
						>
							SUBSCRIBE
						</button>
					</form>
					<hr className="tab:hidden mx-auto h-[1px] bg-white mt-8 w-[80%]" />
				</div> */}
        <div className="flex justify-between items-start flex-col md:flex-row gap-8">
          <div className="text-[18px] text-start font-medium flex-1">
            <h3 className="text-[22px] font-bebas tracking-wide mb-4">The Earth Association</h3>

            <div className="mb-4">
              <span className="font-bold">Our Location:</span>
              <p className="text-[15px] mt-1 max-w-md text-gray-200">
                <a
                  href="https://www.google.com/maps/dir//The+Earth+association+(Best+NGO),+A-+23,+Triveni+Nagar+Rd,+near+shopping+center,+Shopping+Centre,+Triveni+Nagar,+Arjun+Nagar,+Jaipur,+Rajasthan+302018/@26.4151522,74.6283312,3688m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x396db537f3b2e96b:0x540e1c9dae1d7d81!2m2!1d75.7794938!2d26.8654531?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-pgreen transition-colors"
                >
                  The Earth association (Best NGO), A- 23, Triveni Nagar Rd, near shopping center, Shopping Centre, Triveni Nagar, Arjun Nagar, Jaipur, Rajasthan 302018
                </a>
              </p>
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-2">
              <span className="font-bold">Contact Us -</span>
              <div className="flex flex-col tab:flex-row tab:gap-4 text-[15px] text-gray-200">
                <p>
                  Email:{" "}
                  <a href="mailto:earthassociation22@gmail.com" className="hover:text-pgreen transition-colors">
                    earthassociation22@gmail.com
                  </a>
                </p>
                <p>
                  Tel:{" "}
                  <a href="tel:+918829012209" className="hover:text-pgreen transition-colors">
                    +91 88290 12209
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6 flex-1 w-full md:w-auto">
            {/* Google Map Embed */}
            <div className="w-full max-w-[400px] overflow-hidden rounded-lg shadow-lg border-2 border-gray-600">
              <iframe
                src="https://maps.google.com/maps?q=The%20Earth%20association%20Triveni%20Nagar%20Jaipur&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Earth Association Location"
              ></iframe>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a target="_blank" rel="noreferrer" href="https://whatsapp.com/channel/0029VaAe5WMEFeXiJ3afVO2Z">
                <img
                  src={whatsapp}
                  alt="WhatsApp"
                  width={45}
                  height={45}
                  className="bg-[#333] hover:bg-pgreen transition-colors p-2.5 rounded-full"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/share/J5jBuGzJJFmfYAGm/?mibextid=LQQJ4d">
                <img
                  src={facebook}
                  alt="Facebook"
                  width={45}
                  height={45}
                  className="bg-[#333] hover:bg-pgreen transition-colors p-2.5 rounded-full"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/earth_association?igsh=OTUxMThodjV0MTlh">
                <img
                  src={instagram}
                  alt="Instagram"
                  width={45}
                  height={45}
                  className="bg-[#333] hover:bg-pgreen transition-colors p-2.5 rounded-full"
                />
              </a>
              <a target="_blank" rel="noreferrer" href="https://youtube.com/@theearthassociation8535?si=2csfWBhOnYa8DRyw">
                <img
                  src={youtube}
                  alt="YouTube"
                  width={45}
                  height={45}
                  className="bg-[#333] hover:bg-pgreen transition-colors p-2.5 rounded-full"
                />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="mt-6 text-center text-[14px] text-gray-400">
          <p>© 2024 The Earth Association. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};
export default Footer;

