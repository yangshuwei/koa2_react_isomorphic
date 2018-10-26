/*
 * @Author: yangshuwei 
 * @Date: 2018-10-26 16:00:51 
 * @Last Modified by: yangshuwei
 * @Last Modified time: 2018-10-26 16:38:22
 */
import fetch from 'isomorphic-fetch'
export const fetchDailyList = (state) => {
    return (dispatch)=>{
        dispatch(dailyListRequest());
        return fetch("https://m.ehaier.com/sg/cms/revision/getCategory.json?type=6")
        .then(res=>res.json())
        .then(data=>dispatch(dailyListSuccess(data)))
        .catch(e=>dispatch(dailyListFailed(e)))
    }
}
export function dailyListRequest () {
    return {
      type: "DAILY_LIST"
    }
  }
export function dailyListSuccess (data){
    return {
        type: "DAILY_LIST_SUCCESS",
        listData: data
      }
}
export function dailyListFailed (error){
    return {
        type:"DAILY_LIST_FAILED",
        error
    }
}