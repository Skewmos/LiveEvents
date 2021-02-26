<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * User
 *
 * @ORM\Table(name="USER", indexes={@ORM\Index(name="I_FK_USER_ROLE", columns={"IDROLE"})})
 * @ORM\Entity
 */
class User
{
    /**
     * @var int
     *
     * @ORM\Column(name="IDUSER", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $iduser;

    /**
     * @var string|null
     *
     * @ORM\Column(name="FIRSTNAME", type="string", length=255, nullable=true, options={"fixed"=true})
     */
    private $firstname;

    /**
     * @var string|null
     *
     * @ORM\Column(name="LASTNAME", type="string", length=255, nullable=true, options={"fixed"=true})
     */
    private $lastname;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="BIRTHDAY", type="date", nullable=true)
     */
    private $birthday;

    /**
     * @var string|null
     *
     * @ORM\Column(name="EMAIL", type="string", length=255, nullable=true, options={"fixed"=true})
     */
    private $email;

    /**
     * @var string|null
     *
     * @ORM\Column(name="PHONE", type="string", length=255, nullable=true, options={"fixed"=true})
     */
    private $phone;

    /**
     * @var string|null
     *
     * @ORM\Column(name="PASSWORD", type="string", length=255, nullable=true, options={"fixed"=true})
     */
    private $password;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="CREATEDAT", type="datetime", nullable=true)
     */
    private $createdat;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="UPDATEDAT", type="datetime", nullable=true)
     */
    private $updatedat;

    /**
     * @var string|null
     *
     * @ORM\Column(name="PICTUREURL", type="text", length=65535, nullable=true)
     */
    private $pictureurl;

    /**
     * @var \Role
     *
     * @ORM\ManyToOne(targetEntity="Role")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="IDROLE", referencedColumnName="IDROLE")
     * })
     */
    private $idrole;


}
