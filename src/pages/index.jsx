import React from 'react';
import styled from 'styled-components';
import MainContent from '../components/layout/main-content/main-content.component';
import { Hero } from '../components/sections/hero/hero.component';
import { themeColor } from '../themes/colors';
import { NavBar } from '../components/layout/navbar/navbar.component';
import { Footer } from '../components/layout/footer/footer.component';

const StyledHeading = styled.h2`
    color: ${themeColor.darkAccent};
    text-align: center;
    font-size: 2rem;
`;

function HomePage() {
    return (
        <>
            <NavBar />
            <Hero />
            <MainContent>
                <StyledHeading>Blog Posts</StyledHeading>
            </MainContent>
            <Footer />
        </>
    );
}

export default HomePage;
