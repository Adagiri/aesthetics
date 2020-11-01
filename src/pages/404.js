import React from 'react';
import { Link } from "gatsby";
import "../styles/404.scss";

import Layout from "../components/Layout";
import Head from "../components/Head";


function NotFound() {
    return (
        <div>
        <Head title="404" />
        <div class="mainbox">
    <div class="err">4</div>
    <div class="far">0</div>
    <div class="err2">4</div>
    <div class="msg">Maybe this page moved or got deleted or doesn't exist.<p>Let's go <Link to="/">home</Link> and try from there.</p></div>
      </div>
        </div>
    )
}

export default NotFound;
