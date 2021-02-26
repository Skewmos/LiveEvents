<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Billiet
 * @ApiResource
 * @ORM\Table(name="BILLIET", indexes={@ORM\Index(name="I_FK_BILLIET_USER", columns={"IDUSER"})})
 * @ORM\Entity
 */
class Billiet
{
    /**
     * @var int
     *
     * @ORM\Column(name="IDBILLIET", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idbilliet;

    /**
     * @var string|null
     *
     * @ORM\Column(name="NAMECONCERT", type="string", length=255, nullable=true, options={"fixed"=true})
     */
    private $nameconcert;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="DATESTART", type="datetime", nullable=true)
     */
    private $datestart;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="DATEEND", type="datetime", nullable=true)
     */
    private $dateend;

    /**
     * @var \User
     *
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="IDUSER", referencedColumnName="IDUSER")
     * })
     */
    private $iduser;


}
