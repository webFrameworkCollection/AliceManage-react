import React from 'react';
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as index_act from "../../../../actions";
import { mapstate } from "../../../../reducers/index"

class WorkBlog extends React.Component {
    constructor(arg) {
        super(arg);

    }

    componentWillMount = () => {
    }

    render() {
        return (
            <div>
            技术博客
            </div>
        )
    }
}

function bindact(dispatch) {
    return bindActionCreators(index_act, dispatch)
}


export default connect(mapstate, bindact)(WorkBlog);