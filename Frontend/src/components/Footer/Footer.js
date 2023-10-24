import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer" >
                <div className="first-footer d-flex">
                    <div className="container ">
                        <div className="row" style={{ display: 'flex', justifyContent: 'center' }}>


                            <div className="col-lg-4 col-md-6 col-12  col-contact-footer" style={{ margin: "50px 0" }}>
                                <h4 className="title-menu">
                                    <span>Liên hệ</span>
                                </h4>
                                <ul>
                                    <li>
                                        <strong>Địa chỉ:</strong> 279 Nguyễn Tri Phương, quận 10, Tp.HCM</li>
                                    <li>
                                        <strong>Điện thoại:</strong>
                                        <a className="fone" href="tel:0123 456 789">0935495900</a>
                                    </li>
                                    <li>
                                        <strong>Email:</strong>
                                        <a href="mailto:haibui.31201024395@st.ueh.edu.vn">haibui.31201024395@st.ueh.edu.vn</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright d-flex">
                    <div className="container">
                        <div className="inner">
                            <div className="row tablet">
                                <div id="copyright" className="col-lg-4 col-md-12 col-12">
                                    <div className="wsp">
                                        <span id="copyright">© Copyright</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 col-12">
                                </div>
                                <div className="col-lg-4 col-md-12 col-12">
                                    <div className="social-footer">
                                        <div className="social-buttons">
                                            <a href="https://www.facebook.com/facebook" className="social-button facebook" title="Theo dõi trên Facebook">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-facebook-f fa-w-10">
                                                    <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                                                </svg>
                                            </a>
                                            <a href="#" className="social-button twitter" title="Theo dõi trên Twitter">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-twitter fa-w-16">
                                                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                                </svg>
                                            </a>
                                            <a href="youtube.com" className="social-button youtube" title="Theo dõi trên Youtube">
                                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg-inline--fa fa-youtube fa-w-18">
                                                    <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                                                </svg>
                                            </a>
                                            <a href="#" className="social-button instagram" target="_blank" rel="nofollow">
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
