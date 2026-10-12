import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
export const Dialog = DialogPrimitive.Root;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;
export function DialogContent({ children, className = "", overlayClassName = "", closeLabel = "Close case study" }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className={`dialog-overlay ${overlayClassName}`} />
      <DialogPrimitive.Content className={`dialog-content ${className}`} data-lenis-prevent>
        {children}
        <DialogPrimitive.Close
          className="dialog-close"
          aria-label={closeLabel}
        >
          <X size={24} />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
