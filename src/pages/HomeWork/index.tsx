import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.less'
import Table from './components/table'
// import TableFoot from './components/tableFoot'
// import { Table, Modal } from 'antd'

// import { IRootState, Dispatch } from '@/store'

// const { confirm } = Modal

// const mapState = (state: IRootState) => ({
//   records: state.table.records,
//   pagination: state.table.pagination,
//   loading: state.loading.effects.table.asyncTableList,
// })

// const mapDispatch = (dispatch: Dispatch) => ({
//   tableList: dispatch.table.asyncTableList,
//   tableDelete: dispatch.table.asyncTableDelete,
// })

// interface IBasicProps
//   extends Partial<ReturnType<typeof mapState>>,
//   Partial<ReturnType<typeof mapDispatch>> { }
interface IBasicProps { };

class Basic extends Component<IBasicProps, null> {
  columns: any[]

  constructor(props) {
    super(props)
    this.columns = [

    ]
  }

  componentDidMount(): void {

  }

  render() {
    return (
      <div>
        <Table />
      </div>
    )
  }
}

export default connect()(Basic)
