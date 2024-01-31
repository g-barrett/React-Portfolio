export default function Project() {
    return (
        <div>
            <h1 className="page-headers">Featured Projects</h1>
            <article class="card first" id="bar">
            <a href="https://acantu9.github.io/team-5-project/" alt="Bar Crawler" title="Bar Crawler"><span class="link"></span></a>
                <h2>Bar Crawler</h2>
                <p id="description">An app for searching nearby bars and creating a "crawl" for a night on the town!
                </p>
            </article>
            <article class="card" id="film">
                <a href="https://film-files.onrender.com/" alt="Film Files" title="Film Files"><span class="link"></span></a>
                    <h2>Film Files</h2>
                    <p id="description">A MERN stack application for searching your favorite movies and leaving a review. See what others think of the same movie as well!</p>
            </article>
            <article class="card" id="nomnom">
                <a href="https://protected-depths-05907-83495a2b8648.herokuapp.com/home" alt="Nom Nom Navigator" title="Nom Nom Navigator"><span class="link"></span></a>
                    <h2>Nom Nom Navigator</h2>
                    <p id="description">An app using express to find nearby restaruants and create a list of favorites, dislikes, and "want to go" places.</p> 
            </article>
            <article class="card" id="soon">
                <a href="" alt="Coming Soon" title="Coming Soon"><span class="link"></span></a>
                    <h2>Coming Soon...</h2>
                    <p id="description">New projects in the works...</p>
            </article>
        </div>
        );
};