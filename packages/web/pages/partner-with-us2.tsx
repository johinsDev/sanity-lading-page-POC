import GridSection from '@components/sections/Grid'
import { FC } from 'react'
const PartnerWithUs: FC = () => {
  return (
    <>
      <GridSection />

      <section className="bg-pink">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h2>GET LENDING</h2>
          <p className="mt-11 w-3/4">
            Close more deals with True Rate. Spend your time lending and let
            True Rate source and guide your next deal to you.
          </p>
        </div>
      </section>
      <section className="container mx-auto">
        <h2>GET IN TOUCH</h2>

        <form action="" className="flex flex-col mt-10">
          <div className="flex items-center">
            <input
              type="text"
              className="border border-black w-full h-10 outline-none placeholder-black font-montserrat text-13.5 placeholder-shown:uppercase px-8 mr-8"
              placeholder="first name"
            />
            <input
              type="text"
              className="border border-black w-full h-10 outline-none placeholder-black font-montserrat text-13.5 placeholder-shown:uppercase px-8"
              placeholder="last name"
            />
          </div>

          <input
            type="text"
            className="border border-black w-full h-10 outline-none placeholder-black font-montserrat text-13.5 placeholder-shown:uppercase px-8 mt-8"
            placeholder="email"
          />

          <textarea
            rows={5}
            className="border border-black w-full outline-none placeholder-black font-montserrat text-13.5 placeholder-shown:uppercase px-8 mt-8 py-5"
            placeholder="message"
          />

          <button className="self-center mt-11">SUBMIT</button>
        </form>
      </section>
    </>
  )
}

export default PartnerWithUs
