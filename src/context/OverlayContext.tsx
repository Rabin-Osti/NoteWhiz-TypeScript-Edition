import React, { createContext, useState } from "react";
import Overlay from "../components/Overlay/Overlay";
import { INote } from "../types/types";

interface IOverlayContextValue {
  setOverlay: React.Dispatch<
    React.SetStateAction<{
      show: boolean;
      mode: string;
    }>
  >;
  setNoteToEdit: React.Dispatch<React.SetStateAction<INote | "">>;
}

export const OverlayContext = createContext<IOverlayContextValue>(
  {} as IOverlayContextValue
);

export const OverlayContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [overlay, setOverlay] = useState({ show: false, mode: "add" });
  const [noteToEdit, setNoteToEdit] = useState<INote | "">("");
  return (
    <OverlayContext.Provider value={{ setOverlay, setNoteToEdit }}>
      {overlay.show && <Overlay mode={overlay.mode} noteToEdit={noteToEdit} />}
      {children}
    </OverlayContext.Provider>
  );
};
