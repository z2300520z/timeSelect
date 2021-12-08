import { createModel } from '@rematch/core'



function getNewArr() {
  let selectTimesArr = []
  for (let i = 0; i < 7; i++) {
    selectTimesArr[i] = new Array(48)
  }
  return selectTimesArr
}
export const homeWrok = createModel({
  state: {
    isMouseDown: false,
    selectTimes: getNewArr()
  },

  reducers: {
    // 在这里写纯函数来改变 state

    updateStateSelectTimes(state, selectTimes) {
      // console.warn('state11111111', state, selectTimes)
      return {
        ...state,
        ...{ selectTimes },
      }
    },
    updateState(state, isMouseDown) {
      return {
        ...state,
        isMouseDown,
      }
    },
  },

  effects: () => ({
    //更新数据
    updateSelectTimes({ i, arr }, state) {
      let selectTimes = [...state.homeWrok.selectTimes];
      selectTimes[i] = arr
      this.updateStateSelectTimes(selectTimes)
    },
    //更新鼠标状态
    updateisMouseDown(isMouseDown) {
      this.updateState(isMouseDown)
    },
    //删除
    clear() {
      this.updateStateSelectTimes(getNewArr())
      // console.warn('1111111111111', 1)
    },
    //更新某个item的值
    updateItem({ parentIndex, index, isSlect }, state) {
      // console.warn('parentIndex', parentIndex, index, state)
      let selectTimes = [...state.homeWrok.selectTimes];
      selectTimes[parentIndex][index] = isSlect;
      this.updateStateSelectTimes(selectTimes)
    },
    //选择黄金时间
    selectPrimeTime(type, state) {
      let selectTimes = [...state.homeWrok.selectTimes];
      // console.warn('选择工作日黄金时间', type)
      for (let i = 18; i < 44; i++) {
        if (type === 0) {
          for (let k = 0; k < 5; k++) {
            selectTimes[k][i] = true
          }
        }
        else if (type === 1) {
          for (let k = 5; k < 7; k++) {
            selectTimes[k][i] = true
          }
        }

      }
      this.updateStateSelectTimes(selectTimes)
    },
  }),
})
