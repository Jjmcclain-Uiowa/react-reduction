import React, { Component } from "react";
import Page from "components/Page";
import CardItem from "components/CardItem";
import mtg from 'mtgsdk';

const fs = require('fs');

class RentPage extends Component {
    componentDidMount(){
        const cards = JSON.parse(fs.readFileSync('../../public/mtg-jsons/DOM.json'));
        console.log(cards);
    }
    
    render() {
        return (
            <Page
                className="RentPage"
                title="Rent Cards"
                // breadcrumbs={[{ name: "RentCards", active: true }]}
            >
                
            </Page>
        );
    }
}

export default RentPage;
