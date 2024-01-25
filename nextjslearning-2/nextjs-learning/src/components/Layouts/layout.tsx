import Header from "../Header/header";
import { HeaderData } from "../Header/header.mock";
import { SubHeaderData } from "../subHeader/subHeader.mock";
import SubHeader from "../subHeader/subHeader";
import Footer from "../Footer/footer";
import { FooterData } from "../Footer/footer.mock";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SubHeader {...SubHeaderData} />

      <Header {...HeaderData} />
      {children}
      <Footer {...FooterData} />
    </>
  );
};

export default Layout;
