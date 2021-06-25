import { FC } from 'react'

const SimpleFormSection: FC = () => {
  return (
    <section className="container mx-auto">
      <h2>GET THE LATEST UPDATES STRAIGHT INTO YOUR INBOX</h2>

      <p className="mt-4">Sign up here.</p>

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

        <button className="self-center mt-11">SUBMIT</button>
      </form>
    </section>
  )
}

export default SimpleFormSection
