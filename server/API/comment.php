<?php
require_once '../database/dbhelper.php';
require '../utils/rest_api.php';

$_POST = json_decode(file_get_contents('php://input'), true);

class com extends rest_api
{
    protected function listComment()
    {
        $sql = "select comment.*, user.id as user_id, user.fullname, product.title from comment, user, product where comment.user_id = user.id and comment.product_id = product.id order by updated_at DESC";
        $result = executeResult($sql);
        $this->response(200, $result);
    }

    protected function addComment()
    {
        if (!empty($_POST)) {
            $userId = $this->getPost("user_id");
            $productID = $this->getPost("product_id");
            $content = $this->getPost("content");
            $created_at = $updated_at = date('Y-m-d H:s:i');

            $sql = "insert into comment(user_id, product_id, content, created_at, updated_at) values ('$userId','$productID', '$content','$created_at', '$updated_at')";
            execute($sql);
            $this->response(200, "success");
        } else {
            $this->response(500, "failure");
        }
    }

    protected function editComment()
    {
        if (!empty($_POST)) {
            $id = $this->getPost("id");
            $content = $this->getPost("content");
            $updated_at = date('Y-m-d H:s:i');
            $sql = "update comment set content = '$content', updated_at= '$updated_at' where id = $id";
            execute($sql);
            $this->response(200, "success!");
        } else {
            $this->response(404, "No entry");
        }
    }

    protected function deleteComment()
    {
        $id = $this->getPost('id');
        if ($id != '') {
            $sql = "delete from comment where id = $id";
            execute($sql);
            $this->response(200, "success");
        } else {
            $this->response(404, "No entry");
        }
    }
}

$newCom = new com();