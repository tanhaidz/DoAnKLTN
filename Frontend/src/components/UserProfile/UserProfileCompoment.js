import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './UserProfileCompoment.scss'
import { sendOTP } from '../../services/EmailService';

let OTP = ""
function mapStateToProps(state) {
      return {
            userInfo: state.user.userInfo,
      };
}

function mapDispatchToProps(dispatch) {
      return {
            saveUserData: (userData) => dispatch(actions.saveUserData(userData)),

      };
}

class UserProfileCompoment extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  isShowForm: false,
                  modal: false,


            }
      }
      componentDidMount() {
            this.setState({ userInfo: this.props.userInfo });
      }
      componentDidUpdate(prevProps) {
            if (prevProps.userInfo !== this.props.userInfo) {
                  console.log("User profile", prevProps.userInfo)
                  console.log("User profile", this.props.userInfo)
                  this.setState({ userInfo: this.props.userInfo })
            }
      }

      generateOTP() {
            const digits = '0123456789';
            let OTP = '';

            for (let i = 0; i < 6; i++) {
                  OTP += digits[Math.floor(Math.random() * 10)];
            }

            return OTP;
      }
      toggle = async () => {

            this.setState({
                  modal: !this.state.modal
            })
      }
      render() {

            let { userInfo, isShowForm } = this.state
            console.log(`UserProfileCompoment1`, this.state)

            return (
                  <>
                        {userInfo && <>


                              <div className="profile" >
                                    {!isShowForm ?
                                          <>
                                                <h1>Thông tin cá nhân</h1>
                                                <div className="info form-control ">
                                                      <label>Tên:</label>
                                                      <span id="name">{userInfo.Name}</span>
                                                </div>
                                                <div className="info form-control">
                                                      <label>Email:</label>
                                                      <span id="email">{userInfo.Email}</span>
                                                </div>
                                                <a className="btn-change" onClick={() => this.setState({ isShowForm: true })}>Thay đổi</a>
                                          </> :
                                          <>
                                                <form className="form" id="changeForm"
                                                      // onSubmit={(event) => this.UpdateInfo(event)}
                                                      onChange={(event) => this.handleChangeInput(event)}>
                                                      <label>Tên:</label>
                                                      <input type="text" name='Name' required />
                                                      <label>Email:</label>
                                                      <input type="text" name='Email' required value={userInfo.Email} disabled style={{ background: '#8080804d' }} />
                                                      <input type="button" defaultValue="Cập nhật" className="btn-submit" onClick={() => this.handleSubmit()} />
                                                </form>
                                          </>}


                              </div>
                              <div>

                                    {/* <Modal isOpen={this.state.modal} toggle={() => this.toggle()} fullscreen>
                                          <ModalHeader>
                                                <span>Vui lòng kiểm tra email và nhập mã xác thực vào dưới đây để hoàn tất việc thay đổi</span>
                                          </ModalHeader>
                                          <ModalBody>
                                                <div className="form-control" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                      <input type="text" style={{ border: 'none', outline: 'none' }} onChange={(event) => this.setState({ OTPinput: event.target.value })} />
                                                      <Button onClick={() => this.handleSubmit()}>Xác nhận</Button>
                                                </div>

                                          </ModalBody>

                                    </Modal> */}
                              </div>

                        </>}

                  </>
            )
      }
      async handleSubmit() {
            // let { OTPinput } = this.state
            // if (OTP === OTPinput) {
            //       let { Name } = this.state
            //       let { id } = this.props.userInfo
            //       console.log(id)
            //       let userData = { Name, id }
            //       await this.props.saveUserData(userData)
            //       this.setState({
            //             isShowForm: false,
            //             modal: false
            //       })
            // } else {
            //       alert('Mã xác thực sai')
            // }
            let { Name } = this.state
            let { id } = this.props.userInfo
            console.log(id)
            let userData = { Name, id }
            await this.props.saveUserData(userData)
            this.setState({ isShowForm: false })
      }
      async handleAuth() {
            OTP = this.generateOTP();
            let { Email } = this.state.userInfo
            await sendOTP({ OTP, Email })
            this.setState({
                  modal: !this.state.modal
            })
      }
      handleChangeInput(event) {
            let { name, value } = event.target
            this.setState({
                  [name]: value
            })
      }
      async UpdateInfo(event) {
            event.preventDefault();
            let { Name } = this.state
            let { id } = this.props.userInfo
            console.log(id)
            let userData = { Name, id }
            await this.props.saveUserData(userData)
            this.setState({
                  isShowForm: false,
            })

      }


}

export default connect(
      mapStateToProps, mapDispatchToProps
)(UserProfileCompoment);
