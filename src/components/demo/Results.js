import React from 'react'

import Table from 'react-bootstrap/Table'

export default function Results(props) {

    function results(props) {
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

    return (
        <Table bordered hover striped size="sm">
            <thead>
                <tr>
                    <th>Fields</th>
                    <th>Results for {props.res.userId}</th>
                </tr>
            </thead>
            <tbody>
                { results(props) }
            </tbody>
        </Table>
    )
}