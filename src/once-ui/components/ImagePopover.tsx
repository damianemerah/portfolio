import React, { useEffect } from "react";
import { Flex } from "@/once-ui/components";
import Image from "next/image";

interface ImagePopoverProps {
  src: string;
  alt?: string;
  onClose: () => void;
}

const ImagePopover: React.FC<ImagePopoverProps> = ({
  src,
  alt = "",
  onClose,
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <Flex
      horizontal="center"
      vertical="center"
      position="fixed"
      background="overlay"
      top="0"
      left="0"
      style={{
        width: "100vw",
        height: "100vh",
        zIndex: 1000,
        overflow: "auto",
      }}
      onClick={onClose}
    >
      <Flex
        style={{
          maxWidth: "90vw",
          maxHeight: "90vh",
          boxShadow: "0 0 24px rgba(0,0,0,0.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="90vw"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "top",
            borderRadius: 30,
            background: "transparent",
          }}
        />
        <button
          onClick={onClose}
          style={{
            position: "fixed",
            top: 52,
            right: "5.5rem",
            background: "rgba(0,0,0,0.6)",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: 32,
            height: 32,
            cursor: "pointer",
            fontSize: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          aria-label="Close"
        >
          ×
        </button>
      </Flex>
    </Flex>
  );
};

export default ImagePopover;
