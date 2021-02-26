<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Role
 *
 * @ORM\Table(name="ROLE")
 * @ORM\Entity
 */
class Role
{
    /**
     * @var int
     *
     * @ORM\Column(name="IDROLE", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idrole;

    /**
     * @var string|null
     *
     * @ORM\Column(name="NAME", type="string", length=255, nullable=true, options={"fixed"=true})
     */
    private $name;


}
