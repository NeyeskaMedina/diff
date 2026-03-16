import Swal from "sweetalert2";

export const SwalExito = (mensaje) => {
  Swal.fire({
    title: "¡Éxito!",
    text: mensaje,
    icon: "success",
    confirmButtonColor: "var(--swal-exito)",
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