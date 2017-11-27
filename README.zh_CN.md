#   gitbook-serve
__快速并行启动 gitbook 服务实例__

其他语言版本：[English](./README.md)

在编辑 GitBook 项目时，我们可以借助 [gitbook-cli](https://www.npmjs.com/package/gitbook-cli) 提供的 `gitbook serve` 命令启动一个 HTTP 服务实例并在浏览器中接近实时地预览编辑效果。但是，在编辑两个以上的 GitBook 项目时，如果需要同时预览这些项目，我们需要通过手动添加 `--port` 和 `--lrport` 参数，为每个服务指定可用的端口，这实在是相当麻烦（尤其是你不知道有哪些端口可用时）。__gitbook-serve__ 将帮助你解决这个问题。

##  快速开始

注意：在开始使用 __gitbook-serve__ 之前，请确保已经全局安装了 [gitbook-cli](https://www.npmjs.com/package/gitbook-cli) 模块。

```bash
# 安装完成后将生成两个命令：gitbookserve 和 gbs
npm install -g gitbook-serve
# 如果安装时提示 "permission denied"，请使用系统管理员权限重试（比如尝试 sudo 命令）。

cd /path/to/gitbook/project

# 选择以下任一命令执行（两者等效）。
gitbookserve 
# OR
gbs

# 此时，第一个 GitBook 服务实例启动。

cd /path/to/another/gitbook/project
gbs

# 此时，第二个 GitBook 服务实例启动。
```

##  推荐

*   [gitbook-plugin-analytics](https://www.npmjs.com/package/gitbook-plugin-analytics)