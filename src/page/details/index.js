import React, { PureComponent } from "react";
import DetailsLeft from "./views/Right"
import {
    DetailWrapper,
    DetailLeftContent,
} from "./style"

class  Detail extends PureComponent{

    render() {
        return (
            <DetailWrapper>
                <DetailLeftContent>
                    <DetailsLeft></DetailsLeft>
                </DetailLeftContent>
            </DetailWrapper>
        )
    }

}
export default Detail;
