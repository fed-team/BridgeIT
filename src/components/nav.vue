<template>
 <div class="nav_wrapper">

    <div class="nav_changer">
     <div><p>Home</p></div>
     <div  class="active"><p>Workspace</p></div>
     <div><p>Others</p></div>
    </div>

    <div class="nav_iconbox">
      <img src="http://serwer1982875.home.pl/img-bright/search_iconn.svg" alt="search icon">
      <img src="http://serwer1982875.home.pl/img-bright/star_icon.svg" alt="star icon">
      <img src="http://serwer1982875.home.pl/img-bright/today_icon.svg" alt="today icon">
      <img src="http://serwer1982875.home.pl/img-bright/chat_icon.svg" alt="chat icon">
      <img src="http://serwer1982875.home.pl/img-bright/notifications_icon.svg" alt="notifications icon">
    </div>

    <div class="nav_user">
     <div class="user_imgWrap"><img v-bind:src="imgUser" alt="profil"></div> 
       <div>
        <p> <span class="user_name bold">{{name}}</span>
           {{role}}</p>
       </div>
        <img class="user_more" v-on:click="switchDropMenu += 1" :class="{ activeMore: switchDropMenu  = switchDropMenu % 2  }"  src="http://serwer1982875.home.pl/img-bright/more_icon.svg" alt="more icon">
      <div v-if="switchDropMenu = switchDropMenu % 2"  class="user_dropmenu">
        <div class="dropmenu_grid">
          <p class="bold">BridgeIt</p>
          <p></p>
          <p>Users</p>
          <p>Import/Export</p>
          <p>Apps</p>
          <p>Trash</p>
          <p>Settings</p>
          <p>Boards</p>
        </div>

      <div class="dropmenu_grid">
        <p class="bold text_color">{{name}}</p>
        <p></p>
        <p>Teams</p>
        <p>Calendar</p>
        <p>Notifications</p>
        <p>Preferences</p>
        <p>Projects</p>
        <p></p>
      </div>
      <div class="btn--primary small">
         Log Out
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navi",
  data() {
    return {
      name: "John Smith",
      role: "Front-end",
      imgUser: "",
      switchDropMenu:"",
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
.flexCenter{
  display:flex;
  justify-content:center;
  align-items:center;
}
*{
  box-sizing: border-box ;
}
p{
 color: #505A78;
}
.nav_wrapper{
  height:100px;
  width:100vw;
  top:0px;
  left:0px;
  padding: 0 100px 0 780px;
  position: absolute;
  @extend .flexCenter ; 
  background-color:white;
  border: 1px solid #DADFE9;
}
.nav_changer{
  @include flexNavItem(354px,0px)
  font-weight:600;
  div{
    height:100px;
    @extend .flexCenter ;
  }
  p{
   @extend .flexCenter ; 
    color:#26263A;
  }
  .active{
  min-width:158px;
  border-top: 5px solid $secondary;
  p{
  color:$secondary;
  }
}
}
.nav_iconbox{
  @include flexNavItem(258px,120px)
  img{
    max-height:20px;
    max-width:20px;
  }
  img:hover{
 filter: invert(17%) sepia(92%) saturate(2461%) hue-rotate(226deg) brightness(98%) contrast(97%);
   transition:.5s;
  }
}

.nav_user{
   @include flexNavItem(175px,125px)
  align-items:center;
  line-height: 20px;
  position: relative;
}
.user_imgWrap{
  min-height:40px;
  min-width:40px;
  background-color:#DADFE9;
  border-radius: 50%;
  margin-right:10px;
  overflow: hidden;
 @extend .flexCenter ; 
    img{
      height:40px;
      width:40px;
    }
}
.user_more{
 transform:rotate(90deg);
}
.activeMore{
  transform:rotate(0deg);
}
.user_name{
  font-weight:600;
}
.user_dropmenu{
  position:absolute;
  height:375px;
  width:300px;
  background-color:white;
  top:70px;
  left:-125px;
  border: 1px solid #DADFE9;
  padding: 25px 30px ;
}
.small{
  max-width:90px;
}
.user_dropmenu--close{
display:none;
}
.dropmenu_grid{
  height:120px;
  width:100%;
  margin-bottom:20px;
  display:grid;
  grid-template-columns: 50% 50%;
  grid-row: 25% 25% 25% 25%;
  p{
    margin:0px;
    padding:0px;
  }
  p:hover{
    color:$secondary;
  }
}
.bold{
  font-weight:600;
  color:#505A78;
}
.text_color{
  color:$secondary;
}
@media (max-width:1200px) {}
@media (max-width: 768px) {}
@media (max-width:375px) {}

</style>
