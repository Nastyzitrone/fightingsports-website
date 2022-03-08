<?php
require('Beispieldatei.php');     // bindet externe Datei ein, mit Fehlermeldung 
phpinfo(); // gibt Informationen über die aktuelle PHP-Konfiguration aus
isset($var); // prüft ob eine variable deklariert und nicht null ist
var_dump($var); // gibt alle Informationen zu einer Variable aus
json_encode($var); // gibt den wert von $var in JSON-Darstellung zurück
session_start(); // startet eine Session oder setzt sie fort
htmlentities('<p>hier html Codes</p>') // alle möglichen Zeichen werden in ihre HTML-Entities (also Maskierungen für spezielle Zeichen in HTML)
?>
