import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { faCamera, faFaceSmile } from "@fortawesome/sharp-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




import Offcanvas from 'react-offcanvas';
import { Drawer } from 'antd';

export const SouCommentaireResponsive = (
    { c, ReadMoreReact,
        post, placement, setReponce, reponce, handleKeyDownrep, dispatch, getByiDcOMMENT,
        open, setOpen, openComent, More, moment }) => {

    const onClose = () => {
        setOpen(false);
    };

    return (


        <Drawer title="Basic Drawer"  style={{
            width: "80%",
            margin: "auto",
            background: "rgb(0 0 0 / 0%)",
          
            borderRadius: "30px 30px 30px 30px",

        }} onClose={onClose} open={open} placement={placement}>




            <div className="autreresponsiv"  style={{ minWidth: "34rem" }} >
            
                <div style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexFlow: "wrap-reverse"
                }}>
                    {!openComent.data ? <>login</> : openComent.data

                        .map((c) => (

                            <div className="" style={{ display: "flex", width: "80%", margin: "auro" }}  >
                                <div style={{ position: "relative" }}>
                                    <img
                                        className="" style={{
                                            display: "flex",
                                            margin: "20px 7px 20px 10px",
                                            width: "40px",
                                            height: "35px",
                                            borderRadius: "50%",

                                            objectFit: "cover",
                                            cursor: "pointer"
                                        }}
                                        src={'http://localhost:4000/file/' + c.user.avatar}
                                        // src={c.data.photoURL}
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
                                        backgroundColor: '#f0f2f5', padding: "10px", marginTop: "3px", borderRadius: "30px 30px 30px 30px", width: "100%", wordBreak: "break-all"
                                    }}>
                                        <div>  <p style={{ color: "#15283c", fontStyle: "oblique", fontSize: "0.9999rem", fontFamily: "inherit" }} >{c.user.name} {c.user.lastName}<span style={{ fontSize: "xx-small" }}>{moment(c.createdAt).fromNow()}</span>  </p></div>


                                        <div className="" style={{ marginTop: "-21px", marginBottom: "0em", fontSize: "small" }}    >
                                            <ReadMoreReact text={c.text} min={200}
                                                ideal={400}
                                                max={450}
                                                readMoreText={<More />}
                                            />
                                        </div>


                                    </div>


                                </div>
                            </div>

                        )
                        )

                    }
                </div>



            </div>

                <div className="cmtresponsivemobil" onClose={onClose}  style={{
                    width: "66%",
                    margin: "15px",

                    background: "#fff",

                    borderRadius: "10px"
                }}>

                    <div className="" style={{ display: "flex" }}>
                        <div className="" style={{ width: "10%", display: "table" }}>
                            <span style={{
                                display: "inline-block",
                                width: "45px",
                                height: "45px",
                                borderRadius: "50%",
                                overflow: "hidden"
                            }}>
                                <img src={'http://localhost:4000/file/' + post.user.avatar} className='createFormAvatar m-t15' alt="" />
                            </span>
                        </div>
                        <div className="create__first-input d-flex justify-content-between" style={{ borderRadius: "30px", position: "relative", width: "40%", minWidth: "-webkit-fill-available", background: "#f0f2f5" }}>


                            <div id="input" contenteditable="true" className="text"
                                style={{
                                    width: "82%",
                                    padding: "15px 20px",
                                    border: "none",
                                    background: "#f0f2f5",
                                    borderRadius: "30px",


                                }}

                                // defaultValue={open.user.name}
                                // value={"#" + user.user.name}
                                type='text'

                                placeholder={"Ecriver votre commentaire..."}
                                // value={clear === false ? reponce.text = "" : reponce.text}
                                onInput={(e) => setReponce({ ...reponce, text: c._id === openComent.idcmt ? e.currentTarget.textContent : <>loding...</> })}
                                onKeyDown={handleKeyDownrep}
                                onKeyUp={(() => dispatch(getByiDcOMMENT(c._id)))}>

                            </div>

                            <div className='' style={
                                {
                                    display: "flex",
                                    justifyContent: "space-between",

                                    width: "7%",
                                    position: "absolute",
                                    left: "87%",
                                    top: "17px"
                                }
                            }

                            >
                                <FontAwesomeIcon icon={faFaceSmile} style={{ cursor: "pointer" }} />
                                <FontAwesomeIcon icon={faCamera} />


                            </div>

                        </div>
                    </div>

                </div>


        </Drawer>

    );
}








