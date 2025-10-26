import { MapPin, Mail, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzycCTtLz-6b-2JXJ0pB1fh9SjBCiRj_z7xn4BV4e0du35-dnxDzBzQ4OQBvXRT_fbI/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess(false);

    const formData = new FormData(e.target);
    const params = new URLSearchParams({
      Name: formData.get("name"),
      Email: formData.get("email"),
      Organizacao: formData.get("organizacao"),
      AreaInteresse: formData.get("area"),
      Descricao: formData.get("descricao"),
    });

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      const data = await response.text();
      alert(data);
      setSuccess(true);
      e.target.reset();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col gap-20 px-6 bg-white w-full max-w-7xl mx-auto"
    >
      {/* Cabeçalho */}
      <header className="flex flex-col text-center gap-2">
        <h2 className="text-5xl font-bold text-black">Contato</h2>
        <p className="text-[#6b6b8c] text-xl">
          Entre em contato conosco para mais informações
        </p>
      </header>

      {/* Conteúdo Principal */}
      <div className="flex flex-wrap justify-between items-start gap-12 w-full">
        {/* Coluna Esquerda - Informações e Mapa */}
        <div className="flex-1 min-w-[380px] max-w-[45%] flex flex-col gap-8">
          <ContactInfo />
          <MapEmbed />
        </div>

        {/* Coluna Direita - Formulário */}
        <div className="flex-1 min-w-[400px] max-w-[550px] bg-white rounded-xl border border-indigo-100 shadow-sm p-8">
          <h3 className="text-2xl font-semibold text-black mb-6">
            Interessado em uma parceria?
          </h3>

          <ContactForm
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            success={success}
          />
        </div>
      </div>
    </section>
  );
}

// Componente de Informações de Contato
function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <ContactItem
        icon={<MapPin className="text-indigo-600 w-6 h-6" />}
        title="Endereço"
        description={
          <>
            Centro de Tecnologia <br />
            Av. Athos da Silveira Ramos, 149 - Sala C-108-E <br />
            Cidade Universitária <br />
            Rio de Janeiro - RJ - Brasil
          </>
        }
      />
      <ContactItem
        icon={<Mail className="text-indigo-600 w-6 h-6" />}
        title="E-mail"
        description="lamdec@im.ufrj.br"
      />
    </div>
  );
}

// Componente do Mapa
function MapEmbed() {
  const MAPS_URL =
    "https://www.google.com/maps/place/Instituto+de+Matem%C3%A1tica+-+Bloco+C+-+CT%2FUFRJ";

  const EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1290.1414330358853!2d-43.23127924254693!3d-22.860034662846523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99796fa0fb22cd%3A0x9a49d40127a221d7!2sInstituto%20de%20Matem%C3%A1tica%20-%20Bloco%20C%20-%20CT%2FUFRJ!5e1!3m2!1spt-BR!2sbr!4v1761431059367!12m2!1spt-BR!2sbr";

  return (
    <div className="relative w-full h-[280px] rounded-xl overflow-hidden shadow-md border border-indigo-100">
      <iframe
        title="Mapa LAMDEC"
        src={EMBED_URL}
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-3 py-2 rounded-lg shadow-sm flex items-center gap-2 hover:bg-white transition">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-indigo-600 font-medium hover:underline"
        >
          <ExternalLink size={16} />
          <span>Abrir no Google Maps</span>
        </a>
      </div>
    </div>
  );
}

// Componente do Formulário
function ContactForm({ onSubmit, isSubmitting, success }) {
  const inputClassName =
    "p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition";

  return (
    <>
      <form className="grid grid-cols-1 gap-4" onSubmit={onSubmit}>
        <FormInput
          name="name"
          placeholder="Nome Completo"
          className={inputClassName}
        />
        <FormInput
          name="email"
          type="email"
          placeholder="E-mail"
          className={inputClassName}
        />
        <FormInput
          name="organizacao"
          placeholder="Organização"
          className={inputClassName}
        />
        <FormInput
          name="area"
          placeholder="Área de Interesse"
          className={inputClassName}
        />
        <FormTextarea
          name="descricao"
          placeholder="Descreva seu projeto ou necessidade"
          rows={4}
          className={inputClassName}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-indigo-600 text-white font-medium py-3 rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Enviando..." : "Enviar Proposta"}
        </button>
      </form>

      {success && (
        <p className="text-green-600 mt-4 text-lg font-medium animate-pulse">
          ✅ Sua proposta foi enviada com sucesso!
        </p>
      )}
    </>
  );
}

// Componente de Input Reutilizável
function FormInput({ name, type = "text", placeholder, className }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required
      className={className}
    />
  );
}

// Componente de Textarea Reutilizável
function FormTextarea({ name, placeholder, rows, className }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      rows={rows}
      required
      className={`${className} resize-none`}
    />
  );
}

// Componente de Item de Contato
function ContactItem({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 mt-1">{icon}</div>
      <div className="flex flex-col">
        <h4 className="text-lg font-semibold text-black mb-1">{title}</h4>
        <p className="text-[#6b6b8c] text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
