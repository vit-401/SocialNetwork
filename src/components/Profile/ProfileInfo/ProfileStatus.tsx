import React from "react";

export class ProfileStatus extends React.Component<any> {
    state = {
        editMode: false
    }
    activateEditeMode = () => {
        this.setState({
            editMode: true
        })
    }
    diactivateEditeMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return <div>
            {
                !this.state.editMode && <div>
                    <span onDoubleClick={this.activateEditeMode}>{this.props.status}</span>
                </div>
            }
            {
                this.state.editMode && <div>
                    <input onBlur={this.diactivateEditeMode} autoFocus value={this.props.status}/>
                </div>
            }

        </div>;
    }
}