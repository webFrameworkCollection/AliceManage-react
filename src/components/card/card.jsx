/**
 * Created by zengtao on 2017/5/19.
 */
import React from 'react';
import styles from './card.less'

class Card extends React.Component {
    constructor(arg) {
        super(arg);

    }
    render() {
        return (
            <div className={styles.root}>
            <div className="card">
            <div className="cardHeader">
            {this.props.title}
            </div>
            <div className="cardBody">
            {this.props.children}
            </div>
            </div>
             
            </div>
        )
    }
}



export default Card;