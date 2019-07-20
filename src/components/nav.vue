<template>
 <div class="nav-wrapper">
    <div class="nav-changer">
    <p>Home</p>
    <p class="active" >Workspace</p>
    <p>Others</p>
    </div>
    <div class="nav-iconbox">
    <img src="http://serwer1982875.home.pl/img-bright/search_icon.svg" alt="search icon">
    <img src="http://serwer1982875.home.pl/img-bright/star_icon.svg" alt="star icon">
    <img src="http://serwer1982875.home.pl/img-bright/today_icon.svg" alt="today icon">
    <img src="http://serwer1982875.home.pl/img-bright/chat_icon.svg" alt="chat icon">
    <img src="http://serwer1982875.home.pl/img-bright/notifications_icon.svg" alt="notifications icon">
    </div>
    <div class="nav-user">
     <div class="user-imgWrap"><img v-bind:src="imgUser" alt=""></div> 
      <div>
        <p> <span class="user-name">{{name}}</span>
           {{role}}</p>
      </div>
      <img src="http://serwer1982875.home.pl/img-bright/more_icon.svg" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "Navi",
  data() {
    return {
      name: "Damian Szmurło",
      role: "Front-end",
      imgUser: "https://serwer1982875.home.pl/img-bright/prof.jpg",
    }
  },
};
</script>

<style lang="scss" scoped>
@mixin flexNavItem ($wh ,$ml){
  display:flex;
  justify-content: space-between;
  align-items:center;
  width:$wh;
  margin-left:$ml;
} 


$colorBlue:#2339C4 ;
*{
  box-sizing: border-box ;
}
.nav-wrapper{
  height:100px;
  width:100vw;
  top:0px;
  left:0px;
  padding: 0 100px 0 780px;
  position: absolute;
  display: flex;
  justify-content:center;
  align-items:center;
  background-color:white;
}
.nav-changer{
  @include flexNavItem(354px,0px)
  font-weight:600;
  p{
    display:flex;
    align-items:center;
    justify-content:center;
    height:100px;
    width:100%;
  }
}
.nav-iconbox{
  @include flexNavItem(222px,120px)
  width:222px;
}
.nav-user{
   @include flexNavItem(175px,125px)
  align-items:center;
  width:222px;
}
.user-imgWrap{
  min-height:40px;
  min-width:40px;
  background-color:#DADFE9;
  border-radius: 50%;
  margin-right:10px;
  overflow: hidden;
  display:flex;
  justify-content:center;
  align-items:center;
    img{
      height:40px;
      width:40px;
    }
}
.user-name{
  font-weight:600;
}

.active{
  border-top: 5px solid $colorBlue;
  color:$colorBlue;
}

@media (max-width:1200px) {}
@media (max-width: 768px) {}
@media (max-width:375px) {}

</style>
