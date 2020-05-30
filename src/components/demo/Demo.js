import React, { useContext, useEffect, useState } from 'react'


import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Context from '../../Context'
import DemoForm from './DemoForm'
import Results from './Results'

import "./Demo.css"


export default function Demo(props) {
    const [ loading, setLoading ] = useState(false)
    const [ overTime, setOverTime ] = useState(false)
    const [ watch, setWatch ] = useState(false)
    const [ results, setResults ] = useState(null)
    const [controller, setController ] = useState(new AbortController)
    const signal = controller.signal
    const context = useContext(Context)
    let demo = <DemoForm submitForm={ submitForm }/>




    // create new controller on each abort
    signal.addEventListener("abort", () => {
        setController(new AbortController)
    })



    /* -------------------- runs on state change -------------------- */

    // updates state when results changes
    useEffect(() => {
        setWatch(false)
        setLoading(false)
    }, [results])

    // update state when loading changes
    useEffect(() => {
        if (loading) {
            setWatch(true)
            setTimeout(() => {          // 20secs timeout
                if (watch) {            // if still on loading screen 
                    setOverTime(true)   // triggers info on why slow loading
                }
            }, 20000)
        }
        else setWatch(false)
    }, [loading])



    /* -------------------- runs on user action -------------------- */

    // if results then reset demo form
    // if loading abort request and reset
    function reset() {
        console.log(loading)
        if (results) setResults(null)
        if (loading) {
            setLoading(false)
            controller.abort()
        }
    }

    function submitForm(form) {
        setLoading(true)
        fetch('https://kamshed.herokuapp.com/api/upload', {
            method: 'POST',
            body: new FormData(form),
            signal
        })
        .then(res => {
            return res.json()
        })
        .then(info => {
            setResults(info)
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('Fetch aborted');
            }
            else console.error(err)
        })
    }


    
    return (
        <>
            <Modal 
                className="modal-demo-form"
                show={ props.display } 
                onHide={ context.closeModal }
                aria-labelledby="demo-form"
                centered
                dialogClassName="modalForm"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Demo Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { 
                        function() {
                            if (results) return <Results res={ results }/>
                            else if (overTime) return (
                                <>
                                    <h4>Slow Speeds?</h4>
                                    <p>
                                        This may be due to an old device or low quality image uploads. 
                                        For quicker results consider retrying with a newer device or 
                                        higher quality images.
                                    </p>
                                    <br/>
                                    
                                </>
                            )
                            else if (loading) return
                            else return demo
                        }()
                    }
                    { loading && <Spinner animation="border" />}
                </Modal.Body>
                {
                    function () {
                        if (results || loading) {
                            return (
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={ context.closeModal }>Close</Button>
                                    <Button variant="primary" onClick={ () => reset() }>Reset</Button>
                                </Modal.Footer>
                            )
                        }
                    }()
                }
            </Modal>
        </>
    )
}