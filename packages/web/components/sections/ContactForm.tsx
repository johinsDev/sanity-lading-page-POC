import { FC } from 'react'

const ContactForm: FC = () => (
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
)

export default ContactForm
