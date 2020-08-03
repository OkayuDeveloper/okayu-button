# おかゆボタン

おかゆボタン [ホンムページ(世界サーバー)](http://button.okayu.me) [中国の方々はこちらへ(中国サーバー)](https://cyame.gitee.io/okayu-button)

![NODEJS_VERSION](https://img.shields.io/static/v1?label=Node.js&message=12.16.3&color=339933&style=flat-square&logo=node.js) ![NPM_VERSION](https://img.shields.io/static/v1?label=NPM&message=6.14.4&color=CB3837&style=flat-square&logo=NPM) ![JQUERY_VERSION](https://img.shields.io/static/v1?label=jQuery&message=3.5.0&color=0769AD&style=flat-square&logo=jQuery) ![VUE_VERSION](https://img.shields.io/static/v1?label=Vue&message=2.5.17&color=4FC08D&style=flat-square&logo=Vue.js) ![BUTTON_VERSION](https://img.shields.io/static/v1?label=okayu-button&message=1.0&color=B463F5&style=flat-square&logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0ib25pZ2lyaV94QTBf5Zu+5YOPXzFfIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIg0KCSB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQzMiA0MzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQzMiA0MzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiMwNjA2MDY7fQ0KCS5zdDF7ZmlsbDojRkZGRkZGO30NCjwvc3R5bGU+DQo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjE2LjEsNDE4LjJjLTE1LjksMC0zMS45LTAuMS00Ny44LTAuNmMtMTMuMi0wLjQtMjYuNC0xLjEtMzkuNi0yLjFjLTktMC43LTE3LjktMS4yLTI2LjgtMi41DQoJYy0zNS42LTUuMy02Mi42LTIyLjktNzguNS01NS44Yy00LjktMTAuMS03LjYtMjAuOS04LjYtMzIuMWMtMS42LTE3LjksMS40LTM1LDcuNy01MS43YzE4LjgtNDkuOCw0MC42LTk4LjMsNjYtMTQ1LjENCgljMTMuNi0yNS4xLDI4LjEtNDkuNyw0My45LTczLjVjOS4xLTEzLjcsMjAuMi0yNS4zLDM0LjEtMzQuM2MxMC43LTYuOSwyMi4zLTExLjcsMzUtMTMuNGMyOC40LTMuOSw1My45LDIuOCw3NS45LDIxLjcNCgljOS43LDguNCwxNy44LDE4LjEsMjQuOCwyOC44QzMzMSwxMDEuOCwzNTYsMTQ4LjEsMzc4LDE5Ni4xYzEyLjIsMjYuOCwyMy42LDUzLjksMzMuNyw4MS41YzUuNCwxNC43LDcuNSwzMCw2LjQsNDUuNw0KCWMtMi44LDM4LTI2LjcsNjkuOS02Mi40LDgzLjVjLTkuNSwzLjYtMTkuNCw1LjgtMjkuNSw2LjhjLTExLjUsMS4xLTIzLDIuMS0zNC41LDIuOGMtMTIuNywwLjgtMjUuNSwxLjItMzguMiwxLjUNCglDMjQwLjgsNDE4LjEsMjI4LjQsNDE4LjEsMjE2LjEsNDE4LjJ6Ii8+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjE2LjcsNDIuOGMtNS42LDAtMTAuNiwwLjUtMTUuNSwxLjdjLTExLjIsMi44LTIwLjksOC41LTI5LjcsMTUuOWMtMTAuNCw4LjgtMTguOSwxOS4zLTI2LjEsMzAuOA0KCWMtMTEuOCwxOC44LTIyLjcsMzguMS0zMy4xLDU3LjZjLTE2LjMsMzAuNi0zMS4yLDYxLjgtNDUuNiw5My4zYy02LjMsMTMuNy0xMiwyNy42LTE1LjcsNDIuM2MtMi44LDExLjQtNC41LDIyLjktMy4zLDM0LjcNCgljMC43LDYuOSwyLjQsMTMuNCw1LjUsMTkuNmM1LjEsMTAuNCwxMy4xLDE4LjIsMjIuOCwyNC4yYzEyLjEsNy41LDI1LjQsMTEuOSwzOS4xLDE1LjFjNy4zLDEuNywxNC43LDMuMSwyMi4xLDQuMQ0KCWM1LjIsMC43LDEwLjMsMS40LDE1LjUsMS45YzEsMC4xLDEtMC4zLDEtMWMwLjMtMTAuNiwwLjYtMjEuMywwLjgtMzEuOWMwLjQtMTYuNywwLjgtMzMuNCwxLjItNTAuMWMwLjQtMTUsMC43LTMwLDEtNDUNCgljMC4xLTQuMiwwLjMtOC4zLDAuMy0xMi41YzAtMC45LDAuMy0xLDEuMS0xYzE3LjMsMCwzNC42LTAuMSw1MS45LTAuMWMyMS4yLDAsNDIuNCwwLjEsNjMuNSwwLjFjMSwwLDEuMiwwLjMsMS4yLDEuMg0KCWMwLjMsMTEuMSwwLjUsMjIuMywwLjgsMzMuNWMwLjIsOC40LDAuNCwxNi44LDAuNiwyNS4yYzAuMywxMS4yLDAuNiwyMi40LDAuOSwzMy42YzAuMywxMS44LDAuNSwyMy42LDAuOCwzNS40DQoJYzAuMSw0LDAuMiw3LjksMC4zLDExLjljMCwwLjcsMC4xLDAuOSwwLjksMC44YzYuMy0wLjYsMTIuNi0xLjUsMTguOC0yLjRjOS44LTEuNSwxOS41LTMuNSwyOS02LjNjMTEtMy4yLDIxLjYtNy41LDMxLjItMTMuOQ0KCWMxNS43LTEwLjUsMjQuOC0yNSwyNi40LTQ0YzAuOC05LjUtMC4zLTE4LjgtMi4yLTI4Yy0yLjUtMTEuOC02LjQtMjMuMS0xMS4xLTM0LjJjLTYuMy0xNS0xMy4zLTI5LjYtMjAuMi00NC4zDQoJYy0xNS41LTMyLjgtMzEuOS02NS4xLTUwLjEtOTYuNWMtNi4xLTEwLjUtMTIuMS0yMS0xOS4xLTMwLjljLTcuNS0xMC42LTE2LjEtMjAuMS0yNi42LTI3LjdDMjQzLjYsNDcuNywyMzAuNyw0Mi43LDIxNi43LDQyLjh6Ii8+DQo8L3N2Zz4NCg==)

関連リンク:

* [猫又おかゆのYouTubeチャンネル](https://www.youtube.com/channel/UCvaTdHTWBGv3MKj3KVqJVCw)

* [猫又おかゆのツイータータイムライン](https://twitter.com/nekomataokayu)

* [猫又おかゆのビリビリ動画チャンネル](https://space.bilibili.com/412135222?from=search&seid=730740916312043238)

## 贡献

このレポーをフォックして、またご修正をください。完成のプロジェクトをこちらにプールレクエストをください。

### 音声追加と修正

**説明**: 全部の音声データリストは[src/voices.json](src/voices.json)に保存された、音声を追加したうえ, このリストも更新してください。

VoiceはMP3やWAVのフォーマットで[public/voices](public/voices)保存しています。相応のURLは `voices/`です。

新規音声が追加したいなら、ソフトウェアを使て、音量が標準の80に調整してください。

Because this site uses a strong cache strategy, except for `index.html`, files with the same filename, even if modified, will **NEVER** be refreshed by the client. Therefore, the filename of the newly voice, whatever it is new or modified, **MUST** be different from any previous filename.

If you are modifying voice, delete the original file after modification.

### 翻訳仕事を参加

英語と日本語の翻訳協力をください！

言語データは.jsファイルで[src/locales](src/locales)にしております.

音声リストはこちら [src/voices.json](src/voices.json)です。

The corresponding modification can be recognized by the program as a valid translation.

## パソコン環境で起動

This site is developed using Vue + jQuery + Bootstrap 3.

To deploy a local development environment, first install the latest version of Node. Then follow these steps:

1. このレポーをコーロンして。

2. プロジェクトフォルダに入って、`npm install`を.

3. `npm run serve`でパソコンにウェブサイトを開け、修正の間に、パソコンのウェブサイトも変われる。

4. To compile the files for deployment, run `npm run build`, which will generate the `dist` directory. This site is completely static, you can directly deploy the entire `dist` directory.

> To contribute your code to this project, you don't have to compile locally. After passing the test in the development server and pushing it to Github, you can directly require a Pull Request to this project.

### エラー処理

####　エラー `Early EOF`

```shell
git config --global http.postBuffer 5242880000
```

## ライセンス

プログラム: MIT

音声: [Hololive secondary creation licence](https://www.hololive.tv/terms)を対応.

ただのファン作品ですが、本家のホロライブは関係がありません。

## 特別感謝

このプロジェクトはMeowSound Idolsをご参考しまいました

[Meamea button](https://github.com/zyzsdy/meamea-button)から修正になっております。
