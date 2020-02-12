import React from 'react';
import styled from 'styled-components';
import MainContent from '../components/layout/main-content/main-content.component';
import { NavBar } from '../components/layout/navbar/navbar.component';

const MainContentWrapper = styled.div`
    padding-top: 150px;
`;

function AboutPage() {
    return (
        <>
            <NavBar />
            <MainContentWrapper>
                <MainContent>
                    <h1>Hi, I&apos;m Naina Razafindrabiby</h1>
                    <p>
                        somthing about you in here. write some description give some information and
                        tell a story.
                    </p>
                    <p>put some of your contact in here</p>
                </MainContent>
            </MainContentWrapper>
        </>
    );
}

export default AboutPage;
