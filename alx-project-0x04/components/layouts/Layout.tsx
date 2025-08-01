import { ReactNode } from "react";

interface props {
    children: ReactNode;
}

const Layout = ({ children }: props) => {
    return <div>{children}</div>;
};

export default Layout;
