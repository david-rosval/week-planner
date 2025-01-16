import React, { useRef } from "react";

interface DialogProps {
  isOpen: boolean; // Controla si el diálogo está abierto
  onClose: () => void; // Función para cerrar el diálogo
  title: string; // Título del diálogo
  children: React.ReactNode; // Contenido del diálogo
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal(); // Abre el diálogo
    } else {
      dialogRef.current?.close(); // Cierra el diálogo
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="bg-white rounded-lg shadow-lg p-6 w-96"
      onClose={onClose} // Llama a onClose al cerrar
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button
          className="text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
      <div>{children}</div>
    </dialog>
  );
};

export default Dialog;
