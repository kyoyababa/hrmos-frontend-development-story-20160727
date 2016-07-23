
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
  - 2010 エディトリアルマネージャー
  - 2011 プロジェクトマネージャー
  - 2012 マーケティングマネージャー
  - 2013 ウェブデザイナー
  - 2014 フリーランス
  - 2015 フロントエンドエンジニア <- 今ここ

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

## では _正解_ とはなんなのか

--

1. 認知・改変が容易で、サーバサイドとの親和性がある
1. コンポーネント化による重複の排除
1. 基礎構造・部分構造の分割
1. セレクタの構造化
1. 簡潔な状態定義

---

## 認知・改変が容易？サーバサイドとの親和性？

<!-- 何か具体的な例を示す -->

---

## コンポーネント化による重複の排除？

---

## 例：

```
- base/
- app/
```

---

## 例：

```
- base/
  - config/
  - constants/
  - components/
  - helpers/
- app/
```

---

## 例：

```
- base/
  - config/
  - constants/
  - components/
    - header.html.tpl
    - _header.scss
    - footer.html.tpl
    - _footer.scss
    - navigation.html.tpl
    - _navigation.scss
  - helpers/
- app/
```

---

## 例：

```
- base/
  - config/
  - constants/
    - constants.ts // 定数（後述）
    - enums.ts // Enum（後述）
  - components/
  - helpers/
- app/
```

---

## 例：

```
- base/
- app/
  - login/
  - dashboard/
  - applications/
  - jobs/
```

---

## 例：

```
- base/
- app/
  - login/
    - index.html.tpl
    - _login-index.scss
    - _login-index.ts
  - dashboard/
  - applications/
  - jobs/
```

---

## 基礎構造・部分構造の分割

--

- sgクラス
- pgクラス

---

## 基礎構造・部分構造の分割

- sg => style-guide => 基礎構造
- pg => paged-guide => 部分構造

---

## 基礎構造・部分構造の例：

```
<section>
  <h2>見出し</h2>
  <p>見出しを補足するテキスト</p>
  <div>
    <figure>
      <img src="hoge.jpg">
    </figure>
    <p>本文テキスト</p>
  </div>
</section>
```

---

## 基礎構造・部分構造の例：

```
<section class="sg-container"> // <- 基礎となるcontainer
  <h2>見出し</h2>
  <p>見出しを補足するテキスト</p>
  <div>
    <figure>
      <img src="hoge.jpg">
    </figure>
    <p>本文テキスト</p>
  </div>
</section>
```

---

## 基礎構造・部分構造の例：

```
.sg-container { }
```

--

```

.sg-container + .sg-container { }
```

--

```

.sg-container > h2 { }
```

---

## 基礎構造・部分構造の例：

```
<section class="sg-container"> // <- 基礎となるcontainer
  <h2>見出し</h2>
  <p>見出しを補足するテキスト</p>
  <div>
    <figure>
      <img src="hoge.jpg">
    </figure>
    <p>本文テキスト</p>
  </div>
</section>
```

---

## 基礎構造・部分構造の例：

```
<section class="sg-container">
  <h2>見出し</h2>
  <p>見出しを補足するテキスト</p>
  <div>
    <figure class="pg-inner-images"> // <- 部分的に追加した構造
      <img src="hoge.jpg">
    </figure>
    <p>本文テキスト</p>
  </div>
</section>
```

---

## 基礎構造・部分構造の例：

```
.pg-inner-images { }

.pg-inner-images > img { }
```

--

```

.sg-container .pg-inner-images { }
```

---

## セレクタの構造化？

--

```
.sg-container p { }

.sg-container > p { }

.sg-container + p { }

.sg-container ~ p { }
```

---

## セレクタの構造化？

```
<ul>
  <li class="sg-item"></li>
  <li class="sg-item"></li>
  <li class="sg-item"></li>
</ul>

.sg-item { }
```

---

## セレクタの構造化？

```
// すっきりした！
<ul class="sg-item-list">
  <li></li>
  <li></li>
  <li></li>
</ul>

.sg-item-list > li { }
```

---

## セレクタの構造化？

```
<div>
  <p class="m_05"></p>
  <p class="m_05"></p>
  <p class="m_05"></p>
</div>
```

--

^ クラスが意味を持っていない。「なぜ？」がわからない。

---

## 簡潔な状態定義？

--

```
<ul>
  <li class="sg-item-normal"></li>
  <li class="sg-item-active"></li>
  <li class="sg-item-disabled"></li>
</ul>
```

---

## 簡潔な状態定義？

```
<ul class="sg-item-list">
  <li></li>
  <li class="active"></li>
  <li class="disabled"></li>
</ul>
```

--

```

.sg-item-list > li { }
.sg-item-list > li.active { }
.sg-item-list > li.disabled { }
```

---

## idによるDOM制御

--

```
<button id="jsi-menu-trigger">MENU</button>
```

--

```

<button class="jsc-conversion-trigger">問い合わせ</button>
```

---

## コードレビューによる品質担保

--

- _正解_ かどうか（考え方が合っているか）の確認

--

- 責任の共有

--

- 個人の技術が止まることを防止

--

- TODOの整理

---

## TODOといえば

--

HRMOSの半分はTODOでできています

---

## こんなのとか

```
<!-- TODO(名前): あとでここをこうする -->
```

---

## こんなのとか

```
/* NOTE(名前): ここの数字を変えるときはこうしてね */
```

---

## こんなのとか

```
// FIXME(名前): やり方わかんないから
// 誰かここをこうしてほしいなあ(´･_･`)
```

---

## 文芸的プログラミング

https://ja.wikipedia.org/wiki/文芸的プログラミング

---

# \#3 HRMOSを支える技術

--

1. TypeScriptによる型定義
1. ルールを逸脱したコードを自動検知
1. ユーザ操作によるエラーログ抽出

---

## TypeScriptによる型定義

--

```
// 普通のJavaScript
var foo = 5;
var foo = 'hogehoge';
var foo = false;
```

---

## TypeScriptによる型定義

```
// TypeScriptによる型定義 (+ ES6)
let foo: number  = 5;
let foo: string  = 'hogehoge';
let foo: boolean = false;
```

---

## 型だけじゃなく、中身もあらかじめ定義しちゃおう

```
- base/
  - config/
  - constants/
    - constants.ts // <- ここ
    - enums.ts     // <- ここ
  - components/
  - helpers/
- app/
```

---

## constantsによる定数の定義（例）

--

```
const Constants = {
  SERVICE_NAME = 'HRMOS[ハーモス]';
  COMPANY_NAME = '株式会社ビズリーチ';
}
```

---

## constantsによる定数の定義（例）

```
const Constants = {
  SERVICE_NAME = 'HRMOS[ハーモス]';
  COMPANY_NAME = '株式会社ビズリーチ';
  ROOT_URL     = 'https://www.hrmos.co/';

  GOOGLE_CALENDAR = 'Google カレンダー&trade;'
}
```

---

## Enumによる定数配列の定義（例）

```
class Roles {
  General        = { code: 'GEN', name: '一般社員', limited: false };
  Interviewer    = { code: 'INT', name: '面接官',   limited: false };
  Recruiter      = { code: 'REC', name: '人事部',   limited: true };
  Administrator  = { code: 'ADM', name: '管理者',   limited: true };
}
```

---

## フロントエンドで語彙がバラつかない！

```
<p>{{ $enums.roles.Interviewer.name }}</p>

 => <p>面接官</p>
```

---

## サーバサイドから受け取ったコードがそのまま使える！

```
this.role: string = 'INT';
```

↑ こんなデータが渡されてきたら...

--

```
<p>あなたの権限は{{ $enums.roles.valueOf(this.role).name }}です<p>

  => <p>あなたの権限は面接官です<p>
```

---

## 定義してもルールが破られるものもある

--

- ルールを逸脱したコードを自動検知

--

  - HTML-Lint (HTML)
  - Sass-Lint (SCSS)
  - Ts-Lint   (TypeScript)
  - Es-Lint   (ECMAScript)

---

## ルールを逸脱したコードを自動検知

--

- weeklyでレポートを自動生成

--

- 前週と比較して、
  - 未定義のカラーコードが増えていないか
  - 根拠の無いwidth値が指定されていないか
  - 使ってないのに定義してる変数が増えていないか
  - あっちとこっちに同じプロパティのスタイルを定義していないか

---

## ユーザ操作によるエラーログ抽出

--

- コードが正しくて、理念に合っていても、思わぬエラーは発生する

--

- 例）あるページを開いて30分経過してからあるボタンをクリックしたらエラー

--

```
＿人人人人人人人人人＿
＞　画面が真っ白に　＜
￣Y^Y^Y^Y^Y^Y^Y^Y￣
```

--

（実際はそんなこと起きません）

---

![](./images/sentry.png)

---






<!-- ## 例：
