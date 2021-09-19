import React from "react";

const HomepageMaterialize = () => {
    return (
        <>
            <div className="navbar-fixed valign-wrapper">
                <nav>
                    <div class="nav-wrapper transparent">
                        <a href="#" class="brand-logo center">
                            Cake<span style={{ color: "orange" }}>sie</span>{" "}
                        </a>
                        <ul id="nav-mobile" class="left hide-on-med-and-down">
                            <li>
                                <a href="sass.html">Sass</a>
                            </li>
                            <li>
                                <a href="badges.html">Components</a>
                            </li>
                            <li>
                                <a href="collapsible.html">JavaScript</a>
                            </li>
                        </ul>

                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li>
                                <a href="sass.html">Sign In</a>
                            </li>
                            <li>
                                <a href="badges.html">Sign Up</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default HomepageMaterialize;
