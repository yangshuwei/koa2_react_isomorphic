/*
 * @Author: yangshuwei 
 * @Date: 2018-10-18 15:22:36 
 * @Last Modified by: yangshuwei
 * @Last Modified time: 2018-10-19 15:08:12
 */
import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Header from '../components/Header'
import fetch from 'isomorphic-fetch'
class App extends Component {
    static fetchData(){
       return fetch('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
       .then(res => {
           res.json();
       })
       .then(data => dispatch(mirrorStateSucceed(data)))
       .catch(e => dispatch(mirrorStateFailed(e)))
    }
    render(){
        return(<div>
            <Header/>
            <ul>
                <li><Link to='/'>Home</Link></li>
            </ul>
        </div>)
    }
}
export default connect()(App);