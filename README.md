# 初期設定

## 前提条件
・wsl2
・php  
・composer 
・mysqlやpostgresqlなど

これらがインストールされていること。

### laravelのディレクトリー

    composer install
    php artisan breeze:install 
    php artisan key:generate
    php artisan migrate

### nextjsのディレクトリー

    npm i
    cp .env.example .env


# プロジェックの立ち上げ

#### laravel

    php artisan serve


#### nextjs

    npm run dev
