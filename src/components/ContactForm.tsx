"use client";

import { useState, type FormEvent } from "react";

import { IconCheck, IconSend } from "@/components/icons";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "submitting" | "sent";

/**
 * Formulário de contacto.
 * Estratégia escolhida: abrir o cliente de e-mail do utilizador via mailto: pré-preenchido —
 * funciona em qualquer host (Vercel/estático) sem precisar de backend.
 * Quando a empresa tiver endpoint próprio (ex: Resend, Formspree) substituir o handler.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = `Pedido de orçamento — ${name || "Site"}`;
    const body = [
      `Nome: ${name}`,
      `Telefone: ${phone}`,
      `Email: ${email}`,
      "",
      "Mensagem:",
      message,
    ].join("\n");

    const href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;

    // Confirmação visual
    setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 600);
  }

  const isSent = status === "sent";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-ink-100 bg-white p-7 shadow-precision-lg sm:p-9"
      noValidate
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="label-caps text-brand-600">Formulário</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-brand-900">
            Pedido de orçamento
          </h3>
        </div>
      </div>

      <p className="font-body text-sm text-ink-500">
        Preencha os campos abaixo. Vamos responder no mais breve período
        possível.
      </p>

      <div>
        <label
          htmlFor="name"
          className="mb-2 block font-display text-xs font-semibold uppercase tracking-wider text-brand-900"
        >
          Nome completo *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="O seu nome"
          className="input-tech"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block font-display text-xs font-semibold uppercase tracking-wider text-brand-900"
          >
            Telefone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="91X XXX XXX"
            className="input-tech"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-display text-xs font-semibold uppercase tracking-wider text-brand-900"
          >
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="email@exemplo.pt"
            className="input-tech"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block font-display text-xs font-semibold uppercase tracking-wider text-brand-900"
        >
          Mensagem / descrição do projeto *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Descreva o seu projeto: tipo de obra, localização aproximada, prazos previstos..."
          className="input-tech resize-none"
        />
      </div>

      {/* Honeypot anti-spam — campo invisível ignorado por humanos */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full"
      >
        {isSent ? (
          <>
            <IconCheck size={18} /> Pedido preparado
          </>
        ) : (
          <>
            <IconSend size={16} /> Enviar pedido
          </>
        )}
      </button>

      {isSent && (
        <p className="text-center font-body text-sm text-brand-700">
          Abrimos o seu cliente de e-mail com a mensagem pronta a enviar. Se
          preferir, contacte-nos por telefone ou WhatsApp.
        </p>
      )}

      <p className="text-center font-body text-xs text-ink-400">
        Ao enviar, autoriza o tratamento dos dados para resposta ao seu pedido.
      </p>
    </form>
  );
}
