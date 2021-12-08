import React, { Component } from 'react'
import { connect } from 'react-redux'
import TableThItem from './tableThItem'

import { IRootState, Dispatch } from '@/store'
const mapState = (state: IRootState, props: { index: number }) => {
  return {
    selectTimes: state.homeWrok.selectTimes,
    isMouseDown: state.homeWrok.isMouseDown,
    index: props.index,
  }
}

const mapDispatch = (dispatch: Dispatch) => ({
  updateSelectTimes: dispatch.homeWrok.updateSelectTimes,
  updateisMouseDown: dispatch.homeWrok.updateisMouseDown
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
  }


  render() {
    let that = this;
    return (
      <tr>
        <th style={{ textAlign: 'center' }}>星期{this.num[this.props.index]}</th>
        {(function forItem() {
          let arr = [];
          for (let i = 0; i < 48; i++) {
            arr.push(<TableThItem key={i} index={i} parentIndex={that.props.index} />)
          }
          return arr
        })()}
      </tr>
    )
  }
}

export default connect(mapState, mapDispatch)(Basic)
