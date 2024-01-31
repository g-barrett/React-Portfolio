export default function Project() {
    return (
        <div>
            <h1 className="page-headers">Featured Projects</h1>
            <article class="card first" id="python">
            <a href="https://github.com/acantu9/team-5-project" alt="Bar Crawler" title="Bar Crawler"><span class="link"></span></a>
                <h2>Bar Crawler</h2>
                <p id="description">An app for searching nearby bars and creating a "crawl" for a night on the town!
                </p>
            </article>
            <article class="card" id="mern">
                <a href="https://film-files.onrender.com/" alt="Film Files" title="Film Files"><span class="link"></span></a>
                    <h2>Film Files</h2>
                    <p id="description">A MERN stack application for searching your favorite movies and leaving a review. See what others think of the same movie as well!</p>
            </article>
            <article class="card" id="whattodo">
                <a href="https://github.com/g-barrett/Group-1-Project-2" alt="Nom Nom Navigator" title="Nom Nom Navigator"><span class="link"></span></a>
                    <h2>Nom Nom Navigator</h2>
                    <p id="description"></p> An app using express to find nearby restaruants and create a list of favorites, dislikes, and "want to go" places.
            </article>
            <article class="card" id="express">
                <a href="" alt="Coming Soon" title="Coming Soon"><span class="link"></span></a>
                    <h2>Coming Soon</h2>
                    <p id="description">New projects in the works...</p>
            </article>
        </div>
        );
};