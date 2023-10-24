import React from "react";
import banner from '../../assets/banner/banner1.png';
export default class Banner extends React.Component {
    render() {
        return (
            <>
                <section className='banner-group' >
                    <div className="banner">
                        <img src={banner} alt='' />

                    </div>
                    {/* <div className="message">
                        <span>Bây giờ hoặc không bao giờ - Giảm tới 50% một số mặt hàng</span>

                    </div> */}
                </section>
            </>
        )
    }
}