 <?php
require_once '../database/dbhelper.php';
require '../utils/rest_api.php';

$_POST = json_decode(file_get_contents('php://input'), true);

class cart extends rest_api
{
    public function updateCart()
    {
        $id = $this->getPost('id');
        $num = $this->getPost('num');

        if (!isset($_SESSION['cart'])) {
            $_SESSION['cart'] = [];
        }

        for ($i = 0; $i < count($_SESSION['cart']); $i++) {
            if ($_SESSION['cart'][$i]['id'] == $id) {
                $_SESSION['cart'][$i]['num'] = $num;
                if ($num <= 0) {
                    array_splice($_SESSION['cart'], $i, 1);
                }
                break;
            }
        }
        $this->response(200);
    }

    public function addToCart()
    {
        $id = $this->getPost('id');
        $num = $this->getPost('num');

        $isFind = false;
        for ($i = 0; $i < count($_SESSION['cart']); $i++) {
            if ($_SESSION['cart'][$i]['id'] == $id) {
                $_SESSION['cart'][$i]['num'] += $num;
                $isFind = true;
                $status = "update";
                break;
            }

        }

        if (!$isFind) {
            $sql = "select Product.*, Category.name as category_name from Product left join Category on Product.category_id = Category.id where Product.id = $id";
            $product = executeResult($sql, true);
            $product['num'] = $num;
            $_SESSION['cart'][] = $product;
            $status = 'insert';
        }
        $this->response(200, $status);
    }

    public function listCart()
    {
        if (!isset($_SESSION['cart'])) {
            $_SESSION['cart'] = [];
        }
        $this->response(200, $_SESSION['cart']);
    }
}

$newCart = new cart();