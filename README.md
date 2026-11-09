# 张桦烨 · Huaye Zhang

Personal academic website: **https://hmqh.github.io/**

中英文学术主页，包含教育经历、论文、研究项目和荣誉。纯静态 HTML/CSS/JavaScript，无构建依赖，可由 GitHub Pages 直接托管。

## 本地预览

在仓库目录运行 `python -m http.server 8765`，打开 http://localhost:8765。

## 内容维护

- `index.html`：学术主页正文、论文链接、作者信息和 BibTeX。
- `blog.html`：博客占位页，后续分享文章可逐篇添加。
- `assets/main.js`：英文对应文本、语言切换和论文筛选。
- `assets/style.css`：桌面与手机样式，以及打印简历样式。
- `assets/portrait.jpg`：压缩后的个人照片。
- `assets/logos/competitions/`：从赛事证书中裁取的竞赛标识，不包含证书原件。
- `sitemap.xml`：公开网址与最后更新日期。

直接修改 `main` 分支即可触发 GitHub Pages 发布。添加论文时同步维护中英文简介、作者位次及发表状态。新增页面时请更新站点地图。

网站仅展示学术与专业信息；在审稿件与正式发表的论文分别列出。

## 研究图示

`assets/pipelines/` 保存作者提供的论文框架图，转为无损 WebP：EmoZone-Talker（第 9 页）、MISTRec（第 13 页）、UniSCG（第 17 页）、MEMA（第 21、22 页）和 DAR-Dub。页面可点击图片查看原图。

`assets/logos/` 保存学校校徽与 CCF-CSP 标识。

`assets/logos/conferences/` 保存会议标识：ACM Multimedia 2026 会标由作者提供；CIKM 2026 标识来自 [大会官网](https://cikm2026.diag.uniroma1.it/)；AAAI-27 标识来自 [AAAI 官网](https://aaai.org/conference/aaai/aaai-27/)。
