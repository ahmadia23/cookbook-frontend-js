import { json, Outlet } from "react-router";
import CookbookList from "../components/CookbookList";
import { NavLink } from "react-router-dom";
import classes from "../UI/link.module.css";

const Cookbooks = () => {

  return (
    <div>
      <h1>Hello from cookbooks</h1>
      <CookbookList></CookbookList>
      <NavLink
        to="/new"
        className={({ isActive }) =>
          isActive
            ? classes["regular-link"] + classes.active
            : classes["regular-link"]
        }
      >
        New Cookbook
      </NavLink>
      <Outlet></Outlet>
    </div>
  );
};

export const loader = async () => {
  const response = await fetch("http://localhost:8080/cookbooksaasas");
  if (!response.ok) {
    console.log('coucou')
    return json({ message: "could not fetch cookbooks" }, { status: 500 });
  } else {
    return response;
  }
  // catch(err){
  //   console.log(err);
  // }
};
export default Cookbooks;
