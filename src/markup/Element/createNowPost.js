import React from "react"

import '../../css/post.css'
import 'antd/dist/antd.css';


import "./sercheruser.css"
import { FaVideo, FaRegFileImage, FaRegGrinAlt } from "react-icons/fa";
const CreatePost = ({ user, postText, setpostText, handlepostimage ,handelClick}) => {

    // window.addEventListener("scroll", function () {
    //     const search = document.querySelector(".search")
    //     search.classList.toggle("active", window.scrollY > 100)
    // }) 

    return (
        <section className=' boxShadow' style={{width:"100%"}}>
            <div className="create"  >
                <div className="create__first">
                    <div className="create__first-img">
                        <span>
                            <img src={'http://localhost:4000/file/' + user.avatar} className='createFormAvatar m-t15' alt="" />
                        </span>
                    </div>
                    <div className="create__first-input">
                        <input contenteditable="true"
                            value={postText} onChange={(e) => setpostText(e.target.value)} type='text'

                            className="create__first-inputs"
                            placeholder="Shakil what are your mind? "
                        />
                    </div>
                </div>
                <div className="create__second">
                    <span className="create__second-icon">
                        <FaVideo className="redColor" />{" "}
                        <span className="text">Live Video</span>
                    </span>
                    <span className="create__second-icon">
                        <input type="file" id='postimage' onChange={(e) => handlepostimage(e)} hidden />



                        {/* <FontAwesomeIcon className='' onClick={() => document.getElementById('postimage').click()} type='file' icon={faImage} /> */}

                        <FaRegFileImage className="greenColor" onClick={() => document.getElementById('postimage').click()} type='file' />{" "}

                        <span className="text">Photo / Video</span>
                    </span>
                    <span className="create__second-icon">
                        <FaRegGrinAlt className="orangeColor" />{" "}
                        <span className="text">Feeling</span>
                    </span>
                    <button onClick={handelClick} >valider</button>
                </div>
            </div>
        </section>
    );
};

export default CreatePost;

