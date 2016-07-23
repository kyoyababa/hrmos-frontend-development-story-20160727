
class: center, middle

# *intentionally left blank*

---

class: img-slide

![](http://dummyimage.com/1200x900/000/FFF)

---

# this is h1

## this is h2

- list-item
- list-item
- list-item
  - list-item
  - list-item
  - list-item

---

1. ordered-list-item
1. ordered-list-item
1. ordered-list-item
  1. ordered-list-item
  1. ordered-list-item
  1. ordered-list-item

| Left align | Right align | Center align |
|:-----------|------------:|:------------:|
| This       |        This |     This     |

`inline code`

```
block code
```

---

## wi-fi

| SSID | Password |
|:-----------|:-----------|
| BIZREACH_GUEST | iwilljoinbizreach |

## お手洗い

後ろの左側へ。

## スケジュール

| hh:mm | hh:mm | hh:mm | hh:mm |
|:-----------|:-----------|:-----------|:-----------|
| 発表開始 | 質疑応答 | 懇親会 | 完全撤収 |

---

# プロフィール

## Kyoya BABA

- 28
- 札幌
- 経歴
  - 2010 プロダクトマネージャー
  - 2012 エディトリアルマネージャー
  - 2013 プロジェクトマネージャー
  - 2014 ウェブデザイナー
  - 2015 フリーランス
  - 2016 フロントエンドエンジニア <- 今ここ

---

## SNSやってます

| Facebook | Twitter | LinkedIn |
|:-----------:|:-----------:|:-----------:|
| ![](./images/avatar.png) | ![](./images/avatar.png) | ![](./images/avatar.png) |
| Qiita | filmarks | LINE |
| ![](./images/avatar.png) | ![](./images/avatar.png) | ![](./images/avatar.png) |

---

## 現在

### 株式会社ビズリーチHRMOS事業部
### フロントエンドエンジニア

--

- UI / UXデザイン
- フロントエンドコーディング
- 広告マーケティング

---

## アジェンダ

- \#1 プロダクトについて
- \#2 フロントエンド開発のルールづくり
- \#3 HRMOSを支える技術
- \#4 チームマネジメント
- \#5 質疑応答
- \#6 懇親会

---

# \#1 プロダクトについて

---

![](./images/hrmos.png)

---

![](./images/service-bizreach.png)

---

![](./images/careertrek.png)

---

![](./images/service-regionup.png)

---

![](./images/service-stanby.png)

---

## HRMOSとはなんなのか

---

![](./images/hrmos-future.png)

---

![](./images/hrmos-data.png)

---

![](./images/hrmos-dashboard.png)

---

![](./images/hrmos-dashboard-1.png)

---

![](./images/hrmos-dashboard-2.png)

---

![](./images/hrmos-dashboard-3.png)

---

![](./images/hrmos-spa.png)

---

![](./images/hrmos-spa-1.png)

---

![](./images/hrmos-spa-2.png)

---

![](./images/hrmos-spa-3.png)

---

![](./images/hrmos-roi.png)

---

## 技術スタック

---

## 技術スタック

### デザイン

---

![](./images/photoshop-logo.png)

---

![](./images/maxresdefault.jpg)

---

![](./images/sketch.png)

---

![](./images/invision-app.png)

---

## 技術スタック

### フロントエンド

---

![](./images/html5.jpg)

---

![](./images/css3.jpg)

---

![](./images/sass.png)

---

![](./images/ejs.jpg)

---

![](./images/angular.png)

---

![](./images/typescript.jpg)

---

![](./images/react.jpg)

---

![](./images/jquery.jpg)

---

![](./images/gulp.jpg)
---

![](./images/mustache.png)

---

## 技術スタック

- チームコミュニケーション

---

![](./images/github.jpg)

---

![](./images/slack.png)

---

![](./images/jira.jpg)

---

![](./images/confluence_logo.jpg)

---

![](./images/google-drive.png)

---

## 技術スタック

- その他サーバサイド的なものたち
  - Java
  - Scala
  - Python
  - Play Framework
  - Slick
  - Nginx
  - MySQL
  - Elasticsearch
  - Memcached
  - Docker
  - Ansible
  - SQS
  - CloudFront
  - Jenkins
  - Kibana
  - Mailgun
  - etc...

---

# \#2 フロントエンド開発のルールづくり

---

# \#2 フロントエンド開発のルールづくり

ルールって何？

---

## ルールって何？

- こたえ:

--

  - 複数の開発者が

--

  - 共通の認識・価値観を持ち

--

  - お互いの作業を理解し

--

  - 無駄な / 重複した / 危険な 仕事をしないための

--

  - 明文化された規則

---

## 9 Boxの考え方

--

||||
|:-----------:|:-----------:|:-----------:|
|1|2|3|
|4|5|6|
|7|8|9|

---

## 案１

```
<table>
  <tbody>
    <tr> <td>1</td> <td>2</td> <td>3</td> </tr>
    <tr> <td>4</td> <td>5</td> <td>6</td> </tr>
    <tr> <td>7</td> <td>8</td> <td>9</td> </tr>
  </tbody>
</table>
```

---

## 案２

```
<ol>
  <li>1</li> <li>2</li> <li>3</li>
  <li>4</li> <li>5</li> <li>6</li>
  <li>7</li> <li>8</li> <li>9</li>
</ol>
```

---

## 案３

```
<ol>
  <li>1</li> <li>2</li> <li>3</li>
</ol>
<ol>
  <li>4</li> <li>5</li> <li>6</li>
</ol>
<ol>
  <li>7</li> <li>8</li> <li>9</li>
</ol>
```

---

## 案４

```
<p>123</p>
<p>456</p>
<p>789</p>
```

---

## 9 Box

- 正解は無い

--

- => 状況によって正解が分かれる

--

- => コードは、機械（ブラウザ・クローラ・データ）のためでもあるが
- => 人間（開発者・チームメンバ）のためでもある

--

### >>> _状況_ によって _正解_ を使い分けるためのルール

---

# ルールの種類

--

- 株式会社ビズリーチが全社的に定めているもの
- HRMOS事業部が独自に設定しているもの
- かってに

---

## äżŽć­ŁĺŽšćć§ăťĺŻčŞ­ć§ăťççŁć§ďź

<!-- 9 BoxăŽäž -->
![](http://dummyimage.hrmoscom/1200x900/000/FFF

---

## ăľăźăăľă¤ăă¨ăă­ăłăă¨ăłăăŽčŚŞĺć§ďź

<!--
ăăăŤăăľăźăăľă¤ăăăăăźăżăăăăŁăŚăçăŞçťé˘ăĺşăăŚăăăăŤăăźăżăăăăă¨ăăăăăżăăăŞčŠąăăă
-->
![](http://dummyimage.hrmoscom/1200x900/000/FFF

---

## ăłăłăăźăăłăĺăŤăăĺąéĺďź

---

# #2 ăă­ăłăă¨ăłăéçşăŽăŤăźăŤăĽăă

1. ć Şĺźäźç¤žăăşăŞăźăĺ¨ç¤žă§ĺŽăăŚăăăŤăźăŤ
1. HRMOSäşćĽ­é¨ă§çŹčŞéç¨ăăŚăăăŤăźăŤ
1. ăźăăăăŁăŚăŤăăăŚăăăăăă¤ăŤăăăăźă

---

# #2 ăă­ăłăă¨ăłăéçşăŽăŤăźăŤăĽăă

1. ăăŁăăăĺĺçŠşéăŽĺŽçžŠ
1. ăăŁăăăăłăłăăźăăłăĺ
1. ăăŁăăăăłăźăăŹăăĽăź

---

## ăăŁăăăă¨ăŻä˝ă

- ć´çć´é ăăăŚăăăă¨
  - ĺŽśăćąă -> ăăŁăăăă
- çžäťŁçă§ăăăă¨
  - ćăŞăăăä¸çŞăă§ -> ăăŁăăăă
- ćĺłăăăăăă¨
  - ăĺăăŤăŻéŁăăăŚăăăăăăďźăă¤ăĄďź -> ăăŁăăăă
- ăăźă ăĄăłăăĺ°ćŹăăăăăă¨
  - ăăä¸äşşă§çăăŚăăăă -> ăăŁăăăă

---

## ăăŁăăăĺĺçŠşéăŽĺŽçžŠ

1. sgăŻăŠăšăŤăăĺąéăšăżă¤ăŤĺŽçžŠ
1. pgăŻăŠăšăŤăăä¸ä˝ć§é ăšăżă¤ăŤĺŽçžŠ
1. čŁĺŠăŻăŠăšăŤăăçśćĺŽçžŠ
1. ăťăŹăŻăżăăăăłă°ăŤăăHTMLăŽç°Ąç´ ĺ
1. JavaScriptç¨ăŽid / classé

<!-- äťĽä¸ăâăŤă¤ăăŚç´°ăăčŞŹćăă -->

---

## ăăŁăăăăłăłăăźăăłăĺ

- ăžăăŻăłăłăăźăăłăăĺăăăďźďźç°ĄĺăŞäžďź
  - gulpfile.js
  - pages/
    - index.ejs
    - component/
      - head.ejs
      - header.ejs
      - footer.ejs
      - sidebar.ejs
      - google-analytics.ejs
  - assets/
    - images/
    - scripts/
    - styles/
    - icons/

---

## ăăŁăăăăłăłăăźăăłăĺ

- ăžăăŻăłăłăăźăăłăăĺăăăďźďźăăĺŽäžďź
  - app/
    - base/
      - config/
        - ăŞăăconfigçłť
      - constants/
        - ĺŽć°ă¨ăEnumă¨ă
      - ejs/
        - ăăźăšă¨ăŞăEJS(HTML)
      - components/
        - headeră¨ăsidebară¨ădatePickeră¨ă
      - helpers/
        - paginationă¨ăvalidationă¨ă
    - ats/
      - login/
      - dashboard/
      - applications/
      - jobs/
  - assets/
    - images/
    - scripts/
    - styles/
    - icons/

---

## ăăŁăăăăłăźăăŹăăĽăź

<!-- ăŞăă -->

---

## ĺˇä˝çăŞăłăźăăŁăłă°čŚç´

```
ăŞăăć¸ă
```

---

# #3 HRMOSăćŻăăćčĄ

---

# #3 HRMOSăćŻăăćčĄ

- AngularJSăăReactă¸ <- ä˝ăć¸ăăăăăăă

---

# #3 HRMOSăćŻăăćčĄ

- TypeScriptăŤăăĺăŽăăéçş

---

# #3 HRMOSăćŻăăćčĄ

- gulpç§äźăŽăżăŹ

---

# #3 HRMOSăćŻăăćčĄ

- ĺčłŞćšĺă§ĺżăăăŚăăăă¨

---
