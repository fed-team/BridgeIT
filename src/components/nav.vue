<template>
 <div class="nav-wrapper">
    <div class="nav-changer">
    <p>Home</p>
    <p>Workspace</p>
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
     <div class="user-imgWrap"><img src="" alt=""></div> 
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
    }
  },
};
</script>

<style lang="scss" scoped>
$colorBlue:#2339C4 ;
*{
  box-sizing: border-box ;
}
.nav-wrapper{
  height:100px;
  width:100vw;

  top:0px;
  left:0px;
  position: absolute;
  display: flex;
  justify-content:center;
  align-items:center;
  background-color:white;
}
.nav-changer{
  display:flex;
  justify-content: space-between;
  width:354px;
  font-weight:600;
}
.nav-iconbox{
  display:flex;
  justify-content: space-between;
  width:222px;
}
.user-imgWrap{
  height:40px;
  width:40px;
  background-color:#DADFE9;
    border-radius: 50%;
}
.nav-user{
  display:flex;
  justify-content: space-between;
  align-items:center;
  width:222px;
}
.user-name{
  font-weight:600;
}

</style>
