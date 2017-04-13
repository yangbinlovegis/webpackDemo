import React,{ PropTypes,Component } from 'react'

class Header extends React.Component {

    constructor(props) {
        super(props)
    }

    static propTypes = {
        text : PropTypes.func.isRequired
    };
    static defaultProps = {
        text : 'test'
    };

    handleClick() {
        console.info('handleClick');
    }

    render() {
        return(
          <div>测试React test</div>
        )
    }
}
export default Header;