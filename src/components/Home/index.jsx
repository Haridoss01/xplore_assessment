import { FaArrowRightLong } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";
import './index.css'

function Home(){
    return (
    <div className="home-main">
        <div className="home-left">
            <p className="home-ct">🚀 Transform Your Future with Code</p>
            <h1>Master Programming at Xplore IT CORP</h1>
            <p>Launch your tech career with industry-leading programming courses. Learn from experts, build real projects, and join a thriving community of developers.</p>
            <div className="home-btns">
                <button type="button" className="home-btn1">Start Learnign Today  <FaArrowRightLong /></button>
                <button type="button" className="home-btn2"><CiPlay1 /> Watch Demo</button>
            </div>
            <div className="counts-con">
                <span><strong>10K+</strong><br />Students</span>
                <span><strong>50K+</strong><br />Courses</span>
                <span><strong>95K+</strong><br />Success Rate</span>
            </div>
        </div>
        <div className="home-right">
            <img src="https://images.unsplash.com/photo-1597239451147-f163967b8581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGluZyUyMHdvcmtzcGFjZSUyMGxhcHRvcHxlbnwxfHx8fDE3NzQ0MTQ5NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="home-img"/>
            <div className="home-right-content">
                <span>JS</span>
                <div>
                    <h4>JavaScript Masterclass</h4>
                    <p>Start Your journey today</p>
                </div>
            </div>
        </div>
    </div>)
}

export default Home