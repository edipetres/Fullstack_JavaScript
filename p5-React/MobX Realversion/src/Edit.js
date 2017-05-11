



import React from "react"

export default class Edit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            book: { title: "", info: "", moreInfo: "" }
        };
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const id = this.props.params.id;
        const store = this.props.route.bookStore;
        let book = store.changeBook(id);
        //  >>> NEED TO CONNECT TO BOOKSTORE <<<
    }

    // handleInput = (event) => {
    //     const target = event.target;
    //     const prop = target.id;
    //     var value = target.value;
    //     var book = this.state.book;
    //     book[prop] = value;
    //     this.setState({
    //         book: book
    //     });
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <input id="title" type="text" value={this.state.book.title}
                        placeholder="Title" onChange={this.handleInput} />
                    <br />
                    <input id="info" type="text" value={this.state.book.info}
                        placeholder="Info" onChange={this.handleInput} />
                    <br />
                    <input id="moreInfo" type="text" value={this.state.book.moreInfo}
                        placeholder="MoreInfo" onChange={this.handleInput} />
                    <br />
                    <button >Submit</button>
                    <Link to="/details">Back</Link>


                </form>
            </div>


        );


    }

}

// >>> NO IDEA WHAT THIS IS FOR <<<
// ReactDOM.render(
//     <PersonForm />, document.getElementById('root')
// );