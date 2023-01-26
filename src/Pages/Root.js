import MainNavigation from "../components/MainNavigation";
import { Fragment } from "react";
import { Outlet, useNavigation } from "react-router";


const RootLayout = () => {
  const navigation = useNavigation();
  return (
    <Fragment>
      <MainNavigation />
      {navigation.state === 'loading' && <p>Loading...</p>}
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
};

export default RootLayout;
