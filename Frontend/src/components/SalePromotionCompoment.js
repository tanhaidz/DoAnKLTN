import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SalePromotionCompoment extends Component {
    render() {
        const discount = this.props.discount;
        return (
            <>
                {discount > 0 && (
                    <div className="sale-label sale-top-right">
                        <span>{discount}%</span>
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SalePromotionCompoment)