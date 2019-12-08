import styled from "styled-components"

export const HomeWrapper = styled.div`
     width:960px;
     height:1000px;
     position: absolute;
     left: 50%;
     margin-left: -480px;
     display: flex;
`
export const LeftWrapper = styled.div`
     flex: 1;
     padding: 30px 0px 0px 15px;
     
    
`
export const ListContent = styled.ul`
   width: 100%;
   .title {
         color: #333;
         margin: -7px 0 4px;
        display: inherit;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
     }
     .item-content {
       margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
     }
     .article-info {
        padding-right: 0!important;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
     }
     .info-icon {
      margin-right: 10px;
      color: #b4b4b4;
     }
`
export const ListItem = styled.li`
   padding-bottom: 32px;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 22px;
    padding-right: 165px;
   position: relative;
   .item-img {
      width: 150px;
      position: absolute;
      right: 0;
      top: 0;
   }
`


export const RightWrapper = styled.div`
   width: 280px;
   margin-left: 40px;
`
export const AboutJianshu = styled.div`
   width: 100%;
  .jianshu-img {
    width: 100%;
    min-height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
  .display-box {
     display:block
  }
`
export const ReadMore = styled.div`
   height: 40px;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    display: block;
    box-sizing: border-box;
    cursor: pointer;
    color: #fff;
`
export const ScrollTop = styled.div`
     width: 100px;
     height: 40px;
     line-height: 40px;
     position: fixed;
     right: 30px;
     bottom: 30px;
     background-color: #26dfff;
     border-radius: 10px;
     text-align: center;
     color: #fff;
     cursor: pointer;
`

