import { connect } from 'react-redux'
import Chart from '../components/Chart.jsx'

import { editElement } from '../actions/actions.js'

const mapStateToProps = (state) => {
  return {
    data: {
      elements: state.elements,
      types: state.types,
      selected: state.selected,
      activeElements: state.active
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onElementUpdate: (element) => {
      dispatch(editElement(element))
    },
    onSetSelected: (selected) => {
      dispatch({
        type: 'SET_SELECTED_ELEMENT',
        selected
      })
    },
    onDeselect: (selected) => {
      dispatch({
        type: 'DESELECT'
      })
    },
    onSetActive: (activeElements) => {
      dispatch({
        type: 'SET_ACTIVE_ELEMENTS',
        activeElements
      })
    }
  }
}

const ChartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chart)

export default ChartContainer
