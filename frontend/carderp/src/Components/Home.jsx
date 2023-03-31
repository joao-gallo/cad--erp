import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            oi
            <h1>home</h1>
            <a href=""></a>
            <h3>
                <Link to='/user'>Users</Link>
            </h3>
        </div>
    )
}

export default Home