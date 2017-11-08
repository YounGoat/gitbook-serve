#   gitbook-serve
__Easily serve more gitbooks simultaneously.__

If you are editing two gitbook projects and wanna preview both of them in real time, you should create an http server for each of them via `gitbook serve`. To make servers created successfully, you have to offer `--port` and `--lrport` manually. It is really troublesome. That is why *gitbook-serve* is helpful.

ATTENTION: Before using *gitbook-serve*, you should have installed [gitbook-cli](https://www.npmjs.com/package/gitbook-cli) before hand.

```bash
# After installed, there are two commands generated: gitbookserve & gbs
npm install -g gitbook-serve
# If prompted with "permission denied", please repeat the following command with "sudo" prefixed.

cd /path/to/gitbook/project

# Run one of the following commands at your will.
gitbookserve 
# OR
gbs

# One gitbook server instance started up.

cd /path/to/another/gitbook/project
gbs

# Another gitbook server instance started up.
```