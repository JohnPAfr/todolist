import React, { Component } from 'react';

class Food extends Component {

    hash (s) {
        var h = 7
        var letters = "acdegilmnoprstuw"
        
        for(var i = 0; i < s.length; i++) {
            h = (h * 37 + letters.indexOf(s[i]))
        }
        return h
    }

    render() {
        return (
            <div className='App'>
                <h1>Result :</h1>
                <table>
                    <tr>a : {this.hash('a')}</tr>
                    <tr>w : {this.hash('w')}</tr>

                    <tr>aa : {this.hash('aa')}</tr>
                    <tr>aw : {this.hash('aw')}</tr>

                    <tr>agile : {this.hash('agile')}</tr>
                    <tr>agil : {this.hash('agil')}</tr>

                    

                </table>
            </div>
        )
    }
}

export default Food