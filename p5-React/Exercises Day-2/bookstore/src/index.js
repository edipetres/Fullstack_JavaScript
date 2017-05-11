import React from "react";
import ReactDOM from "react-dom";

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = { store: this.props.store }
    }

    render() {
        return (
            <div>
                <h3>All our great books </h3>
                //Todo-> Add an UL or a Table to show all books from the store
                <ul>
                    {this.state.store._books.map(function (book) {
                        return <li>{book.title}</li>
                    })}
                </ul>
            </div>
        )
    }
}

class BookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newBook: { id: null, title: "", info: "" }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleChange.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('a form was submitted: ' + JSON.stringify(this.state.newBook))
    }

    handleChange = (event) => {

        const target = event.target;
        const prop = target.id;
        var value = target.value
        var book = this.state.newBook;
        book[prop] = value;
        this.setState({
            newBook: book,
        })

        console.log(JSON.stringify(this.state.newBook))


    }

    render() {
        return (
            <div>
                <form style={{ marginTop: 50 }} onSubmit={this.handleSubmit} >
                    <div className="row">
                        <div className="col-sm-2" >
                            <p>Title:</p>
                        </div>
                        <div className="col-sm-4">
                            <input type="text" id="title" value={this.state.newBook.title} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <p>Info:</p>
                        </div>
                        <div className="col-sm-4">
                            <input type="text" id="info" value={this.state.newBook.info} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <button className="btn btn-default">Save</button>
                </form>
            </div>
        )
    }
}

class BookStore {
    constructor() {
        this._nextId = 5;
        this._books = [
            { id: 1, title: "How to Learn JavaScript", info: "Study hard" },
            { id: 2, title: "How to Learn ES6", info: "Complete all exercises :-)" },
            { id: 3, title: "How to Learn React", info: "Complete all your CA's" },
            { id: 4, title: "How to become a specialist in Computer Science", info: "Don't drink beers, until Friday" },
        ]
        this._observer = null;
    }

    saveBook(book) {
        book.id = this._nextId;
        this._nextId++;
        this._books.push(book);
        this._observer.update();
    }
    setObserver(observer) {
        this._observer = observer;
    }
    get books() {
        return this._books;
    }
}

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { store: this.props.store };
        this.props.store.setObserver(this);
    }
    update = () => {
        //TODO
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <Books store={this.state.store} />
                </div>
                <div className="col-md-3">
                    <BookForm store={this.state.store} />
                </div>
            </div>
        );
    }
}
ReactDOM.render(
    <Container store={new BookStore()} />,
    document.getElementById('root')
);