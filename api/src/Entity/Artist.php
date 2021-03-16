<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Artist
 *
 * @ORM\Table(name="ARTIST")
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="App\Repository\ArtistRepository")
 * @ApiResource
 *  
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

    public function getIdartist(): ?int
    {
        return $this->idartist;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Concert[]
     */
    public function getIdconcert(): Collection
    {
        return $this->idconcert;
    }

    public function addIdconcert(Concert $idconcert): self
    {
        if (!$this->idconcert->contains($idconcert)) {
            $this->idconcert[] = $idconcert;
        }

        return $this;
    }

    public function removeIdconcert(Concert $idconcert): self
    {
        $this->idconcert->removeElement($idconcert);

        return $this;
    }

}
