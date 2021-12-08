import React, { Component } from 'react'
import { connect } from 'react-redux'

import { IRootState, Dispatch } from '@/store'
const mapState = (state: IRootState, props: { index: number, parentIndex: number }) => ({
  selectTimes: state.homeWrok.selectTimes,
  isMouseDown: state.homeWrok.isMouseDown,
  index: props.index,
  parentIndex: props.parentIndex
})

const mapDispatch = (dispatch: Dispatch) => ({
  updateItem: dispatch.homeWrok.updateItem
})
interface TabItemProps
  extends Partial<ReturnType<typeof mapState>>,
  Partial<ReturnType<typeof mapDispatch>> { }


class Basic extends Component<TabItemProps, null> {
  constructor(props) {
    super(props)
    this.onMouseOverFuc = this.onMouseOverFuc.bind(this)
    this.onMouseOutFuc = this.onMouseOutFuc.bind(this)
    this.onClickFuc = this.onClickFuc.bind(this)
  }
  onMouseOverFuc() {
    if (this.props.isMouseDown) {
      this.props.updateItem({ parentIndex: this.props.parentIndex, index: this.props.index,isSlect:true })
    }
  }
  onMouseOutFuc() {

  }
  onClickFuc() {
    this.props.updateItem({ parentIndex: this.props.parentIndex, index: this.props.index, isSlect: !this.props.selectTimes[this.props.parentIndex][this.props.index] })
  }


  componentDidMount(): void {

  }

  render() {
    return (
      <th onMouseOver={this.onMouseOverFuc} onMouseOut={this.onMouseOutFuc} onClick={this.onClickFuc} style={{ background: this.props.selectTimes[this.props.parentIndex][this.props.index] ? '#338FCC' : '' }}></th>
    )
  }
}

export default connect(mapState, mapDispatch)(Basic)
