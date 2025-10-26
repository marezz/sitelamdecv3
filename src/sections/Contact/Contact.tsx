import { MapPin, Mail, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Contact() {

  const [isSubmitting] = useState(false);
  const [success] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault()
    const url = "https://script.google.com/macros/s/AKfycbzycCTtLz-6b-2JXJ0pB1fh9SjBCiRj_z7xn4BV4e0du35-dnxDzBzQ4OQBvXRT_fbI/exec"
    fetch(url,{
      method:"POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:(`Name=${e.target.name.value}&Email=${e.target.email.value}&Organizacao=${e.target.organizacao.value}&AreaInteresse=${e.target.area.value}&Descricao=${e.target.descricao.value}`)
    }).then(res=>res.text()).then(data=>{
      alert(data)
    }).catch(error=>console.log(error))
  }

  return (
    <section
      id="contact"
      className="flex flex-col gap-16 px-25 py-24 bg-white w-full"
    >
      <div className="flex flex-col text-center gap-2">
        <h2 className="text-5xl font-bold text-black">Contato</h2>
        <p className="text-[#6b6b8c] text-xl text-center">
          Entre em contato conosco para mais informações
        </p>
      </div>

      <div className="flex flex-wrap justify-between items-start gap-12 w-full">

        <div className="flex-1 min-w-[380px] max-w-[550px] flex flex-col gap-8">

          <div className="flex flex-col gap-6">
            <ContactItem
              icon={<MapPin className="text-indigo-600 w-6 h-6" />}
              title="Endereço"
              description={
                <>
                  Centro de Tecnologia <br />
                  Av. Athos da Silveira Ramos, 149 - Sala C-108-E<br />
                  Cidade Universitária<br />
                  Rio de Janeiro - RJ - Brasil<br />
                </>
              }
            />
            <ContactItem
              icon={<Mail className="text-indigo-600 w-6 h-6" />}
              title="E-mail"
              description="lamdec@im.ufrj.br"
            />
          </div>


            <div className="relative w-full h-[280px] rounded-xl overflow-hidden shadow-md border border-indigo-100">
            <iframe
            title="Mapa LAMDEC"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1290.1414330358853!2d-43.23127924254693!3d-22.860034662846523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99796fa0fb22cd%3A0x9a49d40127a221d7!2sInstituto%20de%20Matem%C3%A1tica%20-%20Bloco%20C%20-%20CT%2FUFRJ!5e1!3m2!1spt-BR!2sbr!4v1761431059367!12m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>

            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-2 rounded-lg shadow-sm flex items-center gap-2 hover:bg-white transition">
              <a
                href="https://www.google.com/maps/place/Instituto+de+Matem%C3%A1tica+-+Bloco+C+-+CT%2FUFRJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-indigo-600 font-medium hover:underline"
              >
                <ExternalLink size={16} />
                <span>Abrir no Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 min-w-[400px] max-w-[550px] bg-white rounded-xl border border-indigo-100 shadow-sm p-8">
          <h3 className="text-2xl font-semibold text-black mb-6">
            Interessado em uma parceria?
          </h3>

          <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
            <input
          name='name'
          placeholder='Nome Completo'
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input name='email'
          placeholder='E-mail'
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"/>
          <input name='organizacao'
          placeholder='Organização'
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"/>
          <input name='atuacao'
          placeholder='Área de Interesse'
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"/>
          <textarea name='descricao'
          placeholder='Descreva seu projeto ou necessidade'
          className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"/>
          <button
            type="submit"
              disabled={isSubmitting}
              className="bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
              {isSubmitting ? "Enviando..." : "Enviar Proposta"}
            </button>
        </form>
        {success && (
            <p className="text-green-600 mt-4 text-lg">
              ✅ Sua proposta foi enviada com sucesso!
            </p>
        )}
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex flex-col">
        <h4 className="text-lg font-semibold text-black mb-1">{title}</h4>
        <p className="text-[#6b6b8c] text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
