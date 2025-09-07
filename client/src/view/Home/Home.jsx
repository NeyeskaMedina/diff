import MobileCarrusel from "../../components/main/carrusel/mobileCarrusel/MobileCarrusel.jsx";
import DesktopCarrusel from "../../components/main/carrusel/desktopCarrusel/DesktopCarrusel.jsx";
import CategoryGrid from "../../components/main/categoryCard/CategoryGrid.jsx";
import ProductSection from "../../components/section/productSection/ProductSection.jsx";

const Home = ()  => {
    return (
        <>
            <MobileCarrusel />
            <DesktopCarrusel />
            <CategoryGrid />
            <ProductSection />
        </>
    )
};
export default Home;
