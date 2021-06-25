import Email from '@components/icons/Email'
import Facebook from '@components/icons/Facebook'
import Instagram from '@components/icons/Instagram'
import Linkedin from '@components/icons/Linkedin'
import Location from '@components/icons/Location'
import Phone from '@components/icons/Phone'
import Image from 'next/image'
import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="bg-gray-4 py-11 hidden lg:block">
      <div className="container mx-auto flex items-stretch">
        <div className="border-r border-black pr-8 flex flex-col justify-between flex-1.5 py-4">
          <div className="w-2/3">
            <h3 className="text-13.5 text-left">SUBSCRIBE TO OUR NEWSLETTER</h3>

            <input
              type="text"
              placeholder="Email Address"
              className="bg-transparent border-b border-black font-caslon text-13.5 tracking-normal outline-none mt-6 w-full placeholder-black"
            />
          </div>

          <button className="mt-6">SUBSCRIBE</button>
        </div>

        <div className="border-r border-black py-4 px-8 flex flex-col justify-between flex-1">
          <div className="flex items-center">
            <div className="w-1/6">
              <Phone />
            </div>
            <div className="w-5/6">
              <p>914 359 4231</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/6">
              <Location />
            </div>

            <div className="w-5/6">
              <p>780 Third Avenue, Suite 4400 New York, NY 10017</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-1/6">
              <Email />
            </div>

            <div className="w-5/6">
              <p className="truncate">questions@truerateservices.com</p>
            </div>
          </div>
        </div>

        <div className="border-r border-black py-4 px-8 flex-1.5">
          <nav className="h-full">
            <ul className="flex flex-col justify-around h-full">
              <li>
                <p className="font-montserrat text-xs">FEATURES</p>
              </li>
              <li>
                <p className="font-montserrat text-xs">PEOPLE</p>
              </li>
              <li>
                <p className="font-montserrat text-xs">PARTNER WITH US</p>
              </li>
              <li>
                <p className="font-montserrat text-xs">INSIGHTS LOGIN</p>
              </li>
            </ul>
          </nav>
        </div>

        <div className="px-8  py-4 flex flex-col justify-between flex-1">
          <div>
            <p className="font-montserrat text-xs">PRIVACY POLICY </p>

            <p className="font-montserrat text-xs">TERMS OF USE</p>
          </div>

          <div className="flex items-center space-x-4">
            <Linkedin />
            <Instagram />
            <Facebook />
          </div>

          <Image
            src="/images/truerate-black.png"
            alt="truerate"
            layout="fixed"
            width={136}
            height={35}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
