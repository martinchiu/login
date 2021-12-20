# Login
簡單驗證登入是否成功

## 畫面呈現
### 首頁
![首頁](https://github.com/martinchiu/login/blob/main/images/2-3.a10首頁.png)
### 登入成功
![登入成功](https://github.com/martinchiu/login/blob/main/images/2-3.a10登入成功.png)
### 登入失敗
![登入失敗](https://github.com/martinchiu/login/blob/main/images/2-3.a10登入失敗.png)

## 功能
- 使用者可以在表單輸入email及密碼
- 使用者完成後按下送出，如果email及密碼正確可至成功頁面


## 使用說明
1. 請先確認有安裝 node.js 與 npm
2. 打開終端機 (Terminal)，並複製 (Clone) 此專案至本機電腦
```
git clone https://github.com/martinchiu/login.git
```
3. 進入專案資料夾
```
cd login
```
4. 安裝所需套件
```
npm install
```
5. 啟動MongoDB 伺服器及創建資料庫並命名「login」
6. 產生一組種子資料給資料庫
```
npm run seed
```
7. 快速啟動（如果要進入開發者模式，請輸入：npm run dev，請先確保有安裝nodemon)
```
npm run start
``` 
8. 在瀏覽器網址列輸入 `http://localhost:3000/` 瀏覽網站
9. 若欲暫停使用
```
ctrl + c ( mac : command + .)
```

## 開發工具
- Node.js 14.16.0
- Express 4.17.1
- Express-Handlebars 6.0.2
- Bootstrap 4.3.1
- mongoose 6.1.2