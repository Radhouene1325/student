// import React from 'react'
// import '../../css/post.css'
import { BsThreeDotsVertical } from 'react-icons/bs'
// import { AiFillHeart } from 'react-icons/ai'
import ReadMoreReact from 'read-more-react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt, FaShare } from "react-icons/fa";
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { FaVideo, FaRegFileImage, FaRegGrinAlt } from "react-icons/fa";
import EmojiPicker from 'emoji-picker-react';


import { allselectpost, commentaireLAst, commentPost, deletePost, Dislike, getCmtfromPost, getPosts, lastcom, lastComent, Like, selectPosts } from '../../features/posts/postsSlice';
// // import { selectUserDetails } from '../../features/authentication/authenticationSlice';
// import { BiMessageMinus } from 'react-icons/bi'
import { Menu, Dropdown } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';
import { AuthContext } from '../../context/AuthContext';
// import { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { Spinner } from 'react-bootstrap';
// import { useState } from 'react';
import { faCamera, faFaceSmile, faMessageLines, faShare } from "@fortawesome/sharp-solid-svg-icons"
import Pagination from "./PaginationPaage";

import { addcomstatus, afichage, comt, creatComment, createReponce, deletComment, deletecomt, getByiDcOMMENT, getCommentaire, openrep, repcommente, repondreCommtaire, selectChangedPost, showComments, showCommentsStatus } from '../../features/Comment/commentSlice';
// // import Comment from './Comment';
// import "../Pages/index.css"

// export default ({ post }) => {

//     const menu = (
//         <Menu>
//             <Menu.Item onClick={() => dispatch(deletePost(post._id))} icon={<DeleteOutlined />} danger>delete</Menu.Item>
//         </Menu>
//     );


//     const dispatch = useDispatch()


//     const user = useContext(AuthContext)

//     const More = () => {
//         return (
//             <>
//                 <span style={{ cursor: "pointer", fontSize: "14px", color: "lightgrey" }} >...more</span>
//             </>
//         )
//     }

//     // const object={  display: flex;
//     //     justify-content: space-between;
//     //     padding: 15px;
//     //     margin-top: 15px;
//     //   }

//     // const addComment = (e) => {

//     //     let data = {
//     //         text: e.target.value,
//     //         post: post._id
//     //     }

//     //     if (e.key === 'Enter') {
//     //         dispatch(creatComment(data))
//     //         document.getElementById('cominput').value = ''
//     //     }
//     // }

//     const [open, setOpen] = useState(false);
//     const [suite, setSuite] = useState(true)




//     return (
//         <div className="show">

//         <div className="empty">
//             <div className="d-flex justify-content-between">
//             <div className="show__header d-flex justify-content-between">
//                 <div className="show__header-img">
//                     <img src={'http://localhost:4000/file/' + post.user.avatar} className='createFormAvatar' alt="" />

//                 </div>
//                 <div className="show__header-name">
//                     {post.user.lastName} {post.user.name}  <div className="date">{moment(post.createdAt).fromNow()}</div>
//                 </div>
//             </div>
//              <Dropdown overlay={menu} placement='bottomRight'>
//                                     <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
//                                         <BsThreeDotsVertical className='postsettings' />
//                                     </a>
//                                 </Dropdown>
//                                 </div>
//             <div className="show__body">
//                 <div className="show__body-text">

//                  <ReadMoreReact text={post.text}


//                      min={200}
//                      ideal={400}
//                      max={450}
//                 readMoreText={<More />}
//                  /></div>
//                 <div className="show__body-img">
//                     {/* <img src={post.postImg} alt="post" /> */}
//                 </div>
//             </div>
//             <div className="show__reactions">
//                 <span className="reactions">
//                     {
//                         !post.likes.includes(user._id)
//                             ?
//                             <>
//                                 <FaRegThumbsUp className='reactions-text' onClick={() => dispatch(Like(post._id))} /> <span   >{post.likes.length}</span>
//                             </>
//                             :
//                             <>
//                                 <FaRegThumbsUp className='dislikeicon' onClick={() => dispatch(Dislike(post._id))} /> <span   >{post.likes.length}</span>
//                             </>
//                     }
//                     {/* <FaRegThumbsUp /> <span className="reactions-text">Like</span> */}
//                 </span>
//                 <span className="reactions">

//                     <FaRegCommentAlt  /> <span >{post.comments.length}</span>

//                     <span className="reactions-text">Comments</span>
//                 </span>
//                 <span className="reactions">
//                     <FaShareAlt /> <span className="reactions-text">Share</span>
//                 </span>
//             </div>
//         </div>

// </div>


//         // <div class="col-lg-12 col-sm-12 show-up  wow fadeInUp " data-wow-duration="1s" data-wow-delay="0.3s">
//         //     <div class="blog-post " style={{ marginTop: "40px" }}>

//         //         <Card.Body className="shadow ">
//         //             <Card.Header className="">
//         //                 <div class="d-flex justify-content-between">
//         //                     <div className='headerleft' >
//         //                         <img src={'http://localhost:4000/file/' + post.user.avatar} className='createFormAvatar' alt="" />

//         //                         <div className="postinfo">
//         //                             <h6>{post.user.lastName} {post.user.name}  </h6>
//         //                             <span>{moment(post.createdAt).fromNow()}</span>
//         //                         </div>
//         //                     </div>
//         //                     <div className="headerright">
//         //                         {
//         //                             !post.likes.includes(user._id)
//         //                                 ?
//         //                                 <>
//         //                                     <AiFillHeart className='likeicon' onClick={() => dispatch(Like(post._id))} /> <span style={{ color: "black" }}  >{post.likes.length}</span>
//         //                                 </>
//         //                                 :
//         //                                 <>
//         //                                     <AiFillHeart className='dislikeicon' onClick={() => dispatch(Dislike(post._id))} /> <span style={{ color: "black" }}  >{post.likes.length}</span>
//         //                                 </>
//         //                         }

//         //                         <BiMessageMinus style={{ marginLeft: "15px", fontSize: "20px" }} /> <span style={{ color: "black" }}>{post.comments.length}</span>

//         //                         <Dropdown overlay={menu} placement='bottomRight'>
//         //                             <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
//         //                                 <BsThreeDotsVertical className='postsettings' />
//         //                             </a>
//         //                         </Dropdown>
//         //                     </div>
//         //                 </div>
//         //             </Card.Header>
//         //             <Card className="col-md-12 col-xl-12 col-lg-12 col-sm-12 " style={{ width: "50rem" }}>
//         //                 {post.text}

//         //                 <ReadMoreReact text={post.text}


//         //                     min={100}
//         //                     ideal={200}
//         //                     max={250}
//         //                readMoreText={<More />}
//         //                 />


//         //                 <Card.Title>

//         //                     {post.image && <div class="thumb mt-2">
//         //                         <a href="#"><img src="assets/images/blog-post-01.jpg" alt="" /></a>
//         //                     </div>}
//         //                     <div class="">

//         //                         <div className='post-down-header col-md-10 col-sm-5 ' >

//         //                             <Button onClick={() => setOpen(!open)}
//         //                                 aria-controls="example-collapse-text"
//         //                                 aria-expanded={open} className="site-button button-sm col-sm-2 col-md-3  " style={{ backgroundColor: "#0046c6", left: "75%" }}>  lire la suite <i className="fa fa-lastComment-arrow-right"></i></Button>

//         //                         </div>
//         //                         <Example open={open} setOpen={setOpen} post={post} />


//         //                         <div className="">
//         //                             <div className="">

//         //                                 {/* <img src={"http://localhost:4000/file/" + post.user.avatar} alt="" /> */}
//         //                                 {/* <input onKeyDown={(e) => addComment(e)} type="text" id='cominput' placeholder="write a comment !" /> */}

//         //                             </div>
//         //                             <div className="">

//         //                                 {/* {
//         //                         post.comments.map(com => {
//         //                             return (

//         //                                 <Comment comment={com} />
//         //                             )
//         //                         })
//         //                     } */}
//         //                             </div>


//         //                         </div>
//         //                     </div>
//         //                 </Card.Title>
//         //             </Card>

//         //         </Card.Body>







//         //         {/* <div className='headerleft' >
//         //                 <img src={'http://localhost:4000/file/' + post.user.avatar} className='createFormAvatar' alt="" />

//         //                 <div className="postinfo">
//         //                     <h6>By: {post.user.name} </h6>
//         //                     <span>{moment(post.createdAt).fromNow()}</span>
//         //                 </div>
//         //             </div> */}

//         //         {/* <div className="headerright">
//         //                 <Dropdown overlay={menu} placement='bottomRight'>
//         //                     <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
//         //                         <BsThreeDotsVertical className='postsettings' />
//         //                     </a>
//         //                 </Dropdown>
//         //             </div> */}



//         //         {/* <div className="postText">

//         //             <ReadMoreReact text={post.text}
//         //                 min={300}
//         //                 ideal={400}
//         //                 max={450}
//         //                 readMoreText={<More />}
//         //             />
//         //         </div> */}


//         //     </div>
//         // </div>
//     )
// }









// // const ShowPost = () => {

// //     return (
// //         <div className="show">

// //                 <div className="empty">
// //                     <div className="show__header">
// //                         <div className="show__header-img">
// //                             <img src={'http://localhost:4000/file/' + post.user.avatar} className='createFormAvatar' alt="" />

// //                         </div>
// //                         <div className="show__header-name">
// //                             {post.user.lastName} {post.user.name}  <div className="date">{moment(post.createdAt).fromNow()}</div>
// //                         </div>
// //                     </div>
// //                     <div className="show__body">
// //                         <div className="show__body-text">{post.text}</div>
// //                         <div className="show__body-img">
// //                             {/* <img src={post.postImg} alt="post" /> */}
// //                         </div>
// //                     </div>
// //                     <div className="show__reactions">
// //                         <span className="reactions">
// //                             {
// //                                 !post.likes.includes(user._id)
// //                                     ?
// //                                     <>
// //                                         <FaRegThumbsUp className='reactions-text' onClick={() => dispatch(Like(post._id))} /> <span   >{post.likes.length}</span>
// //                                     </>
// //                                     :
// //                                     <>
// //                                         <FaRegThumbsUp className='dislikeicon' onClick={() => dispatch(Dislike(post._id))} /> <span   >{post.likes.length}</span>
// //                                     </>
// //                             }
// //                             {/* <FaRegThumbsUp /> <span className="reactions-text">Like</span> */}
// //                         </span>
// //                         <span className="reactions">

// //                             <FaRegCommentAlt  /> <span >{post.comments.length}</span>

// //                             <span className="reactions-text">Comments</span>
// //                         </span>
// //                         <span className="reactions">
// //                             <FaShareAlt /> <span className="reactions-text">Share</span>
// //                         </span>
// //                     </div>
// //                 </div>

// //         </div>
// //     );
// // };


import React, { useContext, useEffect, useRef, useState } from "react";
import { IconButton } from "@mui/material";
import {
    ChatBubbleOutline,
    MoreVert,
    Favorite,
    ThumbUp,
    ThumbUpAltOutlined,
    ShareOutlined,
} from "@mui/icons-material";
import TimeAgo from "react-timeago";
import { Link } from "react-router-dom"
import "./cssformie/poste.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { insc, selectloginstatus } from '../../features/authentification/authSlice';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { SouCommentaireResponsive } from './soucommentaireResponsive';
import InsideComments from './insideComments';
import { faMessage, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import LastComment from './LastComment';
import PublicationPost from './PublicationPost';
import UpdateComment from './UpdateComment';

export const LastCommentContext = React.createContext()
export const PostContext = React.createContext()
export const updateCommetsContext = React.createContext()

let tab = []
export default function Posts({ post }) {




    const [afiche, setAfiche] = useState(false)
    const openComent = useSelector(openrep)
    console.log(openComent)
    const [update, setUpdate] = useState(false)
    const [commentOpen, setCommentOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('bottom');
    const [loading, setLoading] = useState(true);
    const [sup, setSup] = useState(false)
    console.log(sup)
    const [placeHolder, setPlaceHolder] = useState(false)
    const [nameuser, setNameuser] = useState(false)
    console.log(nameuser)
    const [pagine, setPagine] = useState(false)

    const aficheTime = (checked) => {
        setTimeout(() => {
            setLoading(checked);

        }, 2000);
    };

    const showDrawer = () => {
        setOpen(true);
    };
    const onChange = (e) => {
        setPlacement("bottom");
    };

    const user = useContext(AuthContext)
    console.log(user)
    const connect = useSelector(selectloginstatus)
    console.log(connect)
    const dispatch = useDispatch()
    const menu = (
        <Menu>
            <Menu.Item onClick={() => dispatch(deletePost(post._id))} icon={<DeleteOutlined />} danger>delete</Menu.Item>
        </Menu>
    );
    const More = () => {
        return (
            <>
                <span style={{ cursor: "pointer", fontSize: "14px", color: "lightgrey" }} >...more</span>
            </>
        )
    }

    /***************fonction permette decrire une publication (post)*********** */
    setTimeout(() => {
        setPagine(false)
    }, 500000);
    const [commentaire, setCommentaire] = useState({
        text: ""
    })

    const comment = useSelector(selectChangedPost)
    console.log(comment)
    console.log(commentaire)
    const handleKeyDown = (event) => {
        let data = {
            text: commentaire.text,
            post: post._id,
            user: user.user._id

        }
        console.log(data)
        if (event.key === 'Enter') {
            if (data.text.trim().length !== 0) {

                dispatch(creatComment(data))
                dispatch(getPosts())
                setSup(true)

            } else {
                event.preventDefault()

            }

        }

    };



    const refdiv = useRef(null)
    useEffect(() => {
        if (pagine === true) {
            return (refdiv.current?.scrollIntoView({ behavior: 'smooth' }))
        }

    }, [pagine])




    //   useEffect(() => {
    //     const unSub = onSnapshot(
    //       collection(db, "posts", post.id, "likes"),
    //       (snapshot) => setLikes(snapshot.docs)
    //     );
    //     return () => {
    //       unSub();
    //     };
    //   }, [post.id]);

    //   useEffect(() => {
    //     setLiked(likes.findIndex((like) => like.id === currentUser?.uid) !== -1);
    //   }, [likes, currentUser.uid]);

    //   useEffect(() => {
    //     const unSub = onSnapshot(
    //       collection(db, "posts", post.id, "comments"),
    //       (snapshot) => {
    //         setComments(
    //           snapshot.docs.map((snapshot) => ({
    //             id: snapshot.id,
    //             data: snapshot.data(),
    //           }))
    //         );
    //       }
    //     );
    //     return () => {
    //       unSub();
    //     };
    //   }, [post.id]);

    //   const handleComment = async (e) => {
    //     e.preventDefault();

    //     await addDoc(collection(db, "posts", post.id, "comments"), {
    //       comment: input,
    //       displayName: currentUser.displayName,
    //       photoURL: currentUser.photoURL,
    //       uid: currentUser.uid,
    //       timestamp: serverTimestamp(),
    //     });
    //     setCommentBoxVisible(false);
    //     setInput("");
    //   };

    //   const likePost = async () => {
    //     if (liked) {
    //       await deleteDoc(doc(db, "posts", post.id, "likes", currentUser.uid));
    //     } else {
    //       await setDoc(doc(db, "posts", post.id, "likes", currentUser.uid), {
    //         userId: currentUser.uid,
    //       });
    //     }
    //   };
    // console.log(comments);


    /***********fonction permette de crier un commentaire********************************* */
    const [reponce, setReponce] = useState({
        text: ""

    })
    console.log(reponce)

    const index = {
        text: reponce.text,
        user: user.user._id,
        comment: openComent.idcmt,
    }
    console.log(index)
    const handleKeyDownrep = (event) => {
        if (event.key === "Enter") {
            if (index.text.trim().length !== 0) {
                console.log("chapnt  not vide")
                dispatch(createReponce(index))
                dispatch(getPosts())
                setSup(true)
                setPlaceHolder(true)

                return true
            } else {
                event.preventDefault()
                setPlaceHolder(false)


                return false
            }
        }
    };
    /*******************************************end**** */

    const reponseCommentaire = useSelector(repcommente)
    console.log(reponseCommentaire)
    const repondre = (id) => {
        dispatch(getByiDcOMMENT(id))

    }


    /******* get the last commentaire to all post****** */
    const last = post.comments[post.comments.length - 1]
    console.log(last)

    /***********end************* */


    const props = {
        ReadMoreReact,
        post, aficheTime, setReponce, reponce, handleKeyDownrep, dispatch, getByiDcOMMENT,
        loading, openComent, More, moment, sup, setSup, placeHolder, user, refdiv, repondre
    }

    //display the last comment in first render 
    const lastComment = { tab, post, setCommentaire, commentaire, sup, handleKeyDown, setSup, refdiv, pagine, last, post, openComent, ReadMoreReact, More, showDrawer, repondre, onChange, afiche, setAfiche, aficheTime, user, dispatch, getByiDcOMMENT, setPagine, setUpdate, moment, props, update }
    ///end


    /*****paramétre de creation de nouvelle publication post***** */

    const publicationPost = { post, moment, More, user, Dislike, setCommentOpen, commentOpen, setPagine, pagine, Like, menu }
    /*************************end***************** */


    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = post.comments.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
        <div className="post" >
            <PostContext.Provider value={publicationPost}>
                <PublicationPost />
            </PostContext.Provider>




            <>
                {/* //display the last comment in first render  */}
                <LastCommentContext.Provider value={lastComment}>
                    {!post.comments[0] ? null : <LastComment />}
                </LastCommentContext.Provider>
                {/* end */}



                {post.comments.length === 0 ?
                    <div className="cmtresponsiv" style={{

                        margin: "-17px 0px 11px 36px",
                        marginRight: "56px",
                        background: "#fff",


                    }}>
                        <div className="create__first">
                            <div className="create__first-img">
                                <span>
                                    <img src={'http://localhost:4000/file/' + post.user.avatar} className='createFormAvatar m-t15' alt="" />
                                </span>
                            </div>
                            <div className="create__first-input d-flex justify-content-between" style={{ position: "relative" }}>
                                <div ref={refdiv} style={{ width: "30%", height: "20px", position: "absolute", top: "-29px" }}></div>

                                <div id="input" contenteditable="true" className="responsivinp commentaire"
                                    style={{
                                        width: "28rem",

                                        display: "table-cell",
                                        padding: "15px 20px",
                                        border: "none",
                                        background: "#f0f2f5",
                                        borderRadius: "30px",
                                        outline: "none",
                                        wordBreak: "break-word"
                                    }}
                                    placeholder='Écriver un commentaire'

                                    onInput={(e) => setCommentaire({ ...commentaire, text: sup === true ? e.currentTarget.textContent = "" : e.currentTarget.textContent })}
                                    onKeyDown={handleKeyDown}
                                    onKeyUp={(() => { setSup(false) })}

                                >
                                </div>
                                <div className='' style={{ display: "flex", justifyContent: "space-between", width: "7%", position: "absolute", left: "87%", top: "17px" }}
                                >

                                    <FontAwesomeIcon icon={faFaceSmile} style={{ cursor: "pointer" }} />
                                    <FontAwesomeIcon icon={faCamera} />
                                </div>

                            </div>
                        </div>

                    </div> : null
                }



                {post.comments.length===0?null:pagine === true && <>
                    <div className="cmtresponsiv" style={{ margin: "-17px 0px 11px", marginRight: "56px", background: "#fff", }}>
                        <div className="create__first">
                            <div className="create__first-img">
                                <span>
                                    <img src={'http://localhost:4000/file/' + post.user.avatar} className='createFormAvatar m-t15' alt="" />
                                </span>
                            </div>
                            <div className="create__first-input d-flex justify-content-between" style={{ position: "relative" }}>
                                <div ref={refdiv} style={{ width: "30%", height: "20px", position: "absolute", top: "-29px" }}></div>

                                <div id="input" contenteditable="true" className="responsivinp commentaire"
                                    style={{
                                        width: "28rem",

                                        display: "table-cell",
                                        padding: "15px 20px",
                                        border: "none",
                                        background: "#f0f2f5",
                                        borderRadius: "30px",
                                        outline: "none",
                                        wordBreak: "break-word"
                                    }}
                                    placeholder='Écriver un commentaire'

                                    onInput={(e) => setCommentaire({ ...commentaire, text: sup === true ? e.currentTarget.textContent = "" : e.currentTarget.textContent })}
                                    onKeyDown={handleKeyDown}
                                    onKeyUp={(() => { setSup(false) })}

                                >  </div>
                                <div className='' style={{ display: "flex", justifyContent: "space-between", width: "7%", position: "absolute", left: "87%", top: "17px" }}

                                >
                                    <FontAwesomeIcon icon={faFaceSmile} style={{ cursor: "pointer" }} />
                                    <FontAwesomeIcon icon={faCamera} />

                                </div>

                            </div>
                        </div>

                    </div>


                    <div className="comment" >
                        {/* <Pagination totalPosts={post.comments.length} postsPerPage={postsPerPage} paginate={paginate} /> */}

                        {!post.comments ? <>login</> : post.comments

                            .map((c) => (
                                <div>

                                    <div className="commentWrapper"   >
                                        <div style={{ position: "relative" }}>
                                            <img
                                                className="commentProfileImg"
                                                src={'http://localhost:4000/file/' + c.user.avatar}

                                                alt=""
                                            />

                                        </div>
                                        <div className="commentInfo" style={{ postion: "relative" }}>



                                            {

                                                update === false && afiche === true && c._id === openComent.idcmt ? <div className="create__first">
                                                    {/*updateCommentaire   */}
                                                    <updateCommetsContext.Provider value={{ refdiv, setCommentaire, commentaire, handleKeyDown, openComent, c, setAfiche }}>
                                                        <UpdateComment />
                                                    </updateCommetsContext.Provider>


                                                    {/* end Update */}
                                                </div> : <>
                                                    <div className='' style={{
                                                        maxWidth: "30rem",

                                                        backgroundColor: c._id === openComent.idcmt ? "#e7f3ff" : '#f0f2f5', padding: "11px",
                                                        marginTop: "21px", borderRadius: "30px 30px 30px 30px", wordBreak: "break-all"
                                                    }}>


                                                        <div>  <p style={{
                                                            color: "#212529",
                                                            fontStyle: " oblique",
                                                            fontSize: "0.9999rem",
                                                            fontWeight: " bold",
                                                            fontFamily: "serif"
                                                        }} >{c.user.name} {c.user.lastName} </p>
                                                        </div>

                                                        <div className="" style={{ marginTop: "-21px", marginBottom: "0em" }}    >
                                                            <ReadMoreReact text={c.text} min={200}
                                                                ideal={400}
                                                                max={450}
                                                                readMoreText={<More />}
                                                            />
                                                        </div>
                                                    </div>
                                                    <p onClick={(() => { repondre(c._id); showDrawer(); onChange() })} className='block' variant="primary" >
                                                        repondre
                                                    </p>
                                                    <div style={{ marginTop: " 2px", marginBottom: "6px" }}>
                                                        <div className='d-flex  flex-direction-row'>
                                                            <p onMouseEnter={((e) => e.target.style.borderBottom = '1px solid red')} onMouseOut={((e) => e.target.style.borderBottom = 'none')} className='none' onClick={(() => { repondre(c._id); aficheTime(); setUpdate(true) })} style={{

                                                                cursor: "pointer",
                                                                fontSize: "smaller",
                                                                width: "fit-content",
                                                                color: c._id === c._id ? "blue" : null
                                                            }}>repondre</p>

                                                            {c.user._id === user.user._id ? <p onMouseEnter={((e) => e.target.style.borderBottom = '1px solid red')} onMouseOut={((e) => e.target.style.borderBottom = 'none')} className=''
                                                                onClick={(() => { dispatch(getByiDcOMMENT(c._id)); setUpdate(false); setAfiche(true) })}
                                                                style={{ cursor: "pointer", fontSize: "smaller", marginLeft: "14px", width: "fit-content", color: c._id === c._id ? "blue" : null }}>modifier</p> : null}
                                                            <span onMouseEnter={((e) => e.target.style.borderBottom = '1px solid red')} onMouseOut={((e) => e.target.style.borderBottom = 'none')} style={{ fontSize: "xx-small", marginLeft: "14px", paddingTop: "6px" }}>{moment(c.createdAt).fromNow()}</span>
                                                        </div>
                                                        {c.insidecom.length === 0 ? null : <span style={{ cursor: "pointer" }} onClick={(() => { repondre(c._id); aficheTime(); setUpdate(true) })}>  <FontAwesomeIcon icon={faShare} style={{ color: "darkgrey" }} />{c.insidecom.length} réponses </span>}
                                                    </div>
                                                </>}
                                        </div>
                                    </div>

                                    {/* partie insideComent reponsive en coure */}
                                    {
                                        c._id === openComent.idcmt ?
                                            <SouCommentaireResponsive open={open} placement={placement} c={c} setOpen={setOpen}
                                                openComent={openComent} More={More} ReadMoreReact={ReadMoreReact} moment={moment}
                                                post={post} user={user} setReponce={setReponce} reponce={reponce}
                                                handleKeyDownrep={handleKeyDownrep} getByiDcOMMENT={getByiDcOMMENT}
                                                dispatch={dispatch} sup={sup} setSup={setSup} setPlaceHolder={setPlaceHolder}
                                                placeHolder={placeHolder} setNameuser={setNameuser} nameuser={nameuser} refdiv={refdiv}
                                            />
                                            : null
                                    }

                                    {/* end */}



                                    {/* repondre au commentaire insideComment  */}

                                    < div >
                                        <div className="none" style={{ marginTop: "-1rem" }}>
                                            {update === true && c._id === openComent.idcmt ?
                                                <>
                                                    <InsideComments props={props} c={c} />


                                                </>
                                                : null}
                                        </div>

                                    </div>
                                    {/* end */}



                                </div>
                            )
                            )


                        }

                    </div>

                </>}


            </>



        </div >
    );
};


