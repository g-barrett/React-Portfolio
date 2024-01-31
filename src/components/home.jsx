export default function Header() {
    const linkStyle = { border: '1px black', padding: '5px' };

    return (
        <div>
            <h1 className="page-headers">Home</h1>
            <p className="body-text">
                Welcome to my portfolio!
            </p>
            <img className="bigself" src="../src/assets/bigself.jpg"></img>
        </div>
    );
};