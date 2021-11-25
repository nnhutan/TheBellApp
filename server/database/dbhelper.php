<?php
require 'config.php';

// Thuc hien tat ca cac loai cau lenh sql
function execute($sql)
{
    // Tao ket noi
    $conn = mysqli_connect(HOST, USERNAME, PASSWORD, DATABASE);
    mysqli_set_charset($conn, 'utf8');

    // Thuc hien cau lenh
    mysqli_query($conn, $sql);

    // Dong ket noi
    mysqli_close($conn);
}

// Thuc hien cau lenh sql dang select, isSingle = true thi se tra ve 1 ban ghi
function executeResult($sql, $isSingle = false)
{
    $data = null;

    //Tao ket noi toi database
    $conn = mysqli_connect(HOST, USERNAME, PASSWORD, DATABASE);
    mysqli_set_charset($conn, 'utf8');

    //Thuc hien truy van
    $resultset = mysqli_query($conn, $sql);
    if ($isSingle) {
        $data = mysqli_fetch_array($resultset, 1);
    } else {
        $data = [];
        while (($row = mysqli_fetch_array($resultset, 1)) != null) {
            $data[] = $row;
        }
    }

    //Dong ket noi
    mysqli_close($conn);

    return $data;
}