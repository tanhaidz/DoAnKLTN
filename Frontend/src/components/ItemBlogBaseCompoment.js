import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ItemBlogBaseCompoment extends Component {
    render() {
        return (
            <>
                <div className="item_blog_base">
                    <a className="thumb" href="https://sfresh.w2.exdomain.net/di-cho-online-xu-huong-len-ngoi-mua-dich-covid-19" title="Đi chợ online: Xu hướng lên ngôi mùa dịch Covid-19">
                        <img src="https://sfresh.w2.exdomain.net/image/cache/catalog/sfresh/tin-tuc/t4-480x480.jpg" data-src="https://sfresh.w2.exdomain.net/image/cache/catalog/sfresh/tin-tuc/t4-480x480.jpg" alt="Đi chợ online: Xu hướng lên ngôi mùa dịch Covid-19" className="lazy img-responsive loaded" data-was-processed="true"/>
                    </a>
                    <div className="content_blog clearfix">
                        <h3><a href="https://sfresh.w2.exdomain.net/di-cho-online-xu-huong-len-ngoi-mua-dich-covid-19" title="Đi chợ online: Xu hướng lên ngôi mùa dịch Covid-19" className="a-title">Đi chợ online: Xu hướng lên ngôi mùa dịch Covid-19</a></h3>
                        {/* <div className="time-post">
                            <span className="icon posted">
                                <span className="text bold"><i className="fa fa-user"></i> John Doe</span> | <span className="text">30/06/2022</span>
                            </span>
                        </div> */}
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ItemBlogBaseCompoment)