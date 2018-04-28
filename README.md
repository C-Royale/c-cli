# jelement-cli
The component generates the command line tool.

## Install
前提: [Node.js](https://nodejs.org/en/) (>=8.x preferred), npm version 5+.
```bash
npm install -g jelement-cli

```

## Usage

```js
jelement c/create
```
![demo](https://j.gifs.com/jqNZoz.gif)

```js
jelement f/format ./src/test.js
```
> 如果未发现 eslint 配置文件，则采用默认设置

```js
jelement init
```

## Help

```js
jelement -h/help
```

## RoadMap
* 支持代码美化
* 一键生成项目模板
