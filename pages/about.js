import ReactPlayer from 'react-player';
import React from 'react';
import Layout from '../components/layout/layout';
export default function About(props) {


    return (
        <Layout>
            <ReactPlayer 
            url="https://dash.megacdn.xyz/raw/0dad3b25ffe465c68d4e62a21adc522d/index.m3u8" controls/>
        </Layout>

    );
}
