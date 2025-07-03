import { createContext, useState, type ReactNode } from "react";

type ModalContextType = {
  isOpen: boolean;
  content: string;
  title: string;
  openModal: (title: string, content: string) => void;
  closeModal: () => void;
};

export const ModalContext = createContext({} as ModalContextType);

type ModalContextProviderProps = {
  children: ReactNode;
};

const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("default title");

  const openModal = (title: string, content: string) => {
    setTitle(title);
    setContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setTitle("");
    setContent("");
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        content,
        title,
        openModal,
        closeModal,
      }}
    >
      {children}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h1
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              color: "black",
            }}
          >
            {content}
          </p>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
