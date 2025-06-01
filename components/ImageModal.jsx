"use client";
import Image from "next/image";
import { useState } from "react";

function ImageModalDemo({ src, alt, width = 400, height = 400 }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)} style={{ cursor: "zoom-in" }}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ borderRadius: "8px", objectFit: "cover" }}
        />
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            cursor: "zoom-out",
          }}
        >
          <div style={{ position: "relative", width: "90%", height: "90%" }}>
            <Image
              src={src}
              alt={alt}
              fill
              style={{ objectFit: "contain", borderRadius: "12px" }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ImageModalDemo;
