import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1235/Home">
            <img src="/images/calculus1.jpg" width={200} />
            <div>
              <h5>
                 CS1235 Calculus I
              </h5>
              <p className="wd-dashboard-course-title">
                Introduction to Calculus
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1236/Home">
            <img src="/images/algorithm.jpg" width={200} />
            <div>
              <h5>
                 CS1236 Algorithm
              </h5>
              <p className="wd-dashboard-course-title">
                Introduction to Algorithm
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1237/Home">
            <img src="/images/CS50.jpg" width={200} />
            <div>
              <h5>
                 CS1237 Intro to Computer Science
              </h5>
              <p className="wd-dashboard-course-title">
               Introudction to Computer Science with Python
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1238/Home">
            <img src="/images/github.jpg" width={200} />
            <div>
              <h5>
                 CS1238 Github
              </h5>
              <p className="wd-dashboard-course-title">
                Github Tutorial
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1239/Home">
            <img src="/images/office.jpg" width={200} />
            <div>
              <h5>
                 CS1239 Office
              </h5>
              <p className="wd-dashboard-course-title">
                Word, PowerPoint and Excel
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1240/Home">
            <img src="/images/themissingsemester.jpg" width={200} />
            <div>
              <h5>
                 CS1240 The Missing Semester
              </h5>
              <p className="wd-dashboard-course-title">
                The Missing Semester for Computer Sciense
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course"> 
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1241/Home">
            <img src="/images/vscode.jpg" width={200} />
            <div>
              <h5>
                 CS1241 Visual Studio Code
              </h5>
              <p className="wd-dashboard-course-title">
                Guide to Visual Studio Code
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>



  
      </div>
    </div>
  );
}

