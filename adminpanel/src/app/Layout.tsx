import AdminTitleComp from "containers/AdminTitleComp";
import FoodTable from "containers/FoodTable";
import Footer from "inc/Footer";
import Header from "inc/Header";
import { Container } from "styles";

const Layout: React.FC = () => (
    <Container>
        <Header />
        <AdminTitleComp />
        <FoodTable />
        <Footer />
    </Container>
);

export default Layout;
