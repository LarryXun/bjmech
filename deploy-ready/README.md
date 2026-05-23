# 📦 BJMECH 网站部署包

## 使用方法：

### 方法 1：Netlify 拖拽上传（推荐）
1. 访问 https://app.netlify.com/sites/bjmech/deploys
2. 将 `deploy-ready` 文件夹直接拖拽到网页上
3. 等待部署完成

### 方法 2：使用 ZIP 包
1. 解压 `deploy.zip` 到任意位置
2. 访问 Netlify 拖拽上传页面
3. 拖拽解压后的文件夹

## 文件结构：
```
deploy-ready/
├── index.html          # 主页面
├── netlify.toml        # Netlify 配置
└── images/             # 所有图片
    ├── bjmech-logo.png # 公司 logo
    ├── hero.png        # 主图
    ├── factory.png     # 工厂图片
    └── ...             # 其他产品图片
```

## 网站信息：
- 公司名称：泰兴市滨江机械科技有限公司
- 域名：https://bjmech.netlify.app
- 部署平台：Netlify
