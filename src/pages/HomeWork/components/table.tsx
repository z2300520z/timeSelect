import React, { Component } from 'react'
import { connect } from 'react-redux'
import TableTrItem from './tableTrItem'
import TableFoot from './tableFoot'
import { IRootState, Dispatch } from '@/store'
const mapState = (state: IRootState) => {
  return {
    selectTimes: state.homeWrok.selectTimes,
    isMouseDown: state.homeWrok.isMouseDown
  }
}

const mapDispatch = (dispatch: Dispatch) => ({
  updateSelectTimes: dispatch.homeWrok.updateSelectTimes,
  updateisMouseDown: dispatch.homeWrok.updateisMouseDown,
  selectPrimeTime: dispatch.homeWrok.selectPrimeTime
})

interface TabItemProps
  extends Partial<ReturnType<typeof mapState>>,
  Partial<ReturnType<typeof mapDispatch>> { }

class Basic extends Component<TabItemProps, null> {

  constructor(props) {
    super(props)
    // console.warn('props', props)
    this.onMouseDownFuc = this.onMouseDownFuc.bind(this)
    this.onMouseUpFuc = this.onMouseUpFuc.bind(this)
    // this.onChangeFuc = this.onChangeFuc.bind(this)
  }

  onMouseDownFuc() {
    this.props.updateisMouseDown(true)

  }

  onMouseUpFuc() {
    this.props.updateisMouseDown(false)
  }

  // onChangeFuc(i, arr) {
  //   this.props.updateSelectTimes({ i, arr })

  // }

  componentDidMount(): void {
    window.addEventListener('mousedown', this.onMouseDownFuc)
    window.addEventListener('mouseup', this.onMouseUpFuc)
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.onMouseDownFuc)
    window.removeEventListener('mouseup', this.onMouseUpFuc)
  }


  render() {
    return <div>
      <table className="tabel" >
        <thead>
          <tr >
            <th colSpan={49}>
              <div className="top">
                <div>
                  <span style={{ backgroundColor: '#338FCC' }}></span>
                  <span>已选</span>
                </div>
                <div>
                  <span ></span>
                  <span>可选</span>
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th rowSpan={2}>星期/时间</th>
            <th colSpan={24} style={{ textAlign: 'center' }}>00:00-12:00</th>
            <th colSpan={24} style={{ textAlign: 'center' }}>12:00-24:00</th>
          </tr>
          <tr>
            {(function forItem() {
              let arr = [];
              for (let i = 0; i < 24; i++) {
                arr.push(<th colSpan={2} key={i} style={{ textAlign: 'center' }}>{i}</th>)
              }
              return arr
            })()}
          </tr>
        </thead>
        <tbody>
          {(function forItem() {
            let arr = [];
            for (let i = 0; i < 7; i++) {
              arr.push(<TableTrItem key={i} index={i} />)
            }
            return arr
          })()}
        </tbody>
        <TableFoot />
      </table>
      <button onClick={() => {
        this.props.selectPrimeTime(0)
      }} style={{ marginTop: '10px' }}>工作日黄金时间</button>
      <button onClick={() => {
        this.props.selectPrimeTime(1)
      }} style={{ marginTop: '10px',marginLeft:'10px' }}>休息日黄金时间</button>
    </div>
  }
}

export default connect(mapState, mapDispatch)(Basic)
