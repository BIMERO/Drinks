import React from "react";
import HeroSection from "@/Components/HeroSection";
import BrandInput from "@/Components/BrandInput";
import BrandButton from "@/Components/BrandButton";
import Map from "@/Components/Map";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTelegramPlane,
  FaGlobeAfrica,
} from "react-icons/fa";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <HeroSection title="Contact Us" page="CONTACT US" />

      <section className=" bg-brand_secondary-50 py-24">
        <div className="contain">
          <ul className="flex justify-center text-center flex-col gap-12 md:flex-row">
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <p>
                <span className="text-black">Address:</span>
                198 West 21th Street, Suite 721 New York NY 10016
              </p>
            </li>
            <li>
              <FaPhoneAlt className="contact-icon" />
              <p className=" text-brand_primary-50">
                <span className="text-black">Phone:</span> +2347017319899
              </p>
            </li>
            <li>
              <FaTelegramPlane className="contact-icon" />
              <p className=" text-brand_primary-50">
                <span className="text-black">Email: </span>
                rejoiceboluwatife2001@gmail.com
              </p>
            </li>
            <li>
              <FaGlobeAfrica className="contact-icon" />
              <p className=" text-brand_primary-50">
                <span className="text-black">Website:</span> yoursite.com
              </p>
            </li>
          </ul>

          <div className="flex flex-col py-20 md:flex-row">
            <Map />
            <div className=" bg-white p-5 w-full">
              <h2 className="mb-6 text-2xl">Contact Us</h2>
              <form action="" className="flex flex-col">
                <div className=" md:flex gap-6">
                  <div className="flex flex-col mb-5 w-full">
                    <label
                      className="text-brand_primary-50 text-xs font-semibold mb-2"
                      htmlFor="name"
                    >
                      FULL NAME
                    </label>
                    <BrandInput type="text" placeholder="Name" />
                  </div>

                  <div className="flex flex-col mb-5 w-full">
                    <label
                      className="text-brand_primary-50 text-xs font-semibold mb-2"
                      htmlFor="email"
                    >
                      EMAIL ADDRESS
                    </label>
                    <BrandInput type="email" placeholder="Email" />
                  </div>
                </div>

                <div className="flex flex-col mb-5">
                  <label
                    className="text-brand_primary-50 text-xs font-semibold mb-2"
                    htmlFor="subject"
                  >
                    SUBJECT
                  </label>
                  <BrandInput type="text" placeholder="Subject" />
                </div>

                <div className="flex flex-col mb-5">
                  <label
                    className="text-brand_primary-50 text-xs font-semibold mb-2"
                    htmlFor="message"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={5}
                    placeholder="Message"
                    className="text-brand_gray-250 border-b border-brand_gray-200 text-sm"
                  />
                </div>

                <BrandButton title="Send Message" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
