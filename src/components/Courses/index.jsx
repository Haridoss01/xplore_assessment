import { CiTimer } from "react-icons/ci";
import { RxPeople } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";
import { FaArrowRightLong } from "react-icons/fa6";
import './index.css'

function Courses() {
  return (
    <div className="courses-main">
        <div className="courses-con">
            <h1>Our Popular Courses</h1>
            <p>Explore our most sought-after programs designed to make you job-ready</p>
            <div className="cousers">
                <div className="course-card">
                    <div className="c-card-img-con">
                        <img src="https://images.unsplash.com/photo-1597239451147-f163967b8581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGluZyUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NzQ0MTQ5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="course-crd"/>
                        <span>Begginer to Advanced</span>
                    </div>
                    <div className="c-content">
                    <h1>Full Stack Web Development</h1>
                    <p>Master HTML, CSS, JavaScript, React, Node.js, and MongoDB to build complete web applications.</p>
                    <div className="c-details">
                        <span><CiTimer    className="icon"/> 6 months</span>
                        <span><RxPeople   className="icon"/> 2,500+</span>
                        <span><AiFillStar className="icon" style={{color:"yellow"}}/> 4.9</span>
                    </div>
                    <button type="button" className="enroll-btn">Enroll Now <FaArrowRightLong/></button>
                    </div>
                </div>
                <div className="course-card">
                    <div className="c-card-img-con">
                        <img src="https://images.unsplash.com/photo-1597239451147-f163967b8581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGluZyUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NzQ0MTQ5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="course-crd"/>
                        <span>Begginer to Advanced</span>
                    </div>
                    <div className="c-content">
                    <h1>Full Stack Web Development</h1>
                    <p>Master HTML, CSS, JavaScript, React, Node.js, and MongoDB to build complete web applications.</p>
                    <div className="c-details">
                        <span><CiTimer    className="icon"/> 6 months</span>
                        <span><RxPeople   className="icon"/> 2,500+</span>
                        <span><AiFillStar className="icon" style={{color:"yellow"}}/> 4.9</span>
                    </div>
                    <button type="button" className="enroll-btn">Enroll Now <FaArrowRightLong/></button>
                    </div>
                </div>
                <div className="course-card">
                    <div className="c-card-img-con">
                        <img src="https://images.unsplash.com/photo-1597239451147-f163967b8581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGluZyUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NzQ0MTQ5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="course-crd"/>
                        <span>Begginer to Advanced</span>
                    </div>
                    <div className="c-content">
                    <h1>Full Stack Web Development</h1>
                    <p>Master HTML, CSS, JavaScript, React, Node.js, and MongoDB to build complete web applications.</p>
                    <div className="c-details">
                        <span><CiTimer    className="icon"/> 6 months</span>
                        <span><RxPeople   className="icon"/> 2,500+</span>
                        <span><AiFillStar className="icon" style={{color:"yellow"}}/> 4.9</span>
                    </div>
                    <button type="button" className="enroll-btn">Enroll Now <FaArrowRightLong/></button>
                    </div>
                </div>
            </div>
            <button type="button" className="all-c-btn">View All Courses <FaArrowRightLong /></button>
        </div>
    </div>
  )
}

export default Courses