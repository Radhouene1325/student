import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faShare, faThumbsUp } from '@fortawesome/sharp-solid-svg-icons';
import { ThumbUpAltOutlined } from '@mui/icons-material';
import { Dropdown } from 'antd';
import React, { useContext } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ReadMoreReact from 'read-more-react/dist/components/ReadMoreReact';
import { PostContext } from './Posts';
const PublicationPost = () => {
    const dispatch=useDispatch()
    const {post,moment,More,user,Dislike,setPagine,pagine,Like,menu}=useContext(PostContext)
  return (
    <div>
         <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to="/profile/userId">
                            <img src={'http://localhost:4000/file/' + post.user.avatar} alt="" className="postProfileImg" />
                        </Link>
                        <span className="postUsername">
                            {post.user.lastName} {post.user.name}
                        </span>
                        <span className="postDate">
                            {/* <TimeAgo
                                date={new Date(post.data?.timestamp?.toDate()).toLocaleString()}
                            /> */}
                            {moment(post.createdAt).fromNow()}
                        </span>
                    </div>
                    <div className="postTopRight">
                        <Dropdown overlay={menu} placement='bottomRight'>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <BsThreeDotsVertical className='postsettings' />
                            </a>
                        </Dropdown>
                    </div>
                </div>
                <div className="postCenter" >
                    {/* <span className="postText">{post.data.input}</span> */}
                    <ReadMoreReact text={post.text}


                        min={200}
                        ideal={400}
                        max={450}
                        readMoreText={<More />}
                    />
                </div>
                <img style={{ width: "38rem" }} src={`http://localhost:4000/${post.image}`} />

                <div className="postBottom">
                    <FontAwesomeIcon style={{ color: "blue", fontSize: "x-large" }} icon={faThumbsUp} />
                    <div className="postBottomRight">

                        {!post.comments ? <>lodding</> : <span
                            className="postCommentText"
                        // onClick={() => setCommentOpen(!commentOpen)}
                        >
                            {post.comments.length} · comments · share
                        </span>}
                    </div>
                </div>

                <hr className="footerHr" />
                <div className="postBottomFooter">
                    <div
                        className="postBottomFooterItem"
                    // onClick={(e) => {
                    //   likePost();
                    // }}
                    >
                        {
                            !post.likes.includes(user._id)
                                ?
                                <>
                                    <FontAwesomeIcon style={{ fontSize: "x-large", color: "darkgrey" }} icon={faThumbsUp} onClick={() => dispatch(Like(post._id))} /> <span>{post.likes.length}</span>
                                </>
                                :
                                <>
                                    <ThumbUpAltOutlined className="footerIcon" onClick={() => dispatch(Dislike(post._id))} /> <span   >{post.likes.length}</span>
                                </>
                        }
                        {/* {liked ? (
                            <ThumbUp style={{ color: "#011631" }} className="footerIcon" />
                        ) : (
                            <ThumbUpAltOutlined className="footerIcon" />
                        )}
                        <span className="footerText">Like</span> */}
                    </div>
                    <div
                        className="postBottomFooterItem"
                        onClick={() => {setPagine(!pagine) }}
                    >
                        <FontAwesomeIcon style={{ fontSize: "x-large", color: "darkgrey" }} icon={faMessage} />
                        <span className="footerText">Comment</span>
                    </div>
                    <div className="postBottomFooterItem">
                        <FontAwesomeIcon icon={faShare} style={{ fontSize: "x-large", color: "darkgrey" }} />
                        <span className="footerText">Share</span>
                    </div>
                </div>
                <hr className="footerHr" />
            </div>
    </div>
  )
}

export default PublicationPost