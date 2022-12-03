import React, { useEffect, useRef, useState } from 'react';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Skeleton, Switch } from 'antd';
import { faCamera, faFaceSmile } from "@fortawesome/sharp-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { repcommente } from '../../features/Comment/commentSlice';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';

const listData = Array.from({
    length: 1,
}).map((_, i) => ({
    href: 'https://ant.design',

    avatar: 'https://joeschmoe.io/api/v1/random',

}));


const InsideComments = ({ props, c }) => {

    const { ReadMoreReact,
        post, aficheTime, setReponce, reponce, handleKeyDownrep, dispatch, update,
        loading, openComent, More, moment, sup, setSup, placeHolder, user, refdiv, repondre, focustext } = props

    const onfocuse = useRef()
    const scrolling = useRef()


    useEffect(() => {
        if (!loading) {
            onfocuse.current.focus()
            return (scrolling.current?.scrollIntoView({ behavior: 'smooth' }))

        }

    }, [loading])

    return (
        <>
            <Switch checked={!loading} onChange={aficheTime} style={{ display: "none" }} />

            <List


                dataSource={listData}
                renderItem={(item) => (
                    <List.Item


                    >
                        <Skeleton loading={loading} active avatar>

                            <div className="insidecomment "  >

                                <div className='cmtreponsive' style={{ marginLeft: "4rem" }}>
                                    {

                                        !openComent.data ? <>login</> : openComent.data

                                            .map((c) => (

                                                <div className="" style={{ display: "flex", margin: "auro" }}  >
                                                    <div style={{ position: "relative" }}>
                                                        <img
                                                            className="" style={{
                                                                display: "flex",
                                                                margin: "20px 7px 20px 10px",
                                                                width: "28px",

                                                                borderRadius: "50%",

                                                                objectFit: "cover",
                                                                cursor: "pointer"
                                                            }}
                                                            src={'http://localhost:4000/file/' + c.user.avatar}

                                                            alt=""
                                                        />

                                                    </div>

                                                    <div className="" style={{
                                                        postion: "relative", maxWidth: "80%"
                                                    }}>
                                                        <span className="" style={{
                                                            fontWeight: "600",
                                                            cursor: "pointer"
                                                        }}>

                                                        </span>
                                                        <div className='' style={{
                                                            backgroundColor: '#f0f2f5', padding: "10px", marginTop: "3px", borderRadius: "30px 30px 30px 30px", wordBreak: "break-all"
                                                        }}>
                                                            <div>  <p style={{
                                                                color: "#212529",
                                                                fontWeight: " bold",
                                                                fontStyle: " oblique",
                                                                fontSize: "0.9999rem",
                                                                fontFamily: "serif"
                                                            }} >{c.user.name} {c.user.lastName}  </p></div>


                                                            <div className="" style={{
                                                                marginTop: "-21px", marginBottom: "0em", font: "menu",
                                                                fontSize: "revert"
                                                            }}    >
                                                                <ReadMoreReact text={c.text} min={200}
                                                                    ideal={400}
                                                                    max={450}
                                                                    readMoreText={<More />}
                                                                />
                                                            </div>
                                                        </div>
                                                        <span style={{ fontSize: "xx-small" }}>{moment(c.createdAt).fromNow()}</span>
                                                    </div>

                                                </div>

                                            )
                                            )
                                    }
                                    <div className="cmtresponsiv" style={{

                                        margin: "-10px 65px 0px 3px",
                                        marginRight: "56px",
                                        background: "#fff",

                                    }}>
                                        <div className="create__first">
                                            <div className="create__first-img">
                                                <span>
                                                    <img
                                                        className="" style={{
                                                            display: "flex",
                                                            margin: "15px 7px 20px 10px",
                                                            width: "29px",
                                                            height: "30px",
                                                            borderRadius: "50%",

                                                            objectFit: "cover",
                                                            cursor: "pointer"
                                                        }}
                                                        src={'http://localhost:4000/file/' + user.user.avatar}

                                                        alt=""
                                                    />
                                                </span>
                                            </div>
                                            <Form>

                                                <div className="create__first-input d-flex justify-content-between" style={{ position: "relative" }}>
                                                    <div type="input" contenteditable="true" className="text responsivinp"
                                                        style={{
                                                            width: "24rem",

                                                            display: "table-cell",

                                                            border: "none",
                                                            background: "#f0f2f5",
                                                            borderRadius: "30px",
                                                            outline: "none",
                                                            wordBreak: "break-word",
                                                            marginTop: "17px",
                                                            paddingBottom: "16px",
                                                            paddingTop: "5px"
                                                        }}
                                                        id="idText"
                                                        ref={onfocuse}
                                                        placeholder={placeHolder === false ? `Écrire un commentaire a ${post.user.name}` : `vous aves repondre a ${post.user.name}`}
                                                        onInput={(e) => setReponce({ ...reponce, text: sup === true ? e.currentTarget.textContent = "" : e.currentTarget.textContent })}
                                                        onKeyDown={handleKeyDownrep}
                                                        onKeyUp={(() => { setSup(false) })}

                                                    >
                                                        <p style={{
                                                            color: "#212529", marginLeft: "1rem",

                                                            marginBottom: "-19px",
                                                            fontFamily: "math"
                                                        }}> {c.user._id === openComent.iduser ? "@" + c.user.name : null}</p>

                                                        {sup === true ? repondre(c._id) : null}
                                                        <div ref={scrolling} style={{ width: "30%", height: "50px", position: "absolute", top: "-15rem" }}></div>


                                                    </div>



                                                    <div style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        width: "10%",
                                                        position: "absolute",
                                                        left: "87%",
                                                        top: "24px"
                                                    }
                                                    }

                                                    >

                                                        <FontAwesomeIcon icon={faFaceSmile} style={{ cursor: "pointer" }} />
                                                        <FontAwesomeIcon icon={faCamera} />


                                                    </div>

                                                </div>
                                            </Form>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </Skeleton>

                    </List.Item>
                )
                }
            />
        </>
    );
};
export default InsideComments;