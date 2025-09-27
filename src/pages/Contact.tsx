import Input from "../components/Input";
import { type EmailSchemaType, EmailSchema } from "../schemas/EmailSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import emailjs from "emailjs-com";

interface ImportMetaEnv {
  VITE_SERVICE_ID: string;
  VITE_TEMPLATE_ID: string;
  VITE_PUBLIC_KEY: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}

declare global {
  interface ImportMeta {
    env: ImportMetaEnv;
  }
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailSchemaType>({ resolver: zodResolver(EmailSchema) });
  const onSubmit = (data: EmailSchemaType) => {
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        data,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Email enviado com sucesso!");
          reset();
        },
        (error) => {
          console.log(error);
          toast.error("Erro ao enviar email, tente novamente mais tarde.");
        }
      );
  };

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col gap-5 justify-start items-center pt-10 pb-20 ">
      <h1 className="text-2xl">
        Entre em <b>Contato</b> comigo
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-3 w-full md:w-[80%] lg:w-[60%] px-5"
      >
        <Input label={"Nome"} {...register("name")} />
        {errors.name && <p className="text-red-500">{errors.name?.message} </p>}

        <Input label={"Email"} {...register("email")} />
        {errors.email && (
          <p className="text-red-500">{errors.email?.message} </p>
        )}
        <Input label={"Assunto"} {...register("subject")} />
        {errors.subject && (
          <p className="text-red-500">{errors.subject?.message} </p>
        )}
        <Input label={"Mensagem"} {...register("message")} />
        {errors.message && (
          <p className="text-red-500">{errors.message?.message} </p>
        )}
        <button
          className="w-full mt-5 h-12 outline outline-black hover:bg-black rounded hover:text-white cursor-pointer"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
