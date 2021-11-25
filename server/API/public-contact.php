<?php
require_once '../database/dbhelper.php';
require '../utils/rest_api.php';

$_POST = json_decode(file_get_contents('php://input'), true);

class cont extends rest_api
{
    public function listContact()
    {

        $sql = 'SELECT * from contact_public';
        $result = executeResult($sql);
        $this->response(200, $result);
    }

    public function addContact()
    {
        if (!empty($_POST)) {
            $id = $this->getPost("id");
            $type = $this->getPost("type");
            $content = $this->getPost("content");
            $created_at = $updated_at = date('Y-m-d H:s:i');

            $sql = "insert into contact_public(type, content, created_at, updated_at) values ('$type', '$content', '$created_at', '$updated_at')";
            execute($sql);
            $this->response(200);
        } else {
            $this->response(404, "No entry");
        }
    }

    public function editContact()
    {
        if (!empty($_POST)) {
            $id = $this->getPost("id");
            $type = $this->getPost("type");
            $content = $this->getPost("content");
            $updated_at = date('Y-m-d H:s:i');

            $sql = "update contact_public set type='$type', content='$content', updated_at='$updated_at' where id=$id";
            execute($sql);

            $this->response(200);
        } else {
            $this->response(404, "No entry");
        }
    }

    public function deleteContact()
    {
        if (!empty($_POST)) {
            $id = $this->getPost("id");

            $sql = "delete from contact_public where id =$id";
            execute($sql);
            $this->response(200);
        } else {
            $this->response(404, "no entry");
        }
    }
}

$newContact = new cont();