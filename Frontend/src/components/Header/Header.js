import React from "react";
import logo from '../../assets/logo2.png';
import ShoppingCart from "../ShoppingCart";
import './Header.scss'
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowMenu: false,
            isShowCart: false,
            search: ""
        }
    }
    handleActionMenu = () => {
        this.setState((prevState) => ({
            isShowMenu: !prevState.isShowMenu
        }));
    }
    handleLocationChange = () => {
        console.log("location", window.location.pathname)
        this.props.updateCurrentURL(window.location.pathname);

    }

    render() {
        window.addEventListener('popstate', () => this.handleLocationChange());
        let { isShowMenu } = this.state
        return (
            <>
                <div className="header" style={{ "position": "fixed", zIndex: "999999", width: "100%", top: "0" }}>
                    <div className="middle-header">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className={`col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 header-left ${isShowMenu && "current"}`} onClick={() => this.setState({ isShowMenu: false })}>
                                    <div className="heade_menunavs">
                                        <div className="wrap_main">
                                            <div className="account-max-1024 d-xl-none d-block">
                                                <Link to="/account/login" onClick={() => this.handleLocationChange()}>Tài khoản</Link>

                                                <div className="close-menu" onClick={() => this.handleActionMenu()} >
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-times-circle fa-w-16">
                                                        <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 464c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm94.8-285.3L281.5 256l69.3 69.3c4.7 4.7 4.7 12.3 0 17l-8.5 8.5c-4.7 4.7-12.3 4.7-17 0L256 281.5l-69.3 69.3c-4.7 4.7-12.3 4.7-17 0l-8.5-8.5c-4.7-4.7-4.7-12.3 0-17l69.3-69.3-69.3-69.3c-4.7-4.7-4.7-12.3 0-17l8.5-8.5c4.7-4.7 12.3-4.7 17 0l69.3 69.3 69.3-69.3c4.7-4.7 12.3-4.7 17 0l8.5 8.5c4.6 4.7 4.6 12.3 0 17z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="bg-header-nav ">
                                                <nav className="header-nav">
                                                    <ul className="item_big">
                                                        <li className="nav-item">
                                                            <Link to='/' title="Trang chủ">Trang chủ</Link>
                                                        </li>
                                                        <li className="nav-item ">
                                                            <Link to='/products' title='Sản phẩm'>Sản phẩm</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to='/about' title="Giới thiệu">Giới thiệu</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to='/news' title="Tin tức">Tin tức</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link to='/contacts' title="Liên hệ">Liên hệ</Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-3">
                                    <a href="/" className="logo">
                                        <img src={logo} style={{ width: "240px" }} alt="logo" />
                                    </a>
                                </div>
                                <div className="col-xl-5 col-lg-9 col-md-9 col-sm-12 col-12 header-right">
                                    <div className="nd-header-search">
                                        <form action="/products" method="get" className="nd-header-search-form" role="search" >
                                            <input type="text" name="search" className="search-auto form-control" placeholder="Tìm kiếm" autoComplete="off" onChange={(event) => this.handleChangeInput(event)} />
                                            <Link to="/products" onClick={() => this.handleSearch()}>
                                                <button className="btn btn-default" type="submit" aria-label="Tìm kiếm">
                                                    <svg className="Icon Icon--search-desktop" viewBox="0 0 21 21">
                                                        <g transform="translate(1 1)" stroke="currentColor" strokeWidth={2} fill="none" fillRule="evenodd" strokeLinecap="square">
                                                            <path d="M18 18l-5.7096-5.7096" />
                                                            <circle cx="7.2" cy="7.2" r="7.2" />
                                                        </g>
                                                    </svg>
                                                </button>
                                            </Link>
                                        </form>
                                    </div>
                                    <div className="header-page-link">
                                        <ul className="group-account">
                                            <li>
                                                <div className="icon">
                                                    <a href="/account/wishlist" className="wishlist_header" title="Yêu thích (0)">
                                                        <svg enableBackground="new 0 0 412.735 412.735" version="1.1" viewBox="0 0 412.74 412.74" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="m295.71 35.522c-34.43-0.184-67.161 14.937-89.339 41.273-22.039-26.516-54.861-41.68-89.339-41.273-64.633 0-117.03 52.395-117.03 117.03 0 110.76 193.31 218.91 201.14 223.09 3.162 2.113 7.286 2.113 10.449 0 7.837-4.18 201.14-110.76 201.14-223.09 0-64.633-52.396-117.03-117.03-117.03zm-89.339 319.22c-30.302-17.763-185.47-112.33-185.47-202.19 0-53.091 43.039-96.131 96.131-96.131 32.512-0.427 62.938 15.972 80.457 43.363 3.557 4.905 10.418 5.998 15.323 2.44 0.937-0.68 1.761-1.503 2.44-2.44 29.055-44.435 88.631-56.903 133.07-27.848 27.202 17.787 43.575 48.114 43.521 80.615 1e-3 90.907-155.17 184.95-185.47 202.19z" />
                                                        </svg>
                                                        <span className="headerWishlistCount">0</span>
                                                    </a>
                                                </div>
                                            </li>


                                            <ShoppingCart />
                                            <li className="user">
                                                <div className="icon">
                                                    {!this.props.isLoggedIn ?

                                                        <Link to="/account/login" title="Đăng nhập" rel="nofollow">
                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25px" height="25px">
                                                                <path fillRule="evenodd" fill="rgb(0, 0, 0)" d="M12.500,-0.000 C5.607,-0.000 -0.000,5.607 -0.000,12.500 C-0.000,15.519 1.076,18.291 2.864,20.453 C2.869,20.460 2.869,20.467 2.874,20.473 C4.165,22.030 5.787,23.224 7.594,23.995 C7.615,24.004 7.635,24.014 7.656,24.022 C7.802,24.084 7.950,24.141 8.099,24.197 C8.157,24.219 8.215,24.242 8.275,24.263 C8.402,24.309 8.531,24.352 8.661,24.394 C8.744,24.420 8.827,24.447 8.910,24.472 C9.025,24.506 9.140,24.539 9.256,24.570 C9.357,24.597 9.460,24.623 9.562,24.647 C9.666,24.672 9.770,24.697 9.875,24.720 C9.992,24.745 10.110,24.767 10.228,24.788 C10.323,24.806 10.417,24.824 10.513,24.840 C10.645,24.861 10.777,24.877 10.909,24.895 C10.995,24.905 11.080,24.918 11.165,24.927 C11.315,24.943 11.467,24.954 11.618,24.965 C11.689,24.970 11.759,24.977 11.830,24.981 C12.051,24.993 12.275,25.000 12.500,25.000 C12.725,25.000 12.949,24.993 13.171,24.982 C13.242,24.978 13.312,24.970 13.382,24.965 C13.534,24.955 13.685,24.944 13.835,24.928 C13.921,24.919 14.006,24.906 14.092,24.895 C14.224,24.878 14.356,24.862 14.488,24.840 C14.583,24.825 14.678,24.807 14.773,24.789 C14.891,24.768 15.009,24.745 15.126,24.720 C15.230,24.698 15.334,24.673 15.438,24.648 C15.541,24.623 15.643,24.598 15.745,24.571 C15.861,24.540 15.976,24.507 16.090,24.472 C16.174,24.447 16.257,24.421 16.340,24.395 C16.470,24.353 16.598,24.310 16.726,24.264 C16.785,24.242 16.843,24.220 16.902,24.198 C17.051,24.142 17.198,24.085 17.345,24.023 C17.365,24.015 17.386,24.005 17.407,23.996 C19.213,23.225 20.835,22.031 22.127,20.474 C22.132,20.468 22.132,20.460 22.137,20.454 C23.924,18.291 25.000,15.519 25.000,12.500 C25.000,5.607 19.392,-0.000 12.500,-0.000 ZM17.565,23.008 C17.559,23.011 17.553,23.015 17.547,23.017 C17.398,23.089 17.247,23.157 17.095,23.222 C17.060,23.237 17.026,23.252 16.991,23.267 C16.858,23.322 16.723,23.375 16.587,23.426 C16.530,23.447 16.474,23.468 16.417,23.488 C16.296,23.531 16.175,23.572 16.053,23.612 C15.977,23.636 15.901,23.659 15.825,23.681 C15.717,23.714 15.608,23.745 15.498,23.774 C15.405,23.799 15.312,23.821 15.219,23.843 C15.121,23.867 15.023,23.890 14.925,23.911 C14.817,23.934 14.708,23.954 14.600,23.973 C14.512,23.990 14.424,24.007 14.335,24.021 C14.213,24.040 14.090,24.055 13.967,24.071 C13.889,24.081 13.812,24.092 13.733,24.101 C13.592,24.116 13.451,24.125 13.310,24.135 C13.247,24.140 13.184,24.147 13.120,24.150 C12.914,24.161 12.707,24.167 12.500,24.167 C12.292,24.167 12.086,24.161 11.880,24.150 C11.817,24.147 11.754,24.140 11.691,24.135 C11.549,24.126 11.408,24.116 11.267,24.101 C11.189,24.092 11.111,24.081 11.033,24.071 C10.910,24.055 10.787,24.040 10.665,24.021 C10.576,24.007 10.489,23.990 10.401,23.973 C10.292,23.954 10.183,23.934 10.076,23.911 C9.977,23.890 9.879,23.867 9.782,23.843 C9.688,23.821 9.595,23.799 9.502,23.774 C9.393,23.745 9.284,23.713 9.175,23.681 C9.099,23.659 9.023,23.636 8.947,23.612 C8.825,23.572 8.704,23.531 8.584,23.488 C8.527,23.468 8.470,23.447 8.413,23.426 C8.277,23.375 8.142,23.322 8.009,23.267 C7.975,23.252 7.941,23.237 7.906,23.223 C7.754,23.157 7.602,23.090 7.453,23.018 C7.447,23.015 7.441,23.012 7.435,23.009 C5.981,22.305 4.697,21.307 3.655,20.095 C4.460,17.129 6.740,14.738 9.674,13.787 C9.732,13.822 9.792,13.854 9.852,13.887 C9.887,13.907 9.921,13.927 9.957,13.946 C10.081,14.012 10.207,14.074 10.335,14.129 C10.434,14.172 10.536,14.209 10.638,14.247 C10.658,14.254 10.678,14.262 10.698,14.269 C11.263,14.469 11.867,14.583 12.500,14.583 C13.132,14.583 13.737,14.469 14.302,14.269 C14.322,14.262 14.342,14.254 14.362,14.247 C14.463,14.209 14.565,14.172 14.664,14.129 C14.793,14.074 14.919,14.012 15.043,13.946 C15.078,13.927 15.113,13.907 15.148,13.887 C15.207,13.854 15.268,13.822 15.327,13.786 C18.260,14.738 20.540,17.129 21.345,20.094 C20.303,21.306 19.019,22.305 17.565,23.008 ZM7.917,9.167 C7.917,6.640 9.973,4.583 12.500,4.583 C15.027,4.583 17.083,6.640 17.083,9.167 C17.083,10.774 16.250,12.189 14.993,13.007 C14.829,13.114 14.658,13.209 14.483,13.292 C14.462,13.302 14.442,13.313 14.421,13.322 C13.214,13.871 11.786,13.871 10.579,13.322 C10.558,13.313 10.537,13.302 10.517,13.292 C10.341,13.209 10.171,13.114 10.007,13.007 C8.750,12.189 7.917,10.774 7.917,9.167 ZM21.970,19.301 C21.026,16.512 18.871,14.258 16.117,13.187 C17.219,12.195 17.917,10.762 17.917,9.167 C17.917,6.180 15.487,3.750 12.500,3.750 C9.513,3.750 7.083,6.180 7.083,9.167 C7.083,10.762 7.781,12.195 8.883,13.187 C6.130,14.258 3.975,16.512 3.030,19.301 C1.650,17.385 0.833,15.037 0.833,12.500 C0.833,6.067 6.067,0.833 12.500,0.833 C18.933,0.833 24.167,6.067 24.167,12.500 C24.167,15.037 23.350,17.385 21.970,19.301 Z" />
                                                            </svg>

                                                        </Link>
                                                        :
                                                        <Link to="/user" title="Tài khoản">
                                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25px" height="25px">
                                                                <path fillRule="evenodd" fill="rgb(0, 0, 0)" d="M12.500,-0.000 C5.607,-0.000 -0.000,5.607 -0.000,12.500 C-0.000,15.519 1.076,18.291 2.864,20.453 C2.869,20.460 2.869,20.467 2.874,20.473 C4.165,22.030 5.787,23.224 7.594,23.995 C7.615,24.004 7.635,24.014 7.656,24.022 C7.802,24.084 7.950,24.141 8.099,24.197 C8.157,24.219 8.215,24.242 8.275,24.263 C8.402,24.309 8.531,24.352 8.661,24.394 C8.744,24.420 8.827,24.447 8.910,24.472 C9.025,24.506 9.140,24.539 9.256,24.570 C9.357,24.597 9.460,24.623 9.562,24.647 C9.666,24.672 9.770,24.697 9.875,24.720 C9.992,24.745 10.110,24.767 10.228,24.788 C10.323,24.806 10.417,24.824 10.513,24.840 C10.645,24.861 10.777,24.877 10.909,24.895 C10.995,24.905 11.080,24.918 11.165,24.927 C11.315,24.943 11.467,24.954 11.618,24.965 C11.689,24.970 11.759,24.977 11.830,24.981 C12.051,24.993 12.275,25.000 12.500,25.000 C12.725,25.000 12.949,24.993 13.171,24.982 C13.242,24.978 13.312,24.970 13.382,24.965 C13.534,24.955 13.685,24.944 13.835,24.928 C13.921,24.919 14.006,24.906 14.092,24.895 C14.224,24.878 14.356,24.862 14.488,24.840 C14.583,24.825 14.678,24.807 14.773,24.789 C14.891,24.768 15.009,24.745 15.126,24.720 C15.230,24.698 15.334,24.673 15.438,24.648 C15.541,24.623 15.643,24.598 15.745,24.571 C15.861,24.540 15.976,24.507 16.090,24.472 C16.174,24.447 16.257,24.421 16.340,24.395 C16.470,24.353 16.598,24.310 16.726,24.264 C16.785,24.242 16.843,24.220 16.902,24.198 C17.051,24.142 17.198,24.085 17.345,24.023 C17.365,24.015 17.386,24.005 17.407,23.996 C19.213,23.225 20.835,22.031 22.127,20.474 C22.132,20.468 22.132,20.460 22.137,20.454 C23.924,18.291 25.000,15.519 25.000,12.500 C25.000,5.607 19.392,-0.000 12.500,-0.000 ZM17.565,23.008 C17.559,23.011 17.553,23.015 17.547,23.017 C17.398,23.089 17.247,23.157 17.095,23.222 C17.060,23.237 17.026,23.252 16.991,23.267 C16.858,23.322 16.723,23.375 16.587,23.426 C16.530,23.447 16.474,23.468 16.417,23.488 C16.296,23.531 16.175,23.572 16.053,23.612 C15.977,23.636 15.901,23.659 15.825,23.681 C15.717,23.714 15.608,23.745 15.498,23.774 C15.405,23.799 15.312,23.821 15.219,23.843 C15.121,23.867 15.023,23.890 14.925,23.911 C14.817,23.934 14.708,23.954 14.600,23.973 C14.512,23.990 14.424,24.007 14.335,24.021 C14.213,24.040 14.090,24.055 13.967,24.071 C13.889,24.081 13.812,24.092 13.733,24.101 C13.592,24.116 13.451,24.125 13.310,24.135 C13.247,24.140 13.184,24.147 13.120,24.150 C12.914,24.161 12.707,24.167 12.500,24.167 C12.292,24.167 12.086,24.161 11.880,24.150 C11.817,24.147 11.754,24.140 11.691,24.135 C11.549,24.126 11.408,24.116 11.267,24.101 C11.189,24.092 11.111,24.081 11.033,24.071 C10.910,24.055 10.787,24.040 10.665,24.021 C10.576,24.007 10.489,23.990 10.401,23.973 C10.292,23.954 10.183,23.934 10.076,23.911 C9.977,23.890 9.879,23.867 9.782,23.843 C9.688,23.821 9.595,23.799 9.502,23.774 C9.393,23.745 9.284,23.713 9.175,23.681 C9.099,23.659 9.023,23.636 8.947,23.612 C8.825,23.572 8.704,23.531 8.584,23.488 C8.527,23.468 8.470,23.447 8.413,23.426 C8.277,23.375 8.142,23.322 8.009,23.267 C7.975,23.252 7.941,23.237 7.906,23.223 C7.754,23.157 7.602,23.090 7.453,23.018 C7.447,23.015 7.441,23.012 7.435,23.009 C5.981,22.305 4.697,21.307 3.655,20.095 C4.460,17.129 6.740,14.738 9.674,13.787 C9.732,13.822 9.792,13.854 9.852,13.887 C9.887,13.907 9.921,13.927 9.957,13.946 C10.081,14.012 10.207,14.074 10.335,14.129 C10.434,14.172 10.536,14.209 10.638,14.247 C10.658,14.254 10.678,14.262 10.698,14.269 C11.263,14.469 11.867,14.583 12.500,14.583 C13.132,14.583 13.737,14.469 14.302,14.269 C14.322,14.262 14.342,14.254 14.362,14.247 C14.463,14.209 14.565,14.172 14.664,14.129 C14.793,14.074 14.919,14.012 15.043,13.946 C15.078,13.927 15.113,13.907 15.148,13.887 C15.207,13.854 15.268,13.822 15.327,13.786 C18.260,14.738 20.540,17.129 21.345,20.094 C20.303,21.306 19.019,22.305 17.565,23.008 ZM7.917,9.167 C7.917,6.640 9.973,4.583 12.500,4.583 C15.027,4.583 17.083,6.640 17.083,9.167 C17.083,10.774 16.250,12.189 14.993,13.007 C14.829,13.114 14.658,13.209 14.483,13.292 C14.462,13.302 14.442,13.313 14.421,13.322 C13.214,13.871 11.786,13.871 10.579,13.322 C10.558,13.313 10.537,13.302 10.517,13.292 C10.341,13.209 10.171,13.114 10.007,13.007 C8.750,12.189 7.917,10.774 7.917,9.167 ZM21.970,19.301 C21.026,16.512 18.871,14.258 16.117,13.187 C17.219,12.195 17.917,10.762 17.917,9.167 C17.917,6.180 15.487,3.750 12.500,3.750 C9.513,3.750 7.083,6.180 7.083,9.167 C7.083,10.762 7.781,12.195 8.883,13.187 C6.130,14.258 3.975,16.512 3.030,19.301 C1.650,17.385 0.833,15.037 0.833,12.500 C0.833,6.067 6.067,0.833 12.500,0.833 C18.933,0.833 24.167,6.067 24.167,12.500 C24.167,15.037 23.350,17.385 21.970,19.301 Z" />
                                                            </svg>
                                                        </Link>

                                                    }

                                                </div>
                                                {!this.props.isLoggedIn && <>
                                                    <div className="drop-account">

                                                        <Link to="/account/login">Đăng nhập</Link>
                                                        <a href="/guest-manage">Lịch sử đặt hàng</a>
                                                    </div>
                                                </>}
                                            </li>
                                            <li className="d-xl-none d-inline-block">
                                                <div className="category-action" onClick={() => this.handleActionMenu()}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="iconcate-action" x="0px" y="0px" viewBox="0 0 384.97 384.97" xmlSpace="preserve">
                                                        <g>
                                                            <g id="Menu_1_">
                                                                <path d="M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03 c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z" />
                                                                <path d="M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03 S379.58,180.455,372.939,180.455z" />
                                                                <path d="M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606 c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z" />
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    handleChangeInput(event) {
        let { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    async handleSearch() {
        try {
            await this.props.searchProducts(this.state.search)

        } catch (error) {
            console.log(error)
        }

    }

}
const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,


    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        addItemToCart: (item) => dispatch(actions.addItemToCart(item)),
        updateCurrentURL: (url) => dispatch(actions.updateCurrentURL(url)),
        searchProducts: (keySearch) => dispatch(actions.searchProducts(keySearch))
    }



}

export default connect(mapStateToProps, mapDispatchToProps)(Header)