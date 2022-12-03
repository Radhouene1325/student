import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/sharp-solid-svg-icons'
import React, { useContext } from 'react'
import { updateCommetsContext } from './Posts'
const UpdateComment = () => {
    const { refdiv, setCommentaire, commentaire, handleKeyDown, openComent, c, setAfiche } = useContext(updateCommetsContext)
    return (
        <div>
            <div className="create__first-input d-flex justify-content-between" style={{ position: "relative" }}>
                <div>
                    <div id="input" contenteditable="true" className="responsivinp commentaire"
                        style={{
                            width: "28rem",

                            display: "table-cell",
                            padding: "15px 20px",
                            border: "none",
                            marginTop: "16px",
                            marginBottom: "19px",
                            background: "#f0f2f5",
                            borderRadius: "30px",
                            outline: "none",
                            wordBreak: "break-word"
                        }}
                        placeholder='Écriver un commentaire'
                        ref={refdiv}
                        onInput={(e) => setCommentaire({ ...commentaire, text: e.currentTarget.textContent })}
                        onKeyDown={handleKeyDown}
                    >

                        {openComent.textComt}

                    </div>
                    {c._id === openComent.idcmt ? <p style={{ color: c._id === c._id ? "blue" : null }} onClick={(() => setAfiche(false))}>annuler</p> : null}

                </div>

                <div className='' style={
                    {
                        display: "flex",
                        justifyContent: "space-between",

                        width: "7%",
                        position: "absolute",
                        left: "87%",
                        top: "20px"
                    }
                }

                >

                    <FontAwesomeIcon icon={faFaceSmile} style={{ cursor: "pointer" }} />
                    <FontAwesomeIcon icon={faCamera} />


                </div>
            </div>

        </div>
    )
}

export default UpdateComment