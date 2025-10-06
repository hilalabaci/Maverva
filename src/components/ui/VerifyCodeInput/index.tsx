import { useEffect, useRef } from "react";
import { CodeContainer, CodeInput, CodeInputWrapper } from "./styles";

function VerifyCodeInput({ onChange }: { onChange?: (code: number) => void }) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value) {
      e.target.value = value[0];
      if (index < inputsRef.current.length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    }

    const code = inputsRef.current.map((input) => input?.value).join("");
    onChange?.(code ? Number(code) : NaN);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Tab"];
    const isNumberKey = /^[0-9]$/.test(e.key);

    if (!isNumberKey && !allowedKeys.includes(e.key)) {
      e.preventDefault();
    }

    if (e.key === "Backspace" && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };
  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  return (
    <CodeContainer>
      {[...Array(6)].map((_, index) => (
        <CodeInputWrapper key={index}>
          <CodeInput
            ref={(el) => (inputsRef.current[index] = el)}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        </CodeInputWrapper>
      ))}
    </CodeContainer>
  );
}

export default VerifyCodeInput;
