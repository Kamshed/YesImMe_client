import React, { useState, useEffect } from 'react'

import Table from 'react-bootstrap/Table'


export default function Results(props) {
    const [ errors, setErrors ] = useState(false)
    useEffect(() => {
        if (props.res.errors && !errors) setErrors(true)
    },[])
    

    function results(props) {
        if (props.res.errors) {
            const res = props.res.errors.map(error => {
                const err = Object.entries(error)[0]
                return (
                    <tr>
                        <td>{ err[0] }</td>
                        <td>{ err[1] }</td>
                    </tr>
                )   
            })
            return res
        }
        else {
            const res = Object.values(props.res)
            .map(segment => Object.entries(segment))
                .slice(1,3).flat().map(info => {
                    return (
                        <tr>
                            <td>{ info[0] }</td>
                            <td>{ typeof info[1] === "boolean" ? info[1].toString(): info[1] }</td>
                        </tr>
                    )
                })
            return res
        }
    }

    function headers() {
        if (errors) {
            return (
                <tr>
                    <th>Fields</th>
                    <th>Error</th>
                </tr>
            )
        } else {
            return (
                <tr>
                    <th>Fields</th>
                    <th>Results for {props.res.userId}</th>
                </tr>
            )
        }
    }

    return (
        <Table bordered hover striped size="sm">
            <thead>
                    { headers() }
            </thead>
            <tbody>
                { results(props) }
            </tbody>
        </Table>
    )
}