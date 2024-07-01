# PDF Finder Chrome 扩展

PDF Finder 是一个简单的Chrome/Edge扩展，可以帮助你在智慧中小学 https://basic.smartedu.cn 的网站上下载中小学教材的PDF文件。

## 功能

- 捕获网页中的PDF链接。
- 直接从扩展中下载捕获的PDF文件。

## 安装

1. **克隆仓库：**

    ```sh
    git clone [https://github.com/yourusername/pdf-finder-extension](https://github.com/obigfish/smartedu_pdf_downloader).git
    ```

2. **导航到项目目录：**

    ```sh
    cd pdf-finder-extension
    ```

3. **在Chrome中加载扩展：**
   - 打开Chrome并访问 `chrome://extensions/`。在Edge里访问 `edge://extensions/`
   - 打开“开发者模式”。
   - 点击“加载已解压的扩展程序”按钮，然后选择你克隆的仓库目录。

## 使用方法

1. **登陆https://basic.smartedu.cn ，进入教材页面，根据需要选择对应的年级和教材。**
2. **在具体的教材页面，点击Chrome/Edge工具栏中的PDF Finder扩展图标。**
3. **点击“Get PDF Links”按钮以捕获当前页面中的PDF链接。**
4. **如果找到了PDF链接，你将看到“链接已获取”的消息。**
5. **点击“Download PDFs”按钮以下载捕获的PDF文件。**

注意事项：
1. 一定要成为网站的注册用户，登陆进去，游客身份无法下载；
2. 教材页面一打开，就启动插件，如果都load完了，可能无法获取到链接。

## 项目结构
pdf-finder-extension/  
├── manifest.json  
├── background.js  
├── popup.html  
└── popup.js  

## 贡献

欢迎贡献！请随时提交Pull Request。

## 许可证

该项目采用MIT许可证。详情请参阅 [LICENSE](LICENSE) 文件。

