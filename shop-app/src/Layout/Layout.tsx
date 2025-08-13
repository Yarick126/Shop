import type { ReactElement, ReactNode } from "react";
import { NavLink } from "react-router";

const Layout = ({children}: {children: ReactNode}): ReactElement => {
  return (
    <>
      <header>
        <nav className="bg-sky-300 p-4 flex flex-row flex-nowrap text-2xl text-rose-500 tracking-wide">
          <NavLink to='/' className="grow-5 text-center hover:text-white">Home</NavLink>
          <NavLink to='/signUp' className="grow-5 text-center hover:text-white">Sign Up</NavLink>
          <NavLink to='/signIn' className="grow-5 text-center hover:text-white">Sign In</NavLink>
        </nav>
      </header>
      <main className="bg-black text-white p-7">
        {children}
      </main>
      <footer>
        
      </footer>
    </>
  );
};

export default Layout;