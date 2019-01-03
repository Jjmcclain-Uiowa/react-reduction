import React, { Component } from 'react';

const uploadFile = e => {
    const file = e.target.files;
    console.log(file);

}

class AddCardsPage extends Component {

    render() {
        return (
            <div>
                <input id="json" type='file' onChange={uploadFile}></input>
                <button>Upload</button>
            </div>
        );
    }
}

export default AddCardsPage;