import headphones1 from "./headphones1.jpg"

const HomePage = () => {
    return ( 
        <div className="header">
            <h1>AudioHead</h1>
            <h2>Discover your needs for every occasion</h2>
            <img className="homeBackground" src={headphones1} alt="Home Background" />
        </div>
     );
}
 
export default HomePage;