<?php
    class SiteController
    {
        public function DoLoadMain()
        {
            require_once(ROOT.'/views/main.php');
        }
        public function DoLoadShops()
        {
            require_once(ROOT.'/views/shops.php');

        }
        public function DoLoadProduct()
        {
            require_once(ROOT.'/views/product.php');

        }
        public function DoLoadProducts()
        {
            require_once(ROOT.'/views/products.php');
        }
    }

?>