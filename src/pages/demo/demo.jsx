/**
 * Created by zengtao on 2017/5/19.
 */
import React from 'react';
import styles from './demo.less'
import Card from './../../components/card/card'
class Demo extends React.Component {
    render() {
        return (
            <div className={styles.root}>
            <div>
            <h1>按钮组合</h1>
             <button className="btn btn-primary">btn-primary</button>
             <button className="btn btn-danger">btn-danger</button>
             <button className="btn btn-info">btn-info</button>
             <button className="btn btn-success">btn-success</button>
             <button className="btn btn-warning">btn-warning</button>
            </div>
            <div>
                <h1>card</h1>
                <Card title="标题">
                一些内容
                </Card>
            </div>
            </div>
        )
    }
}



export default Demo;