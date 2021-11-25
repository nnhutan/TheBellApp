<?php
require_once '../database/dbhelper.php';
require '../utils/rest_api.php';

$_POST = json_decode(file_get_contents('php://input'), true);

class auth extends rest_api
{
    protected function getRole()
    {
        $user = $this->getUserToken();

        if ($user == null) {
            $this->response(404, "Not login!!");
            return;
        }
        $sql = "select * from role";
        $result = executeResult($sql);
        $this->response(200, $result);
    }
    protected function login()
    {
        $email = $pwd = '';
        $user = $this->getUserToken();
        if ($user != null) {
            $this->response(200, $user);
        } else
        if (!empty($_POST)) {
            $email = $this->getPost('email');
            $pwd = $this->getPost('password');
            $pwd = $this->getSecurityMD5($pwd);
            $sql = "select * from User where email = '$email' and password = '$pwd'";
            $userExist = executeResult($sql, true);
            if ($userExist == null) {
                $this->response(406, "Login fail");
            } else {
                //login successfully
                $token = $this->getSecurityMD5($userExist['email'] . time());

                // Ho tro viec duy tri login
                setcookie('token', $token, time() + 7 * 24 * 60 * 60, '/');
                $_COOKIE['token'] = $token;

                $_SESSION['user'] = $userExist;

                $created_at = date('Y-m-d H:i:s');
                $userId = $userExist['id'];
                $sql = "insert into tokens (user_id, token, created_at) values ('$userId', '$token', '$created_at')";
                execute($sql);
                $this->response(200, $userExist);
            }
        } else {
            $this->response(402, "Login failed");
        }
        return;
    }

    protected function logout()
    {
        $user = $this->getUserToken();
        if ($user != null) {
            $token = $this->getCookie('token');
            $id = $user['id'];
            $sql = "delete from Tokens where user_id = '$id' and token = '$token'";
            execute($sql);
            setcookie('token', '', time() - 100, '/');
        }
        $this->response(200, "Logout successfully!");
        session_destroy();
    }

    protected function register()
    {
        $fullname = $email = $phone = $address = '';
        if (!empty($_POST)) {
            $fullname = $this->getPost('fullname');
            $email = $this->getPost('email');
            $pwd = $this->getPost('password');
            $phone = $this->getPost('phone');
            $address = $this->getPost('address');
            if (empty($fullname) || empty($email) || empty($pwd) || strlen($pwd) < 6) {
                $this->response(400, "Register failed");
            } else {
                $userExist = executeResult("select * from User where email = '$email'", true);
                if ($userExist != null) {
                    $this->response(400, "Register failed");
                } else {
                    $created_at = $updated_at = date('Y-m-d H:i:s');
                    $pwd = $this->getSecurityMD5($pwd);

                    $sql = "select * from user where role_id = 1";
                    $result = executeResult($sql);
                    if (empty($result)) {
                        $sql = "insert into User (fullname, email, password, role_id, phone_number, address, created_at, updated_at) values ('$fullname', '$email', '$pwd', 1, '$phone', '$address', '$created_at', '$updated_at')";
                    } else {
                        $sql = "insert into User (fullname, email, password, role_id, phone_number, address, created_at, updated_at) values ('$fullname', '$email', '$pwd', 2, '$phone', '$address', '$created_at', '$updated_at')";
                    }
                    execute($sql);
                    $this->response(200, "Registered");
                }
            }
        } else {
            $this->response(400, "Register failed");
        }
    }

    protected function userList()
    {
        $user = $this->getUserToken();
        if ($user == null) {
            $this->response(401, "Not login");
            return;
        }
        $sql = "select User.*, Role.name as role_name from User left join Role on User.role_id = Role.id";
        $data = executeResult($sql);
        $this->response(200, $data);
    }

    protected function deleteUser()
    {
        $user = $this->getUserToken();
        if ($user == null) {
            $this->response(401, "Not login");
            return;
            return;
        }
        $id = $this->getPost('id');
        if ($id != '') {
            $sql = "delete from User where id = $id";
            execute($sql);
            $this->response(200, $id);
        } else {
            $this->response(417, "Failed");
        }
    }

    protected function editUser()
    {
        $user = $this->getUserToken();
        if ($user == null) {
            $this->response(401, "Not login");
            return;
        }
        if (!empty($_POST)) {
            $id = $this->getPost('id');
            $fullname = $this->getPost('fullname');
            $email = $this->getPost('email');
            $phone_number = $this->getPost('phone_number');
            $address = $this->getPost('address');
            $password = $this->getPost('password');
            if ($password != '') {
                $password = $this->getSecurityMD5($password);
            }
            $created_at = $updated_at = date("Y-m-d H:i:s");

            $role_id = $this->getPost('role_id');

            $sql = "select * from User where email = '$email' and id <> $id";
            $userItem = executeResult($sql, true);

            if ($userItem != null) {
                $this->response(409, "Email exists");
            } else {
                if ($password != '') {
                    $sql = "update User set fullname = '$fullname', email = '$email', phone_number = '$phone_number', address = '$address', password = '$password', updated_at = '$updated_at', role_id = $role_id where id = $id";
                } else {
                    $sql = "update User set fullname = '$fullname', email = '$email', phone_number = '$phone_number', address = '$address', updated_at = '$updated_at', role_id = $role_id where id = $id";
                }
                execute($sql);
                if (isset($_SESSION['user'])) {
                    if ($_SESSION['user']['id'] == $id) {
                        $_SESSION['user'] = executeResult("select * from User where id = '$id'", true);
                    }
                }
                $this->response(200, "Success!");
            }
        }
    }

    protected function addUser()
    {
        $user = $this->getUserToken();
        if ($user == null) {
            $this->response(401, "Not login!");
            return;
        }
        if (!empty($_POST)) {
            $id = $this->getPost('id');
            $fullname = $this->getPost('fullname');
            $email = $this->getPost('email');
            $phone_number = $this->getPost('phone_number');
            $address = $this->getPost('address');
            $password = $this->getPost('password');
            if ($password != '') {
                $password = $this->getSecurityMD5($password);
            }

            $created_at = $updated_at = date("Y-m-d H:i:s");

            $role_id = $this->getPost('role_id');

            $sql = "select * from User where email = '$email'";
            $userItem = executeResult($sql, true);
            //insert
            if ($userItem == null) {
                //insert
                $sql = "insert into User(fullname, email, phone_number, address, password, role_id, created_at, updated_at) values ('$fullname', '$email', '$phone_number', '$address', '$password', '$role_id', '$created_at', '$updated_at')";
                execute($sql);
                $this->response(200, "Success!");
            } else {
                //Tai khoan da ton tai -> failed
                $this->response(409, "Email exists!");
            }
        }
    }
}

$new_auth = new auth();