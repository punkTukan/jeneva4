<?php

class Router
{
    private $routes;
    private $params;
    private $controller;
    private $action;

    public function __construct()
    {
        //include_once(ROOT.'/components/Controller.php');
        $this->routes = include(ROOT.'/config/routes.php');
    }
        
    public function deBug($str)
    {
        echo '<br>';
        var_dump($str);
        echo '<br>';
    }

    public function match()
    {
        $uri = trim($_SERVER['REQUEST_URI'], '/');
        //$this->deBug($uri);

        foreach ($this->routes as $uriPattern => $path)
        {   
            if(preg_match('#^'.$uriPattern.'$#', $uri))
            {
                //$this->deBug($uri);
                //$this->deBug($path);
                $internalRoute = preg_replace('#^'.$uriPattern.'$#', $path, $uri);
                //$this->deBug($internalRoute);
                $segments = explode('/', $internalRoute);
                //$this->deBug($segments);
                $this->controller = ucfirst(array_shift($segments).'Controller');
                //$this->deBug($this->controller);
                //$this->deBug($segments);
                $this->action = 'Do'.ucfirst(array_shift($segments));
                $this->params = $segments;
                //$this->deBug($this->params);
                return true;
            }
        }
        return false;
    }

    public function run()
    {
        //echo "SUKA2";
        //$this->deBug(ROOT);
        if($this->match())
        {
            $model = str_replace('Controller', "", $this->controller);

            $controllerFile = ROOT.'/controllers/'. $this->controller . '.php';
            if(file_exists($controllerFile))
            {
                include_once($controllerFile);
            }

            //echo "suka3";
            $object = new $this->controller;
            call_user_func_array(array($object, $this->action), $this->params);

            $_SESSION['current_url'] = $_SERVER['REQUEST_URI'];
            return true;
        }
        else
        {
            header('Location: '.$_SESSION['current_url']);
            return true;
        }
    }
}
?>
