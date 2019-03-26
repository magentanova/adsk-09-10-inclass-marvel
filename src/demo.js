import React from 'react'

class Box extends React.Component {

    render() {
        return (
            <div className="box" >
            </div>
        )

    }
}


class Canvas extends React.Component {

    render() {
        const boxes = []
        let i = 0
        while (i < 144) {
            boxes.push(<Box />)
            i ++ 
        }
        return (
            <div className="drawing-container" >
                {boxes}
            </div>
        )
    }
}

export default Canvas