"use client";

import { Button, SectionTitle } from "@/components/atoms";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const { handleSubmit, register } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <section id="contact" className="flex items-center justify-center bg-gray-950 px-6 py-16 md:py-32 ">
      <div className="mx-auto w-full max-w-[420px]">
        <SectionTitle
          title="Vamos trabalhar juntos? Entre em contato"
          subtitle="contato"
          classname="items-center text-center"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-12 flex w-full flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Nome"
            className="h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 ring-emerald-600 placeholder:text-gray-400 focus:outline-none focus:ring-2"
            {...register("name")}
          />
          <input
            type="email"
            placeholder="E-mail"
            className="h-14 w-full rounded-lg bg-gray-800 p-4 text-gray-50 ring-emerald-600 placeholder:text-gray-400 focus:outline-none focus:ring-2"
            {...register("email")}
          />
          <textarea
            placeholder="Mensagem"
            maxLength={500}
            className="h-[138px] w-full resize-none rounded-lg bg-gray-800 p-4 text-gray-50 ring-emerald-600 placeholder:text-gray-400 focus:outline-none focus:ring-2"
            {...register("message")}
          />

          <Button className="mx-auto mt-6 w-max shadow-button">
            Enviar Mensagem
            <HiArrowNarrowRight size={18} />
          </Button>
        </form>
      </div>
    </section>
  );
}
