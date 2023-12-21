import "./Projects.css";
import img1 from "../../assets/images/project-1.jpg";
import img2 from "../../assets/images/project-2.jpg";
import img3 from "../../assets/images/project-3.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="project-title">
          <h1>
            our recent <span>projects</span>
          </h1>
          <hr />
        </div>
        <div className="project-content">
          <div className="project-left">
            <h2>Website development for Digital Company</h2>
            <p>
              My first thought about art, as a child, was that the artist brings
              something into the world that didn't exist before, and that he
              does it without destroying something else
            </p>
            <div style={{display: "flex", gap: "20px", alignItems: "center"}}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="242"
                  viewBox="0 0 22 242"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z"
                    fill="#FFC700"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 66C14.866 66 18 62.866 18 59C18 55.134 14.866 52 11 52C7.13401 52 4 55.134 4 59C4 62.866 7.13401 66 11 66Z"
                    fill="#D8D8D8"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 110C14.866 110 18 106.866 18 103C18 99.134 14.866 96 11 96C7.13401 96 4 99.134 4 103C4 106.866 7.13401 110 11 110Z"
                    fill="#D8D8D8"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 154C14.866 154 18 150.866 18 147C18 143.134 14.866 140 11 140C7.13401 140 4 143.134 4 147C4 150.866 7.13401 154 11 154Z"
                    fill="#D8D8D8"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 198C14.866 198 18 194.866 18 191C18 187.134 14.866 184 11 184C7.13401 184 4 187.134 4 191C4 194.866 7.13401 198 11 198Z"
                    fill="#D8D8D8"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 242C14.866 242 18 238.866 18 235C18 231.134 14.866 228 11 228C7.13401 228 4 231.134 4 235C4 238.866 7.13401 242 11 242Z"
                    fill="#D8D8D8"
                  />
                </svg>
              </div>
              <div>
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
          <div className="project-right">
            <div>
              <img src={img2} alt="" />
            </div>
            <div>
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
