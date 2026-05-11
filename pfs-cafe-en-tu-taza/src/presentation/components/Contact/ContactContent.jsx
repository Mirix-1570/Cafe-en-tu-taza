import { useState } from 'react'

const ContactContent = () => {
  // 1. Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  // 2. Manejador para actualizar el estado cuando el usuario escribe
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // 3. Manejador para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene la recarga de la página
    console.log('Datos del formulario enviados:', formData);
    alert('¡Mensaje enviado! Revisa la consola para ver los datos.');
    // Limpiar el formulario después de enviar
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    
    <div
      className="relative flex h-auto min-h-screen w-full flex-col bg-[#221a11] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: "Plus Jakarta Sans, Noto Sans, sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">

        <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">Contáctanos</p>
            </div>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Envíanos un mensaje</h2>
            <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
              Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
            {/* Formulario */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-[#221910] p-6 md:p-8 rounded-xl border border-[#393028]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <label className="flex flex-col flex-1">
                  <p className="text-white text-sm font-bold leading-normal pb-2">Nombre Completo</p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-[#54473b] bg-[#27211c] focus:border-primary h-12 placeholder:text-[#b9ab9d]/60 px-4 text-base font-normal leading-normal transition-colors"
                    placeholder="Juan Pérez"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="flex flex-col flex-1">
                  <p className="text-white text-sm font-bold leading-normal pb-2">Correo Electrónico</p>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-[#54473b] bg-[#27211c] focus:border-primary h-12 placeholder:text-[#b9ab9d]/60 px-4 text-base font-normal leading-normal transition-colors"
                    placeholder="juan@ejemplo.com"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <label className="flex flex-col flex-1">
                <p className="text-white text-sm font-bold leading-normal pb-2">Asunto</p>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-brown-500 focus:outline-0 focus:ring-1 focus:ring-primary border border-[#54473b] bg-[#27211c] focus:border-primary h-12 bg-[image:--select-button-svg] placeholder:text-[#b9ab9d] px-4 text-base font-normal leading-normal transition-colors"
                >
                  <option className="text-gray-500" disabled="" value="">Selecciona un tema</option>
                  <option value="ventas">Ventas</option>
                  <option value="visitas">Visitas a la Finca</option>
                  <option value="soporte">Soporte al Cliente</option>
                  <option value="otro">Otro</option>
                </select>
              </label>
              <label className="flex flex-col flex-1">
                <p className="text-white text-sm font-bold leading-normal pb-2">Mensaje</p>
                <textarea
                  className="form-textarea flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-1 focus:ring-primary border border-[#54473b] bg-[#27211c] focus:border-primary placeholder:text-[#b9ab9d]/60 p-4 text-base font-normal leading-normal transition-colors"
                  placeholder="Escribe tu mensaje aquí..."
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>
              <button
                className="mt-2 flex w-full md:w-auto self-start cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary hover:bg-[#b05f0e] transition-colors text-white text-base font-bold leading-normal tracking-[0.015em]"
                type="submit"
              >
                Enviar Mensaje
              </button>
            </form>
            <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Información de Contacto</h2>
            <div className="flex flex-col gap-6 bg-[#221910] p-6 md:p-8 rounded-xl border border-[#393028]">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center size-10 rounded-full bg-[#27211c] text-primary shrink-0 border border-[#393028]">
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#b9ab9d] text-sm font-medium">Sede Central</p>
                    <p className="text-white text-base font-medium">Av17A Esparza Puntarenas Costa Rica</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center size-10 rounded-full bg-[#27211c] text-primary shrink-0 border border-[#393028]">
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#b9ab9d] text-sm font-medium">Teléfono</p>
                    <a className="text-white text-base font-medium hover:text-primary transition-colors" href="tel:+506 63105876"
                      >+506 63105876</a
                    >
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center size-10 rounded-full bg-[#27211c] text-primary shrink-0 border border-[#393028]">
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#b9ab9d] text-sm font-medium">Correo Electrónico</p>
                    <a
                      className="text-white text-base font-medium hover:text-primary transition-colors"
                      href="mailto:mmmendezcruz4903fwd@gmail.com"
                      >mmmendezcruz4903fwd@gmail.com</a
                    >
                  </div>
                </div>
                <div className="flex items-start gap-4 pt-4 border-t border-[#393028]">
                  <div className="flex items-center justify-center size-10 rounded-full bg-[#27211c] text-primary shrink-0 border border-[#393028]">
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#b9ab9d] text-sm font-medium">Horario de Atención</p>
                    <p className="text-white text-base font-medium">Todos los días: 2:00 PM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactContent