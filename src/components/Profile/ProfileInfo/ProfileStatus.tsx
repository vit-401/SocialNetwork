import React, {ChangeEvent} from "react";

export class ProfileStatus extends React.Component<any> {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditeMode = () => {
        console.log('this', this)
        this.setState({
            editMode: true
        })
    }
    diactivateEditeMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value
        this.setState({
            status: value
        })
    }

    componentDidUpdate(previewProps: any, prevState: any) {
    if(previewProps.status !== this.props.status){
        this.setState({
            status: this.props.status
        })
    }
    }

    render() {
        return <div>
            {
                !this.state.editMode && <div>
                    <span onDoubleClick={this.activateEditeMode}>Status: {this.props.status}</span>
                </div>
            }
            {
                this.state.editMode && <div>
                    <input onBlur={this.diactivateEditeMode}
                           autoFocus
                           value={this.state.status}
                           onChange={this.onChangeStatus}/>
                </div>
            }

        </div>;
    }
}