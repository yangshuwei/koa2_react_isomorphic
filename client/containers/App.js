/*
 * @Author: yangshuwei 
 * @Date: 2018-10-18 15:22:36 
 * @Last Modified by: yangshuwei
 * @Last Modified time: 2018-10-26 17:48:29
 */
import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Header from '../components/Header'
import {fetchDailyList} from '../actions/list'
import List from '../components/List'
class App extends Component {
    static fetch (state, dispatch) {
        const fetchTasks = []
        fetchTasks.push(
          dispatch(fetchDailyList(state))
        )
        return fetchTasks
    }

    componentDidMount () {
        this.constructor.fetch(this.props, this.props.dispatch)
    }
    render(){
        const {listData} = this.props;
        return(<div>
            <Header/>
            <List listData = {listData}/>
        </div>)
    }
}
export default connect()(App);