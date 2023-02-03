import swal from "sweetalert";


export async function loginrequired() {
  await swal({
    title: "login required",
    text: "please login to continue",
    icon: "warning",
    dangerMode: true,
    button: true,
  });
  window.location.href = "/login";
}