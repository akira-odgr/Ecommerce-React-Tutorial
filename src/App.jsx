import ReactLenis from "lenis/react";
import { IoHomeOutline } from "react-icons/io5";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/layout/Hero";
import { FilterBar } from "@/components/layout/FilterBar";
import { ProductGrid } from "@/components/layout/ProductGrid";
import { CollectionSlider } from "@/components/layout/CollectionSlider";
import { Footer } from "@/components/layout/Footer";

export const App = () => {
    return (
        <ReactLenis
            options={{
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smooth: true,
                smoothTouch: true,
            }}
            root
        >
            <Header />
            <Hero />
            <FilterBar />
            <ProductGrid />
            <CollectionSlider />
            <Footer />
        </ReactLenis>
    );
};

export default App;
