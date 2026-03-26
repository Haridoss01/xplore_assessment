import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import './index.css'

function GetinTouch() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phNumber,setPhno] = useState('')
    const [sub,setSub] = useState('')
    const [msg,setMsg] = useState('')
    const [err,setErr]=useState(false)

    const handleFormData = async (e) => {
        e.preventDefault();
        if(name.trim()!=='' && email.trim()!=='' && phNumber.trim()!=='' && sub.trim()!=='' && msg.trim()!==''){
            const response =await fetch("http://localhost:8000/send-mail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                },
            body: JSON.stringify({name,  email,  phNumber,  sub,  message: msg})
            })
            console.log(await response.json());
            setName('');
            setEmail('');
            setPhno('');
            setMsg('');
            setSub('');
        }else{
            setErr(true);
        }
    }


  return (
    <div className="git-main">
        <div className="git-con">
            <h1>Get In Touch</h1>
            <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            <div className="contact-info-con">
                <h3>Contact Information</h3>
                <p>Reach out to us through any of the channels below. Our team is ready to assist you with any inquiries about our courses, enrollment process, or career opportunities.</p>
                <div className="visit-us-con">
                    <span><FaLocationDot /></span>
                    <div>
                        <h4>Visit Us</h4>
                        <p>123 Tech Street, Silicon Valley, CA 94025</p>
                    </div>
                </div>
                <div className="visit-us-con">
                    <span><FaLocationDot /></span>
                    <div>
                        <h4>Visit Us</h4>
                        <p>123 Tech Street, Silicon Valley, CA 94025</p>
                    </div>
                </div>
                <div className="visit-us-con">
                    <span><FaLocationDot /></span>
                    <div>
                        <h4>Visit Us</h4>
                        <p>123 Tech Street, Silicon Valley, CA 94025</p>
                    </div>
                </div>
                <div className="business-hrs-con">
                    <h5>Business Hours</h5>
                    <div>
                        <span>Monday - Friday:</span>
                        <p>9:00 AM - 6:00 PM</p>
                    </div>
                    <div>
                        <span>Saturday:</span>
                        <p>10:00 AM - 4:00 PM</p>
                    </div>
                    <div>
                        <span>Sunday:</span>
                        <p>Closed</p>
                    </div>
                </div>
            </div>
        </div>
        <form onSubmit={handleFormData}>
            <div className="input-con">
                <label htmlFor="name">Full Name*</label>
                <input type="text" id="name" placeholder="John Doe" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="input-con">
                <label htmlFor="email">Email Address*</label>
                <input type="email" id="email" placeholder="John@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="input-con">
                <label htmlFor="ph">Phone Number*</label>
                <input type="text" id="ph" placeholder="+1 (555) 123-4567" value={phNumber} onChange={(e)=>setPhno(e.target.value)}/>
            </div>
            <div className="input-con">
                <label htmlFor="sub">Subject*</label>
                <input type="text" id="sub" placeholder="Course inquiry" value={sub} onChange={(e)=>setSub(e.target.value)}/>
            </div>
            <div className="input-con">
                <label htmlFor="msg">Message*</label>
                <input type="text" id="msg" placeholder="Tell us about your inquirey..." value={msg} onChange={(e)=>setMsg(e.target.value)}/>
            </div>
            <button type="submit" className="send-btn">Send Message <IoIosSend/></button>
            {err && <p style={{color:"red"}}>* Required fields</p>}
        </form>
    </div>
  )
}

export default GetinTouch