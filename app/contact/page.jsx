"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Link from "next/link";
import { FaEnvelope, FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import Toast from "@/components/Toast";

const EMAIL = "brunarochalourenco@hotmail.com";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

const Contact = () => {
  const { t } = useLanguage();
  const c = t.contact;

  const [service, setService] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [toast, setToast] = useState(null);

  const info = [
    {
      icon: <FaWhatsapp />,
      title: c.info.whatsapp,
      description: "(+55) 53 98479 8240",
      href: "https://wa.me/5553984798240",
      external: true,
    },
    {
      icon: <FaLinkedinIn />,
      title: c.info.linkedin,
      description: "/in/brunarochal",
      href: "https://www.linkedin.com/in/brunarochal/",
      external: true,
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      description: "/BrunaRochaL",
      href: "https://github.com/BrunaRochaL",
      external: true,
    },
    {
      icon: <FaEnvelope />,
      title: c.info.email,
      description: EMAIL,
      href: `mailto:${EMAIL}`,
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("service", service);

    // No access key configured yet → fall back to the visitor's email client.
    if (!ACCESS_KEY) {
      const name = `${formData.get("firstName") || ""} ${
        formData.get("lastName") || ""
      }`.trim();
      const lines = [
        `${c.firstName}: ${name}`,
        `${c.email}: ${formData.get("email") || ""}`,
        `${c.phone}: ${formData.get("phone") || ""}`,
        `${c.serviceLabel}: ${service}`,
        "",
        formData.get("message") || "",
      ].join("\n");
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        `Portfólio — ${name || "Contato"}`
      )}&body=${encodeURIComponent(lines)}`;
      return;
    }

    setStatus("sending");
    formData.append("access_key", ACCESS_KEY);
    formData.append("from_name", "Portfólio Bruna Rocha");
    formData.append("subject", "Nova mensagem do portfólio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        form.reset();
        setService("");
        setToast({ id: Date.now(), type: "success", message: c.success });
      } else {
        setStatus("error");
        setToast({ id: Date.now(), type: "error", message: c.error });
      }
    } catch {
      setStatus("error");
      setToast({ id: Date.now(), type: "error", message: c.error });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          {/* form */}
          <div className="order-2 xl:order-none xl:w-[54%]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 rounded-2xl border border-white/5 bg-secondary p-10"
            >
              <h3 className="text-3xl text-metal">{c.title}</h3>
              <p className="text-white/60">{c.description}</p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input name="firstName" type="text" placeholder={c.firstName} required />
                <Input name="lastName" type="text" placeholder={c.lastName} />
                <Input name="email" type="email" placeholder={c.email} required />
                <Input name="phone" type="tel" placeholder={c.phone} />
              </div>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={c.selectService} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{c.serviceLabel}</SelectLabel>
                    <SelectItem value={c.services.frontend}>{c.services.frontend}</SelectItem>
                    <SelectItem value={c.services.backend}>{c.services.backend}</SelectItem>
                    <SelectItem value={c.services.fullstack}>{c.services.fullstack}</SelectItem>
                    <SelectItem value={c.services.general}>{c.services.general}</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea name="message" className="h-[200px]" placeholder={c.message} required />
              <Button variant="y2k" type="submit" size="md" className="max-w-44" disabled={status === "sending"}>
                {status === "sending" ? c.sending : c.send}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="order-1 mb-8 flex flex-1 items-center xl:order-none xl:mb-0 xl:justify-end">
            <ul className="flex w-full flex-col gap-5 xl:max-w-[420px]">
              {info.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-5 rounded-xl border border-white/5 bg-secondary/40 p-4 transition-colors hover:border-accent/40"
                  >
                    <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-md bg-secondary text-accent transition-colors group-hover:bg-accent-gradient group-hover:text-primary xl:h-[60px] xl:w-[60px]">
                      <div className="text-[24px]">{item.icon}</div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-white/60">{item.title}</p>
                      <h3 className="truncate text-lg transition-colors group-hover:text-accent">
                        {item.description}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </motion.section>
  );
};

export default Contact;
