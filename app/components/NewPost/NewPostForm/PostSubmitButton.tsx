import Button from "@/app/components/Buttons/Button";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { useFormStatus } from "react-dom";

const PostSubmitButton = () => {
  const state = useFormStatus();
  const tForm = useTranslations("newPostForm");
  const locale = useLocale();
  const isAr = locale === "ar";
  return (
    <div className="ms-auto">
      <Button color="black" submittButton>
        <p className={`${isAr ? "text-sm" : ""}`}>
          {state.pending
            ? `${tForm("postSubmitLoading")}`
            : `${tForm("postSubmit")}`}
        </p>
      </Button>
    </div>
  );
};

export default PostSubmitButton;
