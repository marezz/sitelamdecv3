import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    position: "",
    interest: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Substituir este link pelo "formResponse" do seu Google Form
  const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/SEU_FORM_ID/formResponse";

  // Substituitr os entry IDs pelos IDs reais do seu Google Form
  const GOOGLE_ENTRY_IDS = {
    name: "entry.1111111111",
    email: "entry.2222222222",
    company: "entry.3333333333",
    position: "entry.4444444444",
    interest: "entry.5555555555",
    message: "entry.6666666666",
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);

    const formBody = new URLSearchParams({
      [GOOGLE_ENTRY_IDS.name]: formData.name,
      [GOOGLE_ENTRY_IDS.email]: formData.email,
      [GOOGLE_ENTRY_IDS.company]: formData.company,
      [GOOGLE_ENTRY_IDS.position]: formData.position,
      [GOOGLE_ENTRY_IDS.interest]: formData.interest,
      [GOOGLE_ENTRY_IDS.message]: formData.message,
    });

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        body: formBody,
      });
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        position: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* BLOCO PRINCIPAL: INFORMAÇÕES + FORMULÁRIO */}
      <div className="flex flex-wrap justify-between items-start gap-12 w-full">
        {/* COLUNA ESQUERDA - Informações + Mapa */}
        <div className="flex-1 min-w-[380px] max-w-[550px] flex flex-col gap-8">
          {/* Informações */}
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
              icon={<Phone className="text-indigo-600 w-6 h-6" />}
              title="Telefone"
              description="+55 (21) 99999-9999"
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
              type="text"
              name="name"
              placeholder="Nome completo"
              required
              value={formData.name}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail corporativo"
              required
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="text"
              name="company"
              placeholder="Empresa"
              required
              value={formData.company}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <input
              type="text"
              name="position"
              placeholder="Cargo"
              required
              value={formData.position}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <select
              name="interest"
              required
              value={formData.interest}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value="">Área de interesse</option>
              <option value="machine-learning">Machine Learning</option>
              <option value="data-science">Data Science</option>
              <option value="ai">Inteligência Artificial</option>
              <option value="analytics">Analytics</option>
              <option value="other">Outro</option>
            </select>
            <textarea
              name="message"
              placeholder="Descreva seu projeto ou necessidade"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
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
