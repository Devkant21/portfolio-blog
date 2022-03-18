import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav>
                    <NavLink to="/" exact>
                        Devkant
                    </NavLink>
                    <NavLink to='/post'>
                        Blog Post
                    </NavLink>
                    <NavLink to='/project'>
                        Projects
                    </NavLink>
                    <NavLink to='/about'>
                        About 
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="./https://twitter.com/devkant21" className="mr-4" target="blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="./https://github.com/Devkant21" className="mr-4" target="blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="./https://dev21.hashnode.dev/" className="mr-4" target="blank" fgColor="#fff" style={{ height: 35, width: 35 }} />

                </div>
                
            </div>
        </header>
    )
}