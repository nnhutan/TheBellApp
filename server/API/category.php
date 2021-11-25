<?php
require_once '../database/dbhelper.php';
require '../utils/rest_api.php';

$_POST = json_decode(file_get_contents('php://input'), true);

class cate extends rest_api
{

    protected function listCategory()
    {
        $sql = "select * from category";
        $result = executeResult($sql);
        if (!empty($result)) {
            $this->response(200, $result);
        } else {
            $this->response(404, "No list");
        }
    }

    protected function addCategory()
    {
        if (!empty($_POST)) {
            $id = $this->getPost("id");
            $name = $this->getPost("name");

            $sql = "insert into Category(name) values ('$name')";
            execute($sql);
            $this->response(200, "success!");
        } else {
            $this->response(500, "failed");
        }
    }

    protected function editCategory()
    {
        if (!empty($_POST)) {
            $id = $this->getPost("id");
            $name = $this->getPost("name");

            $sql = "update Category set name = '$name' where id = $id";
            execute($sql);

            $this->response(200, "success!");
        } else {
            $this->response(500, "failed");
        }
    }

    protected function deleteCategory()
    {
        $id = $this->getPost('id');
        if ($id != '') {
            $sql = "select count(*) as total from Product where category_id = $id";
            $data = executeResult($sql, true);
            $total = $data['total'];
            if ($total > 0) {
                $this->response(423, "Failed");
            } else {
                $sql = "delete from Category where id = $id";
                execute($sql);
                $this->response(200, "success!");
            }
        } else {
            $this->response(404, "not exist");
        }
    }
}

$cates = new cate();