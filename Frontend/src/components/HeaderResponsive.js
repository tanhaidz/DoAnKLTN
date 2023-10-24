import React, { Component } from 'react'
import { connect } from 'react-redux'

export class HeaderResponsive extends Component {
    render() {
        return (
            <>
                <div className="fullscreen">
                    <div className="layout-content">
                        <div className="content-top">
                            <div className="register">
                                register
                            </div>
                            <div className="login">
                                login
                            </div>
                        </div>
                        <div className="content-bottom">

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderResponsive)