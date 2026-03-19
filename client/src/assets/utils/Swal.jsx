import Swal from "sweetalert2";

export const SwalExito = (mensaje) => {
  Swal.fire({
    title: "¡Éxito!",
    text: mensaje,
    icon: "success",
    confirmButtonColor: "var(--swal-exito)",
  });
};

export const SwalInformation = (mensaje) => {
  Swal.fire({
    title: "Información",
    text: mensaje,
    icon: "info",
    confirmButtonColor: "var(--swal-info)",
  });
};

export const SwalError = (mensaje) => {
  Swal.fire({
    title: "¡Error!",
    text: mensaje,
    icon: "error",
    confirmButtonColor: "red",
  });
};

export const SwalRegistrado = ({
  title,
  text,
  icon = "question",
  confirmText = "Aceptar",
  cancelText = "Cancelar"
}) => {
  return Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonText: confirmText,
    cancelButtonText: cancelText,
    confirmButtonColor: "var(--swal-exito)",
  });
};
