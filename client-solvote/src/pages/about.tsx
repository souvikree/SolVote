import { FC } from 'react';
import AboutSection from '@/components/about/AboutSection';
import FAQsSection from '@/components/about/FAQsSection';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const AboutPage: FC = () => {
    return (
        <>
            <Header />
            <main>
                <AboutSection />
                <FAQsSection />
            </main>
            <Footer />
        </>
    );
};

export default AboutPage;
