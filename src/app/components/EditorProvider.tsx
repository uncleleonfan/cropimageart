"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import type { AspectRatio, CompositionType, CropRect } from "../lib/types";

type EditorContextValue = {
  imageSrc: string | null;
  setImageSrc: (src: string | null) => void;
  composition: CompositionType;
  setComposition: (c: CompositionType) => void;
  aspectRatio: AspectRatio;
  setAspectRatio: (r: AspectRatio) => void;
  // We use a ref for the live Image element so it survives re-renders
  imageRef: React.MutableRefObject<HTMLImageElement | null>;
};

const EditorContext = createContext<EditorContextValue | null>(null);

export function useEditor() {
  const ctx = useContext(EditorContext);
  if (!ctx) throw new Error("useEditor must be used within EditorProvider");
  return ctx;
}

export default function EditorProvider({ children }: { children: React.ReactNode }) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [composition, setComposition] = useState<CompositionType>("thirds");
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>("free");
  const imageRef = useRef<HTMLImageElement | null>(null);

  return (
    <EditorContext.Provider
      value={{
        imageSrc,
        setImageSrc,
        composition,
        setComposition,
        aspectRatio,
        setAspectRatio,
        imageRef,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
}
