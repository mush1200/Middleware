# middleware
用Express建立的練習器，利用middleware，讓伺服器將送出請求時間、接收請求時間、處理時間、URL、HTTP請求方法顯示在終端機裡面。

## 專案功能
* 伺服器接收請求時，終端機會印出請求的時間戳記、HTTP請求方法、URL
* 伺服器回應請求時，終端機會印出回應的時間戳記、HTTP請求方法、URL、伺服器處理時間

## 環境建置
* Node.js: 6.4.1
* express: ^4.17.1
* express-handlebars: ^5.3.2
* moment: ^2.29.1

## 安裝流程
1. 在終端機輸入指令 clone 此專案至本機電腦
```

 ```
2. 進入專案資料夾
```
cd middleware
```
3. 安裝相關套件
```
npm install
```
4. 安裝 nodemon 套件 (若未安裝)
```
npm install -g nodemon
```
5. 啟動專案
```
npm run dev
```
6. 出現以下訊息後，即可在 http://localhost:3000 開始使用
<br>
The Express server is running on http://localhost:3000.