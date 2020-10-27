import React, { Component } from 'react';

class TOC extends Component {
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while (i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a href={"/contents/" + data[i]}
                        data-id = {data[i].id} // data에 넣어줌.
                        onClick={function(e){
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                            // 요 function은 TOC의 prop빼고 모든것과 동떨어져 있음.
                       }.bind(this)}
                    >{data[i].title}</a>
                </li>)
            i = i + 1;
        }
        return (
        <nav>
            <ul>
                {lists}
            </ul>
        </nav>
        )
    }
}   

export default TOC 
// 외부에서 TOC를 사용할 수 있게 함.