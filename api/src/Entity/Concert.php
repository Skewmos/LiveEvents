<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Concert
 *
 * @ORM\Table(name="CONCERT", indexes={@ORM\Index(name="I_FK_CONCERT_LOCATION", columns={"IDLOCATION"})})
 * @ORM\Entity
 */
class Concert
{
    /**
     * @var int
     *
     * @ORM\Column(name="IDCONCERT", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idconcert;

    /**
     * @var string|null
     *
     * @ORM\Column(name="NAME", type="string", length=255, nullable=true, options={"fixed"=true})
     */
    private $name;

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
     * @var int|null
     *
     * @ORM\Column(name="NUMBERPLACE", type="bigint", nullable=true)
     */
    private $numberplace;

    /**
     * @var int|null
     *
     * @ORM\Column(name="PLACESOLD", type="bigint", nullable=true)
     */
    private $placesold;

    /**
     * @var \Location
     *
     * @ORM\ManyToOne(targetEntity="Location")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="IDLOCATION", referencedColumnName="IDLOCATION")
     * })
     */
    private $idlocation;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="MusicalGenre", mappedBy="idconcert")
     */
    private $idmusicalgenre;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Artist", mappedBy="idconcert")
     */
    private $idartist;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->idmusicalgenre = new \Doctrine\Common\Collections\ArrayCollection();
        $this->idartist = new \Doctrine\Common\Collections\ArrayCollection();
    }

}
