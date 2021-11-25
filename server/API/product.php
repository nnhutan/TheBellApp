<?php
require_once '../database/dbhelper.php';
require '../utils/rest_api.php';

$_POST = json_decode(file_get_contents('php://input'), true);

class product extends rest_api
{
    public function listProduct()
    {
        $sql = 'select Product.*, Category.name as category_name, Category.id as category_id from Product left join Category on Product.category_id = Category.id';
        $result = executeResult($sql);
        if (!empty($result)) {
            $this->response(200, $result);
        } else {
            $this->response(404, "No list");
        }
    }

    public function addProduct()
    {
        if (!empty($_POST)) {
            $id = $this->getPost('id');
            $title = $this->getPost('title');
            $price = $this->getPost('price');
            $discount = $this->getPost('discount');
            $thumbnail = $this->getPost('thumbnail');
            $description = $this->getPost('description');
            $category_id = $this->getPost('category_id');
            $created_at = $updated_at = date('Y-m-d H:s:i');

            $sql = "insert into Product(thumbnail, title, price, discount, description, updated_at, created_at, category_id) values ('$thumbnail', '$title', '$price', '$discount', '$description', '$updated_at', '$created_at', $category_id)";
            execute($sql);

            $this->response(200);
        } else {
            $this->response(404, "No entry");
        }
    }

    public function editProduct()
    {
        if (!empty($_POST)) {
            $id = $this->getPost('id');
            $title = $this->getPost('title');
            $price = $this->getPost('price');
            $discount = $this->getPost('discount');
            $thumbnail = $this->getPost('thumbnail');
            $description = $this->getPost('description');
            $category_id = $this->getPost('category_id');
            $created_at = $updated_at = date('Y-m-d H:s:i');

            if ($thumbnail != '') {
                $sql = "update Product set thumbnail = '$thumbnail', title = '$title', price = $price, discount = $discount, description = '$description', updated_at = '$updated_at', category_id = '$category_id' where id = $id";
            } else {
                $sql = "update Product set title = '$title', price = $price, discount = $discount, description = '$description', updated_at = '$updated_at', category_id = '$category_id' where id = $id";
            }

            execute($sql);

            $this->response(200);
        } else { $this->response(404, "No entry");
        }
    }

    public function deleteProduct()
    {
        $id = $this->getPost('id');
        if ($id != '') {
            $sql = "delete from product where id = $id";
            execute($sql);
            $this->response(200);
        } else {
            $this->response(404, "No entry");
        }
    }

    public function getProduct()
    {
        if (!empty($_POST)) {
            $id = $this->getPost('id');
            $sql = "select Product.*, Category.name as category_name, Category.id as category_id from Product left join Category on Product.category_id = Category.id where product.id = $id";
            $result = executeResult($sql, true);
            $this->response(200, $result);
        } else {
            $this->response(404, "No entry");
        }
    }
}

$newProduct = new product();