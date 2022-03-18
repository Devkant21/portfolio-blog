import { Navlink } from "react-router-dom"


export default function Navbar() {
    return (
        <header>
            <div>
                <nav>
                    <Navlink to="/" exact>
                        Devkant
                    </Navlink>
                    <Navlink to="/post">
                        BlogPost
                    </Navlink>
                    <Navlink to="/project">
                        Projects
                    </Navlink>
                    <Navlink to="/about">
                        About 
                    </Navlink>
                </nav>
            </div>
        </header>
    )
}