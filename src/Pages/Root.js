import MainNavigation from "../layouts/MainNavigation";
import { Fragment, useEffect } from "react";
import { Outlet, useLoaderData, useNavigation } from "react-router";
import React from "react";
import { useSubmit } from "react-router-dom";
import { getTokenDuration } from "../util/Authentification";
import Footer from "../components/Footer";

const RootLayout = () => {
  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRES") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);
    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  }, [token, submit]);

  const navigation = useNavigation();
  return (
    <Fragment>
      <MainNavigation />
      {navigation.state === "loading" && <p>Loading...</p>}
      <main>
        <Outlet />
      </main>
      <div className="border-section-full"></div>
      <Footer></Footer>
    </Fragment>
  );
};

export default RootLayout;
