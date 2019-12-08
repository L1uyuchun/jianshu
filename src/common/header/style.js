import styled from "styled-components";
import logoPic from "../../statics/img/logo.png"
import betaImg from "../../statics/img/beta.png"

export const HeaderWrapper = styled.div`
  height:58px;
  border-bottom:1px solid #e5e5e5;
  position:relative;
`
export const Logo = styled.div`
   width:100px;
   height:58px;
   background:url(${logoPic});
   background-size:contain;
   position:absolute;
   left:0;
   top:0;
   
`
export const HeaderContent = styled.div`
   width:960px;
   margin:0 auto;

`
export const NavItem = styled.div`
  line-height:58px;
  padding: 0 15px;
  margin-right:15px;
  &.left {
      float:left;
      font-size:18px;
  }
  &.active {
      color:#ea6f5a
  }
  &.right {
      float:right;
      font-size:16px;
      color:#969696;
  }
  &.betaImg {
    padding 0;
    margin:17.5px 15px;  
    background:url(${betaImg});
    background-size:57px 25px;
    width:57px;
    height:25px;
  }
    
`
export const SearchItem = styled.div`
   position:relative;
   float:left;
   margin-left:14px;
   .zoom {
    position: absolute;
    top: 15px;
    right: 4px;
    width: 28px;
    border-radius: 17px;
    height: 28px;
    line-height: 30px;
    text-align: center;
    &.focused {
        background-color: #999;
        color:#fff;
     }
   }
`
export const InputItem = styled.input.attrs({
    placeholder:'搜索'
})`
    margin: 12px 0px;
    padding: 0px 40px 0px 20px;
    width: 98px;
    border: 1px solid #eeeeee;
    height: 32px;
    border-radius: 18px;
    background-color: #eee;
    color:#333;
   &::placeholder {
      font-size:12px;
   }
   &.focused {
       width:200px;
   }
   &.slide-enter {
        transition: all 200ms ease;
    }
   & .slide-enter-active {
        width: 200px;
    }
    &.slide-exit {
        width: 200px;
    }
    &.slide-exit-active {
        width: 98px;
        transition: all 200ms ease;
    }
`
export const HotSearch = styled.div`
   width: 100%;
    position: absolute;
    top: 58px;
    left: 5px;
    border: 1px solid #e5e5e5;
    padding: 10px;
    padding-right:0;
    color:#afafaf;
    font-size:12px;
    .title {
       height:20px;
       .left {
         float:left;
       }
       .right {
         float:right;
         .spin {
          display:block;
          float:left
           font-size: 12px;
           transition : all 0.2s ease-in;
           transform-origin: center center;
         }
       }
       
    }
    .hot-content {
       display:flex;
       flex-wrap:wrap;
       .item {
         margin-right:10px;
         line-height:20px;
       }
    }
`
export const Addition = styled.div`
   position:absolute;
   right:0;
   top:0;
   padding-top:10px;
`
export const Nav = styled.div`
   height:40px;
   line-height:40px;
   float:left;
   padding:0px 12px;
   text-align:center;
   border-radius:20px;
   height:38px;
   &.register {
       width:54px;
       border:1px solid rgba(236,97,73,.7);
       margin-right:20px;
       
   }
   &.write {
       width:74px;
       background-color:rgba(236,97,73,.7);
       color:#fff;
   }
`
