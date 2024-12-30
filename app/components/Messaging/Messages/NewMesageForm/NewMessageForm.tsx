"use client";
import { useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import newMessage from "./functions/newMessage";
import { queryClient } from "@/app/QueryClient/QueryClientOBJ";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const NewMessageForm: React.FC<{
  conversationID: string;
  participantsIDS: string[];
}> = ({ conversationID, participantsIDS }) => {
  const [content, setContent] = useState<string>();
  const session = useSession();
  const formRef = useRef<HTMLFormElement>(null);
  const senderID = session.data?.user._id!;

  const handlChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const { data, mutate } = useMutation({
    mutationFn: () =>
      newMessage(senderID, participantsIDS, content!, conversationID),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [conversationID] });
      formRef.current?.reset();
    },
  });

  const handleMutation = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };
  

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <form
      autoComplete="off"
      ref={formRef}
      onSubmit={handleMutation}
      className="max-w-full relative  px-2">
      <input
        onChange={handlChangeEvent}
        className="w-full dark:text-white bg-transparent outline outline-1  outline-black/20 dark:outline-white/20 focus-within:outline-blueColor dark:focus-within:outline-blueColor py-1 px-3  rounded-md"
        type="text"
        name="message"
        id="message"
        autoFocus
        autoComplete="off"
      />
      <button
        className="absolute right-5 top-1/2 -translate-y-[50%] "
        type="submit">
        <FontAwesomeIcon icon={faPaperPlane} className="text-blueColor" />
      </button>
    </form>
  );
};
export default NewMessageForm;
