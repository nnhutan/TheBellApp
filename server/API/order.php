<?php
require_once '../database/dbhelper.php';
require '../utils/rest_api.php';

$_POST = json_decode(file_get_contents('php://input'), true);

class ord extends rest_api
{
    public function listOrder()
    {
        $sql = "select * from Orders order by status asc, order_date desc";
        $result = executeResult($sql);
        $this->response(200, $result);
    }

    public function addOrder()
    {
        if (!empty($_POST)) {
            $user_id = $this->getPost('user_id');
            $note = $this->getPost('note');
            $order_date = date("Y-m-d H:i:s");
            $status = $this->getPost('status');
            $total_money = $this->getPost('total_money');

            $sql = "insert into Orders(user_id, note, order_date,status,total_money) values ('$user_id', '$note', '$order_date', '$status', '$total_money')";
            execute($sql);

            $this->response(200);
        } else {
            $this->response(404, );
        }
    }

    public function editOrder()
    {
        if (!empty($_POST)) {
            $id = $this->getPost('id');
            $status = $this->getPost('status');

            $sql = "update orders set status = $status where id = $id";
            execute($sql);

            $this->response(200);
        } else {
            $this->response(404, "No entry");
        }
    }

    public function deleteOrder()
    {
        $id = $this->getPost('id');
        if ($id != '') {
            $sql = "delete from Orders where id = $id";
            execute($sql);
            $this->response(200);
        } else {
            $this->response(404, "No entry");
        }
    }
}

$newList = new ord();