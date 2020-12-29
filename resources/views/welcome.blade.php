<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
   <!--Google Font-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons">

    <!--Font Awesome-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />

        <title>eYantra</title>
    </head>
    <body>
        <div id="app">
            <Menu-Login></Menu-Login>
           <router-link></router-link>
        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>