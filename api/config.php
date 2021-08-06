<?php


// define('DB_NAME','api_interacti');
// define('DB_USER','api_interacti');
// define('DB_PASSWORD','p@ssw0rd013459');
// define('DB_HOST','api_interacti.mysql.dbaas.com.br:3306');

define('DB_NAME','interacti_app');
define('DB_USER','root');
define('DB_PASSWORD','p@ssw0rd013459');
define('DB_HOST','localhost');

$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);

date_default_timezone_set('America/Sao_Paulo');