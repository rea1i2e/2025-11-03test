# 検証時に使うミニマム構成のViteプロジェクト

## 導入

zipでダウンロードまたは、GitHub CLIで新規リポジトリ作成＋クローンして使って下さい。

### 新規リポジトリ作成＋クローンする場合は、コマンドを実行
```bash
gh repo create $(date +%Y-%m-%d)test \
  --template rea1i2e/2025-09-27test \
  --public \
  --description "検証用プロジェクト - $(date +%Y-%m-%d)" && \
sleep 5 && \
gh repo clone rea1i2e/$(date +%Y-%m-%d)test && \
cd $(date +%Y-%m-%d)test && \
echo "✅ 検証用プロジェクトが作成されました！現在のディレクトリ: $(pwd)" && \
echo "💡 説明文は後から 'gh repo edit' で修正可能です"
```

- 説明文の修正は、コマンドを実行
```bash
gh repo edit $(date +%Y-%m-%d)test --description "新しい説明文"
```

### パッケージのインストール

```bash
npm install
```

### 開発サーバー+ブラウザの起動

```bash
npm run dev
```

### ローカル環境で実機確認
- 開発サーバー起動時に表示される  Network: http://xxx.xxx.xxx.xxx:5173/ にアクセス


### GitHub Pagesで公開（リポジトリを作成した場合のみ）
- GitHubの設定画面を開く
```bash
npm run settings
```
- Branchのフォルダで/docsを選択して、Save

- ブラウザで開くコマンドを実行
```bash
npm run open
```


⚠️ **注意**: huskyのメッセージを表示するには、コマンドラインでコミット・プッシュしてください
- IDEやGUIツールでは表示されません
- コマンド: `git commit -m "message" && git push origin main`

**コマンドによりリポジトリを作成する際に必要な前提条件**：
- GitHub CLI (`gh`) がインストールされている
- GitHub認証が完了している

**後から修正可能**：
- 説明文: `gh repo edit リポジトリ名 --description "新しい説明文"`
- README.md: 直接編集してコミット


## 概要
- 手軽に検証するための最小限の構成を作成しています
- rem()やmq()、l-innerなど普段使う関数、クラスを用意しています
- これらを使うため、検証終了後はファイルごとコピペしてプロジェクトへ追加可能です（単位の置き換えなどが不要）
- htmlはルート直下のindex.htmlに書いて下さい。
- sassはsrc/assets/scss/_test.scssに書いて下さい。
- scssファイルを追加するときは、_test.scssを複製して下さい。追加したら、style.scssで読み込んで下さい。
- jsファイルもscssファイルと同様の使い方です。

## 主な構成

```
├── index.html … htmlはこれを編集
├── src
│   └── assets
│       ├── images … サンプル画像が入っています
│       ├── js
│       │   ├── _test.js … jsは主にこれを編集
│       │   └── main.js … jsファイルを追加したらここでimport
│       └── scss
│           ├── base
│           │   ├── _base.scss
│           │   ├── _breakpoints.scss
│           │   ├── _function.scss
│           │   ├── _reset.scss
│           │   └── _setting.scss
│           ├── style.scss … 読み込み用
│           └── _test.scss … scssは主にこれを編集
```


## 設定
- src/assets/scss/base/_breakpoints.scss の $startFrom: sp; を pc に変更するとPCファーストになります