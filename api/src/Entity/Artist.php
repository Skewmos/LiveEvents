<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Artist
 * @ApiResource
 * @ORM\Table(name="ARTIST")
 * @ORM\Entity
 */
class Artist
{
    /**
     * @var int
     *
     * @ORM\Column(name="IDARTIST", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idartist;

    /**
     * @var string|null
     *
     * @ORM\Column(name="NAME", type="string", length=255, nullable=true, options={"fixed"=true})
     */
    private $name;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Concert", inversedBy="idartist")
     * @ORM\JoinTable(name="participates",
     *   joinColumns={
     *     @ORM\JoinColumn(name="IDARTIST", referencedColumnName="IDARTIST")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="IDCONCERT", referencedColumnName="IDCONCERT")
     *   }
     * )
     */
    private $idconcert;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->idconcert = new \Doctrine\Common\Collections\ArrayCollection();
    }

}
