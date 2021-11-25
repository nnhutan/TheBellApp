<?php
require_once '../database/dbhelper.php';
require '../utils/rest_api.php';

$_POST = json_decode(file_get_contents('php://input'), true);

class order extends rest_api
{
    public function listOrderDetail()
    {
        $orderId = $this->getPost('order_id');
        $sql = "select Order_Detail.*, Product.title, Product.thumbnail, Product.price from Order_Detail left join Product on Product.id = Order_Detail.product_id where Order_Detail.order_id = $orderId";
        $result = executeResult($sql);
        $this->response(200, $result);
    }

    public function addOrderDetail()
    {
        if (!empty($_POST)) {
            $orderId = $this->getPost('order_id');
            $product_id = $this->getPost('product_id');
            $num = $this->getPost('num');

            $sql = "select * from order_detail where order_id = $orderId and product_id = $product_id";
            $data = executeResult($sql, true);
            if ($data != null) {
                $num = 1 + $data['num'];
                $sql = "update order_detail set  num = $num where id = " . $data['id'] . "";
                $status = "update";
            } else {
                $sql = "insert into order_detail(order_id, product_id, num) values($orderId, $product_id, $num)";
                $status = "insert";
            }
            execute($sql);

            $this->response(200, $status);
        } else {
            $this->response(404, "no entry");
        }
    }
    public function editOrderDetail()
    {
        if (!empty($_POST)) {
            $id = $this->getPost('id');
            $num = $this->getPost('num');

            $sql = "update order_detail set  num = $num where id = $id";
            execute($sql);

            $this->response(200);
        } else {
            $this->response(404, "no entry");
        }
    }

    public function deleteOrderDetail()
    {
        $id = $this->getPost('id');
        if ($id != '') {
            $sql = "delete from Order_detail where id = $id";
            execute($sql);
            $this->response(200);
        } else {
            $this->response(404, "No entry");
        }
    }
}

$newOrder = new order();