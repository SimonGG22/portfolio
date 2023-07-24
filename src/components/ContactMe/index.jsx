import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
      name: "",
      email: "",
      message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        
        {
          from_name: form.name,
          to_name: "Hasan",
          from_email: form.email,
          to_email: "purposework159@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Gracias! Te contactare lo más pronto posible.")

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert("Algo salio mal. Por favor intentalo de nuevo.")
        }
      )
  }

    return (
        <div className="flex flex-col items-center justify-center mb-14">
            <h2 className='w-5/6 text-[50px] text-center font-black mb-12'>Contáctame</h2>
            <div>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='bg-gray-gradient p-8 flex flex-col gap-8 rounded-3xl'
              >
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>Nombre</span>
                  <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ingrese su nombre"
                    className='bg-zinc-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>Correo Electronico</span>
                  <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Ingrese su correo electronico"
                    className='bg-zinc-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>Mensaje</span>
                  <textarea
                    rows={7}
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder='¿Qué deseas saber?'
                    className='bg-zinc-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>

                <button
                  type='submit'
                  className='bg-zinc-800 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>
              </form>
            </div>
        </div>
    )
}

export {ContactMe}