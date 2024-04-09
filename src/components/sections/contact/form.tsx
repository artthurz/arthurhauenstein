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
import { useTranslations } from "next-intl";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const FormSchema = (t: (arg: string) => string) =>
  z.object({
    name: z
      .string({
        required_error: t("required"),
      })
      .min(1, {
        message: t("required"),
      }),
    email: z
      .string({
        required_error: t("required"),
      })
      .email({ message: "Insira um email válido." }),
    message: z
      .string({
        required_error: t("required"),
      })
      .min(1, {
        message: t("required"),
      }),
  });

export function Form() {
  const t = useTranslations("root.contact.form");
  const formSchema = FormSchema(t);
  type TFormSchema = z.infer<typeof formSchema>;

  const [lastSentEmail, setLastSentEmail] = React.useState<TFormSchema>();
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema, {}),
  });

  const sendEmail = React.useCallback(async (data: TFormSchema) => {
    const response = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
  }, []);

  const handleSubmit = React.useCallback(
    async (data: TFormSchema) => {
      setIsLoading(true);
      if (JSON.stringify(data) === JSON.stringify(lastSentEmail)) {
        toast.success(t("success.title"), {
          description: t("success.description"),
        });
        setIsLoading(false);
        return;
      }

      await sendEmail(data)
        .then(() => {
          setLastSentEmail(data);
          toast.success(t("success.title"), {
            description: t("success.description"),
          });
        })
        .catch(() =>
          toast.error(t("error.title"), {
            description: t("error.description"),
          })
        )
        .finally(() => setIsLoading(false));
    },
    [lastSentEmail, sendEmail, t]
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
                  <FormLabel>{t("name.label")}</FormLabel>
                  <FormControl>
                    <Input
                      datatype="name"
                      type="text"
                      placeholder={t("name.placeholder")}
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
                  <FormLabel>{t("email.label")}</FormLabel>
                  <FormControl>
                    <Input
                      datatype="email"
                      type="email"
                      placeholder={t("email.placeholder")}
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
                <FormLabel>{t("message.label")}</FormLabel>
                <FormControl>
                  <Textarea placeholder={t("message.placeholder")} {...field} />
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
            {t("submit")}
          </button>
        </form>
      </Formulary>
    </GlassCard>
  );
}
