<?php


// Разбиение и объединение ФИО

function getFullnameFromParts($a, $b, $c) {
	return $a . ' ' . $b . ' ' . $c;
}

// Проверка
// $surname = 'Иванов';
// $name = 'Иван';
// $patronomyc = 'Иванович';
// echo getFullnameFromParts($surname, $name, $patronomyc);

function getPartsFromFullname($fullName) {
  print_r(explode(' ', $fullName));
}

// Проверка
// $a = "Иванов Иван Иванович";
// getPartsFromFullname($a);


// Сокращение ФИО
function getPartsFromFullname($a) {
 return (explode(' ', $a));
}

function getShortName($a) {
  $array = getPartsFromFullname($a);
  echo $array[1] . ' ' . (mb_substr($array[0], 0, 1)) . '.';
}

// Проверка
// $fullName = "Иванов Иван Иванович";
// echo getShortName($fullName);


// Функция определения пола по ФИО

function getPartsFromFullname($a) {
 return (explode(' ', $a));
}

function getGenderFromName($b) {
  
  $array = getPartsFromFullname($b);
  $i= 0;
  (mb_substr($array[2], -2, 2)) <=> 'ич' ? 0 : $i++;
  (mb_substr($array[1], -1, 1)) <=> 'й' ? 0 : $i++;
  (mb_substr($array[1], -1, 1)) <=> 'н' ? 0 : $i++;
  (mb_substr($array[0], -1, 1)) <=> 'в' ? 0 : $i++;
  (mb_substr($array[2], -3, 3)) <=> 'вна' ? 0 : $i--;
  (mb_substr($array[1], -1, 1)) <=> 'а' ? 0 : $i--;
  (mb_substr($array[0], -2, 2)) <=> 'ва' ? 0 : $i--;
  if ($i > 0) {
   return 1;
 } elseif ($i < 0) {
   return -1;
 } else {
   return 0;
 }
}

// Проверка
// $z = "Иванов Иван Иванович";
// echo getGenderFromName($z);