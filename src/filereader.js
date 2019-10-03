import React from 'react'

class FileReader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rawdata: '',
        };
    }

    componentDidMount() {
        const file = this.props.file;
        this.readFile(require("./" + file));
        //this.readFile(require(file));
    }
    
    readFile = file => {
        var req = new XMLHttpRequest();
        req.onload = function() {
            if (req.status === 200) {
                this.that.setState({
                    rawdata: req.responseText
                });
            } else {
                console.log("[Error] #" + req.status);
            }
        }
        req.that = this;
        req.open("GET", file);
        req.send();
    }

    showText() {
        return this.state.rawdata;
    }

    showHTML() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.rawdata}} />
        );
    }

    render() {
        const displayType = this.props.displayType || 0;
        return (
            <React.Fragment>
                { displayType === 0 && this.showText() }
                { displayType > 0 && this.showHTML() }
            </React.Fragment>
        );
    }
}

export default FileReader