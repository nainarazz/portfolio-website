import React from 'react';
import Layout from '../components/layout/layout.component';
import { Hero } from '../components/sections/hero/hero.component';
import { NavBar } from '../components/navbar/navbar.component';

function HomePage() {
    return (
        <>
            <NavBar />
            <Hero />
            <Layout>
                <div>About component</div>
                <div>Work experience component</div>
                <div>Projects component</div>
                <div>contact component</div>
                <div>contact component</div>
            </Layout>
        </>
    );
}

export default HomePage;
