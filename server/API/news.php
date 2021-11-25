<?php
require_once '../database/dbhelper.php';
require '../utils/rest_api.php';

$_POST = json_decode(file_get_contents('php://input'), true);

class newa extends rest_api
{
    public function listNews()
    {
        $sql = 'SELECT * from news order by updated_at desc';
        $result = executeResult($sql);
        $this->response(200, $result);
    }

    public function addNews()
    {
        if (!empty($_POST)) {
            $title = $this->getPost("title");
            $content = $this->getPost("content");
            $thumbnail = $this->getPost("thumbnail");
            $created_at = $updated_at = date('Y-m-d H:s:i');

            $sql = "insert into news(title, content, thumbnail, created_at, updated_at) values ('$title', '$content', '$thumbnail', '$created_at', '$updated_at')";
            execute($sql);
            $this->response(200, "Success!");
        } else {
            $this->response(404, "No entry");
        }
    }

    public function editNews()
    {
        if (!empty($_POST)) {
            $id = $this->getPost("id");
            $title = $this->getPost("title");
            $content = $this->getPost("content");
            $thumbnail = $this->getPost("thumbnail");
            $updated_at = date('Y-m-d H:s:i');

            $sql = "update news set title='$title', content='$content', thumbnail='$thumbnail', updated_at='$updated_at' where id=$id";
            execute($sql);

            $this->response(200, "Success!");
        } else {
            $this->response(404, "No entry");
        }
    }

    public function deleteNews()
    {
        if (!empty($_POST)) {
            $id = $this->getPost("id");

            $sql = "delete from news where id =$id";
            execute($sql);

            $this->response(200, "Success!");
        } else {
            $this->response(404, "No entry");
        }
    }
}

$newaNews = new newa();