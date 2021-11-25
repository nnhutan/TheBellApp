<?php
require_once '../database/dbhelper.php';
require '../utils/rest_api.php';

$_POST = json_decode(file_get_contents('php://input'), true);

class cust extends rest_api
{
    public function listCustomerContact()
    {
        $sql = 'SELECT * from customer_contact';
        $result = executeResult($sql);
        $this->response(200, $result);
    }

    public function addCustomerContact()
    {
        if (!empty($_POST)) {
            $lastname = $this->getPost('lastname');
            $firstname = $this->getPost('firstname');
            $email = $this->getPost("email");
            $phone_number = $this->getPost("phone_number");

            $sql = "insert into customer_contact(lastname,firstname,email,phone_number) values ('$lastname','$firstname','$email', '$phone_number')";
            execute($sql);
            $this->response(200, "Success!");
        } else {
            $this->response(404, "No entry");
        }
    }

    public function deleteCustomerContact()
    {
        if (!empty($_POST)) {
            $id = $this->getPost("id");

            $sql = "delete from customer_contact where id =$id";
            execute($sql);

            $this->response(200, "Success!");
        } else {
            $this->response(404, "no entry");
        }
    }
}
$newCustomer = new cust();