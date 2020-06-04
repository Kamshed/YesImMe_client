/* ------------ main imports ------------ */
import React, { useEffect, /* useState */ } from 'react'


/* ------------ other imports ------------ */
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import OverlayTooltip from '../multiuse/OverlayTooltip'


/* ------------ styles ------------ */
import './DemoForm.css'


function serializeForm(form) {
    
    for(let i = 0; i < form.elements.length; i++) {
        const el = form.elements[i]
        const fieldName = form.elements[i].getAttribute("name")

        switch (fieldName) {
            case "id_front":

                el.setAttribute("name", "idFront")
                break;
            case "id_back":
  
                el.setAttribute("name", "idBack")
                break;
            default: break;
        }
    }
    
    return form
}


async function submit(e, props) {

    e.preventDefault()
    const form = document.querySelector('#demo-form')
    
    // form validation
    const [...inputs] = form.querySelectorAll("input.demoInput")
    let formValues = []

    inputs.forEach(input => {
        formValues.push(input.value)
        if (input.value === "") {
            input.name !== "userId" 
            ? document.querySelector(`[data-src=${input.name}]`).classList.add("invalid")
            : input.classList.add("invalid")
        }
        else {
            input.name !== "userId" 
            ? document.querySelector(`[data-src=${input.name}]`).classList.remove("invalid")
            : input.classList.remove("invalid")
        }
    })

    if (formValues.includes("")) {
        return
    }
    else {
        const serializedForm = serializeForm(form)
        props.submitForm(serializedForm)
    }
}

function upload(e) {
    const filename = e.target.getAttribute("data-src") 
        ? e.target.getAttribute("data-src") 
        : e.target.id
    document.getElementsByName(filename)[0].click()
}

function displayFilename(e) {
    const field = e.target.name
    const fileToUpload = e.target.value
    const filenameDisplayElement = document.querySelector(`[data-src="${field}"]`)
    filenameDisplayElement.value = fileToUpload.replace("C:\\fakepath\\", "")
}


function DemoForm(props) {

    useEffect(() => {
        const formInputs = document.querySelectorAll(".demoInput")
        const form = document.querySelector("#demo-form")

        formInputs.forEach(input => {
            input.addEventListener("click", () => {
                form.className = ""
                form.classList.add("active")
            }, {
                once: true
            })
        })
        
    }, [])
    

    return (

            <Form id="demo-form" onSubmit={e => submit(e, props)} >
                <Form.Group className="formInput" controlId="formUsername">
                    <Form.Label><h5>Username</h5></Form.Label>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={OverlayTooltip("Username here")}
                    >
                        <Form.Control
                            name="userId"
                            className="demoInput" 
                            type="text" 
                            placeholder="Enter username" 
                        />
                    </OverlayTrigger>
                </Form.Group>

                <Form.Group className="formInput formInputFile" controlId="formIdFront">
                    <Form.Label><h5>Driver's License - <i>Front</i></h5></Form.Label>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={OverlayTooltip("Front of id here")}
                    >
                        <div className="formInputFileUpload">
                            <Button typ="button" id="id-front" onClick={e => upload(e)}>Upload</Button>
                            <input onClick={e => upload(e)} data-src="id-front" placeholder="No file choosen"/>
                        </div>
                    </OverlayTrigger>
                    <Form.Control 
                        name="id-front"
                        className="demoInput" 
                        style={{display: "none"}}
                        onChange={e => displayFilename(e)} 
                        type="file" 
                        placeholder="Image of the front of driver's license" 
                    />
                </Form.Group>


                <Form.Group className="formInput formInputFile" controlId="formIdBack">
                    <Form.Label><h5>Driver's License - <i>Back</i></h5></Form.Label>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={OverlayTooltip("Back of id here")}
                    >
                        <div className="formInputFileUpload">
                            <Button typ="button" id="id-back" onClick={e => upload(e)}>Upload</Button>
                            <input onClick={e => upload(e)} data-src="id-back" placeholder="No file choosen"/>
                        </div>
                    </OverlayTrigger>
                    <Form.Control 
                        name="id-back" 
                        className="demoInput" 
                        style={{display: "none"}} 
                        onChange={e => displayFilename(e)} 
                        type="file" 
                        placeholder="Image of the back of driver's license" 
                    />
                </Form.Group>



                <Form.Group className="formInput formInputFile" controlId="formSelfie">
                    <Form.Label><h5>Upload user Selfie</h5></Form.Label>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 400 }}
                        overlay={OverlayTooltip("Close up image of user here")}
                    >
                        <div className="formInputFileUpload">
                            <Button typ="button" id="user-image" onClick={e => upload(e)}>Upload</Button>
                            <input onClick={e => upload(e)} data-src="user-image" placeholder="No file choosen"/>
                        </div>
                    </OverlayTrigger>
                    <Form.Control 
                        name="user-image" 
                        className="demoInput" 
                        style={{display: "none"}} 
                        onChange={e => { 
                            //updateFields(e)
                            displayFilename(e)
                        }} 
                        type="file" 
                        placeholder="Image of user face"
                    />
                </Form.Group>

                <Form.Group className="formSubmit" controlId="formSubmit">
                    <Button className="formInputSubmit" type="submit">Submit</Button>
                </Form.Group>


            </Form>

    )
        

}

export default DemoForm