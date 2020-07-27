<template>
  <div id="app">
      <el-container>
          <!-- <el-header> -->
        <Modal></Modal>
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse" aria-expanded="false">
                        <span class="sr-only">{{ $t("action.toggleNavbar") }}</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <router-link class="navbar-brand" to="/">{{ $t("info.title") }}</router-link>
                </div>
                
                <div class="collapse navbar-collapse" id="bs-navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="https://www.youtube.com/channel/UCvaTdHTWBGv3MKj3KVqJVCw" target="_blank"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGMDAwMDt9Cjwvc3R5bGU+Cjx0aXRsZT5Zb3VUdWJlIGljb248L3RpdGxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjMuNSw2LjJjLTAuMy0xLTEuMS0xLjgtMi4xLTIuMUMxOS41LDMuNiwxMiwzLjYsMTIsMy42cy03LjUsMC05LjQsMC41Yy0xLDAuMy0xLjgsMS4xLTIuMSwyLjEKCUMwLjIsOC4xLDAsMTAuMSwwLDEyYzAsMS45LDAuMiwzLjksMC41LDUuOGMwLjMsMSwxLjEsMS44LDIuMSwyLjFjMS45LDAuNSw5LjQsMC41LDkuNCwwLjVzNy41LDAsOS40LTAuNWMxLTAuMywxLjgtMS4xLDIuMS0yLjEKCWMwLjMtMS45LDAuNS0zLjgsMC41LTUuOEMyNCwxMC4xLDIzLjgsOC4xLDIzLjUsNi4yeiBNOS42LDE1LjZWOC40bDYuMywzLjZMOS42LDE1LjZ6Ii8+Cjwvc3ZnPgo=" height="18"/></a></li>
                        <li><a href="https://twitter.com/nekomataokayu" target="_blank"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzFEQTFGMjt9Cjwvc3R5bGU+Cjx0aXRsZT5Ud2l0dGVyIGljb248L3RpdGxlPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjQsNC42Yy0wLjksMC40LTEuOCwwLjctMi44LDAuOGMxLTAuNiwxLjgtMS42LDIuMi0yLjdjLTEsMC42LTIsMS0zLjEsMS4yYy0wLjktMS0yLjItMS42LTMuNi0xLjYKCWMtMi43LDAtNC45LDIuMi00LjksNC45YzAsMC40LDAsMC44LDAuMSwxLjFDNy43LDguMSw0LjEsNi4xLDEuNiwzLjJDMS4yLDMuOSwxLDQuNywxLDUuNmMwLDEuNywwLjksMy4yLDIuMiw0LjEKCWMtMC44LDAtMS42LTAuMi0yLjItMC42djAuMWMwLDIuNCwxLjcsNC40LDMuOSw0LjhjLTAuNCwwLjEtMC44LDAuMi0xLjMsMC4yYy0wLjMsMC0wLjYsMC0wLjktMC4xYzAuNiwyLDIuNCwzLjQsNC42LDMuNAoJYy0xLjcsMS4zLTMuOCwyLjEtNi4xLDIuMWMtMC40LDAtMC44LDAtMS4yLTAuMWMyLjIsMS40LDQuOCwyLjIsNy42LDIuMmM5LjEsMCwxNC03LjUsMTQtMTRjMC0wLjIsMC0wLjQsMC0wLjYKCUMyMi41LDYuNCwyMy4zLDUuNiwyNCw0LjZDMjQsNC42LDI0LDQuNiwyNCw0LjZ6Ii8+Cjwvc3ZnPgo=" height="18"/></a></li>
                        <li><a href="https://space.bilibili.com/412135222" target="_blank"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzAwQTFENjt9Cjwvc3R5bGU+Cjx0aXRsZT5CaWxpYmlsaSBpY29uPC90aXRsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3LjgsNC43aDAuOWMxLjUsMC4xLDIuOCwwLjYsMy44LDEuNmMxLDEsMS41LDIuMiwxLjYsMy44djcuNGMwLDEuNS0wLjYsMi44LTEuNiwzLjhzLTIuMywxLjUtMy44LDEuNkg1LjMKCWMtMS41LDAtMi44LTAuNi0zLjgtMS42UzAsMTguOSwwLDE3LjNWMTBjMC0xLjUsMC42LTIuOCwxLjYtMy44YzEtMSwyLjMtMS41LDMuOC0xLjZoMC44TDQuOSwzLjVDNC43LDMuMyw0LjYsMyw0LjYsMi42CgljMC0wLjQsMC4xLTAuNywwLjQtMC45bDAsMGMwLjMtMC4yLDAuNi0wLjQsMC45LTAuNHMwLjcsMC4xLDAuOSwwLjRsMi45LDIuN2MwLjEsMC4xLDAuMSwwLjEsMC4yLDAuMmg0LjNjMC0wLjEsMC4xLTAuMiwwLjItMC4yCglsMi45LTIuN2MwLjMtMC4yLDAuNi0wLjQsMC45LTAuNHMwLjcsMC4yLDAuOSwwLjRzMC40LDAuNiwwLjQsMC45YzAsMC40LTAuMSwwLjctMC40LDAuOUwxNy44LDQuN3ogTTUuMyw3LjJDNC42LDcuMyw0LDcuNSwzLjUsOAoJQzIuOSw4LjUsMi43LDkuMSwyLjcsOS45djcuNWMwLDAuOCwwLjMsMS40LDAuOCwxLjljMC41LDAuNSwxLjEsMC44LDEuOSwwLjhoMTMuM2MwLjcsMCwxLjQtMC4zLDEuOS0wLjhjMC41LTAuNSwwLjgtMS4xLDAuOC0xLjkKCVY5LjljMC0wLjgtMC4zLTEuNC0wLjgtMS45Yy0wLjUtMC41LTEuMS0wLjgtMS45LTAuOEg1LjN6IE04LDExLjFjMC40LDAsMC43LDAuMSwwLjksMC40YzAuMiwwLjIsMC40LDAuNiwwLjQsMXYxLjIKCWMwLDAuNC0wLjEsMC43LTAuNCwxYy0wLjIsMC4yLTAuNiwwLjQtMC45LDAuNHMtMC43LTAuMS0wLjktMC40Yy0wLjItMC4yLTAuNC0wLjYtMC40LTF2LTEuMmMwLTAuNCwwLjEtMC43LDAuNC0wLjkKCUM3LjMsMTEuMiw3LjYsMTEuMSw4LDExLjF6IE0xNiwxMS4xYzAuNCwwLDAuNywwLjEsMC45LDAuNGMwLjIsMC4yLDAuNCwwLjYsMC40LDF2MS4yYzAsMC40LTAuMSwwLjctMC40LDEKCWMtMC4yLDAuMi0wLjYsMC40LTAuOSwwLjRzLTAuNy0wLjEtMC45LTAuNGMtMC4yLTAuMi0wLjQtMC42LTAuNC0xdi0xLjJjMC0wLjQsMC4xLTAuNywwLjQtMUMxNS4zLDExLjIsMTUuNiwxMS4xLDE2LDExLjF6Ii8+Cjwvc3ZnPgo=" height="18"></a></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown">
                            <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{$t("lang." + currentLang)}} <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="javascript:;" @click="chlang('zh-CN')">{{$t("lang.zh-CN")}}</a></li>
                                <li><a href="javascript:;" @click="chlang('en-US')">{{$t("lang.en-US")}}</a></li>
                                <li><a href="javascript:;" @click="chlang('ja-JP')">{{$t("lang.ja-JP")}}</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
        <!-- </el-header> -->
        <el-main class="main-content">
        <!-- <div class="container-fluid main-content"> -->
            <router-view></router-view>
        <!-- </div> -->
        </el-main>
        <div class="background">
            <img src="../public/resources/BG2.png" width="100%" height="100%" alt=""/>
            </div>
        <el-footer class="footer">
        <!-- <footer class="footer"> -->
            <div class="container-fluid footer-content">
                <div class="pull-right">
                    <div class="text-right"><a href="https://github.com/Cyame/okayu-button/" target="_blank">{{$t("info.toGithub")}} <img src="https://img.shields.io/github/stars/Cyame/okayu-button.svg?style=social"/></a></div>
                    <div class="text-right">{{$t("info.notOfficial")}}</div>
                </div>
                <div>
                    <el-row type="flex" gutter="20" style="max-width:300px">
                        <el-col>
                  <el-popover
                    placement="top-start"
                    title="Cyame @ 2020"
                    trigger="hover">
                    <div style="margin:auto">
                    <div>{{$t('info.developer')}}</div>
                    <div>{{$t('info.deployer')}}</div>
                    <div>{{$t('info.audioStaff')}}</div>
                    </div>
                    <el-button slot="reference" >{{$t('info.about')}}</el-button>
                </el-popover>
                        </el-col>
                        <el-col>
                <el-popover
                    placement="top-start"
                    title="Cyame @ 2020"
                    trigger="hover">
                    <div style="margin:auto">
                    <div>{{$t('info.cnHint')}}</div>
                    </div>
                    <a slot="reference" href="http://cyame.gitee.io/okayu-button"><el-button >{{$t('info.cnServer')}}</el-button></a>
                </el-popover>
                        </el-col>
                        <el-col>
                <el-popover
                    placement="top-start"
                    title="Cyame @ 2020"
                    trigger="hover">
                    <div style="margin:auto">
                    <div>{{$t('info.globalHint')}}</div>
                    </div>
                    <a slot="reference" href="http://button.okayu.me"><el-button >{{$t('info.globalServer')}}</el-button></a>
                </el-popover>
                        </el-col>
                    </el-row>
                </div>
            </div>
        <!-- </footer> -->
        </el-footer>
        
      </el-container>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
body{
    padding-top: 70px;
}
.main-content{
    // NEED FIXED 跟图有关
    min-height: 2050px;
}
.footer {
    width: 100%;
    height: 60px;
    background-color: whitesmoke;
}
.footer-content {
    padding-top: 10px;
    color: #666;
}
.text-right{
    text-align: right;
}
.background{
    z-index: -1;
    position: absolute;
    // 平铺
    // width: 100%;
    // height: 100%;
}
// .footer-button{
//     margin: 20px
// }
</style>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import Modal from './components/modal.vue'

@Component({
    components:{
        Modal
    }
})
class App extends Vue {
    get currentLang(){
        return this.$i18n.locale;
    }
    created(){
        // eslint-disable-next-line 
        this.$i18n.locale = localStorage.getItem("lang") || this.$i18n.locale;
    }
    chlang(v){
        this.$i18n.locale = v;
        localStorage.setItem("lang", v);
    }
}

export default App;
</script>

