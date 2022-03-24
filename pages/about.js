import ReactPlayer from 'react-player';
import React from 'react';
import Layout from '../components/layout/layout';
export default function About(props) {

    return (
        <Layout>
            <ReactPlayer 
            url="https://cdn1.p2pstreaming.tw/bigv2st2hls/2021/newlist/2022/03/01/001/Cong-To-Vien-Quan-Su-Do-Bae-Man-1-muxed.mp4/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9My8yMi8yMDIyIDM6NDg6NDQgUE0maGFzaF92YWx1ZT16cFNjMzZNdkJ0cUNiam9WQ0hTU1R3PT0mdmFsaWRtaW51dGVzPTE4MCZpZD1lYzdjNTRlM2Q5YTgyN2ZjZmY5M2JiMmRhM2YzN2ExNA==" controls/>
        </Layout>

    );
}
