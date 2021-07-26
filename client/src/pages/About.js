import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/About.css'

export default function About() {
    return (
        <div className="aboutPage">
            <Navbar/>
            <h2>About</h2>
            <div className="content">
                <div className="description">
                    <h3>Description</h3>
                    <p>This Website 'Cocktail Search' allows the user to browse through all existing cocktails. You can select a specific cocktail from the search bar to view its detail page. The detail page consists of the cocktail image, what glass it is served in, the ingredients and measures to make the cocktail, and the instructions. Enjoy!</p>
                    <p>Email: jjjung3571@gmail.com for bugs or potential improvements</p>
                </div>
                <div className="source">
                    <h3>Source API</h3>
                    <p>The following API was used to create the project: </p>
                    <a href="https://www.thecocktaildb.com/api.php"><p>https://www.thecocktaildb.com/api.php</p></a>
                </div>
                <div className="github">
                    <h3>Github</h3>
                    <p>Link to the github repository</p>
                    <a href="https://github.com/jongjin-j/Cocktails"><p>https://github.com/jongjin-j/Cocktails</p></a>
                </div>
            </div>
            
        </div>
    )
}
