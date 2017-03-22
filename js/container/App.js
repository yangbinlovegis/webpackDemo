import React,{ PropTypes } from 'react'
import { bindActionCreator } from 'redux'
import { connect } from 'react-redux'


const App = () => (
    <div>
        
    </div>
)

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    // actions:bindActionCreator()
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
