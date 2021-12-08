import React, { Component } from 'react'
import { connect } from 'react-redux'
import './tableFoot.less'

import { IRootState, Dispatch } from '@/store'

const mapState = (state: IRootState) => ({
  selectTimes: state.homeWrok.selectTimes,
  isMouseDown: state.homeWrok.isMouseDown
})

const mapDispatch = (dispatch: Dispatch) => ({
  clear: dispatch.homeWrok.clear
})
interface TabItemProps
  extends Partial<ReturnType<typeof mapState>>,
  Partial<ReturnType<typeof mapDispatch>> { }

class Basic extends Component<TabItemProps, null> {
  num: Array<string>
  constructor(props) {
    super(props)
    this.num = ['一', '二', '三', '四', '五', '六', '七']
  }

  componentDidMount(): void {
    // console.warn('1111111111', this.props)
  }


  getWeekFuc() {
    const that = this;
    return this.props.selectTimes.map((item, index) => {
      if (item) {
        let arr = that.getTimesFuc(this.props.selectTimes[index])
        if (arr.length) {
          return <tr key={index}>
            <th className="no_border text_center">星期{this.num[index]}</th>
            <th className="no_border time_th" colSpan={48}>{arr}</th>
          </tr>
        }
        else {
          <tr key={index}>
          </tr>
        }
      }

    })
    // console.warn('arr',arr)
  }

  getTimesFuc(selectTimesArr) {
    let arr = []
    const length = 48
    let startIndex = null;
    for (let i = 0; i < length; i++) {
      let item = selectTimesArr[i];
      if (item && i !== length - 1) {
        if (startIndex === null) {
          startIndex = i
        }
      }
      else {
        //处理最后一格
        if (item && startIndex === null && i == length - 1) {
          startIndex = i
        }
        if (startIndex !== null) {
          arr.push(<span className="time_span" key={i}>{this.getHourMinute(startIndex, i)}</span>)
          startIndex = null
        }
      }
    }
    return arr
  }

  gethour(i) {
    let hour = parseInt(i / 2 + '')
    return i / 2 < 10 ? '0' + hour : hour
  }
  getHourMinute(startIndex, lastIndex) {
    lastIndex = lastIndex === 47 ? 48 : lastIndex
    return (this.gethour(startIndex) + (startIndex % 2 ? ':30' : ':00') + '~' + this.gethour(lastIndex) + ((lastIndex) % 2 ? ':30' : ':00'))
  }
  render() {
    // let that = this
    return (
      <tfoot>
        <tr >
          <th colSpan={49} className="no_border">
            <div className="div">
              <span className="title">已选时间段</span>
              <span className="claer" onClick={this.props.clear}>清空</span>
            </div>
          </th>
        </tr>
        {this.getWeekFuc()}
      </tfoot>
    )
  }
}

export default connect(mapState, mapDispatch)(Basic)
