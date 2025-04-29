import Image from "next/image";

function ContactItem({
  icon,
  alt,
  label,
  link,
  text,
}: {
  icon: string;
  alt: string;
  label: string;
  link: string;
  text: string;
}) {
  return (
    <p className="flex items-center gap-3">
      <Image src={icon} alt={alt} width={24} height={24} />
      <span>
        <strong>{label}:</strong>{" "}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {text}
        </a>
      </span>
    </p>
  );
}

export default function Contact() {
  return (
    <section id="contato" className="mx-auto w-full max-w-7xl px-4 py-16">
      <div className="flex flex-col items-center justify-center gap-12 rounded-3xl bg-white p-10 shadow-2xl transition-all duration-300 md:flex-row">
        {/* QR Code */}
        <div className="flex flex-col items-center justify-center">
          <a
            href="https://api.whatsapp.com/send?phone=55545491535354&text=Olá, Evoutech! Gostaria de fazer um orçamento..."
            target="_blank"
          >
            <Image
              src="/svg/qr_whatsapp.svg"
              alt="QR Code WhatsApp"
              width={280}
              height={280}
              className="rounded-2xl shadow-xl"
            />
          </a>
        </div>

        {/* Informações de contato */}
        <div className="flex flex-1 flex-col items-center justify-center gap-8 text-center md:items-start md:text-left">
          <h2 className="text-3xl font-extrabold text-gray-800 md:text-4xl">
            Entre em Contato
          </h2>

          <div className="flex flex-col gap-4 text-gray-600">
            <ContactItem
              icon="/svg/icons/geolocation.svg"
              alt="Geo Location Icon"
              label="Endereço"
              link="https://maps.app.goo.gl/oBhLGYvcVAbLxH3w8"
              text="Rua Lázaro Giordani, 69 - Jardim Gloria, RS"
            />
            <ContactItem
              icon="/svg/icons/mobile.svg"
              alt="Mobile Icon"
              label="Celular"
              link="tel:+5554991535354"
              text="(54) 99153-5354"
            />
            <ContactItem
              icon="/svg/icons/mail.svg"
              alt="Mail Icon"
              label="Email"
              link="mailto:contato@evoutech.com.br"
              text="contato@evoutech.com.br"
            />
          </div>

          {/* Botão WhatsApp */}
          <a
            href="https://api.whatsapp.com/send?phone=55545491535354&text=Olá, Evoutech! Gostaria de fazer um orçamento..."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-600"
          >
            <Image
              src="/svg/icons/whatsapp.svg"
              alt="WhatsApp Icon"
              width={24}
              height={24}
              className="invert"
            />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
