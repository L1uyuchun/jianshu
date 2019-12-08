import React from "react"
import Loadable from 'react-loadable';
// import Detail from './index';

const LoadableComponent = Loadable({
    loader: () => import('./index'),
    loading(isLoading, error) {
        if (isLoading) {
            return <div>加载中...</div>;
        } else if (error) {
            return <div>页面加载出现问题, 请刷新后重试</div>;
        }
        return null;
    },
});

export default () => ( <LoadableComponent/> )
// class App extends React.Component {
//     render() {
//         return ;
//     }
// }