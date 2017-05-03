import React from 'react';


export default class Grades extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {filterVal: -2}
        this.myChange = this.myChange.bind(this)
    }
    myChange(evt) {
        const val = evt.target.value;
        this.setState({filterVal: val})
    }
    render() {
        let data = this.props.data;
        const rows = data.filter((student) => {return student.grade >= this.state.filterVal}).map((student) => {
            return (
                <tr><td>{student.id}</td><td>{student.name}</td><td>{student.grade}</td></tr>
            )
        })
        return (
            <div>
                <p>Grades</p>
                Show grades above <input onChange={this.myChange} />
                <table className='table table-bordered'>
                    {rows}
                </table>
            </div>
        )
    }
}
