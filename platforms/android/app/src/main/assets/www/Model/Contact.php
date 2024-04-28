<?php
namespace Phppot;

use Phppot\DataSource;

class Contact
{

    private $ds;

    function __construct()
    {
        require_once __DIR__ . './../lib/DataSource.php';
        $this->ds = new DataSource();
    }

    function addToContacts($userName, $userEmail, $subject, $content)
    {
        $insertQuery = "INSERT INTO tbl_contact (user_name, user_email, subject, content) VALUES (?, ?, ?, ?)";
        
        $paramType = 'ssss';
        $paramValue = array(
            $userName,
            $userEmail,
            $subject,
            $content
        );
        $insertId = $this->ds->insert($insertQuery, $paramType, $paramValue);
        return $insertId;
    }
}