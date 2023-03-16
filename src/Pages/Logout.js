import { redirect } from "react-router";

export const action = () => {
  console.log("hello");
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  return redirect("/");
};
