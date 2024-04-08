"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form as Formulary,
} from "@/components/ui/form";
import GlassCard from "@/components/ui/glass-card";
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
        toast.success("Contato recebido!", {
          description: "Em breve retornarei o sua mensagem.",
        });
        setIsLoading(false);
        return;
      }

      await sendEmail(data)
        .then(() => {
          setLastSentEmail(data);
          toast.success("Contato recebido!", {
            description: "Em breve retornarei o sua mensagem.",
          });
        })
        .catch(() =>
          toast.error("Bug descoberto! 🐞", {
            description: "Vou correr para arrumar esta funcionalidade.",
          })
        )
        .finally(() => setIsLoading(false));
    },
    [lastSentEmail]
  );

  return (
    <GlassCard>
      <Formulary {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col w-full p-6 gap-4"
        >
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      datatype="name"
                      type="text"
                      placeholder="Your name"
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
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      datatype="email"
                      type="email"
                      placeholder="Email address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How can I help you??</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter your message..." {...field} />
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
    </GlassCard>
  );
}
