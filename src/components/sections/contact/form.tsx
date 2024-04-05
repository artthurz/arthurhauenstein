"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form as Formulary,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string({
    required_error: "Este campo é obrigatório.",
  }),
  email: z
    .string({
      required_error: "Este campo é obrigatório.",
    })
    .email({ message: "Insira um email válido." }),
  message: z.string({
    required_error: "Este campo é obrigatório.",
  }),
});

export type TFormSchema = z.infer<typeof formSchema>;

export default function Form() {
  const [lastSentEmail, setLastSentEmail] = React.useState<TFormSchema>();
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
  });

  async function sendEmail(data: TFormSchema) {
    const response = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  }

  const handleSubmit = React.useCallback(
    async (data: TFormSchema) => {
      setIsLoading(true);
      if (JSON.stringify(data) === JSON.stringify(lastSentEmail)) {
        toast.success("Solicitação recebida!", {
          description: "Em breve retornarei o seu contato!",
        });
        setIsLoading(false);
        return;
      }

      await sendEmail(data)
        .then(() => {
          setLastSentEmail(data);
          toast.success("Solicitação recebida!", {
            description: "Em breve retornarei o seu contato!",
          });
        })
        .catch(() =>
          toast.error("Bug descoberto! 🐞", {
            description: "Vou correr para arrumar esta funcionalidade!",
          })
        )
        .finally(() => setIsLoading(false));
    },
    [lastSentEmail]
  );

  return (
    <Formulary {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col md:w-3/5 gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  datatype="name"
                  type="text"
                  placeholder="Qual o seu nome?"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  datatype="email"
                  type="email"
                  placeholder="Qual o seu email?"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Como posso te ajudar?</FormLabel>
              <FormControl>
                <Textarea placeholder="Escreva a sua mensagem..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          className="btn flex gap-2 dark:bg-blue-500 dark:hover:bg-blue-400 bg-blue-400 hover:bg-blue-300 text-white"
          type="submit"
          disabled={isLoading}
        >
          {isLoading && <div className="loading" />}
          Enviar mensagem
        </button>
      </form>
    </Formulary>
  );
}
