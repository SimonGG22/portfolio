import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
  const [formValue, setFormValue] = useState({
      name: "",
      email: "",
      message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setFormValue({
      ...formValue,
      [name]: value,
    });

    console.log(name)
  };
  
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)

    // This is Email.js info please set yours
    emailjs.sendForm('service_4jpse0p', 'template_iudt1ug', form.current, 'LtR1JwlkTDh5I6xn6')
      .then((result) => {
        console.log(result.text);
        setLoading(false);
        alert("Gracias! Te contactare lo más pronto posible.")

        setFormValue({
          name: "",
          email: "",
          message: "",
        });
      }, (error) => {
        console.log(error.text);
        setLoading(false)
        alert("Algo salio mal. Por favor intentalo de nuevo.")
    })
  }

    return (
        <div className="flex flex-col items-center justify-center mb-14">
            <h2 className='w-5/6 text-[50px] text-center font-black mb-12'>Contáctame</h2>
            <div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className='bg-gray-gradient p-8 flex flex-col gap-8 rounded-3xl'
              >
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>Nombre</span>
                  <input
                    type='text'
                    name='user_name'
                    onChange={handleChange}
                    value={form.name}
                    placeholder="Ingrese su nombre"
                    className='bg-zinc-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>Correo Electronico</span>
                  <input
                    type='email'
                    name='user_email'
                    onChange={handleChange}
                    value={form.email}
                    placeholder="Ingrese su correo electronico"
                    className='bg-zinc-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  />
                </label>
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>Mensaje</span>
                  <textarea
                    rows={7}
                    name='message'
                    onChange={handleChange}
                    value={form.message}
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