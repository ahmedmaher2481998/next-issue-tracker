"use client";
import { Button, Callout, Text, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Control, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { createNewIssueSchema } from "@/app/validationSchema";
import axios, { AxiosError } from "axios";
import ErrorMessage from "@/app/components/ErrorMessage";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdInfo } from "react-icons/md";
import Spinner from "@/app/components/Spinner";
import { revalidatePath } from "next/cache";
type formFields = z.infer<typeof createNewIssueSchema>;
const CreateNesIssuePage = () => {
  const [apiError, setApiError] = useState("");

  const {
    register,
    formState: { errors, isSubmitting, isLoading },
    control,
    handleSubmit,
    reset,
  } = useForm<formFields>({
    resolver: zodResolver(createNewIssueSchema),
  });
  const router = useRouter();
  const formLoading = isSubmitting || isLoading;
  const submitForm = handleSubmit(async (data: formFields) => {
    try {
      console.log(data);
      const newIssue = await fetch("/api/issues", {
        method: "POST",
        body: JSON.stringify(data),
        cache: "no-store",
      });

      console.log(newIssue);
      reset();
      router.push("/issues");
    } catch (error) {
      console.log("error", error);
      setApiError("invalid Data ,please try again ...");
    }
  });
  return (
    <>
      <form className="max-w-xl space-y-2" onSubmit={submitForm}>
        {apiError && (
          <Callout.Root color="red">
            <Callout.Icon className="space-x-2">
              <MdInfo /> {`   ${apiError}`}
            </Callout.Icon>
          </Callout.Root>
        )}
        <div>
          <Text>Title</Text>
          <TextField.Root className="">
            <TextField.Input {...register("title")} placeholder="Issue title" />
          </TextField.Root>
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
        </div>

        <div>
          <Text>Description</Text>
          <Controller
            name={"description"}
            control={control}
            render={({ field }) => {
              return (
                <SimpleMDE placeholder="Issue description ..." {...field} />
              );
            }}
          />
          <ErrorMessage>{errors.description?.message}</ErrorMessage>
        </div>

        <Button
          disabled={formLoading}
          size="3"
          type="submit"
          className="cursor-pointer w-full "
        >
          Submit
          {formLoading && <Spinner />}
        </Button>
      </form>
    </>
  );
};

export default CreateNesIssuePage;
