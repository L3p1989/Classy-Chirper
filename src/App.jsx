import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idCount: 4,
            user: "",
            text: "",
            chirps: [
                {
                    id: 3,
                    user: "L3p",
                    text: "blandit aliquam etiam erat velit"
                },
                {
                    id: 2,
                    user: "L3p",
                    text: "pellentesque adipiscing commodo elit at"
                },
                {
                    id: 1,
                    user: "L3p",
                    text: "accumsan sit amet nulla facilisi"
                }
            ]
        }
    };

    handleSubmit(e) {
        e.preventDefault();

        let newChirp = {
            id: this.state.idCount,
            user: this.state.user,
            text: this.state.text
        }

        this.setState({
            chirps: [newChirp, ...this.state.chirps],
            idCount: this.state.idCount + 1,
            user: "",
            text: ""
        })
    };


    render() {
        return (
            <div className="container text-center">
                <div className="jumbotron bg-light">
                    <h1 className="display-4">Chirper</h1>
                </div>
                <form>
                    <div className="form-group ">
                        <label>User:</label>
                        <input type="text" value={this.state.user} onChange={e => this.setState({ user: e.target.value })} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Chirp something</label>
                        <input type="text" value={this.state.text} onChange={e => this.setState({ text: e.target.value })} className="form-control" />
                    </div>
                    <button className="btn btn-primary" onClick={e => this.handleSubmit(e)}>Chirp it</button>
                </form>
            </div>
        );
    }
}

export default App;