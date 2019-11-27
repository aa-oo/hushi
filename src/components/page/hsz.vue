<template>
  <div class="hsz">
    <div id="top">
      <div class="topt">
        <div class="time">{{date}}</div>
      </div>
      <div class="topb">
        <div class="logo">
          <img :src="imageGroups[0].src" alt="logo" />
          <!-- <span>{{imageGroups[0].src}}</span> -->
          <!-- <img :src="testurl" alt="logo" /> -->
        </div>
        <div class="search">
          <select
            name="search1"
            id="search1"
            style="width:auto;height:25px;border-radius:3px;font-size:11px;padding: 0 2%;margin-bottom: 3px;"
          >
            <option
              value="searchlists"
              v-for="(list,index) in searchlist"
              :key="index"
              style="text-align:center"
            >{{list.kemu}}</option>
          </select>
        </div>
      </div>
    </div>
    <div id="middle">
      <ul class="patients">
        <li v-for="(info,index) in patientsinfo" :key="index">
          <!-- !! -->
          <div class="list">
            <div class="name">{{info.name}}</div>
            <div class="both">
              <span calss="sex">{{info.sex}}</span>
              <span class="age">{{info.age}}</span>
            </div>
            <div class="jibie" :style="'border-color:'+tranColor(info.jibie)">
              <span>{{info.jibie}}</span>
            </div>
            <div class="huan">
              <div class="house">{{info.house}}</div>
              <div class="qingkuang">{{info.qingkuang}}</div>
            </div>

            <div class="caozuo">{{info.caozuo}}</div>
          </div>
        </li>
      </ul>
    </div>
    <div id="bottom">
      <ul>
        <li style="content:'.';color:red;font-size:30px">
          <span style="color:black;font-size:16px">特级护理</span>
        </li>
        <li style="content:'.';color:orange;font-size:30px">
          <span style="color:black;font-size:16px">一级护理</span>
        </li>
        <li style="content:'.';color:blue;font-size:30px">
          <span style="color:black;font-size:16px">二级护理</span>
        </li>
        <li style="content:'.';color:green;font-size:30px">
          <span style="color:black;font-size:16px">普通护理</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import img from "../../../static/json/json.json";
export default {
  name: "hsz",
  data() {
    return {
      date: this.getDate(new Date()),
      imageGroups: img.images,
      // testurl:'/static/slider/test.png',
      patientsinfo: [
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        },
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        },
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        },
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        },
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        },
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        },
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        },
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        },
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        },
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        },
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        },
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        },
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        },
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        },
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        },
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        },
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        },
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        },
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        },
        {
          name: "李华",
          sex: "男",
          age: 56,
          jibie: "一级护理",
          house: "2010室312床",
          qingkuang: "高温病人",
          caozuo: "20:20测体温"
        }
      ],
      searchlist: [{ kemu: "消化内科" }, { kemu: "感染性疾病科" }]
    };
  },
  methods: {
    getDate: function(dt) {
      var year = dt.getFullYear();
      var month = dt.getMonth() + 1;
      var day = dt.getDate();
      var hour = dt.getHours();
      var minut = dt.getMinutes();
      var second = dt.getSeconds(); //星期
      var arr = ["天", "一", "二", "三", "四", "五", "六"];
      var week = dt.getDay(); //4 //优化 --->补位

      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      hour = hour < 10 ? "0" + hour : hour;
      minut = minut < 10 ? "0" + minut : minut;
      second = second < 10 ? "0" + second : second; //定义一个补位的函数

      function buWei(i) {
        i = i < 10 ? "0" + i : i;
        return i;
      }

      return (
        year +
        "年" +
        buWei(month) +
        "月" +
        buWei(day) +
        "日" +
        buWei(hour) +
        ":" +
        buWei(minut) +
        ":" +
        buWei(second) +
        "星期" +
        arr[week]
      );
    },
    tranColor(jibie) {
      if (jibie == "特级护理") {
        return "red";
      } else if ((jibie = "一级护理")) {
        return "orange";
      } else if ((jibie = "二级护理")) {
        return "blue";
      } else {
        return "green";
      }
    }
  },
  watch: {
    jibie: function(newVal, oldVal) {
      if (newVal == "特级护理") {
        this.jibie.style.borderColor = "red";
      } else if ((newVal = "一级护理")) {
        this.jibie.style.bordercolor = "orange";
      } else if ((newVal = "二级护理")) {
        this.jibie.style.bordercolor = "blue";
      } else {
        this.jibie.style.bordercolor = "green";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hsz {
  height: 100%;
  width: 100%;
}
#top {
  height: 70px;
}
.topt {
  height: 20px;
}
.time {
  float: right;
  margin-right: 20px;
  font-size: 11px;
  margin-top: 2px;
}
.topb {
  height: 50px;
  clear: both;
  background-color: #ebebeb;
}
.logo {
  float: left;
  margin-top: -15px;
  margin-left: 40px;
  height: 20px;
}
.search {
  float: right;
  margin-right: 50px;
  margin-top: 15px;
}
selection {
  appearance: none;
  width: 150px;
}
.search1 option {
  /* margin-right: -20px; */
  appearance: none;
  width: 150px;
}
#middle {
  border: 2px solid #658582;
  background-color: #ffffff;
  margin: 5px;
}
.patients {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  flex-wrap: wrap;
}
.patients li {
  width: 230px;
  height: 150px;
  /* margin-right: 9px; */
  background-color: #ebebeb;
  border: 3px solid #d1e2fc;
  border-radius: 12px;

  margin-bottom: 15px;

  list-style: none;
  position: relative;
}
.list {
  /* position: relative; */
  /* overflow: hidden;
  clear: both; */
}
.name {
  font-size: 25px;
  float: left;
  margin-top: 5%;
  margin-left: 7%;
}
.both {
  float: right;
  font-size: 14px;
  margin-top: 13%;
  margin-right: 5%;
}
/* .sex {
  margin-right: 10px;
} */
.jibie {
  position: absolute;
  margin: 30px 70px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 5px solid pink;
}
.jibie span {
  opacity: 0;
}
.house {
  z-index: 100;
  position: absolute;
  font-size: 16px;
  margin-top: 60px;
  margin-left: 70px;
  margin-bottom: 2%;
}
.qingkuang {
  font-size: 13px;
  position: absolute;
  margin-top: 90px;
  margin-left: 90px;
}
.caozuo {
  position: absolute;
  font-size: 13px;
  margin-left: 145px;
  margin-top: 125px;
}
#bottom {
  background-color: #b0b0b0;
  height: 70px;
}
#bottom ul {
  overflow: hidden;
}
#bottom ul li {
  float: left;
  margin-top: 15px;
  margin-right: 10%;
}
</style>
