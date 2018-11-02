import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import {fetchDailyList} from '../actions/list'
import List from '../components/List'
class dailyNew extends Component{
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
        console.log('~~~~~'+listData)
        return(<div>
            <List list={listData}/>
        </div>)
    }
}
export default connect()(dailyNew);