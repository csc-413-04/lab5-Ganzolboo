import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doTest } from './redux/actions';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1> My App, Ganzolboo</ h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/page1">Page1</Link>
                        </li>
                        <li>
                            <Link to="/page2/">Page2</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        testBanner: state.testReducer.test,
    };
};

const mapDispatchToProps = { doTest };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);