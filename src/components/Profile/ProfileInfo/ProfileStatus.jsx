import React from "react";
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    }

    changeEditMode = () => {
        this.setState({editMode: !this.state.editMode})
        this.props.updateStatus()
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div><input autoFocus onBlur={this.changeEditMode} value={this.props.status}/></div>
                    : <div><span onDoubleClick={this.changeEditMode}>{this.props.status}</span></div>
                }
            </div>
        )
    }
}

export default ProfileStatus;