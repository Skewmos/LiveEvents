<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * MusicalGenre
 *
 * @ORM\Table(name="MUSICAL_GENRE")
 * @ORM\Entity
 */
class MusicalGenre
{
    /**
     * @var string
     *
     * @ORM\Column(name="IDMUSICALGENRE", type="string", length=32, nullable=false, options={"fixed"=true})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idmusicalgenre;

    /**
     * @var string|null
     *
     * @ORM\Column(name="NAMEGENRE", type="string", length=32, nullable=true, options={"fixed"=true})
     */
    private $namegenre;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Concert", inversedBy="idmusicalgenre")
     * @ORM\JoinTable(name="genre",
     *   joinColumns={
     *     @ORM\JoinColumn(name="IDMUSICALGENRE", referencedColumnName="IDMUSICALGENRE")
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
